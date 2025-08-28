/**
 * 예 2-2. 로컬 스토리지에 데이터 저장
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

// 색상 선택기 input 엘리먼트를 참조한다.
const colorPicker = document.querySelector('#colorPicker');

// 저장된 값을 읽어 오고, 기존 값이 존재한다면 색상 선택기에 설정한다.
const storedValue = localStorage.getItem('savedColor');
if (storedValue) {
  console.log('저장된 색상 발견:', storedValue);
  colorPicker.value = storedValue;
}

// 값이 변경되면 저장된 색상을 업데이트한다.
colorPicker.addEventListener('change', event => {
  localStorage.setItem('savedColor', event.target.value);
  console.log('새로운 색상 저장:', colorPicker.value);
});
