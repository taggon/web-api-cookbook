/**
 * 예 4-6. Fetch API를 사용한 파일 데이터 전송
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

/**
 * 'file' 입력이 있는 폼을 전달받으면
 * 해당 파일을 본문으로 하는 POST 요청을 전송한다.
 * @param form 폼 객체 ('file'이라는 이름의 파일 입력이 있어야 한다)
 * @returns 수신한 응답 JSON을 해결하는 Promise
 */
function uploadFile(form) {
  const formData = new FormData(form);
  const fileData = formData.get('file');
  return fetch('https://httpbin.org/post', {
    method: 'POST',
    body: fileData
  })
    .then(response => response.json());
}
