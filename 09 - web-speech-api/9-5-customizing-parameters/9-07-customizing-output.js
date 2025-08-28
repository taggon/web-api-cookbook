/**
 * 예 9-7. 음성 출력 커스터마이징하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const utteranceLow = new SpeechSynthesisUtterance('낮은 톤으로 천천히 읽습니다');
utterance.pitch = 0.1;
utterance.rate = 0.5;
speechSynthesis.speak(utterance);

const utteranceHigh = new SpeechSynthesisUtterance('높은 톤으로 빠르게 읽습니다');
utterance.pitch = 2;
utterance.rate = 2;
speechSynthesis.speak(utterance);
