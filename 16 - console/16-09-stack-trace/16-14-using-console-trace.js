/**
 * 예 16-14. console.trace 사용
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

function foo() {
  function bar() {
    console.trace();
  }
  bar();
}

foo();
