"use strict";

var video = document.getElementById("video");

navigator.webkitGetUserMedia({video: true, audio: false}, _handleSuccess, _handleError);

function _handleSuccess(localMediaStream) {
  video.style.display = "block";
  video.src = window.URL.createObjectURL(localMediaStream);
  video.play();
}

function _handleError() {
  alert("ERROR: カメラを起動できませんでした。");
}
