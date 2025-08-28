/**
 * 예 10-9. 드롭된 파일 읽고 표시하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

function showDroppedFile(file) {
  // 이미지 파일 데이터를 읽고 페이지에 표시한다.
  const reader = new FileReader();
  reader.addEventListener('load', event => {
    const image = document.querySelector('#placeholder');
    image.src = event.target.result;
  });

  reader.readAsDataURL(file);
}
