/**
 * 예 8-9. 호버 효과 제거
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

button.addEventListener('mouseout', async () => {
  if (animation) {
    // 애니메이션이 이미 실행 중이므로 새로 시작하지 말고,
    // 기존 애니메이션을 역방향으로 재생한다.
    animation.reverse();
  } else {
    // 진행 중인 애니메이션이 없으므로 새로운 애니메이션을 시작한다.
    animation = button.animate([
      { transform: 'scale(2)' },
      { transform: 'scale(1)' }
    ], { duration: 1000, fill: 'both' });

    // 애니메이션이 완료되면 현재 애니메이션 변수를 null로 설정한다.
    await animation.finished;
    animation = null;
  }
});
