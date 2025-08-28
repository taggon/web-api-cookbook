/**
 * 예 2-6. replacer 함수
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

function replacer(key, value) {
  if (key === '') {
    // replacer가 처음 호출될 때 "value"에는 객체 그 자체가 전달된다.
    // 객체의 모든 프로퍼티를 반환하되, lastUpdated만 변환한다.
    // lastUpdated 프로퍼티를 추가하기 전에 객체 전개 구문을 사용하여
    // "value"의 사본을 작성한다.
    return {
      ...value,
      due: value.due.getTime()
    };
  }

  // 초기 변환이 끝난 후에 replacer는 각각의 키/값 쌍으로 다시 호출된다.
  // 추가적인 변환은 필요없으므로 그대로 반환한다.
  return value;
}

const json = JSON.stringify(todo, replacer);
