/**
 * 예 12-20. 더보기 컴포넌트 구현
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

class Disclosure extends HTMLElement {
  // 'open' 속성의 변경을 감시한다.
  static observedAttributes = ['open'];

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.content = this.shadowRoot.querySelector('.content');
  }

  connectedCallback() {
    this.content.hidden = !this.hasAttribute('open');
    this.shadowRoot.querySelector('.toggle-button')
      .addEventListener('click', () => {
        if (this.hasAttribute('open')) {
          // 콘텐츠가 표시된 상태이다. 'open' 속성을 제거해 콘텐츠를 숨긴다.
          this.removeAttribute('open');
          this.content.hidden = true;
        } else {
          // 콘텐츠가 숨겨진 상태이다. 'open' 속성을 추가해 콘텐츠를 표시한다.
          this.setAttribute('open', '');
          this.content.hidden = false;
        }
      });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // 새 속성값에 따라 콘텐츠의 hidden 상태를 업데이트한다.
    if (newValue !== null) {
      this.content.hidden = false;
    } else {
      this.content.hidden = true;
    }
  }
}

// 엘리먼트 이름에는 하이픈이 포함되어야 한다.
customElements.define('x-disclosure', Disclosure);
