/**
 * 예 3-3. URL의 쿼리 파라미터 제거
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

/**
 * 입력된 URL에서 모든 파라미터를 제거한다.
 *
 * @param inputUrl 쿼리 파라미터를 포함하는 URL 문자열
 * @returns 모든 쿼리 파라미터가 제거된 새로운 URL 문자열
 */
function removeAllQueryParameters(inputUrl) {
  const url = new URL(inputUrl);
  url.search = '';
  return url.toString();
}

// 반환 결과는 'https://example.com/api/users'
removeAllQueryParameters('https://example.com/api/users?user=sysadmin&q=user');
