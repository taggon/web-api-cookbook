/**
 * 예 2-9. reviver를 사용한 파싱
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 *
 * 예 2-8에서 작성한 reviver 함수를 사용하여 객체를 파싱하는 방법을 보여준다.
 */

const object = JSON.parse(userProfile, reviver);
