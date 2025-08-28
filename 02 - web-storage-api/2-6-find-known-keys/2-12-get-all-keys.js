/**
 * 예 2-12. 키 목록 생성
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

/**
 * 로컬 스토리지 영역에서 발견된 모든 키를 배열로 생성한다.
 * @returns 키의 배열
 */
function getAllKeys() {
  const keys = [];

  for (let i = 0; i < localStorage.length; i++) {
    keys.push(localStorage.key(i));
  }

  return keys;
}
