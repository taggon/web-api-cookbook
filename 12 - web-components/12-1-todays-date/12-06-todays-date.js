/**
 * 예 12-6. 현재 날짜를 포맷하는 커스텀 엘리먼트
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

class TodaysDate extends HTMLElement {
  connectedCallback() {
    const formatter = new Intl.DateTimeFormat(
      navigator.language,
      { dateStyle: 'full' }
    );

    this.textContent = formatter.format(new Date());
  }
}

customElements.define('todays-date', TodaysDate);
