/**
 * 예 13-16. 팝오버 표시 버튼 코드
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const trigger = document.querySelector('#trigger');
const popover = document.querySelector('#greeting');
trigger.addEventListener('click', () => {
  popover.togglePopover();
});
