/**
 * 예 11-9. 숫자 범위 포맷하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

// en-US 로케일에서는 '1,000-5,000'을 출력한다.
console.log(
  new Intl.NumberFormat().formatRange(1000, 5000)
);
