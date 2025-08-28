/**
 * 예 12-24. 버튼 템플릿
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const template = document.createElement('template');
template.innerHTML = `
  <style>
    button {
      background: #333;
      padding: 0.5em 1.25em;
      font-size: 1rem;
      border: none;
      border-radius: 5px;
      color: white;
    }

    button.primary {
      background: #2563eb;
    }

    button.danger {
      background: #dc2626;
    }
  </style>

  <button>
    <slot></slot>
  </button>
`;
