/**
 * 예 11-1. 날짜 포맷하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const formatter = new Intl.DateTimeFormat(navigator.language, { dateStyle: 'long' });
const formattedDate = formatter.format(new Date());
