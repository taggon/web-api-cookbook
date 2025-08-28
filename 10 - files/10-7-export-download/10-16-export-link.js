/**
 * 예 10-16. 내보내기 링크 준비
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

const exportLink = document.querySelector('#export-link');

async function getUserData() {
  const response = await fetch('/api/users');
  const users = await response.json();

  // 사용자 데이터를 UI에 렌더링한다. 이 작업을 담당하는
  // renderUsers 함수가 정의되어 있다고 가정한다.
  renderUsers(users);

  // 이전에 내보냈던 데이터가 있다면 삭제한다.
  const currentUrl = exportLink.href;
  if (currentUrl) {
    URL.revokeObjectURL(currentUrl);
  }

  // 객체 URL을 작성하기 위해 필요한 Blob 객체
  const blob = new Blob([JSON.stringify(userList, null, 2)], {
    type: 'application/json'
  });

  // 해당 Blob 콘텐츠를 가리키는 객체 URL을 만들고 링크에 설정한다.
  const url = URL.createObjectURL(blob);
  exportLink.href = url;
}
