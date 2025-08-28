/**
 * 예 13-7. 대화창 컴포넌트 구현
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

class ConfirmDialog extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));

    this.dialog = shadowRoot.querySelector('dialog');
    this.dialog.addEventListener('cancel', () => {
      this.dialog.returnValue = 'cancel';
    });

    shadowRoot.querySelector('.confirm-button')
      .addEventListener('click', () => {
        this.dialog.close('confirm');
      });

    shadowRoot.querySelector('.cancel-button')
      .addEventListener('click', () => {
        this.dialog.close('cancel');
      });
  }

  showConfirmation() {
    this.dialog.showModal();

    return new Promise(resolve => {
      // 다음 close 이벤트를 리스닝하고 Promise를 해결한다.
      // Promise는 사용자의 확인 여부를 가리키는 불리언 값으로 해결된다.
      this.dialog.addEventListener('close', () => {
        resolve(this.dialog.returnValue === 'confirm');
      }, {
        // 이벤트는 한 번만 리스닝하고, 그 뒤에는 제거한다.
        once: true
      });
    });
  }
}

customElements.define('confirm-dialog', ConfirmDialog);
