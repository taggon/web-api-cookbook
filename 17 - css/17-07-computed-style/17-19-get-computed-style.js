/**
 * 예 17-19. 계산된 스타일 가져오기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const content = document.querySelector('#content');
const styles = window.getComputedStyle(content);
console.log(styles.backgroundColor);
