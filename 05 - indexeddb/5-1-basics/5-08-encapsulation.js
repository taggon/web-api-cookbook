/**
 * 예 5-4. 데이터베이스 캡슐화
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const contactsDb = {
  open(onSuccess) {
    const request = indexedDB.open('contacts');

    request.addEventListener('upgradeneeded', () => {
      const db = request.result;
      db.createObjectStore('contacts', {
        keyPath: 'id',
        autoIncrement: true
      });
    });

    request.addEventListener('success', () => {
      this.db = request.result;
      onSuccess();
    });
  },

  getContacts(onSuccess) {
    const request = this.db
      .transaction(['contacts'], 'readonly')
      .objectStore('contacts')
      .getAll();

    request.addEventListener('success', () => {
      console.log('가져온 연락처:', request.result);
      onSuccess(request.result);
    });
  },

  // 필요한 다른 작업도 비슷하게 수행한다.
};
