/**
 * 예 3-12. getQueryParameters 함수 사용
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

// 여기서 name 파라미터는 퍼센트 인코딩된 앰퍼샌드 문자(%26)를 포함하고 있다.
getQueryParameters('https://example.com/api/search?name=luke%26ben');
