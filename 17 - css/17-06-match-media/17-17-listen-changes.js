/**
 * 예 17-17. 미디어 쿼리 변화를 리스닝하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const query = window.matchMedia('(prefers-color-scheme: dark)');
query.addEventListener('change', () => {
  if (query.matches) {
    // 다크 모드로 변경
  } else {
    // 라이트 모드로 변경
  }
});
