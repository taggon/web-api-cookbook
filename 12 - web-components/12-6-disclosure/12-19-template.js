/**
 * 예 12-19. 더보기 컴포넌트 템플릿
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const template = document.createElement('template');
template.innerHTML = `
  <div>
    <button type="button" class="toggle-button">
      <slot name="title"></slot>
    </button>
    <div class="content">
      <slot></slot>
    </div>
  </div>
`;
