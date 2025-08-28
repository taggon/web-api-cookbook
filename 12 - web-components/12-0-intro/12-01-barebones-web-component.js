/**
 * 예 12-1. 최소 웹 컴포넌트
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

class MyComponent extends HTMLElement {
  connectedCallback() {
    this.textContent = 'MyComponent가 왔습니다!';
  }
}
