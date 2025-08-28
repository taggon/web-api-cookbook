/**
 * 예 17-14. CSS 규칙 추가
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const [stylesheet] = document.styleSheets;
stylesheet.insertRule(`
  .some-selector {
    background-color: red;
  }
`);
