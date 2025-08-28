/**
 * 예 9-5. 웹 스피치 API를 사용한 텍스트 읽기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

function speakText(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}
