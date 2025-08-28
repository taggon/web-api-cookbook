/**
 * 예 7-4. 폼 값 배열 다루기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

/**
 * JSON 형태로 전송할 수 있도록 폼의 데이터를 객체로 변환한다.
 * @param form 폼 엘리먼트
 * @returns 매핑된 모든 키와 값이 포함된 객체
 */
function toObject(form) {
  const data = new FormData(form);
  const body = {};

  for (const key of data.keys()) {
    // 주어진 키에 해당하는 모든 값을 배열로 가져온다.
    const values = data.getAll(key);

    // 배열에 원소가 하나 밖에 없으면 해당 원소를 그대로 사용한다.
    if (values.length === 1) {
      body[key] = values[0];
    } else {
      // 그 외에는 배열로 설정한다.
      body[key] = values;
    }
  }

  return body;
}
