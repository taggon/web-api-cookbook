/**
 * 예 8-6. 애니메이션과 함께 엘리먼트 표시하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

/**
 * SDOM에 막 추가된 엘리먼트를 페이드인 애니메이션과 함께 보여준다.
 * @param element 보여줄 엘리먼트
 */
function showElement(element) {
  document.body.appendChild(element);
  element.animate([
    { opacity: 0 },
    { opacity: 1 }
  ], {
    // 250밀리초짜리 애니메이션
    duration: 250
  });
}
