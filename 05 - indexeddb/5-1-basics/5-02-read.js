/**
 * 예 5-2. 연락처 읽기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

/**
 * 데이터베이스에서 연락처를 읽고 테이블에 렌더링한다.
 * @param contactsDb IndexedDB 데이터베이스
 * @param onSuccess 연락처를 읽어 들였을 때 실행할 콜백 함수
 */
function getContacts(contactsDb, onSuccess) {
  const request = contactsDb
    .transaction(['contacts'], 'readonly')
    .objectStore('contacts')
    .getAll();


  // 데이터를 읽어 들이면 request 객체에 'success' 이벤트가 발생한다.
  request.addEventListener('success', () => {
    console.log('가져온 연락처:', request.result);
    onSuccess(request.result);
  });

  request.addEventListener('error', () => {
    console.error('연락처를 읽는 중 발생한 오류:', request.error);
  });
}
