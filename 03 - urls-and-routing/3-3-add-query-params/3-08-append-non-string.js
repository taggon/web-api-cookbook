/**
 * 예 3-8. 문자열이 아닌 파라미터 추가
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const url = new URL('https://example.com/api/search?objectType=user');

// 최종 결과 URL의 쿼리 문자열은 다음과 같다.
//  ?objectType=user&name=null&role=undefined
url.searchParams.append('name', null);
url.searchParams.append('role', undefined);
