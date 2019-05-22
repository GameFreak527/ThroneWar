let express = require("express");
let passport = require("passport");

let jwt = require('jsonwebtoken');
let DB = require('../config/db');


//Models
let discussionModel = require('../models/thread');


//Get all the Threads
module.exports.getThreadList = (req,res,next)=>{
    discussionModel.find((err, threadList) => {
        if (err) {
          console.log(err);
          return console.error(err);
        } else {
          res.json({
            success: true,
            threadList: threadList
          });
        }
      });
}

//Add Thread
module.exports.addThread= (req,res,next)=>{
    let newThread = discussionModel({
        title : req.body.title,
        content: req.body.content,
        userName: req.body.userName,
        userId: req.body.userId
      });
    
      discussionModel.create(newThread, (err, discussionModel) => {
        if (err) {
          console.log(err);
          res.end(err);
        } else {
          res.json({
            success: true,
            msg: "Successfully Added New Thread"
          });
        }
      });
}