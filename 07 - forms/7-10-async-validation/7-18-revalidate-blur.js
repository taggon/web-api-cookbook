/**
 * 예 7-18. blur 이벤트 발생시 유효성 검사 재실행
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

form.elements.password.addEventListener('blur', async event => {
  const password = event.target;
  const errorElement = document.getElementById('password-error');
  if (password.dataset.shouldValidate) {
    await validatePasswordStrength(form);
    if (password.checkValidity()) {
      errorElement.textContent = '';
      password.classList.remove('border-danger');
    }
  }
});
