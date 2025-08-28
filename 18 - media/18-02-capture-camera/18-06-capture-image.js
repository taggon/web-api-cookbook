/**
 * 예 18-6. 이미지 캡쳐
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

// <video> 엘리먼트를 가져온다.
const preview = document.querySelector('#preview');

const photo = document.querySelector('#photo');
const canvas = document.querySelector('#canvas');

function captureImage() {
  // 기기의 픽셀 밀도에 따라 캔버스의 크기를 조정한다.
  // 이미지가 흐릿하거나 깨지는 것을 방지할 수 있다.
  canvas.width = canvas.width * window.devicePixelRatio;
  canvas.height = canvas.height * window.devicePixelRatio;

  // 캔버스의 2D 컨텍스트를 가져와서 현재 비디오 프레임을 그린다.
  const context = canvas.getContext('2d');
  context.drawImage(preview, 0, 0, canvas.width, canvas.height);

  // JPEG 데이터 URL를 생성하고 이미지 주소로 사용한다.
  const dataUrl = canvas.toDataURL('image/jpeg');
  photo.src = dataUrl;
}
