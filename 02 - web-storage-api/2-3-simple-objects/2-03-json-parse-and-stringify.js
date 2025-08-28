/**
 * 예 2-3. JSON.parse와 JSON.stringify 사용
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

/**
 * 주어진 사용자 프로필 객체를 JSON으로 직렬화하여 로컬 스토리지에 저장한다.
 * @param userProfile 저장할 사용자 프로필 객체
 */
function saveProfile(userProfile) {
  localStorage.setItem('userProfile', JSON.stringify(userProfile));
}

/**
 * 사용자 프로필을 로컬 스토리지에서 읽어오고,
 * JSON을 역직렬화하여 객체로 복원한다.
 * 저장된 프로필이 없다면 빈 객체를 반환한다.
 * @returns 저장된 사용자 프로필 또는 빈 객체
 */
function loadProfile() {
  // 저장된 userProfile 값이 없다면 null이 반환되는데,
  // 여기서는 기본값으로 빈 객체를 사용했다.
  return JSON.parse(localStorage.getItem('userProfile')) || {};
}
