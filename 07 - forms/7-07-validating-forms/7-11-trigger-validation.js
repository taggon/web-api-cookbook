/**
 * 예 7-11. 폼 유효성 검사 실행
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

// 폼에 'name'과 'email'이라는 input이 있다고 가정한다.
addValidation(form.elements.name);
addValidation(form.elements.email);

form.addEventListener('submit', event => {
  event.preventDefault();
  if (form.checkValidity()) {
    // 유효성 검사를 통과하면 폼을 전송한다.
  }
});
