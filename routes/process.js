const express = require('express');
const router = express.Router();
//const asdas fgfg tghth

router.get('/',function(req,res,next){
  
  res.render('processamento', { title: 'f' });

});

module.exports = router;