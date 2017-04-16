class Config{
  //コンストラクタ
  constructor(){
    console.log("constructor");
    this.FIREBASE_APP_URL = "https://danran-5202a.firebaseapp.com/cam.html";
  }
}

module.exports = new Config();
