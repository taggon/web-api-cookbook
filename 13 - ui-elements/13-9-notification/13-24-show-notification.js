/**
 * 예 13-24. 알림 표시
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

if (await getPermission()) {
  new Notification('안녕하세요!', {
    body: '테스트로 보내보는 알림입니다'
  });
}
