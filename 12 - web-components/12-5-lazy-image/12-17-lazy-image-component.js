/**
 * 예 12-17. LazyImage 컴포넌트
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

class LazyImage extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });
    this.image = document.createElement('img');
    shadowRoot.appendChild(this.image);
  }

  connectedCallback() {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        console.log('이미지 로딩 중');
        this.image.src = this.getAttribute('src');
        observer.disconnect();
      }
    });

    observer.observe(this);
  }
}

customElements.define('lazy-image', LazyImage);
