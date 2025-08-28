/**
 * 예 18-3. 숨겨진 링크를 사용한 다운로드 시작하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const link = document.createElement('a');

// 여기서 url은 captureScreen 메서드에서 작성된 객체 URL이다.
link.href = url;
link.textContent = 'Download';
link.download = 'screen-recording.webm';
link.click();
