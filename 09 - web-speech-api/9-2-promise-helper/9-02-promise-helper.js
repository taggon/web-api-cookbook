/**
 * 예 9-2. Promise를 사용하는 음성 인식
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

/**
 * 음성을 듣고 음성 인식을 수행한다.
 * 현재 브라우저에서 음성 인식을 지원한다고 가정한다.
 * @returns 음성의 내용을 인식했을 때 해결되고 에러가 발생하면 거부되는 Promise.
 */
function captureSpeech() {
  const speechPromise = new Promise((resolve, reject) => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    // 현재 브라우저에서 음성 인식을 지원하지 않는다면 Promise를 거부한다.
    if (!SpeechRecognition) {
      reject('현재 브라우저는 음성 인식을 지원하지 않습니다.');
    }

    const recognition = new SpeechRecognition();

    // 음성을 성공적으로 인식하면 Promise를 해결한다.
    recognition.addEventListener('result', event => {
      const result = event.results[event.resultIndex];
      resolve(result[0].transcript);
    });

    recognition.addEventListener('error', event => {
      // 인식 과정에서 오류가 발생하면 Promise를 거부한다.
      reject(event);
    });

    // 음성 인식을 시작한다.
    recognition.start();
  });

  // 음성 인식이 성공적으로 수행되거나 실패하여 결과가 결정되었다면,
  // 음성 인식 엔진을 중단한다.
  return speechPromise.finally(() => {
    recognition.stop();
  });
}
