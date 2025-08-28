/**
 * 예 11-7. 기본 로케일에서 숫자 포맷하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

// ko-KR 로케일에서는 '5,200.55'를 출력한다.
console.log(
  new Intl.NumberFormat().format(5200.55)
);
