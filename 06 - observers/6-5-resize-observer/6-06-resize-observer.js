/**
 * 예 6-6. 엘리먼트의 크기 변경에 따른 콘텐츠 업데이트
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

// 감시할 엘리먼트를 찾는다.
const container = document.querySelector('#resize-container');

// 엘리먼트 크기 변경을 감시할 ResizeObserver를 생성한다.
const observer = new ResizeObserver(entries => {
  // 감시를 시작할 때 바로 실행되므로 초기 텍스트를 설정할 수 있다.
  // 대체로 배열에는 원소가 한 개만 있다.
  // 첫 번째 엘리먼트가 우리가 감시하려는 대상이다.
  container.textContent = `현재 너비는 ${entries[0].contentRect.width}픽셀이다.`;
});

// 엘리먼트의 감시를 시작한다.
observer.observe(container);
