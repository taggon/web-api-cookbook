/**
 * 예 1-3. loadImage 함수 사용
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 *
 * 예 1-2에서 작성한 loadImage 함수의 사용 방법을 보여준다.
 */

loadImage('https://example.com/profile.jpg', 'https://example.com/fallback.jpg')
  .then(image => {
    // container는 DOM에 이미 존재하는 엘리먼트로서, 이미지를 여기에 추가한다.
    container.appendChild(image);
  }).catch(error => {
    console.error('이미지 로딩 실패');
  });
