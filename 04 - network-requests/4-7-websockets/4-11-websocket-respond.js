/**
 * 예 4-11. 웹소켓 메시지에 응답하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

socket.addEventListener('message', event => {
  socket.send('ACKNOWLEDGED');
});
