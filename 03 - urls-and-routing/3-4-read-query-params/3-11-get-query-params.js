/**
 * 예 3-11. 쿼리 파라미터 읽기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

/**
 * URL을 인수로 받아서 모든 쿼리 파라미터를 배열로 반환한다.
 *
 * @param inputUrl URL 문자열
 * @returns key와 value라는 프로퍼티가 있는 객체의 배열
 */
function getQueryParameters(inputUrl) {
  // 같은 키에 해당하는 파라미터가 여러 개 있을 수도 있고,
  // 모든 파라미터를 나열하고 싶으므로 객체 대신 배열을 사용한다.
  const result = [];

  const url = new URL(inputUrl);

  // 각 키와 값을 결과 배열에 추가한다.
  url.searchParams.forEach((value, key) => {
    result.push({ key, value });
  });

  // 결과!
  return result;
}
