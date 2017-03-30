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
    //キャッシュ クリア
    electron.session.defaultSession.clearCache(() => {});

    if (process.platform != 'darwin'){
      this.app.quit();
    }
  }

  //起動時
  ready(){
    console.log("ready");
    const _this = this;
    //ブラウザ(Chromium)の起動, 初期画面のロード
    this.mainWindow = new electron.BrowserWindow({width: 800, height: 600});
    //this.mainWindow.maximize();
    //this.mainWindow.loadURL(config.FIREBASE_APP_URL);
    //this.mainWindow.loadURL("file://" + __dirname + "/public/app.html");

    this.mainWindow.loadURL("chrome://settings/content#media-stream-mic");
    this.mainWindow.on('closed', function(){
      console.log("closed");
      electron.session.defaultSession.clearCache(() => {});
      this.mainWindow = null;
    });
  }

}

const app = new App();
app.init();
