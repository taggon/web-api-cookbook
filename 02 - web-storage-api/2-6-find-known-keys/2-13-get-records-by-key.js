/**
 * 예 2-13. 일부 키/값 쌍 조회
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

function getAll(keys) {
  const results = {};

  // 로컬 스토리지에 있는 모든 키를 확인
  for (let i = 0; i < localStorage.length; i++) {

    // i번째 키를 가져와서 keys 배열에 포함되는지 확인하고,
    // 포함된다면 결과 객체에 키와 값을 추가
    const key = localStorage.key(i);
    if (keys.includes(key)) {
      results[key] = localStorage.getItem(key);
    }
  }

  // 로컬 스토리지에 존재하는 키/값 쌍이 결과로 반환
  return results;
}
