/**
 * 예 15-1. 내비게이션 타이밍 성능 엔트리
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

// 탐색(navigation)과 관련된 성능 엔트리 하나만 가져온다.
const [navigation] = window.performance.getEntriesByType('navigation');
