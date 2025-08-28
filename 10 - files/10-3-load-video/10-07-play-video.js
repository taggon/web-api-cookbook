/**
 * 예 10-7. 동영상 파일 재생
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const fileInput = document.querySelector('#file-upload');
const video = document.querySelector('#video-player');

fileInput.addEventListener('change', event => {
  const [file] = fileInput.files;

  // File은 Blob를 확장한 것이므로 createObjectURL에 전달할 수 있다.
  const objectUrl = URL.createObjectURL(file);

  // <video> 엘리먼트는 객체 URL을 통해 동영상을 읽어 들일 수 있다.
  video.src = objectUrl;
});
