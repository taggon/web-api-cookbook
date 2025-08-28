/**
 * 예 12-14. 프로필 카드 템플릿
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: grid;
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 8px;
      grid-template-columns: auto 1fr;
      column-gap: 16px;
      align-items: center;
      margin: 1rem;
    }

    .photo {
      border-radius: 50%;
      grid-row: 1 / span 3;
    }

    .name {
      font-size: 2rem;
      font-weight: bold;
    }

    .title {
      font-weight: bold;
    }
  </style>

  <div class="photo"><slot name="photo"></slot></div>
  <div class="name"><slot name="name"></slot></div>
  <div class="title"><slot name="title"></slot></div>
  <div class="bio"><slot></slot></div>
`;
