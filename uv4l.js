class UV4L{
  //コンストラクタ
  constructor(config){
    console.log("constructor");
    this.config = null;
  }

  //WebRTCサーバ開始
  start(){
    // uv4l --driver uvc --device-id 046d:0825 --config-file=/etc/uv4l/uv4l-uvc.conf

  }

  //WebRTCサーバ停止
  stop(){
    // pkill uv4l
  }
}

module.exports = new UV4L();
