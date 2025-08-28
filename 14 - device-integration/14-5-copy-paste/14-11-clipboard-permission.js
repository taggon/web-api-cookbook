/**
 * 예 14-11. 클립보드 읽기 권한 확인
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const permission = await navigator.permissions.query({
  name: 'clipboard-read'
});

if (permission.state !== 'denied') {
  // 클립보드 읽기 권한을 가지고 추가 작업을 한다.
}
