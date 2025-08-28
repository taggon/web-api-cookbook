/**
 * 예 8-10. 함수 하나로 구현한 애니메이션
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

async function animate(element, direction) {
  if (animation) {
    animation.reverse();
  } else {
    animation = element.animate([
      { transform: 'scale(1)' },
      { transform: 'scale(2)' }
    ], {
      // 1초짜리 애니메이션
      duration: 1000,
      // 애니메이션이 완료된 후 끝 스타일을 적용한다.
      fill: 'forwards',
      // direction 값에 따라 애니메이션을 정방향(원래 방향)
      // 또는 반대 방향(역방향)으로 실행한다.
      direction
    });

    // 애니메이션이 완료되면, 해당 변수를 null로 설정하여
    // 진행 중인 애니메이션이 없음을 알린다.
    await animation.finished;
    animation = null;
  }
}

element.addEventListener('mouseover', () => {
  animate(element, 'normal');
});

element.addEventListener('mouseout', () => {
  animate(element, 'reverse');
});
