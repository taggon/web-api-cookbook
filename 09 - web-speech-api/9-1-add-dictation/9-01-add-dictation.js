/**
 * 예 9-1. 텍스트 필드에 간단한 받아쓰기 기능 추가하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

/**
 * 음성을 리스닝하기 시작한다. 음성이 인식되면 주어진 텍스트 필드의 값에 추가한다.
 * 음성 인식 객체가 중단될 때까지 음성 인식을 계속한다.
 * @param textField 값을 추가할 텍스트 필드
 * @returns 음성 인식 객체
 */
function startDictation(textField) {
  // 브라우저가 음성 인식 기능을 지원하는 경우에만 진행한다.
  if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = true;

    recognition.addEventListener('result', event => {
      const result = event.results[event.resultIndex];
      textField.value += result[0].transcript;
    });

    recognition.addEventListener('error', event => {
      console.log('error', event);
    });

    recognition.start();

    // 사용자가 토글 버튼 등을 사용해 음성 인식을 중단할 수 있도록
    // 음성 인식 객체를 반환한다.
    return recognition;
  }
}
