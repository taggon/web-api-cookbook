/**
 * 예 7-17. 비동기 폼 submit 핸들러
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

form.addEventListener('submit', async event => {
  event.preventDefault();
  await validatePasswordStrength(form);
  console.log(form.checkValidity());
});
