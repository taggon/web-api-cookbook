/**
 * 예 1-8. requestAnimationFrame을 사용한 페이드아웃 애니메이션
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 *
 * requestAnimationFrame 함수를 사용한 엘리먼트의 불투명도(opacity) 애니메이션
 */

const animationSeconds = 2; // 애니메이션 길이: 2초
const fps = 60; // 부드러운 애니메이션을 위한 설정

// 각 프레임 사이 시간 간격
const frameInterval = 1000 / fps;

// 애니메이션을 위한 전체 프레임 수
const frameCount = animationSeconds * fps;

// 각 프레임에서 조정할 불투명도의 양
const opacityIncrement = 1 / frameCount;

// 가장 최근 프레임의 타임스탬프
let lastTimestamp;

// 불투명도 시작 값
let opacity = 1;

function fade(timestamp) {
  // 기존에 설정된 값이 없으면 현재 시간을 최근 타임스탬프로 설정
  if (!lastTimestamp) {
    lastTimestamp = timestamp;
  }

  // 가장 최근 프레임으로부터 경과한 시간을 계산한다.
  // 애니메이션을 실행하기에 너무 이르다면
  // 이 함수의 다음 호출을 예약하고 함수를 종료한다.
  const elapsed = timestamp - lastTimestamp;
  if (elapsed < frameInterval) {
    requestAnimationFrame(animate);
    return;
  }

  // 새 애니메이션 프레임의 시간. 이 타임스탬프를 기억해 둔다.
  lastTimestamp = timestamp;

  // 불투명도를 조정하되, 0보다 작아지지 않도록 주의한다.
  opacity = Math.max(0, opacity - opacityIncrement)
  box.style.opacity = opacity;

  // opacity의 값이 목표인 0에 도달하지 않았다면 이 함수의 다음 호출을 예약한다.
  if (opacity > 0) {
    requestAnimationFrame(animate);
  }
}

// 애니메이션 함수의 첫 번째 호출을 예약한다.
requestAnimationFrame(fade);
