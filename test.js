const { GoogleGenerativeAI } = require("@google/generative-ai");

async function verify() {
  console.log("연결 시도 중...");
  // 여기에 API 키가 들어가야 하지만, 일단 설치가 잘 됐는지 구조만 확인합니다.
  if (GoogleGenerativeAI) {
    console.log("✅ 제미나이 라이브러리가 정상적으로 로드되었습니다!");
    console.log("이제 API 키를 설정하고 코드를 작성하면 됩니다.");
  }
}
verify();
