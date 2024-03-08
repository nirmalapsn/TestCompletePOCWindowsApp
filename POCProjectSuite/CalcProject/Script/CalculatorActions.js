//USEUNIT CalculatorUI
//USEUNIT ProcessUtils

function launchCalculator(){
  killProcess("Microsoft.WindowsCalculator");
  TestedApps.calc.Run();
}

function addNumbers(testData){
  Log.Message("Test Data: " + testData);
  var sum = 0;
  if(testData.length >0){
    for(let i=0; i<testData.length; i++){
      sum = sum + testData[i];
    }
  }
  
  Log.Message("Sum: " + sum);
  return sum;
}


function subtractNumbers(testData){
  Log.Message("Test Data: " + testData);
  var result = 0;
  if(testData.length >0){
    for(let i=0; i<testData.length; i++){
      result = testData[i] - result;
    }
  }
  
  Log.Message("result " + result);
  return result;
}

function multiplyNumbers(testData){
  
}