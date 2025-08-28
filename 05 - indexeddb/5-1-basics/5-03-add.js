/**
 * 예 5-3. 연락처 추가
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

/**
 * 새 연락처를 데이터베이스에 추가한 후, 테이블을 다시 렌더링한다.
 * @param contactsDb IndexedDB 데이터베이스
 * @param contact 추가할 새 연락처 객체
 * @param onSuccess 연락처가 추가된 후 실행할 콜백 함수
 */
function addContact(contactsDb, contact, onSuccess) {
  const request = contactsDb
    .transaction(['contacts'], 'readwrite')
    .objectStore('contacts')
    .add(contact);

  request.addEventListener('success', () => {
    console.log('새 연락처 추가:', contact);
    onSuccess();
  });

  request.addEventListener('error', () => {
    console.error('연락처 추가 중 발생한 오류:', request.error);
  });
}
