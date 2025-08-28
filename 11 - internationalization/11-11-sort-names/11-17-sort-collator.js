/**
 * 예 11-17. Intl.Collator를 사용한 이름 배열 정렬
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const names = [
  'Elena',
  'Mário',
  'André',
  'Renée',
  'Léo',
  'Olga',
  'Héctor',
]

const collator = new Intl.Collator();
names.sort(collator.compare);
