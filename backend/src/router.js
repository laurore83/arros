const express = require("express");
const userControllers = require("./controllers/userControllers");

const router = express.Router();

router.get("/user/:id", userControllers.read);
router.get("/user", userControllers.browse);

router.post("/user", userControllers.add);

// router.get("/login", userControllers.login);
// router.get("/register", userControllers.add);

router.post("/login", userControllers.Postlogin);
// router.post("/register", userControllers.add);

module.exports = router;
