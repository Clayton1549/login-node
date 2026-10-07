const express = require("express");
const router = express.Router();
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');

router.get('/',(req,res)=> {
	req.session.destroy((err) => {
		if(err) {
			console.log(err);
		}
		res.redirect('/');

	});
}); 



 module.exports = router;