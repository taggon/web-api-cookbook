/**
 * 예 5-6. 연락처를 읽고 렌더링하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

getContacts(contactsDb, contacts => {
  // 연락처를 모두 읽었으므로 이제 렌더링한다.
  renderContacts(contacts);
});
