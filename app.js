const WebRTC = require('webrtc-native');

class App{
  //コンストラクタ
  constructor(){
    console.log("constructor");
  }

  init(){
    console.log("init");
  }
}

const app = new App();
app.init();
