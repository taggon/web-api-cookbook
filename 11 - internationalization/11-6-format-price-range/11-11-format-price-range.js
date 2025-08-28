/**
 * 예 11-11. 가격 범위 포맷하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

function formatPriceRange(prices) {
  const format = new Intl.NumberFormat(navigator.language, {
    style: 'currency',

    // style: 'currency'을 사용할 때는 통화 코드도 필요하다.
    currency: 'USD'
  });
  return format.formatRange(
    // 배열에서 최저가를 찾는다.
    Math.min(...prices),

    // 배열에서 최고가를 찾는다.
    Math.max(...prices)
  );
}

// en-US 로케일에서는 '$1.75 - $11.00 '를 출력한다.
console.log(
  formatPriceRange([5.5, 3, 1.75, 11, 9.5])
);
