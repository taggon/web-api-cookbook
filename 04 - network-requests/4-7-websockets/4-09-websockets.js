/**
 * 예 4-9. 웹소켓 연결 생성
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

// 웹소켓 접속을 연다. URL 스키마는 ws: 또는 wss: 여야 한다.
const socket = new WebSocket(url);

socket.addEventListener('open', onSocketOpened);
socket.addEventListener('message', handleMessage);
socket.addEventListener('error', handleError);
socket.addEventListener('close', onSocketClosed);

function onSocketOpened() {
  console.log('소켓 준비 완료');
}

function handleMessage(event) {
  console.log('메시지 수신:', event.data);
}

function handleError(event) {
  console.log('소켓 에러:', event);
}

function onSocketClosed() {
  console.log('접속이 종료됨');
}
