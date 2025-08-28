/**
 * 예 9-8. 페이지가 숨겨지면 음성 합성을 중지
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

document.addEventListener('visibilitychange', () => {
  // speechSynthesis.speaking의 값이 true라면
  // (1) 음성이 현재 출력 중인 경우
  // (2) 또는 음성 출력 중이었지만 일시 중지된 경우
  if (speechSynthesis.speaking) {
    if (document.visibilityState === 'hidden') {
      speechSynthesis.pause();
    } else if (document.visibilityState === 'visible') {
      speechSynthesis.resume();
    }
  }
});
