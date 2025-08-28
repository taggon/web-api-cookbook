/**
 * 예 4-1. XMLHttpRequest를 사용한 GET 요청
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

/**
 * /api/users URL에서 사용자 데이터를 읽고 콘솔에 출력한다.
 */
function getUsers() {
  const request = new XMLHttpRequest();

  request.addEventListener('load', event => {
    // 이벤트의 대상(target)은 XHR 객체 그 자체이다.
    // 이 객체의 responseText 프로퍼티에 저장된 JSON 텍스트를 사용해
    // 자바스크립트 객체를 만들 수 있다.
    const users = JSON.parse(event.target.responseText);
    console.log('Got users:', users);
  });

  // 요청에서 발생할 수 있는 에러를 처리한다.
  // 단, 이 이벤트는 네트워크 에러만 처리한다.
  // 요청이 404와 같은 에러 상태를 반환할 때는
  // load 이벤트가 발생하므로 해당 이벤트 핸들러에서 상태 코드를 확인할 수 있다.
  request.addEventListener('error', err => {
    console.log('에러!', err);
  });

  request.open('GET', '/api/users');
  request.send();
}
