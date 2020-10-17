const express = require("express");
const app = express.Router();
const db = require("../models");


module.exports = function(app) {
    //     // GET route for getting all of the users
    app.get("/api/user/", function (req, res) {
        db.User.findAll()
          .then(function (dbUserGet) {
            res.json(dbUserGet);
          });
      });

          // Get route for retrieving a single user
    app.get("/api/user/:user_id", function (req, res) {
        db.User.findOne({
            where: {
              id: req.params.user_id
            }
          })
          .then(function (dbUserSingle) {
            res.json(dbUserSingle);
          });
      });

       // DELETE route for deleting users
    app.delete("/api/user/:user_id", function (req, res) {
        db.User.destroy({
            where: {
              id: req.params.user_id
            }
          })
          .then(function (dbUserDelete) {
            res.json(dbUserDelete);
          });
      });
  
          // PUT route for updating users
    app.put("/api/user", function (req, res) {
        db.User.update(req.body, {
            where: {
              id: req.body.user_id
            }
          })
          .then(function (dbUserPut) {
            res.json(dbPlayerPut);
          });
      });
};