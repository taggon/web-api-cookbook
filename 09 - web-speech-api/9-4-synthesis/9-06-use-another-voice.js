/**
 * 예 9-6. 다른 목소리 사용하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

// 모든 목소리가 사용 가능하다고 가정한다.
const aliceVoice = speechSynthesis
  .getVoices()
  .find(voice => voice.name === 'Alice');

function speakText(text) {
  const utterance = new SpeechSynthesisUtterance(text);

  // "Alice" 목소리가 있는지 확인한다.
  if (aliceVoice) {
    utterance.voice = aliceVoice;
  }

  speechSynthesis.speak(utterance);
}
