/**
 * 예 3-15. popstate 이벤트 리스닝
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

window.addEventListener('popstate', () => {
  navigate(window.location.pathname, false);
});
