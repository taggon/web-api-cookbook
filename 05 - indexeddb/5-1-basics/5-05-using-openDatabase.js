/**
 * 예 5-5. openDatabase 함수 사용하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

let contactsDb;

// 데이터베이스를 열고 초기 연락처 목록을 렌더링한다.
// 성공시 실행될 콜백에서 나중에 사용할 수 있도록 새로운 데이터베이스를
// contactsDb로 설정한 다음, 연락처를 읽고 렌더링한다.
openDatabase(db => {
  contactsDb = db;
  renderContacts(contactsDb);
});
