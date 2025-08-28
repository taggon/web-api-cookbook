/**
 * 예 15-11. PerformanceObserver 사용
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const analyticsEndpoint = 'https://example.com/api/analytics';

const observer = new PerformanceObserver(entries => {
  for (let entry of entries.getEntries()) {
    // 'fetch' 엔트리만 처리한다.
    // 비컨(Beacon) API를 통해 성능 엔트리 데이터를 포함한 요청을 빠르게 전송한다.
    if (entry.initiatorType === 'fetch') {
      navigator.sendBeacon(analyticsEndpoint, entry);
    }
  }
});

observer.observe({ type: 'resource' });
