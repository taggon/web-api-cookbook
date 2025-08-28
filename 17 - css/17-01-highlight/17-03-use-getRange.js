/**
 * 예 17-3. getRange 함수 사용
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const node = document.querySelector('#text');
const range = getRange(node.firstChild, 'highlight some of the text');
