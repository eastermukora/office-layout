(function () {
  'use strict';

  const URL = 'https://res.cloudinary.com/djldm8pws/video/upload/v1752786038/The-Office_npigtg.mp3';
    
  const context = new AudioContext();
  const playButton = document.querySelector('#play');
    
  let yodelBuffer;

  window.fetch(URL)
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
    .then(audioBuffer => {
      playButton.disabled = false;
      yodelBuffer = audioBuffer;
    });
    
    playButton.onclick = () => play(yodelBuffer);

  function play(audioBuffer) {
    const source = context.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(context.destination);
    source.start();
  }
}());