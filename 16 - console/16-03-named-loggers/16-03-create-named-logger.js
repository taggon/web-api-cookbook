/**
 * 예 16-3. 이름이 정해진 로그 함수 작성
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

function createLogger(name, color) {
  return console.log.bind(console, `%c${name}`, `color: ${color};`);
}
