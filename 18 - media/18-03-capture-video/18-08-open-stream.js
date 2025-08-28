/**
 * 예 18-8. 오디오와 비디오 스트림 생성
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const preview = document.querySelector('#preview');

const stream = await navigator.mediaDevices.getUserMedia({
  video: true,
  audio: true
});
preview.srcObject = stream;
preview.play();
