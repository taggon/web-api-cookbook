/**
 * 예 5-4. 객체 저장소를 생성할 때 인덱스 정의하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

/**
 * 데이터베이스를 열고, 필요한 경우 객체 저장소를 생성한다.
 * 데이터베이스가 준비되면 onSuccess가 호출되고 데이터베이스 객체가 인수로 전달된다.
 * @param onSuccess 데이터베이스가 준비될 때 실행될 콜백 함수
 */
function openDatabase(onSuccess) {
  const request = indexedDB.open('employees');

  request.addEventListener('upgradeneeded', () => {
    const db = request.result;

    // 새 직원 객체에는 자동으로 생성된 'id' 프로퍼티가 키로 사용된다.
    const employeesStore = db.createObjectStore('employees', {
      keyPath: 'id',
      autoIncrement: true,
    });

    // 'department' 프로퍼티에 대해 'department' 인덱스를 생성한다.
    employeesStore.createIndex('department', 'department');
  });

  request.addEventListener('success', () => {
    onSuccess(request.result);
  });
}
