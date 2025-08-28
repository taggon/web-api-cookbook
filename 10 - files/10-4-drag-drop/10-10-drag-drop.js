/**
 * 예 10-10. 드래그앤드롭 코드 추가
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const target = document.querySelector('#drop-target');
target.addEventListener('drop', event => {
  // drop 이벤트를 취소한다. 취소하지 않으면
  // 현재 페이지를 떠나 파일로 직접 이동해버린다.
  event.preventDefault();

  // 선택된 파일 데이터를 가져온다. dataTransfer.items는 DataTransferItemList 인스턴스이다.
  // 목록의 각 항목은 DataTransferItem의 인스턴스인데 드롭된 각 파일의 데이터를 포함한다.
  // 이 예시에서는 한 개 파일만 다루므로 목록의 첫 번째 항목만 가져온다.
  const [item] = event.dataTransfer.items;

  // 드롭된 데이터를 File 객체로 가져온다.
  const file = item.getAsFile();

  // 드롭된 파일이 이미지일 때만 처리한다.
  if (file.type.startsWith('image/')) {
    showDroppedFile(file);
  }
});

// dragover 이벤트도 취소해서 파일이
// 전체 페이지 콘텐츠를 대체하지 않도록 방지한다.
target.addEventListener('dragover', event => {
  event.preventDefault();
});
