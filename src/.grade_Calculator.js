var teste = "";
var collection = '';

function turnIntoAnArrayOfNumbers(arrayOfStrings) {
  var counter = 0;
  newArray = new Array();
  arrayOfStrings.forEach(element => {
    if (Boolean(element)) {
      isNaN(element) ? newArray.push(0) : newArray.push(Number(element));
    }
  });
  return newArray;
}

function SumArray(arrayOfNumbers) {
  var theSum = 0;
  arrayOfNumbers.forEach(element => {
    theSum += element;
  });
  return theSum;
}

$('body > p:nth-child(1) > table > tbody > tr > td > center > table > tbody > tr:nth-child(4) > td:nth-child(1) > p > table > tbody > tr:nth-child(2) > td > p > span > table:nth-child(10) > tbody > tr > td:nth-child(4)').each(function () {
  //console.log($(this).html());
  teste += $(this).html();
  teste = teste.replace(/<[^>]*>?/gm, '');//strips html
  teste = teste.replace(/\([^()]*\)/g, '');//strips parenthesis and everything inside it
  teste = teste.replace('&nbsp;', '');//&nbsp;¨

});
//colllection = teste.split('\n');
//console.log("The collection is:" + collection);
teste = teste.replace(/[^ 0-9\.]+/g, "");//removes words
teste = teste.replace(/  +/g, ' ');
collection = teste.split(' ');
var onlyNumbers = teste.replace(/\D/g, '');
console.log(teste);
console.log("-------------------------------------------------------------------------------");
collection= collection.filter(n => n)//removes null, emtpy and undefined from array
numberCollection = turnIntoAnArrayOfNumbers(collection);
console.log("The final sum of your grades is: " + SumArray(numberCollection));

