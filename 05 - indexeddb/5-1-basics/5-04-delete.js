/**
 * 예 5-4. 연락처 삭제
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

/**
 * 연락처를 데이터베이스에서 제거한 후, 테이블을 다시 렌더링한다.
 * @param contactsDb IndexedDB 데이터베이스
 * @param contact 삭제할 연락처 객체
 * @param onSuccess 연락처를 삭제한 후 실행할 콜백 함수
 */
function deleteContact(contactsDb, contact, onSuccess) {
  const request = contactsDb
    .transaction(['contacts'], 'readwrite')
    .objectStore('contacts')
    .delete(contact.id);

  request.addEventListener('success', () => {
    console.log('연락처 삭제됨:', contact);
    onSuccess();
  });

  request.addEventListener('error', () => {
    console.error('연락처 삭제 중 발생한 오류:', request.error);
  });
}
