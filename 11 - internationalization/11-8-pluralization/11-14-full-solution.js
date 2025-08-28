/**
 * 예 11-14. 복수형 규칙을 적용한 해결책
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

function formatUserCount(users) {
  // 사용자 수에 따라 메시지를 정의한다.
  const messages = {
    one: 'There is 1 user.',
    other: `There are ${users.length} users.`
  };

  // Intl.PluralRules을 사용해 표시할 메시지를 결정한다.
  const rules = new Intl.PluralRules('en-US');
  return messages[rules.select(users.length)];
}
