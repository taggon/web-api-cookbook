/**
 * 예 3-5. 쿼리 파라미터 한 개 제거하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

/**
 * 입력된 URL에서 한 개의 파라미터를 제거한다.
 *
 * @param inputUrl 쿼리 파라미터를 포함하는 URL 문자열
 * @param paramName 제거할 파라미터의 이름
 * @returns 전달한 쿼리 파라미터가 제거된 새로운 URL 문자열
 */
function removeQueryParameter(inputUrl, paramName) {
  console.log({ inputUrl, paramName });
  const url = new URL(inputUrl);
  url.searchParams.delete(paramName);
  return url.toString();
}

console.log(
  removeQueryParameter(
    'https://example.com/api/users?user=sysadmin&q=user',
    'q'
  )
); // https://example.com/api/users?user=sysadmin
