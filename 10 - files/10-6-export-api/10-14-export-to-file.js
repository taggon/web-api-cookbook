/**
 * 예 10-14. 데이터를 로컬 파일에 내보내기
 * 출처 - "실무로 통하는 웹 API" by 조 아타디
 */

async function exportData(data) {
  // 앞서 작성한 도우미 함수를 사용한다.
  const outputFile = await selectOutputFile();

  // 출력 파일이 실제로 선택되었을 때만 진행한다.
  if (outputFile) {
    try {
      // 파일을 디스크에 쓸 때 사용할 쓰기 가능 스트림을 준비한다.
      const stream = await outputFile.createWritable();

      // JSON을 쓰기 가능 스트림에 사람이 읽기 편한 형태로 작성한다.
      await stream.write(JSON.stringify(userList, null, 2));
      await stream.close();

      // 성공 메시지를 표시한다.
      document.querySelector('#export-success').classList.remove('d-none');
    } catch (error) {
      console.error(error);
    }
  }
}
