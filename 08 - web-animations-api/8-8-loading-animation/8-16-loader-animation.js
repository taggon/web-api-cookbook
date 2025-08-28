/**
 * 예 8-16. 로딩 애니메이션
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */
async function showLoader(promise) {
  const loader = document.querySelector('#loader');

  // 페이드인 효과 전에 빙글빙글 회전하는 애니메이션을 시작한다.
  const spin = loader.animate([
    { transform: 'rotate(0deg)' },
    { transform: 'rotate(360deg)' }
  ], { duration: 1000, iterations: Infinity });

  // opacity가 0이므로 로딩 엘리먼트는 아직 안 보이는 상태이다.
  // 이 엘리먼트를 페이드인 애니메이션과 함께 표시한다.
  // 로더 엘리먼트에는 회전 효과와 페이드인이 동시에 적용된다.
  loader.animate([
    { opacity: 0 },
    { opacity: 1 }
  ], { duration: 500, fill: 'both' });

  // Promise가 해결될 때까지 기다린다.
  await promise;

  // Promise가 완료된 상태. 로딩 엘리먼트에 페이드아웃을 적용한다.
  // 페이드아웃이 완료될 때까지 회전 애니메이션을 중단하지 않는다.
  // 'finished'의 Promise를 통해 애니메이션 완료 시까지 기다린다.
  await loader.animate([
    { opacity: 1 },
    { opacity: 0 }
  ], { duration: 500, fill: 'both' }).finished;

  // 마지막으로 회전 애니메이션을 중단한다.
  spin.cancel();

  // 체이닝을 위해 원래의 Promise를 반환한다.
  return promise;
}
