/**
 * 예 5-13. 커서를 사용하여 한 페이지의 객체만 가져오기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

/**
 * 커서를 사용하여 IndexedDB 객체 저장소에서 한 '페이지'의 객체를 가져온다.
 *
 * @param db IndexedDB 데이터베이스 객체
 * @param storeName 객체 저장소의 이름
 * @param offset 시작 오프셋(0이면 첫 번째 항목)
 * @param length 오프셋 이후로 반환할 항목의 갯수
 */
function getPaginatedRecords(db, storeName, offset, length) {
  const cursor = db
    .transaction([storeName], 'readonly')
    .objectStore(storeName)
    .openCursor();

  const results = [];

  // 설정한 오프셋만큼 건너뛰었는지 확인하는 플래그
  let skipped = false;

  request.addEventListener('success', event => {
    const cursor = event.target.result;

    if (!skipped) {
      // 주어진 오프셋만큼 건너뛰고 플래그를 설정한다.
      // 다음 이벤트에서는 커서가 시작 위치에 있게 되고,
      // 데이터를 수집하기 시작한다.
      skipped = true;
      cursor.advance(offset);
    } else if (cursor && result.length < length) {
      // 커서가 현재 가리키고 있는 객체를 수집한다.
      results.push(cursor.value);

      // 다음 객체로 이동한다.
      cursor.continue();
    } else {
      // 더 이상 남은 객체가 없거나 설정한 크기를 모두 채운 경우
      console.log('가져온 데이터:', request.result);
    }
  });

  request.addEventListener('error', () => {
    console.error('데이터를 가져오는 중 오류 발생:', request.error);
  });
}
