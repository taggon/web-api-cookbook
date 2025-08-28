/**
 * 예 13-6. 확인창 컴포넌트를 위한 템플릿
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const template = document.createElement('template');
template.innerHTML = `
  <dialog id="confirm">
    <h2>확인</h2>
    <p><slot></slot></p>

    <button type="button" class="confirm-button">확인</button>
    <button type="button" class="cancel-button">취소</button>
  </dialog>
`;
