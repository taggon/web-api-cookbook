/**
 * 예 16-4. 이름이 정해진 로그 함수 사용
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const rendererLogger = createLogger('renderer', 'blue');
const dataLogger = createLogger('data', 'green');

// 출력 메시지는 파란색 "renderer"로 시작한다.
rendererLogger('Rendering component');

// 출력 메시지는 녹색 "data"로 시작한다.
dataLogger('Fetching data');
