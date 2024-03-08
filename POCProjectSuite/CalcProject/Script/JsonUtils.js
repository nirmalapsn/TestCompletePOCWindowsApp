function readJsonFile(fileFullPath){
  var file = fileFullPath;
  var text = aqFile.ReadWholeTextFile(file, aqFile.ctUTF8);
  Log.Message(text);
  
  var jsonObj = JSON.parse(text);
  return jsonObj;
}


function paraseJsonFromText(text){
  var jsonObj = JSON.parse(text);
  return jsonObj;
}