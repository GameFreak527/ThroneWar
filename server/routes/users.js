//User Management API
let express = require('express');
let router = express.Router();

let userController = require("../controllers/user");

/* GET all the users listing. */
router.get('/', userController.getallCharacters);

//Add character to a user
router.post('/addCharacter',userController.addCharacter);

router.get('/:id',userController.getSpecificUser);

router.get('/character/:id',userController.getSpecificCharacter);


module.exports = router;
