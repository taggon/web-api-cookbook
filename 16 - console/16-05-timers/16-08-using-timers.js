/**
 * 예 16-8. console.time과 console.timeEnd 사용
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

// 'loadTransactions' 타이머를 시작한다.
console.time('loadTransactions');

// 데이터를 읽어 들인다.
const data = await fetch('/api/users/123/transactions');

// 'loadTransactions' 타이머를 종료한다.
// 출력: "loadTransactions: <지나간 시간> ms"
console.timeEnd('loadTransactions');
