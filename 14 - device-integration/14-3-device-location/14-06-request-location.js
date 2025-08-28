/**
 * 예 14-6. 기기 위치 요청
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

navigator.geolocation.getCurrentPosition(position => {
  console.log('위도: ' + position.coords.latitude);
  console.log('경도: ' + position.coords.longitude);
}, error => {
  // 사용자가 권한을 거부했거나 기기의 위치를 확인할 수 없는 경우
  console.log(error);
});
