/**
 * 예 8-2. 웹 애니메이션 API를 사용한 페이드인 효과
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const element = document.querySelector('.some-element');
element.animate([
  { opacity: 0 },
  { opacity: 1 }
], { duration: 250 });
