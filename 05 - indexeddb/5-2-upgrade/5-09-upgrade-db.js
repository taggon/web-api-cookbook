/**
 * 예 5-9. 데이터베이스 업그레이드
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

// 이제 todoList 데이터베이스의 버전은 2이다.
const request = indexedDB.open('todoList', 2);

// 사용자 데이터베이스의 버전이 아직 1이라면 'upgradeneeded' 이벤트가 발생하므로,
// 이를 통해 새 객체 저장소를 추가할 수 있다.
request.addEventListener('upgradeneeded', event => {
  const db = event.target.result;

  // 이 이벤트는 데이터베이스가 없을 때도 발생하기 때문에, 이 경우도 처리해야 한다.
  // 데이터베이스가 없을 때는 todos 객체 저장소를 추가한다.
  // oldVersion 프로퍼티는 사용자 데이터베이스의 현재 버전을 알려준다.
  // 데이터베이스를 막 새로 생성할 때는 oldVersion의 값이 0이 된다.
  if (event.oldVersion < 1) {
    db.createObjectStore('todos', {
      keyPath: 'id'
    });
  }

  // 데이터베이스를 아직 2 버전으로 업그레이드하지 않았다면,
  // 새 객체 저장소를 생성한다.
  if (event.oldVersion < 2) {
    db.createObjectStore('people', {
      keyPath: 'id'
    });
  }
});

request.addEventListener('success', () => {
  // 데이터베이스를 사용할 준비가 되었다.
});

// 오류가 발생하면 기록한다. 오류 정보 객체는 요청의 'error' 프로퍼티에 저장된다.
request.addEventListener('error', () => {
  console.error('Error opening database:', request.error);
});
