/**
 * 예 4-3. Fetch와 async/await 사용
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

async function loadUsers() {
  try {
    const response = await fetch('/api/users');
    return response.json();
  } catch (error) {
    console.error('사용자를 읽는 중 에러 발생:', error);
  }
}

async function printUsers() {
  const users = await loadUsers();
  console.log('사용자 목록:', users);
}
