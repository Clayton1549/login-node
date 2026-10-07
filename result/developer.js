
/*function formatarValor(){
  
  const  fs = require('fs');


fs.writeFile("C:\Users\Clayton\Documents\developer\node_mysql\nodeapp", "Hello, txt!", function(erro) {

    if(erro) {
        throw erro;
    }

  }); 
}*/
 

    
module.exports = function() {
  const  fs = require('fs');

const data = 'Isto faz parte de criação de arquivos !';
fs.writeFile('arquivo.txt', data, (err) => {
   if (err) throw err;
 //console.log('O arquivo foi criado!');
})
}
//module.exports = arquivoTxt;

