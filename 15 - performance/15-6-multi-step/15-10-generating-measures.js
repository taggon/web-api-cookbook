/**
 * 예 15-10. 측정 결과 생성
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

console.log('거래 데이터 다운로드:',
  window.performance.measure(
    'transactions', 'transactions-start', 'transactions-end'
  ).duration
);

console.log('분석 처리:',
  window.performance.measure(
    'analytics', 'process-start', 'process-end'
  ).duration
);

console.log('분석 결과 업로드:',
  window.performance.measure(
    'upload', 'upload-start', 'upload-end'
  ).duration
);

console.log('전체 시간:',
  window.performance.measure(
    'total', 'transactions-start', 'upload-end'
  ).duration
);
