/**
 * 예 6-7. 페이지를 스크롤할 때 가시 영역에 들어온 이미지에 페이드인 효과 적용하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const observer = new IntersectionObserver(entries => {
  // 한 번에 다량의 이미지에 적용되므로 entries에 다수의 이미지가 포함된다.
  entries.forEach(entry => {
    // O엘리먼트의 일부가 화면에 보이면, 애니메이션 트랜지션을 적용한다.
    if (entry.isIntersecting) {
      // 이미지의 25%가 화면에 보이면, 페이드인 트랜지션을 시작한다.
      entry.target.style.opacity = 1;

      // 한 번 실행된 후에는 더 실행할 필요가 없다.
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.25 }); // 이미지의 25%가 화면에 보일 때 발생

// 페이지의 모든 이미지 중 'animate' 클래스가 있는 이미지만
// 감시한다. 원하는 이미지만 감시하면 되기 때문이다.
document.querySelectorAll('img.animate').forEach(image => {
  observer.observe(image);
});
