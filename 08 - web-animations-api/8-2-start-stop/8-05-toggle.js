/**
 * 예 8-5. 애니메이션 재생 상태 토글
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

/**
 * 주어진 애니메이션의 재생 상태를 토글한다.
 * 애니메이션이 실행 중이라면 중지하고,
 * 중지된 상태라면 이어서 재생한다.
 */
function toggleAnimation(animation) {
  if (animation.playState === 'running') {
    animation.pause();
  } else {
    animation.play();
  }
}
