/**
 * 예 1-9. XMLHttpRequest API의 프라미스화
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 *
 * 이벤트 기반의 XMLHttpRequest API를 Promise로 감싼다.
 */

/**
 * 특정 URL로 GET 요청을 전송하고,
 * 객체로 파싱된 JSON 콘텐츠를 담은 Promise를 반환한다.
 * 에러가 발생하거나 응답이 올바르지 않은 JSON인 경우에는
 * Promise를 거부한다.
 *
 * @param url 요청할 URL
 * @returns 응답을 해결하는 Promise
 */
function loadJSON(url) {
  // 새로운 Promise 객체를 생성하고,
  // 생성자 내부에서 비동기 작업을 수행한다.
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    // 요청이 성공한 경우, JSON 응답을 파싱하고
    // 결과 객체로 Promise를 해결한다.
    request.addEventListener('load', event => {
      // 응답이 올바르지 않은 JSON인 경우를 대비하여
      // JSON.parse 호출을 try/catch 블럭으로 감싼다.
      try {
        resolve(JSON.parse(event.target.responseText));
      } catch (error) {
        // 응답을 파싱하는 도중 에러가 발생한 경우
        // 해당 에러 정보와 함께 Promise를 거부한다.
        reject(error);
      }
    });

    // 요청이 실패하면 발생한 에러 정보와 함께
    // Promise를 거부한다.
    request.addEventListener('error', error => {
      reject(error);
    });

    // 대상 URL을 설정하고 요청을 전송한다.
    request.open('GET', url);
    request.send();
  });
}
