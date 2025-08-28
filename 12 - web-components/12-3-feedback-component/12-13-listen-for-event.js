/**
 * 예 12-13. feedback 이벤트 리스닝하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

document.querySelector('feedback-rating').addEventListener('feedback', event => {
  // 피드백 컴포넌트의 'helpful' 프로퍼티에서 가져온 값을
  // POST 요청을 사용해 서버로 전송한다.
  fetch('/api/analytics/feedback', {
    method: 'POST',
    body: JSON.stringify({ helpful: event.target.helpful }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
});
