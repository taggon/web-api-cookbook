/**
 * 예 8-17. 로딩 엘리먼트 사용하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */
showLoader(
  fetch('https://example.com/api/users')
    .then(response => response.json())
);
