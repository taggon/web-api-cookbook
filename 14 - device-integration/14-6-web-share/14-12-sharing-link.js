/**
 * 예 14-12. 링크 공유하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

if ('share' in navigator) {
  navigator.share({
    title: '한빛미디어',
    text: '최신 출간 서적을 확인하세요!',
    url: 'https://www.hanbit.co.kr'
  });
}
