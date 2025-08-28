/**
 * 예 2-1. 로컬 스토리지 지원 여부 확인
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

/**
 * 로컬 스토리지 지원 여부를 확인한다.
 * @returns 브라우저가 로컬 스토리지를 사용할 수 있으면 true, 그 외엔 false
 */
function isLocalStorageAvailable() {
  try {
    // 해당 프로퍼티가 있으면 로컬 스토리지를 사용할 수 있다.
    return typeof window.localStorage !== 'undefined';
  } catch (error) {
    // window.localStorage는 있지만 사용자가 막아 놓은 경우에는
    // 해당 프로퍼티를 읽으면 예외가 발생한다.
    // 이때는 로컬 스토리지를 사용할 수 없는 것으로 판단한다.
    return false;
  }
}
