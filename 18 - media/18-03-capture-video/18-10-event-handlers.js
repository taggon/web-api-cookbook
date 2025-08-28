/**
 * 예 18-10. 버튼의 이벤트 핸들러 추가
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

document.querySelector('#record-button').addEventListener('click', () => {
  mediaRecorder.start();
});

document.querySelector('#stop-record-button').addEventListener('click', () => {
  mediaRecorder.stop();
});
