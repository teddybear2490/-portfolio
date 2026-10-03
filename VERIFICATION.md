# 검증 기록

2026-10-03 로컬 환경에서 확인했습니다.

- ESLint·TypeScript·Next.js 정적 빌드 통과
- 1440·768·390·320px 반응형 화면 검사
- 가로 넘침·리소스 누락·실행 오류·내부 링크 검사 통과
- 프로젝트 필터·상세 사례·모바일 메뉴 정상 동작
- 초기 화면과 펼친 AI 사례의 axe-core WCAG 2 A/AA 및 2.1 AA 검사 통과
- 한글 문구, 문서 언어 ko, OpenGraph 언어 ko_KR 적용
- 실제 경력·성과·논문 결과를 임의 생성하지 않음
- 자격증명·사설 IP 패턴 검사와 공개 내용 수동 검토

자동 접근성 검사는 보조기술 수동 테스트를 대체하지 않습니다.

## 재현
정적 빌드 후 Playwright가 설치된 환경에서 `node scripts/verify-ui.cjs`를 실행합니다. 필요하면 PLAYWRIGHT_MODULE에 패키지 절대 경로를 설정합니다. 기본 브라우저는 Microsoft Edge입니다. BROWSER_CHANNEL로 변경할 수 있습니다.

하위 경로 검사 시 빌드와 검사에 동일한 NEXT_PUBLIC_BASE_PATH를 사용합니다. 검사 서버는 4173번 포트를 사용하며 종료 시 정리됩니다. 스크린샷은 Git에서 제외되는 artifacts/에 저장됩니다.

실제 GitHub Pages 공개 상태는 Actions 실행 결과와 Pages 설정에 따라 달라집니다.
