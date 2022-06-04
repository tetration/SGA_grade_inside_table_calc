var teste = "";
var collection = '';

function GetHowManyClasses() {//Gets how many classes the user is taking
  var conntainerOfClasses = document.querySelector("body > p:nth-child(1) > table > tbody > tr > td > center > table > tbody > tr:nth-child(4) > td:nth-child(1) > p > table > tbody > tr:nth-child(2) > td > p > span");
  var NumberofClassesUserIsTaking = conntainerOfClasses.getElementsByTagName('table').length / 2;
  return NumberofClassesUserIsTaking;
}

function printSubjectsAndGrade() {
  console.log("You are currently enrolled in the following subjects");
  var numofClasses = GetHowManyClasses();
  childCounter = 1
  childCounter2=2;
  for (let i = 0; i < numofClasses; i++) {
    let elementLocation = `body > p:nth-child(1) > table > tbody > tr > td > center > table > tbody > tr:nth-child(4) > td:nth-child(1) > p > table > tbody > tr:nth-child(2) > td > p > span > table:nth-child(${childCounter}) > tbody > tr > td:nth-child(1) > p`;
    let collegeClassName=document.querySelector(elementLocation).innerText;
    collegeClassName.replace('\n','');
    console.log(collegeClassName);
    getTotalClassGrade(childCounter2,collegeClassName);
    childCounter += 2;
    childCounter2+=3;
  }
}
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
function getTotalClassGrade(trNthChildValue, collegeClassName) {
  
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
  var onlyNumbers = teste.replace(/\D/g, '');
  console.log(teste);
  console.log("-------------------------------------------------------------------------------");
  collection = collection.filter(n => n)//removes null, emtpy and undefined from array
  numberCollection = turnIntoAnArrayOfNumbers(collection);
  console.log(`The final sum of grade in ${collegeClassName}  is: ` + SumArray(numberCollection));
}
printSubjectsAndGrade();

