/**
 * 예 2-10. 팩토리를 사용한 toJSON 함수 추가
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

/**
 * 사용자 프로필 객체를 생성하는 팩토리 함수
 * lastUpdated 프로퍼티를 오늘 날짜로 설정하고 toJSON 메서드를 추가한다.
 *
 * @param firstName 사용자의 이름
 * @param lastName 사용자의 성
 */
function createUser(firstName, lastName) {
  return {
    firstName,
    lastName,
    lastUpdated: new Date(),
    toJSON() {
      return {
        firstName: this.firstName,
        lastName: this.lastName,
        lastUPdated: this.lastUpdated.getTime()
      };
    }
  }
}

const userProfile = createUser('Ava', 'Johnson');
