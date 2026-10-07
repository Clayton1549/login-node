const express = require('express');
const router = express.Router();
//const asdas fgfg tghth

router.get('/',function(req,res,next){
  
  res.render('page', { title: 'page' });
 

});


module.exports = router;