/**
 * 예 11-6. 상대적인 날짜 포맷하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

function getRelativeDate(fromDate) {
  const { offset, unit } = getDateDifference(fromDate);
  const format = new Intl.RelativeTimeFormat();
  return format.format(offset, unit);
}
