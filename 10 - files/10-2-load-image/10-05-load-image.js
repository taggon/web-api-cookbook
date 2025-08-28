/**
 * 예 10-5. 이미지를 페이지에 읽어 들이기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

/**
 * 파일에서 이미지를 읽어 들인 후 표시한다.
 * @param file 이미지 데이터를 포함한 File 객체
 * @param imageElement 이미지 데이터를 표시할 플레이스홀더 이미지 엘리먼트
 */
function showImageFile(file, imageElement) {
  const reader = new FileReader();

  reader.addEventListener('load', event => {
    // 데이터 URL을 이미지의 src 속성에 바로 설정하여 이미지를 읽어 들인다.
    imageElement.src = event.target.result;
  });

  reader.addEventListener('error', event => {
    console.log('error', event);
  });

  reader.readAsDataURL(file);
}

const fileInput = document.querySelector('#select-file');
fileInput.addEventListener('change', event => {
  showImageFile(
    fileInput.files[0],
    document.querySelector('#placeholder-image')
  );
});
