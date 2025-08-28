/**
 * 예 4-5. POST 요청을 통한 폼 데이터 전송
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

fetch('/login', {
  method: 'POST',
  body: 'username=sysadmin&password=password',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  }
})
  .then(response => response.json())
  .then(data => console.log('로그인 됐습니다!', data))
  .catch(error => console.error('요청에 실패했습니다:', error));
