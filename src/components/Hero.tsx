import {
  ArrowDown,
  ArrowUpRight,
  Database,
  Workflow,
  Radar,
  ShieldCheck,
} from "lucide-react";
export function Hero() {
  return (
    <section id="home" className="hero container">
      <div className="hero-copy">
        <span className="eyebrow">
          <span className="signal" /> 보안운영 · 보안 자동화
        </span>
        <h1>
          보안운영의 문제를
          <br />
          <span>시스템으로 개선합니다.</span>
        </h1>
        <p className="hero-description">
          반복되는 보안운영 업무를
          <br className="desktop-break" /> 지속적으로 사용할 수 있는 시스템으로
          바꿉니다.
        </p>
        <p className="hero-detail">
          Python·SIEM·데이터베이스·API를 연결해 운영의 가시성과 업무 흐름을
          개선하는 보안운영 엔지니어입니다.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#projects">
            프로젝트 보기 <ArrowUpRight size={18} />
          </a>
          <a className="button text-button" href="#about">
            소개 보기 <ArrowDown size={16} />
          </a>
        </div>
        <div className="hero-tools mono">
          Python <span>/</span> Splunk <span>/</span> SIEM <span>/</span> 인프라
        </div>
      </div>
      <div className="system-visual" aria-label="보안운영 개선의 개념적 흐름">
        <div className="visual-header mono">
          <span>
            <span className="signal" /> 보안운영 / 시스템 관점
          </span>
          <span>01—04</span>
        </div>
        <div className="visual-core">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="core-icon">
            <ShieldCheck size={40} strokeWidth={1.3} />
          </div>
          <span className="orbit-node node-top">
            <Radar size={19} />
          </span>
          <span className="orbit-node node-right">
            <Workflow size={19} />
          </span>
          <span className="orbit-node node-bottom">
            <Database size={19} />
          </span>
          <div className="visual-label label-top">
            탐지<span>보안 신호</span>
          </div>
          <div className="visual-label label-right">
            자동화<span>반복 가능한 업무 흐름</span>
          </div>
          <div className="visual-label label-bottom">
            구조화<span>연결된 데이터</span>
          </div>
        </div>
        <div className="visual-footer">
          <span className="mono">운영 → 엔지니어링</span>
          <span className="accent">지속적인 개선 ↗</span>
        </div>
      </div>
      <div className="hero-bottom">
        <span>반복 업무는 줄이고, 운영 현황은 명확하게.</span>
        <a href="#about" className="mono">
          아래로 살펴보기 <ArrowDown size={14} />
        </a>
      </div>
    </section>
  );
}
