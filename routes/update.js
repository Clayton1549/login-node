const express = require('express');
const router = express.Router();
const db = require('../bd/database');
router.post('/', function(req, res){
    if(!req.session.user){
        return res.redirect('/');
    }

    const { username, email, password } = req.body;

    const sql = `
        UPDATE accounts 
        SET username = ?, email = ?, password = ?
        WHERE username = ?
    `;

    db.query(sql, [username, email, password, req.session.user], function(err, result){
        if(err) throw err;

        // Atualiza a sessão se o username mudou
        req.session.user = username;

        res.send('Dados atualizados com sucesso!');
    });
});
  module.exports = router;