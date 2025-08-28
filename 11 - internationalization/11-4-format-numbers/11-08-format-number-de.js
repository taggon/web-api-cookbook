/**
 * 예 11-8. de-DE 로케일에서 숫자 포맷하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

// '5.200,55'를 출력한다.
console.log(
  new Intl.NumberFormat('de-DE').format(5200.55)
);
