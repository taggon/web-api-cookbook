/**
 * 예 18-12. 지원하는 동영상 형식 확인
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

navigator.mediaCapabilities.decodingInfo({
  type: 'file',
  video: {
    contentType: 'video/webm;codecs=vp8',
    bitrate: 4000000, // 4 MB
    framerate: 30,
    width: 1920,
    height: 1080
  }
}).then(result => {
  if (result.supported) {
    // WebM이 지원된다.
  }
});
