const bcrypt = require("bcrypt");
const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "user" as configuration
    super({ table: "user" });
  }

  async create(user) {
    // Execute the SQL INSERT query to add a new user to the "user" table
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (email, password) VALUES (?, ?)`,
      [user.email, user.password]
    );

    // Return the ID of the newly inserted user
    return result.insertId;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all users from the "user" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of users
    return rows;
  }

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific user by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the user
    return rows[0];
  }

  // Find user by email (for login)
  // async findUserByEmail(email) {
  //   const [rows] = await this.database.query(
  //     `select id, password from ${this.table} where email = ?`,
  //     [email]
  //   );
  //   return rows[0];
  // }

  async login(user) {
    const { email, password } = user;
    const [rows] = await this.database.query(
      `select * from user where email like ?`,
      [email]
    );
    if (!rows.length) {
      return undefined;
    }
    const data = rows[0];
    const result = await bcrypt.compare(password, data.password);
    return result ? data : undefined;
  }

  async isAdmin(id) {
    const [rows] = await this.database.query(
      `select is_admin from ${this.table} where id = ?`,
      [id]
    );
    return rows[0];
  }
}
module.exports = UserManager;
