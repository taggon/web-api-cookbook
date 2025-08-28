/**
 * 예 16-10. 카운터 사용
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const users = [
  { id: 1, firstName: "태호", lastName: "박", department: "영업" },
  { id: 2, firstName: "지연", lastName: "정", department: "마케팅" },
  { id: 3, firstName: "민수", lastName: "이", department: "인사" },
  { id: 4, firstName: "서현", lastName: "김", department: "재무" },
  { id: 5, firstName: "도윤", lastName: "최", department: "제품개발" }
];

users.forEach(user => {
  console.count('user');
});
