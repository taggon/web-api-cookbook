/**
 * 예 1-4. Promise 체인 사용
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 *
 * Promise를 반환하는 getUser와 getPosts 함수가 있다고 가정한다.
 */

/**
 * 주어진 사용자 ID에 해당하는 모든 게시글 제목을 읽어 온다.
 * @param userId 게시글을 조회하려는 사용자의 아이디
 * @returns 게시글 제목 배열을 해결하는 Promise
 */
function getPostTitles(userId) {
  return getUser(userId)
    // 콜백은 사용자 객체를 읽어 들인 후에 호출된다.
    .then(user => {
      console.log(`${user.name} 사용자의 게시글 읽는 중`);
      // .then에서 반환되는 Promise
      return getPosts(user);
    })
    // getPosts에서 반환한 Promise의 then 호출
    .then(posts => {
      // 게시글 제목 배열을 해결하는 또 다른 Promise를 반환한다.
      return posts.map(post => post.title);
    })
    // getUser나 getPosts가 거부되는 경우 호출된다.
    .catch(error => {
      console.error('데이터를 읽는 중 에러 발생:', error);
    });
}
