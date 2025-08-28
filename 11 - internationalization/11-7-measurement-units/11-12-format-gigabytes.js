/**
 * 예 11-12. 기가바이트 포맷하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const format = new Intl.NumberFormat(navigator.language, {
  style: 'unit',
  unit: 'gigabyte'
});

// "1,000GB" 출력
console.log(format.format(1000));
