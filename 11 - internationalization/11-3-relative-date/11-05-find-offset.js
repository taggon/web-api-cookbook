/**
 * 예 11-1. 오프셋과 단위 구하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

function getDateDifference(fromDate) {
  const today = new Date();

  if (fromDate.getFullYear() !== today.getFullYear()) {
    return { offset: fromDate.getFullYear() - today.getFullYear(), unit: 'year' };
  } else if (fromDate.getMonth() !== today.getMonth()) {
    return { offset: fromDate.getMonth() - today.getMonth(), unit: 'month' };
  } else {
    // 시, 분, 초 단위까지 더 세분화할 수 있다!
    return { offset: fromDate.getDate() - today.getDate(), unit: 'day' };
  }
}
