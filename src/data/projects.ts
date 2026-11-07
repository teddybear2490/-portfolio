import { achievements } from "./achievements";
import type { Project } from "@/types";
const previousProjects: Project[] = [
  {
    id: "approval",
    title: "보안 결재 업무 통합 시스템",
    category: "플랫폼",
    status: "구현 경험",
    summary: "분산된 결재 확인을 공동 업무 관리 구조로 전환합니다.",
    problem:
      "개별 결재 확인 방식으로는 담당자와 처리 상태를 일관되게 추적하기 어려웠습니다.",
    approach:
      "결재 데이터를 수집해 Access DB에 저장하고 관리용 GUI에서 통합 조회하도록 설계했습니다.",
    architecture: [
      "결재 데이터",
      "Python 수집기",
      "Access DB",
      "Tkinter 업무 화면",
      "처리 기록",
    ],
    implementation: [
      "요청일, 문서번호, 결재 상태 및 요청 내용을 수집합니다.",
      "요청을 필터링·검색하고 담당자를 지정하며 처리 결과를 기록합니다.",
      "새로고침, 완료 처리, 변경사항 저장 및 원문 접근을 지원합니다.",
    ],
    value:
      "결재 현황을 중앙화하고 담당자와 처리 기록을 함께 관리할 수 있도록 개선했습니다.",
    stack: ["Python", "Tkinter", "Microsoft Access"],
    metrics: {
      "자동화 전 수작업 시간": null,
      "자동화 후 처리 시간": null,
      "월간 처리 건수": null,
    },
  },
  {
    id: "threat",
    title: "위협 인텔리전스·방화벽 자동화",
    category: "자동화",
    status: "구현 경험",
    summary:
      "탐지 분석, 위협정보 조회, 대응 절차를 하나의 흐름으로 연결합니다.",
    problem:
      "탐지 이메일마다 IP 추출, 평판 조회, 방화벽 처리를 반복해야 했습니다.",
    approach:
      "탐지 내용을 파싱하고 VirusTotal로 출발지 IP를 조회한 뒤 정책 기준에 따른 위험 평가를 Check Point API와 연계했습니다.",
    architecture: [
      "보안 탐지 알림",
      "Outlook",
      "Python 파서",
      "IP 추출",
      "위협정보 조회",
      "위험 평가",
      "Check Point API",
      "보안 그룹",
      "변경 게시",
      "정책 적용",
      "HTML 결과 보고",
    ],
    implementation: [
      "Outlook COM으로 IPS·방화벽·WAF 탐지 이메일을 분석합니다.",
      "API 호출 제한을 고려하고 설정된 임계값을 기준으로 판단합니다.",
      "그룹 변경, 게시, 정책 적용 결과를 HTML 보고서로 연결합니다.",
    ],
    value:
      "반복되는 위협정보 조회와 대응 단계를 일관된 업무 흐름으로 연결했습니다.",
    stack: ["Python", "Outlook COM", "VirusTotal API", "Check Point API"],
    metrics: {
      "차단 비율": null,
      "분석가 검토 시간": null,
      오탐률: null,
    },
  },
  {
    id: "blacklist",
    title: "보안 블랙리스트 관리 플랫폼",
    category: "플랫폼",
    status: "구현 경험",
    summary: "IP·URL 블랙리스트를 중앙에서 관리하고 배포합니다.",
    problem:
      "분산된 블랙리스트 파일은 데이터 일관성과 유효기간 관리가 어려웠습니다.",
    approach:
      "중앙 DB에서 항목을 관리하고 정제된 데이터를 내보내기·API 계층으로 배포했습니다.",
    architecture: [
      "보안 분석가",
      "Python 관리 GUI",
      "MariaDB",
      "내보내기 / API",
      "보안 장비",
    ],
    implementation: [
      "항목 검색·추가·수정·분류 및 활성·비활성 관리를 지원합니다.",
      "만료일, 중복 제거, 텍스트 가져오기 및 데이터 정제를 관리합니다.",
      "보안 솔루션에 전달할 데이터를 예약 내보내기합니다.",
    ],
    value:
      "블랙리스트를 검색 가능한 중앙 데이터로 관리하고 일관된 배포를 지원합니다.",
    stack: ["Python", "Tkinter", "MariaDB", "PHP"],
    metrics: { "월간 처리 건수": null, "자동화 적용 범위": null },
  },
  {
    id: "splunk",
    title: "Splunk 보안 모니터링 설계",
    category: "SIEM",
    status: "구현 경험",
    summary: "운영에 필요한 질문을 탐지 로직과 대시보드로 구현합니다.",
    problem:
      "보안·인프라 원본 이벤트만으로는 운영 상태를 바로 파악하기 어려웠습니다.",
    approach:
      "SPL 기반 탐지·모니터링 로직에 Lookup, 예외 관리 및 대시보드를 결합했습니다.",
    architecture: [
      "보안 이벤트",
      "Splunk / DB Connect",
      "SPL과 Lookup",
      "탐지 로직",
      "운영 대시보드",
    ],
    implementation: [
      "VPN 비정상 시간대 접속, HA 전환 및 인터페이스 Down/Up을 탐지합니다.",
      "방화벽 활성 비율과 주간 상위 이벤트 통계를 제공합니다.",
      "Geo IP 시각화, 예외 Lookup 및 Lookup 기반 상태 관리를 구현했습니다.",
    ],
    value:
      "이벤트 데이터를 실무에 활용할 수 있는 모니터링 정보와 운영 가시성으로 전환했습니다.",
    stack: ["Splunk", "SPL", "DB Connect", "Lookup", "대시보드"],
    metrics: { 오탐률: null, "분석가 검토 시간": null },
  },
  {
    id: "operations",
    title: "보안운영 업무관리 플랫폼",
    category: "플랫폼",
    status: "설계 단계",
    summary: "업무·사고·지식·자산을 연결하는 통합 운영 모델입니다.",
    problem:
      "분산된 운영 기록으로는 업무량, 분석 판단 및 자산 변경을 연결해 보기 어려웠습니다.",
    approach:
      "구조화된 기록으로 운영 모듈을 연결하는 내부 업무관리 플랫폼을 설계했습니다.",
    architecture: [
      "운영 모듈",
      "구조화된 기록",
      "담당자와 상태",
      "대시보드",
      "팀 검토",
    ],
    implementation: [
      "대시보드, 헬프데스크, 결재, 작업, 일정 및 보안 위키 모듈을 설계했습니다.",
      "탐지 맥락, 조치 결과, 분석 담당자와 정탐·오탐·분석 중 판단을 사고 기록에 포함합니다.",
      "인터페이스, 자원 현황, H/W EoS, 변경 사유 및 논리 삭제를 포함한 자산 수명주기를 설계했습니다.",
    ],
    value:
      "개별 티켓 처리에서 데이터 기반 업무 현황·수명주기 관리로 전환하는 것을 목표로 설계했습니다.",
    stack: ["운영 데이터 모델링", "업무 흐름 설계", "대시보드 설계"],
    metrics: {
      "월간 처리 건수": null,
      "분석가 검토 시간": null,
      "투입 공수 감소": null,
    },
  },
  {
    id: "documents",
    title: "Outlook Word 문서 자동화",
    category: "자동화",
    status: "구현 경험",
    summary: "반복 수신되는 Word 첨부문서를 구조화된 데이터로 바꿉니다.",
    problem:
      "반복적인 이메일 검색과 수작업 표 추출이 일상 업무 처리에 부담을 주었습니다.",
    approach:
      "조건에 맞는 Outlook 메시지를 검색하고 첨부문서를 내려받아 마지막 표를 추출했습니다.",
    architecture: [
      "Outlook",
      "이메일 검색",
      "첨부문서 다운로드",
      "DOCX 분석",
      "마지막 표 추출",
      "구조화된 데이터",
    ],
    implementation: [
      "정의된 조건으로 메시지를 검색하고 문서의 마지막 표를 추출합니다.",
      "로깅, 예외 처리 및 중복 방지를 포함합니다.",
      "반복 실행을 고려한 모듈 구조로 구성했습니다.",
    ],
    value: "문서 분석 자동화로 반복적인 수작업 처리를 줄였습니다.",
    stack: ["Python", "pywin32", "Outlook COM", "python-docx"],
    metrics: { "자동화 전 수작업 시간": null, "자동화 후 처리 시간": null },
  },
  {
    id: "checkpoint",
    title: "Check Point 관리 자동화",
    category: "자동화",
    status: "구현 경험",
    summary: "방화벽 관리 작업을 재사용 가능한 API 흐름으로 구성합니다.",
    problem:
      "반복되는 객체·세션 작업을 일관된 절차로 처리할 필요가 있었습니다.",
    approach:
      "Check Point Management API와 세션 수명주기를 중심으로 Python 자동화 흐름을 구현했습니다.",
    architecture: [
      "Python 업무 흐름",
      "API 로그인",
      "호스트 / 그룹 작업",
      "변경 게시",
      "정책 적용",
      "세션 관리",
    ],
    implementation: [
      "호스트 생성, 그룹 추가, 객체 내보내기 및 일괄 처리를 지원합니다.",
      "로그인, 변경 게시, 정책 적용 및 세션 관리를 자동화합니다.",
      "HA 상태 탐지와 Paramiko 연계를 포함합니다.",
    ],
    value:
      "반복되는 방화벽 관리 절차를 재사용 가능하고 일관된 형태로 구성했습니다.",
    stack: ["Python", "Paramiko", "Check Point Management API"],
    metrics: { "자동화 적용 범위": null, "자동화 후 처리 시간": null },
  },
  {
    id: "llm",
    title: "로컬 LLM 보안 분석 개념 검증",
    category: "AI / PoC",
    status: "PoC",
    summary:
      "이기종 보안 로그에서 분석가가 검토할 보고서 생성 구조를 검증합니다.",
    problem:
      "IPS·WAF·방화벽 로그는 분석 전에 관련 맥락을 통합할 필요가 있습니다.",
    approach:
      "IP 기준 수집, 정규화, 로컬 추론 및 분석가 검토를 포함한 구조를 검증하고 있습니다.",
    architecture: [
      "보안 로그",
      "정규화",
      "맥락 통합",
      "로컬 LLM",
      "보안 분석",
      "정형 보고서",
      "분석가 검토",
    ],
    implementation: [
      "개발·검증 단계이며 운영 적용이 완료된 프로젝트가 아닙니다.",
      "로컬 환경: Intel i7-8700, RAM 40 GB, GTX 1650 4 GB, Windows, Ollama.",
      "보고서 구조와 생성된 분석 결과의 검토 절차를 실험합니다.",
    ],
    value:
      "분석가 검토를 유지하면서 AI 보조 보안 분석의 활용 가능성을 검증합니다.",
    stack: ["Ollama", "로컬 LLM", "로그 정규화", "PoC"],
    metrics: { "분석가 검토 시간": null, 오탐률: null },
  },
];

export const projects: Project[] = [
  ...achievements.map((item, index): Project => ({
    id: `improvement-${index}`,
    title: item.title,
    category: index === 0 ? "자동화" : "플랫폼",
    status: "구현 경험",
    summary: item.value,
    problem: item.problem,
    approach: item.action,
    architecture:
      index === 0
        ? [
            "위협 지표 수집",
            "DB 저장",
            "허용 목록 검증",
            "담당자 승인",
            "솔루션 연동",
            "보고서 생성",
          ]
        : index === 1
          ? ["웹 프록시", "ICAP 연동", "APT 샌드박스", "위협 지표 대응"]
          : ["업무 기록", "이력 추적", "표준 절차", "팀 지식 공유"],
    implementation: [item.action],
    value: item.value,
    stack: item.stack,
    metrics: {},
  })),
  ...previousProjects.filter((p) => !["threat", "blacklist"].includes(p.id)),
];
