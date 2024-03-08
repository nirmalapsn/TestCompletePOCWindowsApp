//USEUNIT JsonUtils
//USEUNIT CalculatorActions

var stepNo = 1;
var jsonFilePath;

function testAddNumbers(){
  jsonFilePath = ProjectSuite.Path + "TestData\\CalculatorTestData.Json";
  var jsonObjParent = readJsonFile(jsonFilePath);
  var testData = jsonObjParent.Add;
  var sum = addNumbers(testData);
  if(sum!=null && sum!=undefined)
    Log.Checkpoint("Sum: " + sum);
  else
    Log.Error("Sum Calculation failed");
}
  

function testSubtractNumbers(){
  
}