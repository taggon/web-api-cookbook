/**
 * 예 11-15. 주어진 문자열의 문자 수, 단어 수, 문장 수 계산하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

function getCounts(text) {
  const characters = new Intl.Segmenter(
    navigator.language,
    { granularity: 'grapheme' }
  );

  const words = new Intl.Segmenter(
    navigator.language,
    { granularity: 'word' }
  );

  const sentences = new Intl.Segmenter(
    navigator.language,
    { granularity: 'sentence' }
  );

  // 각 구성 요소를 배열로 변환하여, 배열의 크기를 구한다.
  return {
    characters: [...characters.segment(text)].length,
    words: [...words.segment(text)].length,
    sentences: [...sentences.segment(text)].length
  };
}
