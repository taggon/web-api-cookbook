/**
 * 예 5-11. Q부서 인덱스를 사용해 직원 조회하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

/**
 * 주어진 부서의 직원만 가져온다. 부서가 주어지지 않으면 모든 직원을 가져온다.
 *
 * @param 조회할 부서 이름
 * @param onSuccess 직원 목록을 읽어 들였을 때 실행할 콜백 함수
 */
function getEmployees(department, onSuccess) {
  const request = employeeDb
    .transaction(['employees'], 'readonly')
    .objectStore('employees')
    .index('department')
    .getAll(department);

  request.addEventListener('success', () => {
    console.log('가져온 직원 목록:', request.result);
    onSuccess(request.result);
  });

  request.addEventListener('error', () => {
    console.log('직원 목록을 읽는 중 발생한 오류:', request.error);
  });
}
