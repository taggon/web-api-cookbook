/**
 * 예 15-3. 가장 느린 다섯 개의 리소스 확인
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const slowestResources = window.performance.getEntriesByType('resource')
  .sort((a, b) =>
    (b.responseEnd - b.startTime) - (a.responseEnd - a.startTime))
  .slice(0, 5);
