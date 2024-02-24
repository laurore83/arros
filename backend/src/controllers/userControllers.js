const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const tables = require("../tables");

function generateAccessToken(username) {
  return jwt.sign(username, process.env.APP_SECRET, { expiresIn: "1600s" });
}
const browse = async (req, res, next) => {
  try {
    // Fetch all users from the database
    const users = await tables.user.readAll();

    // Respond with the users in JSON format
    res.json(users);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const read = async (req, res) => {
  const id = +req.params.id;
  try {
    // Fetch a specific user from the database based on the provided ID
    const user = await tables.user.read(id);

    // If the user is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the user in JSON format
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    console.error(err);
    // Pass any errors to the error-handling middleware
    // next(err);
  }
};
// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  const user = req.body;
  const notHashedPassword = user.password;

  try {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
    const id = await tables.user.create(user);
    const token = generateAccessToken({ id });
    res.status(201).json({ token });
  } catch (err) {
    if (err.code === "ER_DUP_ENTRY") {
      const mayUser = await tables.user.getEmail(user.email);
      if (await bcrypt.compare(notHashedPassword, mayUser.password)) {
        // eslint-disable-next-line prefer-destructuring
        const id = mayUser.id;
        if (mayUser.birth_date) {
          res.status(409).json({ err: "Compte existant" });
        } else {
          const tokenHR = generateAccessToken({ id });
          res.status(409).json({ token: tokenHR, err: "Half-register" });
        }
      } else {
        res.status(409).json({ err: "Email indisponible" });
      }
    }
    next(err);
  }
};

// Login operation
const Postlogin = async (req, res) => {
  try {
    const user = await tables.user.login(req.body);
    if (user) {
      // delete newUser.password;
      const token = generateAccessToken(user);
      res.send({ token });
    } else {
      res.status(401).send({ error: "identifiant incorrect" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: err.message });
  }
};

module.exports = {
  read,
  browse,
  add,
  Postlogin,
};
