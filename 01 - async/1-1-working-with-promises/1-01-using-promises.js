/**
 * 예 1-1. Promise 기반 API 사용
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

// 어떤 함수가 Promise를 반환하는 getUsers를 호출했다고 가정한다.
getUsers()
  .then(
    // 이 함수는 사용자 목록을 읽어 들였을 때 호출된다.
    userList => {
      console.log('사용자 목록:');
      userList.forEach(user => {
        console.log(user.name);
      });
    }
  ).catch(error => {
    console.error('사용자 목록을 불러오지 못했습니다:', error);
  });
