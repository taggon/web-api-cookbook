/**
 * 예 14-7. 지리적 위치 정보 권한 확인
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const permission = await navigator.permissions.query({
  name: 'geolocation'
});
