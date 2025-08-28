/**
 * 예 8-4. 물결 애니메이션 실행
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

button.addEventListener('click', async event => {
  // 물결 표현을 위한 임시 엘리먼트를 만들고, 클래스를 설정한 다음,
  // 버튼에 추가한다.
  const ripple = document.createElement('div');
  ripple.className = 'ripple';

  // 버튼의 너비와 높이를 구해서 물결의 크기로 사용한다.
  const rippleSize = Math.max(button.offsetWidth, button.offsetHeight);
  ripple.style.width = `${rippleSize}px`;
  ripple.style.height = `${rippleSize}px`;

  // 물결 엘리먼트의 중심을 클릭 위치로 설정한다.
  ripple.style.top = `${event.offsetY - (rippleSize / 2)}px`;
  ripple.style.left = `${event.offsetX - (rippleSize / 2)}px`;

  button.appendChild(ripple);

  // 물결 애니메이션을 실행하고 완료될 때까지 기다린다.
  await ripple.animate([
    { transform: 'scale(0)', opacity: 0.5 },
    { transform: 'scale(2.5)', opacity: 0 }
  ], {
    // 500밀리초 동안 애니메이션 실행한다.
    duration: 500,
    // ease-in 이징 함수를 사용한다.
    easing: 'ease-in'
  }).finished;

  // 모두 끝났으므로 물결 엘리먼트를 제거한다.
  ripple.remove();
});
