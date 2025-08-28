/**
 * 예 8-14.  종류의 트랜스폼 애니메이션 조합
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */
// 첫 번째 애니메이션은 X 축을 기준으로 엘리먼트를 앞뒤로 이동한다.
element.animate([
  { transform: 'translateX(0)' },
  { transform: 'translateX(250px)' }
], {
  // 5초 동안 애니메이션을 실행한다.
  duration: 5000,
  // 정방향으로 실행한 다음, 역방향으로 실행한다.
  direction: 'alternate',
  // 애니메이션을 무한 반복한다.
  iterations: Infinity,
  // 느리게 시작해서 빨라졌다가 다시 느리게 끝난다.
  easing: 'ease-in-out'
});

// 두 번째 애니메이션은 엘리먼트를 회전시킨다.
element.animate([
  { transform: 'rotate(0deg)' },
  { transform: 'rotate(360deg)' }
], {
  // 3초 동안 애니메이션을 실행한다.
  duration: 3000,
  // 애니메이션을 무한 반복한다.
  iterations: Infinity,
  // 실행 중인 다른 애니메이션과 효과를 조합한다.
  composite: 'add'
});
