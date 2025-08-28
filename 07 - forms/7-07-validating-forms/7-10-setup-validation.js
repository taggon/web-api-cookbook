/**
 * 예 7-10. 폼 필드의 유효성 검사 설정
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

/**
 * 폼 유효성 검사에서 처리할 엘리먼트에 필요한 이벤트 리스너를 추가한다.
 * 이벤트 리스너는 유효성 상태에 따라 오류 메시지를 설정하거나 지운다.
 * @param element 유효성을 검사할 input 엘리먼트
 */
function addValidation(element) {
  const errorElement = document.getElementById(`${element.id}-error`);

  /**
   * 폼에 유효성 검사를 수행했는데 필드가 유효하지 않을 때 발생하는 이벤트.
   * 오류 메시지와 스타일을 설정한다. shouldValidate 플래그도 설정한다.
   */
  element.addEventListener('invalid', () => {
    errorElement.textContent = element.validationMessage;
    element.dataset.shouldValidate = true;
  });

  /**
   * 필드에 사용자 입력이 일어날 때 발생하는 이벤트. shouldValidate 플래그가
   * 설정되어 있으면 필드의 유효성을 다시 검사하고,
   * 필드가 유효하다면 오류 메시지를 지운다.
   */
  element.addEventListener('input', () => {
    if (element.dataset.shouldValidate) {
      if (element.checkValidity()) {
        errorElement.textContent = '';
      }
    }
  });

  /**
   * 필드가 포커스를 잃을 때 발생하고, shouldValidate 플래그를 설정한다.
   */
  element.addEventListener('blur', () => {
    // 이 필드는 사용되었으므로 이후 발생하는 'input' 이벤트에서는 유효성 검사를 수행한다.
    // DOM input 엘리먼트의 data-should-validate 속성을 true로 설정한다.
    element.dataset.shouldValidate = true;
  });
}
