/**
 * 예 3-4. 쿼리 파라미터를 제거하는 올바르지 않은 방법
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const url = new URL('https://example.com/api/users?user=sysadmin&q=user');

url.search = null;
console.log(url.toString()); // https://example.com/api/users?null
