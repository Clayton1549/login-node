const express = require("express");
const router = express.Router();
const db = require('../bd/database');
const session = require('express-session');
const path = require('path');
const app = express();
const mysql = require('mysql');

router.post("/", (req, res) => {
  const { Username, password } = req.body;

  const query = "SELECT * FROM accounts  WHERE username = ? AND password = ?";

  db.query(query, [Username, password], (err, rows) => {
    if (err) {
      return res.status(500).send("Erro no servidor");
    }

    if (rows.length > 0) {
      req.session.user = rows[0].username;
      res.render("enviosForm", { Username });
     } else {
      res.redirect("/");
    }
  });
});

module.exports = router;