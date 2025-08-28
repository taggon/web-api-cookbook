/**
 * 예 3-10. set을 사용한 쿼리 파라미터 추가
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const url = new URL('https://example.com/api/search?objectType=user');

url.searchParams.set('userRole', 'admin');
url.searchParams.set('userRole', 'user');
url.searchParams.set('name', 'luke');
