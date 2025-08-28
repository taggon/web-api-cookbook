/**
 * 예 16-9. 콘솔 그룹 사용
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const users = [
  { id: 1, firstName: "태호", lastName: "박", department: "영업" },
  { id: 2, firstName: "지연", lastName: "정", department: "마케팅" },
  { id: 3, firstName: "민수", lastName: "이", department: "인사" },
  { id: 4, firstName: "서현", lastName: "김", department: "재무" },
  { id: 5, firstName: "도윤", lastName: "최", department: "제품개발" }
];

console.log('사용자 데이터 업데이트 중');
for (const user of users) {
  console.group(`사용자: ${user.firstName} ${user.lastName}`);
  console.log('API에서 직원 정보 읽는 중');
  const response = await fetch(`/ api / users / ${user.id}`);
  const userData = await response.json();

  console.log('프로필 업데이트 중');
  userData.lastUpdated = Date.now();

  console.log('사용자 데이터 저장 중');
  await fetch(`/ api / users / ${user.id}`, {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  console.groupEnd();
}
