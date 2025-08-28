/**
 * 예 11-2. 날짜와 시간 포맷하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const formatter = new Intl.DateTimeFormat(navigator.language, { dateStyle: 'long', timeStyle: 'long' });
const formattedDateAndTime = formatter.format(new Date());
