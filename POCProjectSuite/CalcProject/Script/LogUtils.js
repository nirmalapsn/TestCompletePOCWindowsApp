function setLogFolderAttributes(logFolderName, priority, boolBold, boolItalic, backColor, fontColor){
  var logFolderAttr = Log.CreateNewAttributes();
  if(!priority)
    priority = pmNormal;
  if(!boolBold)
    logFolderAttr.Bold = true;
  if(!boolItalic)
    logFolderAttr.Italic = false;
  if(!backColor)
    logFolderAttr.BackColor = clWhite;
  if(!fontColor)
    logFolderAttr.FontColor = clNavy;
    
  var folderId = Log.AppendFolder(logFolderName, "", priority, logFolderAttr);
  return folderId;
}

function addLogsWithAttr(logMessageType, logMessage, priority, boolBold, boolItalic, backColor, fontColor){
  let logAttr = Log.CreateNewAttributes();
  if(!priority)
    priority = pmNormal;
  if(!boolBold)
    boolBold = false;
  if(!boolItalic)
    boolItalic = false;
  if(!backColor)
    backColor = clWhite;
  if(!fontColor)
    fontColor = clBlack;
    
  logAttr.Bold = boolBold;
  logAttr.Italic = boolItalic;
  logAttr.BackColor = backColor;
  logAttr.FontColor = fontColor;
  
  if(logMessageType == "Checkpoint")
    Log.Checkpoint(logMessage, "", priority, logAttr);
  if(logMessageType == "Event")
    Log.Event(logMessage, "", priority, logAttr);
  if(logMessageType == "Error")
    Log.Error(logMessage, "", priority, logAttr);
  if(logMessageType == "Warning")
    Log.Warning(logMessage, "", priority, logAttr);
  if(logMessageType == "Message")
    Log.Message(logMessage, "", priority, logAttr);
}