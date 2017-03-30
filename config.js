class Config{
  //コンストラクタ
  constructor(){
    console.log("constructor");
    this.UV4L_DEVICE_ID = "046d:0825";
    this.UV4L_SERVER_URL = "http://127.0.0.1:8090/stream/webrtc";
  }
}

module.exports = new Config();
