export type MetricKey =
  | "자동화 전 수작업 시간"
  | "자동화 후 처리 시간"
  | "월간 처리 건수"
  | "자동화 적용 범위"
  | "오탐률"
  | "차단 비율"
  | "분석가 검토 시간"
  | "투입 공수 감소";
export interface Project {
  id: string;
  title: string;
  category: "자동화" | "SIEM" | "플랫폼" | "AI / PoC";
  status: "구현 경험" | "설계 단계" | "PoC";
  summary: string;
  problem: string;
  approach: string;
  architecture: string[];
  implementation: string[];
  value: string;
  stack: string[];
  metrics: Partial<
    Record<MetricKey, { value: number; unit: string; evidence: string } | null>
  >;
  repository?: string;
}
