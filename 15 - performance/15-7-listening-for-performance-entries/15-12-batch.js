/**
 * 예 15-12. 성능 엔트리 일괄 전송
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const analyticsEndpoint = 'https://example.com/api/analytics';

// 엔트리를 모아 둘 버퍼 배열. 버퍼가 설정한 크기에 도달하면,
// 모든 엔트리를 하나로 묶어서 한 번의 요청으로 전송한다.
const BUFFER_SIZE = 10;
let buffer = [];

const observer = new PerformanceObserver(entries => {
  for (let entry of entries.getEntries()) {
    if (entry.initiatorType === 'fetch' && entry.name !== analyticsEndpoint) {
      buffer.push(entry);
    }

    // 버퍼가 설정한 크기가 되면, 분석 요청을 보낸다.
    if (buffer.length === BUFFER_SIZE) {
      fetch(analyticsEndpoint, {
        method: 'POST',
        body: JSON.stringify(buffer),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // 이제 버퍼를 재설정하고 모든 엔트리를 한꺼번에 전송한다.
      buffer = [];
    }
  }
});

observer.observe({ type: 'resource' });
