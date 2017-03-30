"use strict";

var video = document.getElementById("video");

navigator.mediaDevices.getUserMedia({video: true, audio: false}, _handleSuccess, _handleError);

function _handleSuccess(localMediaStream) {
  console.log("_handleSuccess");
  video.style.display = "block";
  video.src = window.URL.createObjectURL(localMediaStream);
  video.play();
}

function _handleError() {
  console.log("_handleError");
  alert("ERROR: カメラを起動できませんでした。");
}
