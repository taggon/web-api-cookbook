/**
 * 예 17-22. 계산된 스타일 확인
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const content = document.querySelector('#content');
const styles = window.getComputedStyle(content);
console.log(styles.backgroundColor); // 'rgb(0, 0, 255)
console.log(styles.color); // 'rgb(255, 255, 255)'
