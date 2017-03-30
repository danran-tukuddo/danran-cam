class Config{
  //uv4l --driver uvc --device-id 046d:0825 --config-file=/etc/uv4l/uv4l-uvc.conf
  //コンストラクタ
  constructor(){
    console.log("constructor");
    this.UV4L_DEVICE_ID = "046d:0825";
    this.FIREBASE_URL = "http://localhost:5000";
  }
}

module.exports = new Config();
