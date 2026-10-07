const express = require('express');
const router = express.Router();
const db = require('../bd/database');

router.get('/', function(req, res, next) {
    if(!req.session.user) {
        res.redirect('/');
    }
    const sql = 'SELECT * FROM accounts WHERE username = ?';
    db.query(sql, [req.session.user], function(err, data, fields) {
        if(err) throw err;
        res.render('delete', {
            title: 'delete',
            userData: data,
            Username: req.session.user
        });
    });
});

module.exports = router;