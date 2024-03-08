function checkIfProcessIsRunning(procName){
  Sys.Refresh();
  var p, i, s;
  var procCount = 0;
  var arrProc = [];
  for (let i = 0; i< Sys.ChildCount; i++){
    p = Sys.Child(i);
    if(p.ProcessName.toString().includes(procName)){
      s = " Process Name: " + "\r\n" + p.ProcessName + "\r\n";
      Log.Message(p.Name, s);
      procCount++;
      arrProc.push(p);
    }
  }
  Log.Message("Proc Count for" + procName + ": " + arrProc.length);
  return arrProc;
}


function killProcess(procName){
  var proc = checkIfProcessIsRunning(procName);
  if(proc.length>0){
    for (let i = 0; i< proc.length; i++){      
      p = proc[i];
      Log.Message(p.ProcessName);
      p.Terminate();    
    }
  }
}