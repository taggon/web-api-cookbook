/**
 * 예 12-15. 컴포넌트 구현
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

class ProfileCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('profile-card', ProfileCard);
