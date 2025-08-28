/**
 * 예 18-14. 동영상 스트림 설정
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

async function startCamera() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false
  });

  // 스트림을 video 엘리먼트에 설정한다.
  preview.srcObject = stream;
  preview.play();

  // 기기의 픽셀 밀도에 따라 캔버스의 크기를 조정한다.
  // 이미지가 흐릿하거나 깨지는 것을 방지할 수 있다.
  canvas.width = canvas.width * window.devicePixelRatio;
  canvas.height = canvas.height * window.devicePixelRatio;
  const context = canvas.getContext('2d');

  // 초당 30 프레임이 캔버스에 그려지는 것을 목표로 한다.
  setInterval(() => {
    context.drawImage(preview, 0, 0, canvas.width, canvas.height);
  }, 30 / 1000);
}
