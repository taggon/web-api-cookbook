/**
 * 예 10-13. 출력 파일 선택
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

/**
 * 파일 선택기를 보여주고 선택된 파일의 핸들을 반환한다.
 * @returns 선택된 파일의 파일 핸들. 사용자가 취소를 클릭한 경우에는 null.
 */
async function selectOutputFile() {
  // 현재 브라우저에서 이 API를 지원하는지 확인한다.
  if (!('showSaveFilePicker' in window)) {
    return null;
  }

  try {
    return window.showSaveFilePicker({
      // 출력 파일 이름의 기본값
      suggestedName: 'users.json',

      // 파일 확장자를 .json으로 제한한다.
      types: [
        { description: "JSON", accept: { "application/json": [".json"] } }
      ]
    });
  } catch (error) {
    // 사용자가 취소를 클릭하면 예외가 발생한다.
    // 이 경우에는 null을 반환하여 선택된 파일이 없음을 알린다.
    return null;
  }
}
