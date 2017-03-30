class Config{
  //コンストラクタ
  constructor(){
    console.log("constructor");
    this.UV4L_DEVICE_ID = "046d:0825";
    //this.FIREBASE_URL = "http://localhost:5000";
    this.FIREBASE_URL = "https://danran-5202a.firebaseapp.com";
  }
}

module.exports = new Config();
