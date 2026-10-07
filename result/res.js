
const addicao = function(num,num1,numc){

 	const con = num + num1 + numc
      
     return con
 }

 const multplicando = function(num,num1,numc){

 	const mult = num * num1 * numc

 	return mult
 }
 const subtraindo = function(num,num1,numc){

 	const sub =  num - num1 - numc

 	return sub
 }

/*function pleaseSolve(parms, res) {
  //get the parameters based on input name attribute from the html
  //and parse strings to numbers
  var m = +parms.param1;
  var o = +parms.param2;
  var p = +parms.param3;

  var comp = math.chain(m)
    .add(m)
    .divide(p)
    .multiply(o)
    .done();

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end("The answer is " + comp);
}*/

//const f = function(a){
 // const aln = document.getElementById('a').value
//}

module.exports = { addicao, subtraindo, multplicando }