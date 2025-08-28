/**
 * 예 6-3. waitForElement 도우미를 사용하여 게으르게 이미지를 로딩하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

function lazyLoad(img, url) {
  waitForElement(img)
    .then(() => img.src = url)
}
