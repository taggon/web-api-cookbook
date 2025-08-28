/**
 * 예 17-1. Range 생성
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

/**
 * 주어진 텍스트와 강조할 문자열로 원하는 텍스트를 감싸는 Range 객체를 생성한다.
 */
function getRange(textNode, textToHighlight) {
  const startOffset = textNode.textContent.indexOf(textToHighlight);
  const endOffset = startOffset + textToHighlight.length;

  // 강조할 텍스트의 Range 생성
  const range = new Range();
  range.setStart(textNode, startOffset);
  range.setEnd(textNode, endOffset);

  return range;
}
