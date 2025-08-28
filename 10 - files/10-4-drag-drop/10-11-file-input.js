/**
 * 예 10-11. 파일 입력 다루기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const fileInput = document.querySelector('#file-input');
fileInput.addEventListener('change', () => {
  const [file] = fileInput.files;
  showDroppedFile(file);
});
