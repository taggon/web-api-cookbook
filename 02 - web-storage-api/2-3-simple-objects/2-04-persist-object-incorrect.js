/**
 * 예 2-4. 배열 저장 시도
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 *
 * `localStorage.setItem`을 사용해 객체를 바로 저장할 수 없음을 보여준다.
 */

const userProfile = {
  firstName: 'Ava',
  lastName: 'Johnson'
};

localStorage.setItem('userProfile', userProfile);

// [object Object] 출력
console.log(localStorage.getItem('userProfile'));
