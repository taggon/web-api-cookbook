/**
 * 예 18-5. 동영상 스트림 가져오기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const preview = document.querySelector('#preview');

async function startCamera() {
  const stream = await navigator.mediaDevices.getUserMedia(
    {
      video: true,
      audio: false
    }
  );
  preview.srcObject = stream;
  preview.play();
}
