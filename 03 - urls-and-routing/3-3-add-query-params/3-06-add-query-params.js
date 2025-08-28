/**
 * 예 3-6. 새로운 쿼리 파라미터 추가
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const url = new URL('https://example.com/api/search?objectType=user');

url.searchParams.append('userRole', 'admin');
url.searchParams.append('userRole', 'user');
url.searchParams.append('name', 'luke');

// 출력 "https://example.com/api/search?objectType=user&userRole=admin&userRole=user&name=luke"
console.log(url.toString());
