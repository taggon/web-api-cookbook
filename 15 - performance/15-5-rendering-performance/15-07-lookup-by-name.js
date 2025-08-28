/**
 * 예 15-7. 이름으로 측정값 찾기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

// 'render' 측정 결과는 하나 밖에 없으므로 반환된 배열을
// 구조 분해 할당하여 첫 번째 (그리고 유일한) 엔트리를 가져온다.
const [renderMeasure] = window.performance.getEntriesByName('render');
