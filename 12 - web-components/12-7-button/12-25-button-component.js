/**
 * 예 12-25. 버튼 컴포넌트
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

class StyledButton extends HTMLElement {
  static observedAttributes = ['variant', 'type'];

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.button = this.shadowRoot.querySelector('button');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'variant') {
      this.button.className = newValue;
    } else if (name === 'type') {
      this.button.type = newValue;
    }
  }
}

customElements.define('styled-button', StyledButton);
