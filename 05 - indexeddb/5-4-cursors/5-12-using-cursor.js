/**
 * 예 5-12. 커서를 사용한 문자열 값 검색
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

/**
 * 이름으로 직원을 검색한다.
 *
 * @param name 직원 이름 검색 문자열
 * @param onSuccess 해당하는 직원 목록을 받을 콜백
 */
function searchEmployees(name, onSuccess) {
  // 검색 문자열을 이름에 포함하는 모든 직원을 저장할 배열
  const results = [];

  const query = name.toLowerCase();

  const request = employeeDb
    .transaction(['employees'], 'readonly')
    .objectStore('employees')
    .openCursor();

  // 커서 요청에서는 발견한 객체마다 'success' 이벤트가 발생한다.
  request.addEventListener('success', () => {
    const cursor = request.result;
    if (cursor) {
      const name = `${cursor.value.firstName} ${cursor.value.lastName}`.toLowerCase();
      // 일치하는 직원은 결과 배열에 추가한다.
      if (name.includes(query)) {
        results.push(cursor.value);
      }

      // 다음 객체로 이동한다.
      cursor.continue();
    } else {
      onSuccess(results);
    }
  });

  request.addEventListener('error', () => {
    console.error('직원을 검색하는 중 오류 발생:', request.error);
  });
}
