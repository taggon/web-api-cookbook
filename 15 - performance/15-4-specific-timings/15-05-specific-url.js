/**
 * 예 15-5. 특정 URL의 모든 리소스 타이밍 찾기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

// /api/users API로 향하는 모든 요청 찾기
const entries = window.performance.getEntriesByName('https://localhost/api/users', 'resource');
