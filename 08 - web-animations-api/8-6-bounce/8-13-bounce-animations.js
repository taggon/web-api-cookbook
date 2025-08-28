/**
 * 예 8-13. 통통 튀는 바운스 애니메이션 적용
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

async function animateBounce(element) {
  const distances = ['40px', '20px', '10px'];
  for (let distance of distances) {
    // 다음 애니메이션을 진행하기 전에 현재 애니메이션이 끝날 때까지 대기한다.
    await element.animate([
      // 바닥에서 시작
      { transform: 'translateY(0)' },

      // 현재 거리만큼 위로 이동한다.
      { transform: `translateY(-${distance})`, offset: 0.5 },

      // 다시 바닥으로 이동한다.
      { transform: 'translateY(0)' }
    ], {
      duration: 250,

      // 자연스러운 효과를 위해 기본값인 linear가 아닌 이징 함수 사용
      easing: 'ease-in-out'
    }).finished;
  }
}
