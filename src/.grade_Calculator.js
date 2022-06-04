var teste="";

$('body > p:nth-child(1) > table > tbody > tr > td > center > table > tbody > tr:nth-child(4) > td:nth-child(1) > p > table > tbody > tr:nth-child(2) > td > p > span > table:nth-child(10) > tbody > tr > td:nth-child(4)').each(function() {
  //console.log($(this).html());
  teste+=$(this).html().replace(/<[^>]*>?/gm, '');

  
});
var onlyNumbers = teste.replace(/\D/g, '');
console.log(teste);
console.log("-------------------------------------------------------------------------------");