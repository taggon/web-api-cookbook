/**
 * 예 11-3. 포맷된 날짜의 각 구성 요소 구하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const format = new Intl.DateTimeFormat(navigator.language, { dateStyle: 'short' });
const parts = format.formatToParts(new Date());
