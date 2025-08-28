/**
 * 예 3-14. 라우트 링크에 클릭 핸들러 추가하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', event => {
    // 브라우저가 새 URL을 서버에서 읽어 들이지 않도록 방지!
    event.preventDefault();
    navigate(link.getAttribute('href'));
  });
});
