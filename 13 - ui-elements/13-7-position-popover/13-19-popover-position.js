/**
 * 예 13-19. 팝오버의 위치 설정
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const popover = document.querySelector('.popover');
const trigger = document.querySelector('.trigger');

popover.addEventListener('toggle', event => {
  // 팝오버가 열려있으면 위치를 업데이트한다.
  if (event.newState === 'open') {
    // 표시 버튼의 위치를 찾는다.
    const triggerRect = trigger.getBoundingClientRect();

    // 팝오버는 뷰포트에 상대적인 위치로 설정되므로,
    // 스크롤 위치도 계산에 포함해야 한다.
    popover.style.top = `${triggerRect.bottom + window.scrollY}px`;
    popover.style.left = `${triggerRect.left}px`;
  }
});
