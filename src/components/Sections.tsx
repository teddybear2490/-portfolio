import {
  ArrowUpRight,
  Check,
  GraduationCap,
  Github,
  Layers,
  Network,
  Workflow,
} from "lucide-react";
import { skills } from "@/data/skills";
import { experience } from "@/data/experience";
import { certifications, learning, profile } from "@/data/profile";
export function About() {
  return (
    <section id="about" className="section container">
      <div className="about-grid">
        <div>
          <span className="eyebrow">01 / 소개</span>
          <h2>
            개별 알림을 넘어,
            <br />
            운영 구조를 살펴봅니다<span className="accent">.</span>
          </h2>
        </div>
        <div className="about-copy">
          <p className="lead">
            왜 같은 업무가 반복되는지, 무엇을 바꿔야 더 나아지는지 고민합니다.
          </p>
          <p>
            보안운영 현장에서 문제를 발견하고 데이터·프로세스·담당자·시스템
            관점으로 나눠 분석합니다. Python, SIEM, 데이터베이스, API를 활용해
            단절된 업무를 연결합니다.
          </p>
          <p>
            운영자가 지속적으로 사용하고 유지할 수 있는 도구를 만드는 것을
            중요하게 생각합니다. 네트워크와 인프라, 분석가의 검토를 포함한 AI
            활용으로 기술 범위를 넓히고 있습니다.
          </p>
        </div>
      </div>
      <div className="principles">
        {[
          {
            icon: Network,
            title: "문제 구조화",
            text: "반복 업무의 데이터, 인수인계, 담당자 관계를 파악합니다.",
          },
          {
            icon: Workflow,
            title: "연결과 자동화",
            text: "Python·데이터베이스·API로 반복 가능한 업무 흐름을 만듭니다.",
          },
          {
            icon: Layers,
            title: "지속 가능한 운영",
            text: "담당자, 처리 기록, 가시성, 실제 사용성을 함께 설계합니다.",
          },
        ].map(({ icon: Icon, title, text }, i) => (
          <article key={title}>
            <span className="principle-number mono">0{i + 1}</span>
            <Icon size={24} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
export function Experience() {
  return (
    <section id="experience" className="section section-tinted">
      <div className="container experience-grid">
        <div>
          <span className="eyebrow">03 / 경험</span>
          <h2>
            현장 경험을 바탕으로
            <br />
            운영의 기반을 다집니다<span className="accent">.</span>
          </h2>
          <p className="section-description">
            보안운영 · SIEM 엔지니어링
            <br />
            보안 인프라 · 프로세스 개선
          </p>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article key={item.title}>
              <span className="mono accent">{item.period}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="container team-panel">
        <span className="eyebrow">팀과 운영</span>
        <h3>인수인계 이후에도 이어지는 지식을 만듭니다.</h3>
        <p>
          문서화, 담당자 백업 체계, 실무 교육을 통해 소규모 팀의 일관된 운영을
          돕습니다.
        </p>
        <div className="training">
          {["오전 교육", "오후 복습", "실습 과제", "피드백"].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <p className="mono muted">매주 / 담당자를 순환하며 20분 지식 공유</p>
      </div>
    </section>
  );
}
export function Skills() {
  return (
    <section id="skills" className="section container">
      <div className="section-head">
        <div>
          <span className="eyebrow">04 / 기술 역량</span>
          <h2>
            업무 개선을 뒷받침하는
            <br />
            기술과 도구<span className="accent">.</span>
          </h2>
        </div>
        <p>
          실무 경험과
          <br />
          학습·개념 검증 영역을 구분합니다.
        </p>
      </div>
      <div className="skills-grid">
        {skills.map((group, i) => (
          <article key={group.name} className={i === 5 ? "learning-card" : ""}>
            <span className="mono muted">
              0{i + 1} / {i === 5 ? "학습 · 검증" : "실무 경험"}
            </span>
            <h3>{group.name}</h3>
            <div className="tags">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
export function Credentials() {
  return (
    <section id="resume" className="section section-tinted">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">05 / 자격과 성장</span>
            <h2>
              전문성의 기반과
              <br />
              앞으로의 방향<span className="accent">.</span>
            </h2>
          </div>
          <a className="button secondary" href="#resume-overview">
            이력서 요약 보기 ↓
          </a>
        </div>
        <div className="credentials-grid">
          <article id="certifications">
            <span className="eyebrow">보유 자격증</span>
            <h3>검증된 기초 역량</h3>
            <ul className="cert-list">
              {certifications.map((cert) => (
                <li key={cert}>
                  <Check size={16} />
                  {cert}
                </li>
              ))}
            </ul>
          </article>
          <article id="education">
            <GraduationCap size={28} className="accent" />
            <h3>
              정보보호 관련 대학원
              <br />
              석사과정
            </h3>
            <span className="status poc">재학 중</span>
            <p>현재 학습 분야</p>
            <div className="tags">
              {learning.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        </div>
        <div className="growth">
          <h3>성장 방향</h3>
          <p>
            <strong>최소 기능 구현 → 검증 → 확장.</strong> 초기 범위를 작게
            설정하고 핵심 보안 엔지니어링 역량을 중심으로 학습 우선순위를
            관리합니다. 운영 효과와 조직 기여를 실제 지표로 설명하는 역량도
            강화하고 있습니다.
          </p>
        </div>
        <div className="resume-summary" id="resume-overview">
          <span className="eyebrow">이력서 / 핵심 요약</span>
          <h3>{profile.role}</h3>
          <p>이름: {profile.name} · 근무기간: [근무기간] · 조직 정보 비공개</p>
          <p>
            보안운영 / SIEM 엔지니어링 / 보안 자동화 / 보안 인프라 / Python
            자동화 / 프로세스 개선
          </p>
          <p>
            프로젝트 사례와 실무 경험은 위 섹션에서 확인할 수 있습니다.
            석사과정은 재학 중이며, 자격증은 실제 보유 항목만 표시합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
export function Contact() {
  return (
    <section id="contact" className="section container contact">
      <span className="eyebrow">06 / 연락과 연결</span>
      <h2>
        더 나은 보안운영을
        <br />
        함께 만들어갑니다<span className="accent">.</span>
      </h2>
      <p>
        프로젝트를 살펴보고,
        <br />
        보안운영·자동화·유지 가능한 시스템에 대해 이야기해 주세요.
      </p>
      <div className="hero-actions">
        {profile.github ? (
          <a
            className="button primary"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={18} /> GitHub 저장소 <ArrowUpRight size={16} />
          </a>
        ) : (
          <span className="contact-placeholder">
            <Github size={18} /> [GITHUB URL] · 입력 예정
          </span>
        )}
        {profile.contactUrl && (
          <a className="button secondary" href={profile.contactUrl}>
            연락하기 <ArrowUpRight size={16} />
          </a>
        )}
        {profile.linkedin && (
          <a
            className="button text-button"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
        )}
      </div>
      {!profile.contactUrl && (
        <p className="contact-note">공개 연락 링크: [연락처 URL]</p>
      )}
    </section>
  );
}
