/**
 * 예 18-2. 녹화한 화면을 서버로 업로드하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const form = new FormData();
// 여기서 blob는 captureScreen에서 작성된 Blob 객체이다.
formData.append('file', blob);

fetch('/api/video/upload', {
  method: 'POST',
  body: formData
});
