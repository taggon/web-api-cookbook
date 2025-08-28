/**
 * 예 8-7. 애니메이션과 함께 엘리먼트 제거하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

/**
 * 페이드아웃 애니메이션을 실행한 후에 엘리먼트를 DOM에서 제거한다.
 * @param element 제거할 엘리먼트
 */
async function removeElement(element) {
  // 먼저, 애니메이션을 실행하여 엘리먼트를 보이지 않게 만든다.
  // 결과로 반환되는 애니메이션 객체의 finished 프로퍼티는 Promise 객체이다.
  await element.animate([
    { opacity: 1 },
    { opacity: 0 }
  ], { duration: 250 }).finished;

  // 애니메이션이 끝나면 DOM에서 엘리먼트를 제거한다.
  element.remove();
}
