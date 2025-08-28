/**
 * 예 12-10. 템플릿 작성
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const template = document.createElement('template');
template.innerHTML = `
  <style>
    .feedback-prompt {
      display: flex;
      align-items: center;
      gap: 0.5em;
    }

    button {
      padding: 0.5em 1em;
    }
  </style>

  <div class="feedback-prompt">
    <p>이 페이지의 내용이 도움이 되었나요?</p>
    <button type="button" data-helpful="true">네</button>
    <button type="button" data-helpful="false">아니요</button>
  </div>
`;
