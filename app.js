const electron = require('electron');
const config = require("./config.js");
const uv4l = require("./uv4l.js");

class App{
  //コンストラクタ
  constructor(){
    console.log("constructor");
    uv4l.config = config;
    this.app = electron.app;
    this.mainWindow = null;
  }

  init(){
    console.log("init");
    //全てのWindowが閉じられた時
    this.app.on('window-all-closed', this.windowAllClosed);
    this.app.on('ready', this.ready);
  }

  //全てのWindowが閉じられた時
  windowAllClosed(){
    console.log("windowAllClosed");
    if (process.platform != 'darwin'){
      this.app.quit();
    }
  }

  //起動時
  ready(){
    console.log("ready");
    //ブラウザ(Chromium)の起動, 初期画面のロード
    this.mainWindow = new electron.BrowserWindow({width: 800, height: 600});
    //this.mainWindow.maximize();
    this.mainWindow.loadURL(config.FIREBASE_URL);
    this.mainWindow.on('closed', this.windowClosed);
  }

  //Windowを閉じた時
  windowClosed(){
    console.log("closed");
    this.mainWindow = null;
  }
}

const app = new App();
app.init();
