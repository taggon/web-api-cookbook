/**
 * 예 3-7. 값없이 append 호출하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const url = new URL('https://example.com/api/search?objectType=user');

// 아래와 같은 오류가 발생한다(해설은 역주 참고).
// TypeError: Failed to execute 'append' on 'URLSearchParams':
// 2 arguments required, but only 1 present.
url.searchParams.append('name');
