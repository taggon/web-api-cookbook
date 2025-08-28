/**
 * 예 5-16. Promise가 적용된 데이터베이스 사용
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

async function loadAndPrintContacts() {
  try {
    const db = await openDatabase();
    const contacts = await getContacts(db);
    console.log('가져온 연락처:', contacts);
  } catch (error) {
    console.error('오류:', error);
  }
}
