const {app,BrowserWindow,shell}=require("electron");
const path=require("path");
app.whenReady().then(()=>{
  const w=new BrowserWindow({width:520,height:860,title:"Fragewürfel",backgroundColor:"#e9f0fb",autoHideMenuBar:true});
  w.loadFile(path.join(__dirname,"index.html"));
  w.webContents.setWindowOpenHandler(({url})=>{shell.openExternal(url);return{action:"deny"}});
});
app.on("window-all-closed",()=>app.quit());
