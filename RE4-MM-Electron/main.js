const { app, BrowserWindow, ipcMain } = require('electron');
const appPath = require('./config/Path.json')
const path = require('path')
const ipc = ipcMain

const splashLoad = () =>{
    const win = new BrowserWindow({
        width:600,
        height:200,
        resizable:false,
        backgroundColor:'#1F1F1F',
        autoHideMenuBar:true,
        titleBarStyle:'hidden',
        webPreferences:{
            nodeIntegration:true,
            contextIsolation:false,
            devTools:true,
            preload:path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('./src/Splash/index.html')

    ipc.on('initApp', ()=>{
        win.close()
        inicioWindows()
    })



}

const inicioWindows = () => {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        resizable:false,
        backgroundColor:'#1F1F1F',
        autoHideMenuBar:true,
        titleBarOverlay:{
            color:'#1F1F1F',
        },
        webPreferences:{
            nodeIntegration:true,
            contextIsolation:false,
            devTools:true,
            preload:path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('./src/Inicio/index.html')

    ipc.on('close', ()=>{
        win.close();
    })

    ipc.on('minimize', ()=>{
        win.minimize();
    })

}

app.whenReady().then(() => {
    // splashLoad()
    inicioWindows()
})