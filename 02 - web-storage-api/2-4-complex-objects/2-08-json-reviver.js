/**
 * 예 2-8. reviver 함수
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

function reviver(key, value) {
  // JSON.parse는 각 키/값 쌍에 대해 reviver 함수를 호출한다.
  // 여기서는 lastUpdated 키만 확인한다.
  // lastUpdated의 값이 실제로 존재하는 경우에만 처리한다.
  if (key === 'due' && value) {
    // 여기서 value는 타임스탬프이므로 이 값을 Date 생성자에 전달하면
    // 해당 시각을 나타내는 Date 객체를 생성할 수 있다.
    return new Date(value);
  }

  // 그 밖의 다른 값은 모두 그대로 반환한다.
  return value;
}

const object = JSON.parse(todo, reviver);
