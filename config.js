class Config{
  //コンストラクタ
  constructor(){
    console.log("constructor");
    this.UV4L_DEVICE_ID = "046d:0825";
    this.FIREBASE_APP_URL = "https://danran-5202a.firebaseapp.com/cam.html";
  }
}

module.exports = new Config();
