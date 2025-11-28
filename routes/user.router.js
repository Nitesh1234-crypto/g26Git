const router = require("express").Router();
const userController = require("../controllers/user.controller");


router.get("/getusers", userController.getUsers);

module.exports = router;