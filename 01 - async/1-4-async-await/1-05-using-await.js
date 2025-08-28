/**
 * 예 1-5. await 키워드 사용
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 *
 * Promise를 반환하는 getUsers 함수가 있다고 가정한다.
 */

// 함수 내부에서 await을 사용하려면
// 반드시 async 키워드와 함께 함수를 선언해야 한다.
async function listUsers() {
  try {
    // getUsers().then(...)과 같다.
    const userList = await getUsers();
    console.log('사용자 목록:');
    userList.forEach(user => {
      console.log(user.name);
    });
  } catch (error) { // .catch(...)와 같다.
    console.error('사용자 목록을 불러오지 못했습니다:', error);
  }
}
