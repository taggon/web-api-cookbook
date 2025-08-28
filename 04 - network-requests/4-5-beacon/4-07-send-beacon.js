/**
 * 예 4-7. 비콘 전송
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const currentUser = {
  username: 'sysadmin'
};

// 보관하고 싶은 분석 데이터
const data = {
  user: currentUser.username,
  lastVisited: new Date()
};

// 사용자가 떠나기 전에 데이터를 전송
document.addEventListener('visibilitychange', () => {
  // 가시성(visibility) 상태가 'hidden'이면 이 페이지가 지금 막 숨겨졌다는 의미다.
  if (document.visibilityState === 'hidden') {
    navigator.sendBeacon('/api/analytics', data);
  }
});
