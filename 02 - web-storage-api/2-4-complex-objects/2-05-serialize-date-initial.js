/**
 * 예 2-5. Date 객체의 직렬화 시도
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const userProfile = {
  firstName: 'Ava',
  lastName: 'Johnson',

  // 2025년 6월 2일을 의미하는 날짜.
  // 달(month)은 0부터 시작하지만, 날짜는 1부터 시작하는 것에 주의
  lastUpdated: new Date(2025, 5, 2)
};

const json = JSON.stringify(userProfile);
