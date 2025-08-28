/**
 * 예 7-12. 사용자 정의 유효성 검사 사용
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

/**
 * password와 confirmPassword 필드의 값이 같은지 확인하는 사용자 정의 유효성 검사 함수
 * @param form 두 필드를 포함한 폼
 */
function validatePasswordsMatch(form) {
  const { password, confirmPassword } = form.elements;

  if (password.value !== confirmPassword.value) {
    confirmPassword.setCustomValidity('패스워드가 일치하지 않습니다.');
  } else {
    confirmPassword.setCustomValidity('');
  }
}

form.addEventListener('submit', event => {
  event.preventDefault();

  validatePasswordsMatch(form);
  if (form.checkValidity()) {
    // 유효성 검사를 통과하면 폼을 전송한다.
  }
});
