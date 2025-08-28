/**
 * 예 15-4. 가장 빠른 다섯 개의 리소스
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const fastestResources = window.performance.getEntriesByType('resource')
  .sort((a, b) =>
    (a.responseEnd - a.startTime) - (b.responseEnd - b.startTime))
  .slice(0, 5);
