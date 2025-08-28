/**
 * 예 13-22. 툴팁 표시하고 숨기기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const button = document.querySelector('#trigger');
const tooltip = document.querySelector('#tooltip');

function showTooltip() {
  // 표시 버튼의 위치를 찾는다.
  const triggerRect = trigger.getBoundingClientRect();

  // 팝오버는 뷰포트에 상대적인 위치로 설정되므로,
  // 스크롤 위치도 계산에 포함해야 한다.
  tooltip.style.top = `${triggerRect.bottom + window.scrollY}px`;
  tooltip.style.left = `${triggerRect.left}px`;

  tooltip.showPopover();
}

// 마우스 이벤트에 반응하여 툴팁을 보여주거나 숨긴다.
button.addEventListener('mouseover', () => {
  showTooltip();
});

button.addEventListener('mouseout', () => {
  tooltip.hidePopover();
});

// 키보드 접근성을 위해 focus 이벤트에도 대응한다.
button.addEventListener('focus', () => {
  showTooltip();
});

button.addEventListener('blur', () => {
  tooltip.hidePopover();
});
