/**
 * 예 18-9. MediaRecorder 설정
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

mediaRecorder = new MediaRecorder(stream, {
  mimeType: 'video/webm'
});

mediaRecorder.addEventListener('dataavailable', event => {
  const blob = new Blob([event.data], {
    type: 'video/webm',
  });

  const url = URL.createObjectURL(blob);

  // muted(음소거) 플래그를 초기값으로 바꿔서 포함된 오디오를 재생하도록 한다.
  preview.muted = false;

  // video 엘리먼트의 주소를 생성한 객체 URL로 재설정한다.
  preview.srcObject = null;
  preview.src = url;

  // 영상을 즉시 재생한다.
  preview.autoplay = true;
  preview.loop = true;
  preview.controls = true;
});
