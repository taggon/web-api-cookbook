/**
 * 예 7-15. 체크박스가 있는 폼의 유효성 검사
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

addValidation(form.elements.option1, 'checkbox-error');
addValidation(form.elements.option2, 'checkbox-error');
addValidation(form.elements.option3, 'checkbox-error');

form.addEventListener('submit', event => {
  event.preventDefault();
  validateCheckboxes(form);
  console.log(form.checkValidity());
});
