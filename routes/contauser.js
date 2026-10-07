const express = require("express");
const router = express.Router();
const db = require("../bd/database.js");

router.post("/", (req, res, next) => {
  const { nome, email, username, cidade, selectUf, senha, cep } = req.body;

  // 1. Verifica se email ou username já existem
  const checkQuery = `
    SELECT * FROM accounts
    WHERE email = ? OR username = ?
  `;

  db.query(checkQuery, [email, username], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Erro ao verificar usuário: " 
+ err.sqlMessage);
    }

    // 2. Se já existir, retorna erro
    if (results.length > 0) {
      return res.status(400).send("Email ou username já cadastrado.");
    }

    // 3. Se não existir, insere o novo usuário
    const insertQuery = `
      INSERT INTO accounts (username, password, email, user, cidade, UF, CP)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
      insertQuery,
      [username, senha, email, nome, cidade, selectUf, cep],
      (err, rows) => {
        if (err) {
          console.error(err);
          return res.status(500).send("Erro ao criar conta: " + err.sqlMessage);
        }
        res.json({ mensagem: "Usuário cadastrado com sucesso" });
      }
    );
  });
});
module.exports = router;