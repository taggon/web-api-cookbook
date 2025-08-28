/**
 * 예 16-15. console.assert 사용
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

function updateUser(user) {
  // user id가 null이면 에러를 기록한다.
  console.assert(user.id !== null, 'user.id는 null이 아니어야 한다');

  // 사용자 업데이트
  return fetch(`/api/users/${user.id}`, {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
