//User Management API
let express = require('express');
let router = express.Router();

let userController = require("../controllers/user");

/* GET users listing. */
router.get('/', userController.getAllUsers);

module.exports = router;
