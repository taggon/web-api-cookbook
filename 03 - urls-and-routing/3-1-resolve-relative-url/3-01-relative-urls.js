/**
 * 예 3-1. 상대적 URL 작성하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

/**
 * 주어진 상대 경로와 기준 URL을 사용해 전체의 절대적 URL을 구한다.
 * @param relativePath URL의 상대 경로
 * @param baseUrl 기준으로 사용할 올바른 URL
 */
function resolveUrl(relativePath, baseUrl) {
  return new URL(relativePath, baseUrl).href;
}

// https://example.com/api/users
console.log(resolveUrl('/api/users', 'https://example.com'));

// https://example.com/api/v1/users
console.log(resolveUrl('/api/v1/users', 'https://example.com'));

// https://example.com/api/v1/users
// /api/v1/users 맨 앞에 있는 슬래시 때문에 /api/v2 부분이 무시됩니다.
console.log(resolveUrl('/api/v1/users', 'https://example.com/api/v2'));

// https://example.com/api/v1/users
console.log(resolveUrl('../v1/users/', 'https://example.com/api/v2'));

// https://example.com/api/v1/users
console.log(resolveUrl('users', 'https://example.com/api/v1/groups'));
