/**
 * 예 6-5. 자식 엘리먼트가 변경될 때 대상 엘리먼트의 높이 변화를 애니메이션으로 표현하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

/**
 * 전달된 엘리먼트의 자식 노드를 감시한다. 자식 노드의 변경으로 인해
 * 높이가 달라지면 높이 변화를 애니메이션으로 표현한다.
 * @param element 변화를 감시할 엘리먼트
 */
function animateHeightChanges(element) {
  // 'height: auto'로 설정된 엘리먼트에는 애니메이션을 적용할 수 없으므로
  // 여기서 명시적인 높이를 설정해야 한다. details는 미리 정의되었다고 가정한다.
  element.style.height = `${details.offsetHeight}px`;

  // 애니메이션 트랜지션에 필요한 몇 가지 CSS 프로퍼티를 설정한다.
  element.style.transition = 'height 200ms';
  element.style.overflow = 'hidden';

  /**
   * 이 옵저버는 대상의 자식 엘리먼트가 변경될 때 이벤트를 발생시킨다.
   * 새로운 높이를 측정하고 requestAnimationFrame을 사용해 높이를 업데이트한다.
   * 높이 변화가 애니메이션으로 표현된다.
   */
  const observer = new MutationObserver(entries => {
    // entries는 항상 배열이다. 이 배열에 여러 엘리먼트가 포함되는 경우도 있지만,
    // 이 예시에서 필요한 엘리먼트는 첫 번째 엘리먼트 뿐이다.
    const element = entries[0].target;

    // 콘텐츠가 변경되었으므로 높이도 달라진다.
    // 명시적인 높이를 측정하려면 몇 가지 단계를 거쳐야 한다.

    // (1) 애니메이션의 시작 값으로 사용할 현재 높이를 저장해 둔다.
    const currentHeightValue = element.style.height;

    // (2) 높이를 'auto'로 설정하고 offsetHeight 프로퍼티를 읽는다.
    // 이 값은 새로운 높이로 사용될 것이다.
    element.style.height = 'auto';
    const newHeight = element.offsetHeight;

    // (3) 애니메이션 준비를 위해 현재 높이로 다시 돌려 놓는다.
    element.style.height = currentHeightValue;

    // 다음 애니메이션 프레임에 높이를 업데이트한다.
    // 애니메이션 트랜지션이 시작될 것이다.
    requestAnimationFrame(() => {
      element.style.height = `${newHeight}px`;
    });
  });

  // 엘리먼트의 변경 사항을 감시한다.
  observer.observe(element, { childList: true });
}
