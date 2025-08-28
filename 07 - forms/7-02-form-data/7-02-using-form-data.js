/**
 * 예 7-2. FormData API를 사용한 데이터 추가
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

// 실제 애플리케이션에서는 API 토큰을 다른 방식으로 저장한다.
// 이와 같이 하드코딩하지 않는다.
const apiToken = 'aBcD1234EfGh5678IjKlM';

form.addEventListener('submit', event => {
  // 중요! 브라우저가 자동으로 실행하는 폼 전송을 막는다.
  event.preventDefault();

  // FormData 객체를 만들고 API 토큰을 추가한다.
  const data = new FormData(event.target);
  data.set('apiToken', apiToken);

  // Fetch API를 사용해 FormData 객체를 엔드포인트로 전송한다.
  fetch('/api/form', {
    method: 'POST',
    body: data
  });
});
