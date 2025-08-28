/**
 * 예 4-4.  Fetch API를 사용하여 POST 방식으로 JSON 데이터를 전송하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

/**
 * /api/users로 POST 요청을 전송하여 새로운 사용자를 생성한다.
 * @param firstName 사용자의 성
 * @param lastName 사용자의 이름
 * @param department 사용자의 부서
 * @returns API 응답 본문을 해결하는 Promise
 */
function createUser(firstName, lastName, department) {
  return fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({ firstName, lastName, department }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .catch(error => console.error('Error:', error.message));
}

createUser('John', 'Doe', 'Engineering')
  .then(() => console.log('사용자가 생성되었습니다!'))
  .catch(error => console.error('사용자를 생성하는 중 에러가 발생했습니다:', error));
