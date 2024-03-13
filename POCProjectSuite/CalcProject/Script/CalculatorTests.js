//USEUNIT JsonUtils
//USEUNIT CalculatorActions
//USEUNIT LogUtils

var stepNo = 1;
var jsonFilePath;

function testAddNumbers(){
  setLogFolderAttributes("Step: " + stepNo++ + ": " + "Read JSON File");
  jsonFilePath = ProjectSuite.Path + "TestData\\CalculatorTestData.Json";
  var jsonObjParent = readJsonFile(jsonFilePath);
  var testData = jsonObjParent.Add;
  addLogsWithAttr("Checkpoint", "Test Data for Addition: " + testData, pmNormal, true, false, clWhite, clGreen);
  Log.PopLogFolder();
  
  setLogFolderAttributes("Step: " + stepNo++ + ": " + "Perform Addition on Numbers");
  var sum = addNumbers(testData);
  if(sum!=null && sum!=undefined)
    addLogsWithAttr("Checkpoint", "Sum: " + sum, pmHigher, true, false, clWhite, clGreen);
    //Log.Checkpoint("Sum: " + sum);
  else
    //Log.Error("Sum Calculation failed");
    addLogsWithAttr("Error", "Sum Calculation failed", pmHigher, true, false, clWhite, clRed);
  Log.PopLogFolder();
}
  

function testSubtractNumbers(){
  jsonFilePath = ProjectSuite.Path + "TestData\\CalculatorTestData.Json";
  var jsonObjParent = readJsonFile(jsonFilePath);
  var testData = jsonObjParent.Add;
  var sum = subtractNumbers(testData);
  if(sum!=null && sum!=undefined)
    Log.Checkpoint("Sum: " + sum);
  else
    Log.Error("Sum Calculation failed");
}

function testMultiplyNumbers(){
  
}

function testDivisionOnNumbers(){
  
}