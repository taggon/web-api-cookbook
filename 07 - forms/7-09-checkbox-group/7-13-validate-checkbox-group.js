/**
 * 예 7-13. 체크박스 그룹 유효성 검사
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

function validateCheckboxes(form) {
  const data = new FormData(form);

  // 여러 요소에 유효성 검사 오류를 설정하지 않도록,
  // 첫 번째 체크박스에만 그룹의 유효성 검사 메시지를 설정합니다.
  const element = form.elements.option1;

  if (!data.has('options')) {
    element.setCustomValidity('최소 한 개 이상의 옵션을 선택해주세요.');
  } else {
    element.setCustomValidity('');
  }
}
