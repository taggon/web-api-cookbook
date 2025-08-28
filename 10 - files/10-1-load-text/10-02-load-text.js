/**
 * 예 10-2. 파일에서 일반적인 텍스트를 읽어 오기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

/**
 * 파일의 텍스트 콘텐츠를 읽는다.
 * @param file 읽을 데이터가 포함된 파일 File 객체
 * @param onSuccess 데이터를 읽은 후 호출하는 함수
 */
function readFileContent(file, onSuccess) {
  const reader = new FileReader();

  // 콘텐츠를 읽어 들였을 때, 리더가 'load' 이벤트를 발생시킨다.
  reader.addEventListener('load', event => {
    onSuccess(event.target.result);
  });

  // 오류는 빠짐없이 다루자!
  reader.addEventListener('error', event => {
    console.error('Error reading file:', event);
  });

  // 파일 읽기 작업을 시작한다.
  reader.readAsText(file);
}

const fileInput = document.querySelector('#select-file');

// 파일을 선택하면 입력 필드에서 'change' 이벤트가 발생한다.
fileInput.addEventListener('change', event => {
  // 파일 입력은 복수 개의 파일을 선택할 수 있기 때문에
  // 이 값은 배열이 된다. 여기서는 한 번에 하나만 선택할 수 있게 했다.
  // 배열 비구조화 할당 문법을 사용해 첫 번째 파일을 가져온다.
  const [file] = fileInput.files;

  readFileContent(file, content => {
    // 이제 파일의 텍스트 콘텐츠를 사용할 수 있다.
    // 가져온 텍스트를 추가할 수 있는 textarea 엘리먼트가 있다고 가정한다.
    const textArea = document.querySelector('.file-content-textarea');
    textArea.textContent = content;
  });
});
