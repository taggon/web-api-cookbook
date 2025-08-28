/**
 * 예 13-23. 알림 권한 확인
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

async function getPermission() {
  // 사용자가 명시적으로 거절을 했다면 다시 물어보지 않는다.
  if (Notification.permission !== 'denied') {
    // 권한 요청의 결과는 이후 Notification.permission 프로퍼티에 저장된다.
    // 권한 요청은 Promise를 반환한다.
    await Notification.requestPermission();
  }

  // Notification.permission의 값이 'granted'일 때만 알림을 표시한다.
  return Notification.permission === 'granted';
}
