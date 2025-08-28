/**
 * 예 3-18. 와일드카드를 포함한 패턴 사용
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const wildcardProfilePattern = new URLPattern({ pathname: '/*/api/users/:userId/profile' });

// URL의 /v1 부분이 와일드카드에 일치하는 것으로 간주되어 아래 URL도 패턴에 일치한다.
console.log(wildcardProfilePattern.test('https://example.com/v1/api/users/123/profile')); // true
