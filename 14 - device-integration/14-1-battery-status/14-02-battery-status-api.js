/**
 * 예 14-2. 배터리 상태 API 조회
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const batteryLevelItem = document.querySelector('#battery-level');
const batteryChargingItem = document.querySelector('#battery-charging');

navigator.getBattery().then(battery => {
  // 배터리 충전 비율은 0부터 1까지의 실수로 표현된다.
  // 이 값에 100을 곱해 퍼센트로 변환한다.
  batteryLevelItem.textContent = `${battery.level * 100}%`;

  batteryChargingItem.textContent = battery.charging ? '충전 중' : '충전 안함';
});
