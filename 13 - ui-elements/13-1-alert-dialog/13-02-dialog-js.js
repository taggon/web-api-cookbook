/**
 * 예 13-2. 대화창 자바스크립트
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

// 대화창과 대화창에 있는 확인 버튼, 대화창 표시 버튼을 선택한다.
const dialog = document.querySelector('#alert');
const okButton = document.querySelector('#ok-button');
const trigger = document.querySelector('#show-dialog');

// 확인 버튼이 클릭되면 대화창을 닫는다.
okButton.addEventListener('click', () => {
  dialog.close();
});

// 표시 버튼을 클릭하면 대화창을 보여준다.
trigger.addEventListener('click', () => {
  dialog.showModal();
});
