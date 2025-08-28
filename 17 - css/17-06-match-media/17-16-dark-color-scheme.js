/**
 * 예 17-16. 다크 테마 설정 확인
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
