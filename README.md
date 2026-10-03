# 보안 엔지니어링 포트폴리오

반복되는 보안운영 업무를 자동화하고 단절된 데이터를 연결하며 운영 프로세스를 시스템으로 개선하는 보안운영 엔지니어의 한글 포트폴리오입니다.

## 소개
보안운영, SIEM 엔지니어링, Python 자동화, 인프라, 프로세스 개선 및 팀 지식 공유 경험을 소개합니다. 이름과 근무기간은 확인 전까지 입력 예정으로 유지합니다. 회사·고객사명은 비공개입니다. 석사과정은 재학 중이며 미완성 논문을 포함하지 않습니다.

## 기술 구성
Next.js App Router · TypeScript · Tailwind CSS 4 · Lucide React · 정적 내보내기. 한글 시스템 글꼴을 사용하며 추적 서비스는 없습니다.

## 주요 프로젝트
1. 보안 결재 업무 통합 시스템
2. 위협 인텔리전스·방화벽 자동화
3. 보안 블랙리스트 관리 플랫폼
4. Splunk 보안 모니터링 설계
5. 보안운영 업무관리 플랫폼 — 설계 단계
6. Outlook Word 문서 자동화
7. Check Point 관리 자동화
8. 로컬 LLM 보안 분석 — 개념 검증(PoC)

문제 → 접근 방법 → 개념적 구조 → 구현 내용 → 운영 가치 → 기술 구성 순서로 설명합니다. 구현 경험이 운영 배포 완료나 정량 성과를 의미하지 않습니다.

## 구조
- `src/app/`: 페이지, 메타데이터, 스타일
- `src/components/`: 메뉴, 첫 화면, 프로젝트 및 정보 섹션
- `src/data/`: 프로필, 프로젝트, 기술 역량, 경험
- `src/types/`: 프로젝트 및 측정 지표 타입
- `scripts/`: UI·접근성 검사
- `.github/workflows/`: GitHub Pages 검증·배포

구조도는 공개용 개념 흐름이며 내부 네트워크 구성을 포함하지 않습니다.

## 로컬 개발
Node.js 22와 pnpm 11.25.0을 사용합니다.

```sh
pnpm install
pnpm dev
```

localhost:3000에서 확인합니다. 공개 프로필은 `src/data/profile.ts`, 사례 내용은 `src/data/projects.ts`에서 수정합니다.

## 빌드와 검증
```sh
pnpm lint
pnpm typecheck
pnpm build
```

정적 파일은 `out/`에 생성됩니다. 정적 HTTP 서버를 사용하며 `next start`는 사용하지 않습니다. 상세 검사 기록은 [VERIFICATION.md](VERIFICATION.md)에 있습니다.

## 배포
GitHub Pages: `main` 브랜치에 반영하면 워크플로가 검사와 빌드를 실행합니다. Settings → Pages → Source를 GitHub Actions로 설정해야 배포할 수 있습니다. 저장소 하위 경로는 자동 적용됩니다.

저장소: [teddybear2490/-portfolio](https://github.com/teddybear2490/-portfolio)

예상 공개 주소: [포트폴리오](https://teddybear2490.github.io/-portfolio/) — 실제 접속은 배포 완료 후 확인합니다.

Vercel: 저장소 가져오기 → Next.js 프리셋 → 빌드 명령 `pnpm build` → 출력 폴더 `out`. `NEXT_PUBLIC_BASE_PATH`는 설정하지 않습니다.

## 성과 지표
측정 항목은 기본값이 `null`입니다. 실제 근거가 있을 때만 `{ value, unit, evidence }`를 입력합니다. 미측정 항목은 향후 측정할 지표로 표시하며 수치를 임의 생성하지 않습니다. 근거에도 민감정보를 넣지 않습니다.

## 보안과 개인정보
회사·고객사명, 내부 주소·호스트명·계정, 실제 로그, 사용자 정보, 방화벽 객체명, 정책 값, API 키 및 비밀번호를 포함하지 않습니다. `.env*`, 의존성, 빌드 결과, 로그와 스크린샷은 Git에서 제외합니다. 패턴 검사와 수동 검토를 병행합니다.

## 접근성
본문 건너뛰기, 키보드 조작, 초점 표시, 모바일 메뉴, 동작 줄이기를 지원합니다. 브라우저 인쇄로 이력서 개요를 출력할 수 있습니다.

## 라이선스
재배포 라이선스는 지정하지 않았습니다. 소유자가 선택하기 전까지 모든 권리를 보유합니다.
