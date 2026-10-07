const express = require('express');
const router = express.Router();
//const
router.get('/', function(req,res,next) {
	res.render('cduser',{ title: "cadastro" });
});

module.exports = router;