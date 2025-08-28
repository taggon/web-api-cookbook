/**
 * 예 5-15. Promise를 활용하여 스토어에서 객체 가져오기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

/**
 * 데이터베이스에서 연락처를 읽는다.
 * @params contactsDb 데이터베이스
 * @returns 연락처와 함께 해결되는 Promise. 오류가 발생하면 거부된다.
 */
function getContacts(contactsDb) {
  return new Promise((resolve, reject) => {
    const request = contactsDb
      .transaction(['contacts'], 'readonly')
      .objectStore('contacts')
      .getAll();

    request.addEventListener('success', () => {
      console.log('가져온 연락처:', request.result);
      resolve(request.result);
    });

    request.addEventListener('error', () => {
      console.error('연락처를 읽는 중 발생한 오류:', request.error);
      reject(request.error);
    });
  });
}
