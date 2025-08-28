/**
 * 예 10-12. 파일을 선택하고 접근 권한 확인하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

/**
 * 파일을 선택하고, 권한을 확인하고, 필요한 경우 권한을 요청한다.
 * @returns 해당 파일의 쓰기 권한이 있으면 true, 아니면 false
 */
async function canAccessFile() {
  if ('showOpenFilePicker' in window) {
    // showOpenFilePicker는 파일을 여러 개 선택할 수 있다.
    // 배열 구조 분해 할당을 사용해 첫 번째 파일만 가져온다.
    const [file] = window.showOpenFilePicker();

    let result = await file.queryPermission({ mode: 'readwrite' });
    if (result === 'prompt') {
      result = await file.requestPermission({ mode: 'readwrite' });
    }

    return result === 'granted';
  }

  // 여기에 도달했다면, 해당 API를 지원하지 않는 환경이다.
  return false;
}
