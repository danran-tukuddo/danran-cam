const electron = require('electron');
const config = require("./config.js");

class App{
  //コンストラクタ
  constructor(){
    console.log("constructor");
    this.app = electron.app;
    this.mainWindow = null;
  }

  init(){
    console.log("init");
    //全てのWindowが閉じられた時
    this.app.on('window-all-closed', this.windowAllClosed);
    //ウィンドウ描画された時
    this.app.on('ready', this.ready);

    //証明書エラー
    this.app.on('certificate-error', this.certificateError);
  }

  //証明書エラー
  certificateError(event, webContents, url, error, certificate, callback){
    event.preventDefault();
    //証明書エラーを無視
    callback(true);
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
    //QVGA 1280x960
    //XVGA 1024x768
    this.mainWindow = new electron.BrowserWindow({center: true,"always-on-top": true, kiosk: true, frame:false});
    //this.mainWindow = new electron.BrowserWindow({width:1024,height:768,center: true,"always-on-top": true});

    this.mainWindow.maximize();
    this.mainWindow.setFullScreen(true);
    this.mainWindow.loadURL(config.FIREBASE_APP_URL);
    this.mainWindow.on('closed', function(){
      console.log("closed");
      electron.session.defaultSession.clearCache(() => {});
      this.mainWindow = null;
    });
  }

}

const app = new App();
app.init();
