/**
 * 예 2-11. 다른 탭에서 스토리지 이벤트 리스닝하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 *
 * 예 2-2에서 저장되는 색상의 저장소 변경 이벤트를 리스닝한다.
 */

// 'storage' 이벤트를 리스닝한다. 다른 탭에서 'savedColor'에 변경이 발생하면
// 이 페이지의 색상 선택기도 새로운 값으로 업데이트한다.
window.addEventListener('storage', event => {
  if (event.key === 'savedColor') {
    console.log('다른 탭에서 새로운 색상이 선택되었습니다:', event.newValue);
    colorPicker.value = event.newValue;
  }
});
