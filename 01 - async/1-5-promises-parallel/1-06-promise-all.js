/**
 * 예 1-6. Promise.all을 사용한 여러 사용자 정보 읽기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 *
 * Promise를 반환하는 getUsers 함수가 있다고 가정한다.
 */

// 사용자 3명의 정보를 한꺼번에 읽어 들이기
Promise.all([
  getUser(1),
  getUser(2),
  getUser(3)
]).then(users => {
  // users는 병렬로 실행된 개별 `getUser`에서 반환하는
  // 사용자 정보를 배열로 묶은 것
}).catch(error => {
  // 전달받은 Promise 중 하나라도 거부된 경우
  console.error('일부 사용자 정보를 불러오지 못했습니다:', error);
});
