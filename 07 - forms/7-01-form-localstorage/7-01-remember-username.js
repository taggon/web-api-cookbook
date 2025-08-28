/**
 * 예 7-4. username 필드의 값 기억하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */
const form = document.querySelector('#login-form');

const username = localStorage.getItem('username');
if (username) {
  form.elements.username.value = username;
}

form.addEventListener('submit', event => {
  const data = new FormData(form);
  localStorage.setItem('username', data.get('username'));
});
