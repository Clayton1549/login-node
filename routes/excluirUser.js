const express = require('express');
const router = express.Router();
const db = require('../bd/database');

router.post('/', (req, res) => {

    if (!req.session.user) {
        return res.send('Usuário não logado');
    }

    // CASO a sessão guarde só o username
    const username = req.session.user;

    console.log('USERNAME:', username);

    const sql = 'DELETE FROM accounts WHERE username = ?';

    db.query(sql, [username], (err, result) => {

        if (err) {
            console.log(err);
            return res.send('Erro ao excluir');
        }

        console.log(result);

        if (result.affectedRows === 0) {
            return res.send('Usuário não encontrado');
        }

        req.session.destroy();

        res.send('Usuário deletado');
    });
});
module.exports = router;