/**
 * 예 5-14. Promise를 사용한 데이터베이스 생성
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

/**
 * 데이터베이스를 연다. 필요한 경우에는 새 객체 저장소를 작성한다.
 * @returns 데이터베이스로 해결되는 Promise. 오류가 발생하면 거부된다.
 */
function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('contacts-promise');

    // 필요한 경우 객체 저장소를 생성한다.
    request.addEventListener('upgradeneeded', () => {
      const db = request.result;
      db.createObjectStore('contacts', {
        keyPath: 'id',
        autoIncrement: true
      });
    });

    request.addEventListener('success', () => resolve(request.result));
    request.addEventListener('error', () => reject(request.error));
  });
}
