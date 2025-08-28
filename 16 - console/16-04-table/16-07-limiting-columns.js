/**
 * 예 16-7. 출력할 표 칼럼 제한
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const users = [
  { firstName: "태호", lastName: "박", department: "영업" },
  { firstName: "지연", lastName: "정", department: "마케팅" },
  { firstName: "민수", lastName: "이", department: "인사" },
  { firstName: "서현", lastName: "김", department: "재무" },
  { firstName: "도윤", lastName: "최", department: "제품개발" }
];

console.table(users, ['firstName', 'lastName']);
