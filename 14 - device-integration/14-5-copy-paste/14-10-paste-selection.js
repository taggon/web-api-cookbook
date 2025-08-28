/**
 * 예 14-10. 선택 영역으로 붙여넣기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

async function pasteToSelection(textarea) {
  const currentValue = textarea.value;
  const { selectionStart, selectionEnd } = textarea;

  try {
    const clipboardValue = await navigator.clipboard.readText();
    const newValue = currentValue.slice(0, selectionStart) + clipboardValue + currentValue.slice(selectionEnd);
    textarea.value = newValue;
  } catch (error) {
    console.error('클립보드 오류:', error);
  }
}
