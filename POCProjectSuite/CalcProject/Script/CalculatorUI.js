function getCalcMainSCreen(){
  var calcMainScreen = Sys.Process("Microsoft.WindowsCalculator").FindChild("Name", 'UIAObject("Calculator")');
  return calcMainScreen;
}


function getNavView(){
  var calcStdOperatorsParent = getCalcMainSCreen().FindChild("Name", 'UIAObject("NavView")');
  return calcStdOperatorsParent;
}

function getAllButtons(){
  var buttons = getNavView().FindAllChildren("ClassName", "Button");
  return buttons;
}


function getMinusButton(){
  
}

function getMultiplyButton(){
  
}