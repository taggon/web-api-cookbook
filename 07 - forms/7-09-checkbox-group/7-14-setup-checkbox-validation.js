/**
 * 예 7-14. 체크박스 유효성 검사 설정
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

/**
 * 폼 유효성 검사에서 처리할 엘리먼트에 필요한 이벤트 리스너를 추가한다.
 * 이벤트 리스너는 유효성 상태에 따라 오류 메시지를 설정하거나 지운다.
 * @param element 유효성을 검사할 input 엘리먼트
 * @param errorId 오류 메시지를 보여줄 플레이스홀더 엘리먼트의 아이디
 */
function addValidation(element, errorId) {
  const errorElement = document.getElementById(errorId);

  /**
   * 폼에 유효성 검사를 수행했는데 필드가 유효하지 않을 때 발생하는 이벤트.
   * 오류 메시지와 스타일을 설정한다.
   */
  element.addEventListener('invalid', () => {
    errorElement.textContent = element.validationMessage;
  });

  /**
   * 필드에 사용자 입력이 일어날 때 발생하는 이벤트.
   * 필드의 유효성을 다시 확인하고 유효한 경우에는 오류 메시지를 지운다.
   */
  element.addEventListener('change', () => {
    validateCheckboxes(form);
    if (form.elements.option1.checkValidity()) {
      errorElement.textContent = '';
    }
  });
}
