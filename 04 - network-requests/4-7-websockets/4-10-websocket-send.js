/**
 * 예 4-10. 웹소켓 메시지 전송
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

// 메시지는 단순 문자열이다.
socket.send('Hello');

// 소켓의 데이터는 문자열이어야 하므로
// 전송할 객체는 JSON.stringify 등으로 직렬화해야 한다.
socket.send(JSON.stringify({
  username: 'sysadmin',
  password: 'password'
}));
