const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      enterPictureInPicture(videoElement);
      // videoElement.play();
    }
  } catch (error) {
    //Catch Error Here
    console.log('whoops, error here:', error)
  }
}

function enterPictureInPicture() {
  videoElement.requestPictureInPicture()
    .then(pictureInPictureWindow => {
      pictureInPictureWindow.addEventListener("resize", () => onPipWindowResize(), false);
    })
}

// button.addEventListener('click', async () => {
//   // Disable Button
//   button.disabled = true;
//   // Start Picture in Picture
//   await videoElement.requestPictureInPicture();
//   // Reset Button
//   button.disabled = false;
// })

//On load
selectMediaStream();
