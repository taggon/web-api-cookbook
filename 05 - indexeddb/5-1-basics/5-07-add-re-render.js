/**
 * 예 5-7. 연락처를 추가하고 렌더링하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const newContact = { name: 'Connie Myers', email: 'cmyers@example.com' };
addContact(contactsDb, newContact, () => {
  // 연락처를 추가했으니, 이제 목록을 다시 읽고 렌더링한다.
  getContacts(contactsDb, contacts => {
    renderContacts(contacts);
  })
});
