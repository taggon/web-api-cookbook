/**
 * 예 6-2. IntersectionObserver를 Promise로 감싸기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

/**
 * 전달된 엘리먼트가 처음 뷰포트 안에 들어왔을 때 해결되는 Promise를 반환한다.
 */
function waitForElement(element) {
  return new Promise(resolve => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        observer.disconnect();
        resolve();
      }
    });

    observer.observe(element);
  });
}
