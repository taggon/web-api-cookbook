/**
 * 예 18-11. 미디어 기능 확인
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

navigator.mediaCapabilities.decodingInfo({
  type: 'file',
  audio: {
    contentType: 'audio/mp3'
  }
}).then(result => {
  if (result.supported) {
    // MP3 오디오가 지원된다!
  }
});

navigator.mediaCapabilities.decodingInfo({
  type: 'file',
  audio: {
    contentType: 'audio/webm;codecs=opus'
  }
}).then(result => {
  if (result.supported) {
    // Opus 코덱을 사용한 WebM 오디오가 지원된다!
  }
});
