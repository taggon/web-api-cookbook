/**
 * 예 13-9. 대화창 컴포넌트 사용
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const confirmDialog = document.querySelector('#confirm-delete');
if (await confirmDialog.showConfirmation()) {
  // 삭제 동작 수행
}
