/**
 * 예 4-8. SSE 접속 열기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const events = new EventSource('https://example.com/events');

// 연결이 이루어지면 발생하는 이벤트
events.addEventListener('open', () => {
  console.log('연결이 열렸습니다');
});

// 연결 에러가 있을 때 발생하는 이벤트
events.addEventListener('error', event => {
  console.log('에러 발생:', event);
});

// 'heartbeat' 타입의 이벤트를 수신할 때 발생
events.addEventListener('heartbeat', event => {
  console.log('heartbeat 수신:', event.data);
});

// 'notice' 타입의 이벤트를 수신할 때 발생
events.addEventListener('notice', event => {
  console.log('notice 수신:', event.data);
})

// EventSource는 연결을 열어 둔 채로 둔다. 연결을 닫으려면,
// EventSource 객체의 close 메서드를 호출해야 한다.
function cleanup() {
  events.close();
}
