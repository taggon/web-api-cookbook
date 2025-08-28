/**
 * 예 1-2. 이미지 로딩 에러에 대비하기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

/**
 * 이미지를 읽어 들인다. 읽는 도중 에러가 발생하면
 * 대비책으로 마련한 URL을 대신 사용한다.
 *
 * @param url 읽어 들인 이미지의 URL
 * @param fallbackUrl 에러가 발생한 경우 대신 사용할 이미지의 URL
 * @returns DOM에 삽입할 Image 엘리먼트를 해결하는 Promise
 */
function loadImage(url, fallbackUrl) {
  return new Promise((resolve, reject) => {
    const image = new Image();

    // 주어진 URL에 있는 이미지 로딩을 시도
    image.src = url;

    // 성공적으로 읽어 들이면 이미지에서 'load' 이벤트가 발생한다.
    image.addEventListener('load', () => {
      // 읽어 들인 이미지를 사용해 Promise 해결
      resolve(image);
    });

    // 이미지를 읽어 들이지 못했으면 'error' 이벤트가 발생한다.
    image.addEventListener('error', error => {
      // 다음 두 가지 경우에 Promise를 거부한다:
      // (1) 대신할 URL이 없는 경우
      // (2) 대신할 URL에서 읽는 것도 실패한 경우
      if (!fallbackUrl || image.src === fallbackUrl) {
        reject(error);
      } else {
        // 이 코드가 실행된다면, 원하는 이미지를 읽어 들이지 못했다는 의미이다.
        // 대신할 이미지를 읽어 들이도록 시도한다.
        image.src = fallbackUrl;
      }
    });
  });
}

loadImage('https://example.com/profile.jpg', 'https://example.com/fallback.jpg')
  .then(image => {
    // container는 DOM에 이미 존재하는 엘리먼트로서, 이미지를 여기에 추가한다.
    container.appendChild(image);
  }).catch(error => {
    console.error('이미지 로딩 실패');
  });
