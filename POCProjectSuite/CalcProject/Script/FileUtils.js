function checkFileExists(fileFullPath){
  if(aqFileSystem.Exists(fileFullPath))
    Log.Checkpoint(fileFullPath + " Exists");  
  else
    Log.Error(fileFullPath + " does not exist");
  
  return fileFullPath;
}
