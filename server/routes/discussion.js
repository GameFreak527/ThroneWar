//Discussion page API

let express = require('express');
let router = express.Router();

let threadController = require('../controllers/thread');

/* Get - Get the list of the topics */
router.get("/", threadController.getThreadList);

/* POST - processes the User Registration Page */
router.post("/addThread", threadController.addThread);

/* GET - perform user logout */
//router.get("/:id", threadController.getSpecificThread);

module.exports = router;
