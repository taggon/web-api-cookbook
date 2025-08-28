/**
 * 예 6-4. 동영상을 자동으로 멈추고 재개하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const observer = new IntersectionObserver(entries => {
  if (!entries[0].isIntersecting) {
    video.pause();
  } else {
    video.play()
      .catch(error => {
        // 동영상을 자동 재생하려다가 권한 오류가 나는 경우,
        // 취급되지 않은 거부(unhandled rejection) 문제를 피하기 위함.
      });
  }
});
