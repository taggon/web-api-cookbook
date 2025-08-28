/**
 * 예 14-3. 배터리 이벤트 리스닝
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

battery.addEventListener('levelchange', () => {
  batteryLevelItem.textContent = `${battery.level * 100}%`;
});

battery.addEventListener('chargingchange', () => {
  batteryChargingItem.textContent = battery.charging ? '충전 중' : '충전 안함';
});
