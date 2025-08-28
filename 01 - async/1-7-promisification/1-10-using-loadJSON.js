/**
 * 예 1-10. loadJSON 헬퍼 함수 사용
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 *
 * 예 1-8에서 작성한 loadJSON 헬퍼 함수의 사용법을 보여준다.
 */

// .then 사용
loadJSON('/api/users/1').then(user => {
  console.log('사용자 정보:', user);
})

// await 사용
const user = await loadJSON('/api/users/1');
console.log('사용자 정보:', user);
