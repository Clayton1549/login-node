const express = require('express');
const router = express.Router();
const db = require('../bd/database');

/* GET user listing. */
router.get('/user-list', function(req, res, next) {
    // Proteção de rota
    if (!req.session.user) {
        return res.redirect('/');
    }

    // Filtrando apenas o usuário logado
    const sql = 'SELECT * FROM accounts WHERE username = ?';
    db.query(sql, [req.session.user], function(err, data, fields) {
        if (err) throw err;

        res.render('user-list', { 
            title: 'User List', 
            userData: data,
            Username: req.session.user
        });
    });
});

module.exports = router;