/**
 * 예 11-13. 복수형 선택하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

// 사용자 정보를 포함한 배열
const users = getUsers();

const rules = new Intl.PluralRules('en-US');
const form = rules.select(users.length);
