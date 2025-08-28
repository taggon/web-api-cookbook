/**
 * 예 3-17. 패턴을 사용한 URL 테스트
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const profilePattern = new URLPattern({ pathname: '/api/users/:userId/profile' });

// 경로만 있는 문자열에는 일치하지 않으므로 반드시 전체 URL을 전달해야 한다.
console.log(profilePattern.test('/api/users/123/profile')); // false

// pathname이 패턴에 일치하므로 일치하는 것으로 확인된다.
console.log(profilePattern.test('https://example.com/api/users/123/profile')); // true

// URL 객체에도 사용할 수 있다.
console.log(profilePattern.test(new URL('https://example.com/api/users/123/profile'))); // true

// pathname이 정확하게 일치하지 않으므로 일치하지 않는 것으로 확인된다.
console.log(profilePattern.test('https://example.com/v1/api/users/123/profile')); // false
