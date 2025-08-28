/**
 * 예 5-1. 데이터베이스 열기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

/**
 * 데이터베이스를 열고, 필요한 경우 객체 저장소를 생성한다.
 * 이 동작은 비동기로 이루어지므로
 * 콜백 함수와 onSuccess를 인수로 받는다.
 * 데이터베이스가 준비되면 onSuccess가 호출되고 데이터베이스 객체가 인수로 전달된다.
 * @param onSuccess 데이터베이스가 준비될 때 실행될 콜백 함수
 */
function openDatabase(onSuccess) {
  const request = indexedDB.open('contacts');

  // 필요한 경우 객체 저장소를 생성한다.
  request.addEventListener('upgradeneeded', () => {
    const db = request.result;

    // 연락처 객체의 'id' 프로퍼티를 키로 사용한다.
    // 새로운 연락처 객체를 추가할 때 'id'를 추가하지 않아도 데이터베이스가
    // 자동으로 증가하는 값을 'id'로 설정한다.
    db.createObjectStore('contacts', {
      keyPath: 'id',
      autoIncrement: true
    });
  });

  // 데이터베이스를 사용할 준비가 되면 'success' 이벤트가 발생한다.
  request.addEventListener('success', () => {
    const db = request.result;

    // 주어진 콜백을 데이터베이스와 함께 호출한다.
    onSuccess(db);
  });

  // 오류는 빠짐없이 다루자!
  request.addEventListener('error', () => {
    console.error('데이터베이스를 여는 중 발생한 오류:', request.error);
  });
}
