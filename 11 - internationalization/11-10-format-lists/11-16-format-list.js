/**
 * 예 11-16. 사용자 객체 목록의 형식 설정하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

function getUserListString(users, locale = 'en-US') {
  // ListFormat의 로케일은 설정할 수 있다.
  const listFormat = new Intl.ListFormat(locale);
  return listFormat.format(users.map(user => user.username));
}
