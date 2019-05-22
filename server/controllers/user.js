let express = require("express");
let passport = require("passport");

let jwt = require('jsonwebtoken');
let DB = require('../config/db');


// define the User Model
let userModel = require("../models/user");
let User = userModel.User; // alias

//define the character model
let characterModel = require("../models/character");

//Getting the list of all the characters registered
module.exports.getallCharacters = (req,res,next) =>{
  characterModel.find((err, characterList) => {
        if (err) {
          console.log(err);
          return console.error(err);
        } else {
          res.json({
            success: true,
            characterList: characterList
          });
        }
      });
}

//Get specific user
module.exports.getSpecificUser = (req,res,next)=>{
  let id = req.params.id;

  userModel.findById(id, (err, userObject) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.json({
        success: true,
        msg: "Successfully Displayed User",
        user: userObject
      });
    }
  });
};

//Adding character with the database
module.exports.addCharacter =(req,res,next) =>{
  let newCharacter = characterModel({
    userID : req.body.userID,
    userName: req.body.userName,
    affiliation: req.body.affiliation,
    rank: req.body.rank,
    bounty: req.body.bounty,
    group: req.body.group
  });

  characterModel.create(newCharacter, (err, characterModel) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.json({
        success: true,
        msg: "Successfully Added New Character"
      });
    }
  });
};

//get specific character
module.exports.getSpecificCharacter = (req,res,next) =>{
  let id = req.params.id;
  characterModel.find({
    'user_Id': id
  }, (err, characterObject) => {
    if (err) {
      return console.error(err);
    } else {
      res.json({
        success: true,
        character: characterObject
      });
    }
  });
}

module.exports.processLoginPage = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    // server error?
    if (err) {
      return next(err);
    }
    // is there a user login error?
    if (!user) {
      return res.json({
        success: false,
        msg: "ERROR: Failed to Log In User."
      });
    }
    req.logIn(user, err => {
      // server error?
      if (err) {
        return next(err);
      }
      const payload = {
        id: user._id,
        displayName: user.displayName,
        username: user.username,
        email: user.email
      };

      const authToken = jwt.sign(payload, DB.secret, {
        expiresIn: 604800 // Token Expires in 1 week
      });

      return res.json({
        success: true,
        msg: "User Logged in successfully",
        user: {
          id: user._id,
          displayName: user.displayName,
          username: user.username,
          email: user.email
        },
        token: authToken
      });
    });
  })(req, res, next);
};

module.exports.processRegisterPage = (req, res, next) => {
  // define a new user object
  let newUser = new User({
    username: req.body.username,
    //password: req.body.password
    email: req.body.email,
    displayName: req.body.displayName
  });

  User.register(newUser, req.body.password, err => {
    if (err) {
      console.log("Error: Inserting New User");
      if (err.name == "UserExistsError") {
        console.log("Error: User Already Exists!");
      }
      return res.json({
        success: false,
        msg: "ERROR: Failed to Register User."
      });
    } else {
      return res.json({
        success: true,
        msg: "User Registered Successfully!"
      });
    }
  });
};

module.exports.performLogout = (req, res, next) => {
  req.logout();
  res.json({
    success: true,
    msg: "User Successfully Logged Out!"
  });
};