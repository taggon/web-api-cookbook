/**
 * 예 13-5. 확인 대화창의 이벤트 리스너
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const dialog = document.querySelector('#confirm');

confirmButton.addEventListener('click', () => {
  // Close the dialog with a return value of "confirm"
  dialog.close('confirm');
});

cancelButton.addEventListener('click', () => {
  // 'cancel' 값을 전달하며 대화창을 닫는다.
  dialog.close('cancel');
});

dialog.addEventListener('cancel', () => {
  // 이스케이프 키를 눌러서 창을 닫으면 반환값을 설정하지 않는다.
  // 따라서 이 이벤트에서 'cancel' 값을 설정하여
  // close 이벤트에서 적절한 값을 확인할 수 있도록 한다.
  dialog.returnValue = 'cancel';
});

dialog.addEventListener('close', () => {
  if (dialog.returnValue === 'confirm') {
    // 사용자가 확인 버튼을 클릭한 경우.
    // 데이터를 저장하거나 제거하는 등의 동작을 수행한다.
  } else {
    // 사용자가 취소 버튼을 클릭하거나 이스케이프 키를 누른 경우.
    // 아무 동작도 수행하지 않는다.
  }
});
