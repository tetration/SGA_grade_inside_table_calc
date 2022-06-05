
function IsProfessorOfClassFinalSumEnabled(currentTablePos,lastRowOfTable){//parameter needs to be number of classes user is taking
  let lastRowOftablelocation=document.querySelector(`body > p:nth-child(1) > table > tbody > tr > td > center > table > tbody > tr:nth-child(4) > td:nth-child(1) > p > table > tbody > tr:nth-child(2) > td > p > span > table:nth-child(${currentTablePos}) > tbody > tr:nth-child(${lastRowOfTable})`);
  let lastRowOftablelocationText=document.querySelector(`body > p:nth-child(1) > table > tbody > tr > td > center > table > tbody > tr:nth-child(4) > td:nth-child(1) > p > table > tbody > tr:nth-child(2) > td > p > span > table:nth-child(${currentTablePos}) > tbody > tr:nth-child(${lastRowOfTable}) > td:nth-child(2)`).innerHTML.replace(/<[^>]*>?/gm, '').replace(/ +(?= )/g,'').replace(/(\r\n|\n|\r)/gm, "");
  let tf=false;
  if(lastRowOftablelocationText.includes("Somatório das Avaliações")){
    let rowWithGrade= document.querySelector(`body > p:nth-child(1) > table > tbody > tr > td > center > table > tbody > tr:nth-child(4) > td:nth-child(1) > p > table > tbody > tr:nth-child(2) > td > p > span > table:nth-child(${currentTablePos}) > tbody > tr:nth-child(${lastRowOfTable}) > td:nth-child(4)`).innerHTML.replace(/<[^>]*>?/gm, '').replace(/ +(?= )/g,'').replace(/(\r\n|\n|\r)/gm, "");
    rowWithGrade= rowWithGrade.replace(/\([^()]*\)/g, '');//strips parenthesis and everything inside it
    rowWithGrade = rowWithGrade.replace('&nbsp;', '');//&nbsp;¨
    rowWithGrade = rowWithGrade.replace(/[^ 0-9\.]+/g, "");//removes words
    rowWithGrade = rowWithGrade.replace(/  +/g, ' ');
    let numberInRowWithGrade= Number(rowWithGrade);
    if(!isNaN(numberInRowWithGrade)){
      tf=true
    }
    console.log(rowWithGrade);
  }
  return tf;
}
function getTableTotalRows(trNthChildValue){
  let counter =0;
  let elementLocation = `body > p:nth-child(1) > table > tbody > tr > td > center > table > tbody > tr:nth-child(4) > td:nth-child(1) > p > table > tbody > tr:nth-child(2) > td > p > span > table:nth-child(${trNthChildValue}) > tbody > tr > td:nth-child(4)`;
  $(elementLocation).each(function () {
    counter++;
  });
  return counter;
}

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
  var onlyNumbers = teste.replace(/\D/g, '');
  console.log(teste);
  collection = collection.filter(n => n)//removes null, emtpy and undefined from array
  var numberCollection = turnIntoAnArrayOfNumbers(collection);
  return numberCollection;
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
  let collegeClassName='';
  let gradeCollection;
  let tf=false;
  for (let i = 0; i < numofClasses; i++) {
    console.log("-------------------------------------------------------------------------------");
    let elementLocation = `body > p:nth-child(1) > table > tbody > tr > td > center > table > tbody > tr:nth-child(4) > td:nth-child(1) > p > table > tbody > tr:nth-child(2) > td > p > span > table:nth-child(${childCounter}) > tbody > tr > td:nth-child(1) > p`;
    collegeClassName = document.querySelector(elementLocation).innerText;
    let tableRowscounter;
    collegeClassName =collegeClassName.replace('\n', '');
    console.log(collegeClassName);
    gradeCollection=getTotalClassGrade(childCounter2, collegeClassName);
    tableRowscounter= getTableTotalRows(childCounter2);
    tf=IsProfessorOfClassFinalSumEnabled(childCounter2, tableRowscounter);
    if(tf){//if ProfessorFinal Grade has value remove it from our array so it wont mess our own calculation
      gradeCollection.pop();
    }
    console.log(`The sum of your grades in ${collegeClassName}  is: ` + SumArray(gradeCollection));
    console.log("-------------------------------------------------------------------------------");
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

