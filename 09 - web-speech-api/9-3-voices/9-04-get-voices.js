/**
 * 예 9-4. 사용 가능한 음성 합성 목소리의 목록 구하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

function showVoices() {
  voices.innerHTML = '';
  speechSynthesis.getVoices().forEach(voice => {
    console.log('목소리:', voice.name);
  });
}

// 브라우저에 따라 목소리 목록을 비동기로 읽어 들이기도 하는데, 이런 브라우저에서는
// voiceschanged 이벤트가 발생한 후에 사용 가능한 목소리 목록을 알 수 있다.
speechSynthesis.addEventListener('voiceschanged', () => showVoices());

// 그 외의 브라우저에서는 목소리 목록을 즉시 가져올 수 있다.
showVoices();
