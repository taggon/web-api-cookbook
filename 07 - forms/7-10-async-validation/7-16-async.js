/**
 * 예 7-16. 비동기 패스워드 안전성 검사 수행
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

/**
 * 패스워드가 충분히 안전한지 확인하는 API를 호출한다.
 * @param form 패스워드 필드가 포함된 폼
 */
async function validatePasswordStrength(form) {
  const { password } = form.elements;
  const response = await fetch(`/api/password-strength?password=${password.value}`);
  const result = await response.json();

  // 이전 예시와 마찬가지로 브라우저에서 제공하는 기본 유효성 검사 UI를 사용하고 있다면,
  // 패스워드 필드의 reportValidity를 호출해야 한다.
  if (result.status === 'error') {
    password.setCustomValidity(result.error);
  } else {
    password.setCustomValidity('');
  }
}
