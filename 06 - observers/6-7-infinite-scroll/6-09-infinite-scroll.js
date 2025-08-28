/**
 * 예 6-9. IntersectionObserver를 사용한 무한 스크롤
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

/**
 * IntersectionObserver를 사용해 placeholder 엘리먼트를 감시한다.
 * placeholder가 화면 안으로 들어오면, 추가 데이터를 읽어 들인다.
 *
 * @param placeholder '더 불러오기' 플레이스홀더 엘리먼트
 * @param loadMore 추가 데이터를 불러오는 함수
 */
function observeForInfiniteScroll(placeholder, loadMore) {
  const observer = new IntersectionObserver(entries => {
    // placeholder가 화면 안으로 들어왔다는 것은, 사용자가
    // 목록의 끝까지 스크롤했다는 뜻이다.
    // 이제 추가 데이터를 불러올 때이다.
    if (entries[0].isIntersecting) {
      loadMore();
    }
  });

  observer.observe(placeholder);
}
