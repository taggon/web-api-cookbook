/**
 * 예 3-9. 쿼리 파라미터에서 예약 문자 인코딩하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const url = new URL('https://example.com/api/search');

// 예약 문자 인코딩을 보여주기 위한 예시 문자열
url.searchParams.append('q', 'admin&user?luke');
