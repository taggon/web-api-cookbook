/**
 * 예 3-19. 사용자 아이디 추출
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const profilePattern = new URLPattern({ pathname: '/api/users/:userId/profile' });

const match = profilePattern.exec('https://example.com/api/users/123/profile');
console.log(match.pathname.input); // '/api/users/123/profile'
console.log(match.pathname.groups.userId); // '123'
