/**
 * 예 15-6. 렌더링 성능 측정
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

// 렌더링 전에 첫 번째 성능 측정 지점을 생성한다.
window.performance.mark('render-start');

// 데이터를 렌더링하는 컴포넌트를 생성한다.
const dataView = new DataView();
dataView.render(data);

// 렌더링이 완료되고 나면 종료 성능 측정 지점을 생성한다.
window.performance.mark('render-end');

// 두 지점 사이의 차이를 측정한다.
const measure = window.performance.measure('render', 'render-start', 'render-end');
