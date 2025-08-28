/**
 * 예 17-12. 단순한 뷰 트랜지션
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

function showAboutPage() {
  document.startViewTransition(() => {
    document.querySelector('#home-page').style.display = 'none';
    document.querySelector('#about-page').style.display = 'block';
  });
}
