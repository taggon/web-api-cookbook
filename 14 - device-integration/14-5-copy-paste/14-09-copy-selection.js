/**
 * 예 14-9. 선택 영역에서 텍스트 복사하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

async function copySelection(textarea) {
  const { selectionStart, selectionEnd } = textarea;
  const selectedText = textarea.value.slice(selectionStart, selectionEnd);

  try {
    await navigator.clipboard.writeText(selectedText);
  } catch (error) {
    console.error('클립보드 오류:', error);
  }
}
