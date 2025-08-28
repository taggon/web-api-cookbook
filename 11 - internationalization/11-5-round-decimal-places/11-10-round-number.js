/**
 * 예 11-10. 숫자 반올림
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

function roundToTwoDecimalPlaces(number) {
  const format = new Intl.NumberFormat(navigator.language, {
    maximumFractionDigits: 2
  });

  return format.format(number);
}

// "5.49" 출력
console.log(roundToTwoDecimalPlaces(5.49125));

// "5.5" 출력
console.log(roundToTwoDecimalPlaces(5.49621));
