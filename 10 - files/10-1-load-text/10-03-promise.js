/**
 * 예 10-3. Promise가 적용된 readFileContent 함수
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

function readFileContent(file) {
  const reader = new FileReader();

  return new Promise((resolve, reject) => {
    reader.addEventListener('load', event => {
      resolve(event.target.result);
    });

    reader.addEventListener('error', reject);

    reader.readAsText(file);
  });
}

try {
  const content = await readFileContent(inputFile);
  const textArea = document.querySelector('.file-content-textarea');
  textArea.textContent = content;
} catch (error) {
  console.error('파일 콘텐츠를 읽는 중 오류 발생:', error);
}
