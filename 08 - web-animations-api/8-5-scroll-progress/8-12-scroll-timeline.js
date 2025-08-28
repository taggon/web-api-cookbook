/**
 * 예 8-12. 스크롤 타임라인 생성하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const progress = document.querySelector('.scroll-progress');

// 문서의 스크롤 위치와 연결된 timeline을 생성한다.
const timeline = new ScrollTimeline({
  source: document.documentElement
});

// 애니메이션을 시작하면서 방금 작성한 timeline을 전달한다.
progress.animate(
  [
    { transform: 'scaleX(0)' },
    { transform: 'scaleX(1)' }
  ],
  { timeline });
