const express = require("express");
const router = express.Router();

const { allusers, addUser, updateUser, deleteUser } = require("./routes/route");

// * Route For getting All users
router.get("/all", allusers);

// * Route for adding Users
router.post("/addalien", addUser);

// * Route for updating Users
router.patch("/:id", updateUser);

// * Route for deleting Users
router.delete("/:id", deleteUser);

module.exports = router;
