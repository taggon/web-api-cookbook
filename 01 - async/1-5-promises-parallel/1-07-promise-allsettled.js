/**
 * 예 1-7. Promise.allSettled 사용
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 *
 * Promise를 반환하는 getUsers 함수가 있다고 가정한다.
 */

Promise.allSettled([
  getUser(1),
  getUser(2),
  getUser(3)
]).then(results => {
  results.forEach(result => {
    if (result.status === 'fulfilled') {
      console.log('- 사용자:', result.value.name);
    } else {
      console.log('- 에러:', result.reason);
    }
  });
});
// allSettled는 항상 이행되므로 catch가 필요 없다.
