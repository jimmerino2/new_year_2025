function fadeInAudio(videoElement, targetVolume, durationMs) {
  videoElement.volume = 0;
  const intervalTime = 50;
  const step = targetVolume / (durationMs / intervalTime);

  const fadeInterval = setInterval(() => {
    if (videoElement.volume < targetVolume) {
      videoElement.volume = Math.min(targetVolume, videoElement.volume + step);
    } else {
      clearInterval(fadeInterval);
    }
  }, intervalTime);
}
