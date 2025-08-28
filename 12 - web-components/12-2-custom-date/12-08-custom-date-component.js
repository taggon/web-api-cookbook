/**
 * 예 12-8. 커스텀 날짜 컴포넌트
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

class DateFormatter extends HTMLElement {
  // 여기에 나열된 속성의 값이 변경되면 브라우저가
  // attributeChangedCallback을 통해 컴포넌트에 속성 변경을 알린다.
  static observedAttributes = ['date'];

  constructor() {
    super();

    // 여기서 포맷 객체를 만들어서 날짜가 변경될 때마다 다시 만들지 않도록 한다.
    this.formatter = new Intl.DateTimeFormat(
      navigator.language,
      { dateStyle: 'full' }
    );
  }

  /**
   * 가능한 경우 'date' 속성의 현재 값으로 표현되는 날짜를 포맷한다.
   */
  formatDate() {
    if (this.hasAttribute('date')) {
      this.textContent = this.formatter.format(
        new Date(this.getAttribute('date'))
      );
    } else {
      // 날짜가 설정되어 있지 않으면 아무것도 표시하지 않는다.
      this.textContent = '';
    }
  }

  attributeChangedCallback() {
    // date 속성만 감시하고 있으므로, 이 콜백이 실행된다면 date 속성이
    // 변경되었다고 볼 수 있다. 가능한 경우 해당 날짜를 포맷한다.
    this.formatDate();
  }

  connectedCallback() {
    // 엘리먼트가 지금 막 추가되었으므로 가능한 경우 날짜를 포맷한다.
    this.formatDate();
  }
}

customElements.define('date-formatter', DateFormatter);
