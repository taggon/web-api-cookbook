/**
 * 예 7-3. 페치를 사용하여 폼을 JSON으로 바꿔 전송하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

form.addEventListener('submit', event => {
  // 중요! 브라우저가 자동으로 실행하는 폼 전송을 막는다.
  event.preventDefault();

  // 현재 폼의 데이터를 포함한 새로운 FormData를 작성한 다음
  // 요청 본문에 키/값 쌍을 추가한다.
  const data = new FormData(event.target);
  const body = {};
  for (const [key, value] of data.entries()) {
    body[key] = value;
  }

  // JSON 본문을 폼 엔드포인트로 전송한다.
  fetch('/api/form', {
    method: 'POST',

    // 객체는 JSON 문자열로 변환해야 한다.
    body: JSON.stringify(body),

    // 서버에 현재 전송하는 요청이 JSON 타입임을 알린다.
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(body => console.log('받은 응답:', body));
});
