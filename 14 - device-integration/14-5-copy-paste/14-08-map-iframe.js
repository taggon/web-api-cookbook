/**
 * 예 14-8. 지도 iframe 생성
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

// 아이디가 'map'인 엘리먼트가 페이지에 있다고 가정한다.
const map = document.querySelector('#map');

navigator.geolocation.getCurrentPosition(position => {
  const { latitude, longitude } = position.coords;

  // iframe 크기를 원하는 대로 조정한다.
  const iframe = document.createElement('iframe');
  iframe.width = 450;
  iframe.height = 250;

  // 지도 종류가 URL에 포함되어야 한다.
  const url = new URL('https://www.google.com/maps/embed/v1/place');

  // 'key' 파라미터에 API 키를 입력한다.
  url.searchParams.append('key', 'YOUR_GOOGLE_MAPS_API_KEY');

  // 'q' 파라미터는 쉼표로 구분한 위도와 경도를 포함한다.
  url.searchParams.append('q', `${latitude},${longitude}`);
  iframe.src = url;

  map.appendChild(iframe);
});
