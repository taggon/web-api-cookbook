/**
 * 예 15-9. 다단계 처리 과정 프로파일링
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

window.performance.mark('transactions-start');
const transactions = await fetch('/api/users/123/transactions');
window.performance.mark('transactions-end');
window.performance.mark('process-start');
const analytics = processAnalytics(transactions);
window.performance.mark('process-end');
window.performance.mark('upload-start');
await fetch('/api/analytics', {
  method: 'POST',
  body: JSON.stringify(analytics),
  headers: {
    'Content-Type': 'application/json'
  }
});
window.performance.mark('upload-end');
