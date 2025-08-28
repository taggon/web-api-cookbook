/**
 * 예 10-17. 드롭된 파일 업로드
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const target = document.querySelector('.drop-target');

target.addEventListener('drop', event => {
  // drop 이벤트를 취소한다. 취소하지 않으면 현재 페이지를 떠나
  // 파일로 직접 이동해버린다.
  event.preventDefault();

  // 선택된 파일 데이터를 가져온다.
  const [item] = event.dataTransfer.items;
  const file = item.getAsFile();

  if (file.type.startsWith('image/')) {
    fetch('/api/uploadFile', {
      method: 'POST',
      body: file
    });
  }
});

// dragover 이벤트도 취소해서 파일이
// 전체 페이지 콘텐츠를 대체하지 않도록 방지한다.
target.addEventListener('dragover', event => {
  event.preventDefault();
});
