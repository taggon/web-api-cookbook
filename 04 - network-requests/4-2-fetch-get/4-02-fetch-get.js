/**
 * 예 4-2. Fetch API를 사용한 GET 요청 전송
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

/**
 * /api/users API를 호출하여 사용자 정보를 읽고 응답을 파싱한다.
 * @returns API가 반환하는 사용자 목록 배열을 해결하는 Promise
 */
function loadUsers() {
  // 요청을 생성한다.
  return fetch('/api/users')
    // 응답 본문을 객체로 파싱한다.
    .then(response => response.json())
    // 에러를 처리한다. 네트워크 에러와 JSON 파싱 에러를 처리한다.
    .catch(error => console.error('Couldn\'t fetch:', error.message));
}

loadUsers().then(users => {
  console.log('사용자 목록:', users);
});
