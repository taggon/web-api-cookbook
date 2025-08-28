/**
 * 예 18-1. 화면 녹화하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

async function captureScreen() {
  const stream = await navigator.mediaDevices.getDisplayMedia();
  const mediaRecorder = new MediaRecorder(stream, {
    mimeType: 'video/webm'
  });

  mediaRecorder.addEventListener('dataavailable', event => {
    const blob = new Blob([event.data], {
      type: 'video/webm',
    });

    const url = URL.createObjectURL(blob);
    video.src = url;
  });

  mediaRecorder.start();
}
