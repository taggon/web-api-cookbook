/**
 * 예 12-11. 컴포넌트 구현
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

class FeedbackRating extends HTMLElement {
  constructor() {
    super();

    // 섀도 DOM을 생성하고 템플릿을 섀도 DOM에서 렌더링한다.
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot.querySelector('.feedback-prompt').addEventListener('click', event => {
      const { helpful } = event.target.dataset;

      if (typeof helpful !== 'undefined') {
        // 피드백 종류를 고르고 나면 버튼을 숨기고 확인 메시지를 보여준다.
        this.shadowRoot.querySelector('.feedback-prompt').remove();
        this.shadowRoot.textContent = '피드백을 주셔서 감사합니다!';

        // 자바스크립트에는 'parseBoolean' 같은 함수가 없으므로
        // 문자열 값을 해당하는 불리언 값으로 변경해야 한다.
        this.helpful = helpful === 'true';

        // 커스텀 이벤트를 발생시켜서 피드백 버튼이 클릭될 때
        // 애플리케이션이 알 수 있도록 한다.
        this.shadowRoot.dispatchEvent(new CustomEvent('feedback', {
          composed: true, // 섀도 DOM의 경계를 벗어나기 위해 필요하다.
          bubbles: true // DOM까지 전파하기 위해서 필요하다.
        }));
      }
    });
  }
}

customElements.define('feedback-rating', FeedbackRating);
