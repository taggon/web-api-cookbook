/**
 * 예 6-1. IntersectionObserver를 사용한 게으른 이미지 로딩
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

/**
 * 게으른 이미지 로딩을 위한 감시
 *
 * @param img 이미지 DOM 노드의 참조
 * @param url 로드할 이미지의 URL
 */
function lazyLoad(img, url) {
  const observer = new IntersectionObserver(entries => {
    // 이미지가 뷰포트에 들어오면 isIntersecting의 값이 true가 된다.
    // 이 시점에서 src의 URL를 설정하고 감시를 중단한다.
    if (entries[0].isIntersecting) {
      img.src = url;
      observer.disconnect();
    }
  });

  // 이미지 엘리먼트의 감시를 시작한다.
  observer.observe(img);
}
