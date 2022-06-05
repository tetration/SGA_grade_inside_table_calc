/*
function IsProfessorOfClassFinalSumEnabled(numOfRows){//parameter needs to be number of classes user is taking
  pos=lastChild+1;
  var aTest=document.querySelector(`body > p:nth-child(1) > table > tbody > tr > td > center > table > tbody > tr:nth-child(4) > td:nth-child(1) > p > table > tbody > tr:nth-child(2) > td > p > span > table:nth-child(2) > tbody > tr:nth-child(${pos})`);
  //'body > p:nth-child(1) > table > tbody > tr > td > center > table > tbody > tr:nth-child(4) > td:nth-child(1) > p > table > tbody > tr:nth-child(2) > td > p > span > table:nth-child(4) > tbody > tr:nth-child(6)'
  //'body > p:nth-child(1) > table > tbody > tr > td > center > table > tbody > tr:nth-child(4) > td:nth-child(1) > p > table > tbody > tr:nth-child(2) > td > p > span > table:nth-child(2) > tbody > tr:nth-child(7)'
  //'body > p:nth-child(1) > table > tbody > tr > td > center > table > tbody > tr:nth-child(4) > td:nth-child(1) > p > table > tbody > tr:nth-child(2) > td > p > span > table:nth-child(6) > tbody > tr:nth-child(8) > td:nth-child(3) > pbody > p:nth-child(1) > table > tbody > tr > td > center > table > tbody > tr:nth-child(4) > td:nth-child(1) > p > table > tbody > tr:nth-child(2) > td > p > span > table:nth-child(4) > tbody > tr:nth-child(6) > td:nth-child(4) > p > span'
  //`body > p:nth-child(1) > table > tbody > tr > td > center > table > tbody > tr:nth-child(4) > td:nth-child(1) > p > table > tbody > tr:nth-child(2) > td > p > span > table:nth-child(2}) > tbody > tr > td:nth-child(4)`;
  //let rowLocation=`body > p:nth-child(1) > table > tbody > tr > td > center > table > tbody > tr:nth-child(4) > td:nth-child(1) > p > table > tbody > tr:nth-child(2) > td > p > span > table:nth-child(${trNthChildValue}) > tbody > tr > td:nth-child(4)`;
  //var getProfessorGradeTotalSumRow=document.querySelector(rowLocation+ ' > td:nth-child(4) > p > span').innerText;
  //'body > p:nth-child(1) > table > tbody > tr > td > center > table > tbody > tr:nth-child(4) > td:nth-child(1) > p > table > tbody > tr:nth-child(2) > td > p > span > table:nth-child(2) > tbody > tr:nth-child(7) > td:nth-child(4) > p > span'
  //console.log(getProfessorGradeTotalSumRow);
  var aTest=document.querySelector('body > p:nth-child(1) > table > tbody > tr > td > center > table > tbody > tr:nth-child(4) > td:nth-child(1) > p > table > tbody > tr:nth-child(2) > td > p > span > table:nth-child(2) > tbody > tr:nth-child(7)');
  console.log(aTest.innerHTML);
  /*
  if(isNaN()){
    console.log("test");
  }
  
}
*/
function getTotalClassGrade(trNthChildValue, collegeClassName) {
  var teste = "";
  var collection = '';
  let elementLocation = `body > p:nth-child(1) > table > tbody > tr > td > center > table > tbody > tr:nth-child(4) > td:nth-child(1) > p > table > tbody > tr:nth-child(2) > td > p > span > table:nth-child(${trNthChildValue}) > tbody > tr > td:nth-child(4)`;
  $(elementLocation).each(function () {
    //console.log($(this).html());
    teste += $(this).html();
    teste = teste.replace(/<[^>]*>?/gm, '');//strips html
    teste = teste.replace(/\([^()]*\)/g, '');//strips parenthesis and everything inside it
    teste = teste.replace('&nbsp;', '');//&nbsp;¨

  });

  teste = teste.replace(/[^ 0-9\.]+/g, "");//removes words
  teste = teste.replace(/  +/g, ' ');
  collection = teste.split(' ');
  //var numOfRows= collection.length;
  //console.log(numOfRows);
  var onlyNumbers = teste.replace(/\D/g, '');
  console.log(teste);
  collection = collection.filter(n => n)//removes null, emtpy and undefined from array
  var numberCollection = turnIntoAnArrayOfNumbers(collection);
  console.log(`The final sum of grade in ${collegeClassName}  is: ` + SumArray(numberCollection));
  console.log("-------------------------------------------------------------------------------");
}

function GetHowManyClasses() {//Gets how many classes the user is taking
  var conntainerOfClasses = document.querySelector("body > p:nth-child(1) > table > tbody > tr > td > center > table > tbody > tr:nth-child(4) > td:nth-child(1) > p > table > tbody > tr:nth-child(2) > td > p > span");
  var NumberofClassesUserIsTaking = conntainerOfClasses.getElementsByTagName('table').length / 2;
  return NumberofClassesUserIsTaking;
}

function printSubjectsAndGrade() {
  console.log("You are currently enrolled in the following subjects");
  var numofClasses = GetHowManyClasses();
  var childCounter = 1;
  var childCounter2 = 2;
  for (let i = 0; i < numofClasses; i++) {
    console.log("-------------------------------------------------------------------------------");
    let elementLocation = `body > p:nth-child(1) > table > tbody > tr > td > center > table > tbody > tr:nth-child(4) > td:nth-child(1) > p > table > tbody > tr:nth-child(2) > td > p > span > table:nth-child(${childCounter}) > tbody > tr > td:nth-child(1) > p`;
    let collegeClassName = document.querySelector(elementLocation).innerText;
    collegeClassName =collegeClassName.replace('\n', '');
    console.log(collegeClassName);
    getTotalClassGrade(childCounter2, collegeClassName);
    childCounter += 2;
    childCounter2 += 2;
  }
}
function turnIntoAnArrayOfNumbers(arrayOfStrings) {
  var counter = 0;
  var newArray = new Array();
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
printSubjectsAndGrade();

