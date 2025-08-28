/**
 * 예 3-13. 간단한 클라이언트 측 라우터
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

// 라우트 정의. 각 라우트는 경로(path)와 렌더링할 콘텐츠를 포함한다.
const routes = [
  { path: '/', content: '<h1>Home</h1>' },
  { path: '/about', content: '<h1>About</h1>' }
];

function navigate(path, pushState = true) {
  // 일치하는 라우트를 찾아서 해당하는 콘텐츠를 렌더링한다.
  const route = this.routes.find(route => route.path === path);

  // 보안 문제가 있을 수 있으므로 innerHTML을 현실에서 사용할 때는 주의가 필요하다.
  document.querySelector('#main').innerHTML = route.content;

  if (pushState) {
    // URL을 일치하는 새 라우트로 변경한다.
    history.pushState({}, '', path);
  }
}
