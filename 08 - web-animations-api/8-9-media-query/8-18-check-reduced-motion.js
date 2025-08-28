/**
 * 예 8-18. prefers-reduced-motion 미디어 쿼리 사용
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  // 동작을 줄이도록 설정되어 있지 않다면 일반적인 애니메이션을 보여준다.
} else {
  // 애니메이션을 아예 안 보여주거나 덜 역동적으로 보여준다.
}
