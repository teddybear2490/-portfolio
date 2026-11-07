import { achievements } from "@/data/achievements";

export function Achievements() {
  return (
    <section id="achievements" className="section container">
      <div className="section-head">
        <div>
          <span className="eyebrow">핵심 개선 사례</span>
          <h2>
            효율화에서 가시성,
            <br />
            운영의 체계화까지<span className="accent">.</span>
          </h2>
        </div>
        <p>비즈니스 연속성과 보안성의 균형을 고려한 개선 경험입니다.</p>
      </div>
      <div className="achievement-grid">
        {achievements.map((item) => (
          <article className="project-card" key={item.title}>
            <span className="eyebrow">{item.theme}</span>
            <h3>{item.title}</h3>
            <div className="case-content">
              <h4>문제</h4>
              <p>{item.problem}</p>
              <h4>설계와 실행</h4>
              <p>{item.action}</p>
              <h4>운영 효과</h4>
              <p>{item.value}</p>
            </div>
            <div className="tags">
              {item.stack.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="growth">
        <h3>앞으로의 기여 방향</h3>
        <p>
          보안 거버넌스 문서 분석, 네트워크 인프라 가시화, 자산 식별과 현행 과제
          정리를 바탕으로 분기별 KPI를 설계하고 검증하겠습니다. 필요한
          아키텍처를 학습하고 직접 구현하는 엔지니어로 성장하고자 합니다.
        </p>
      </div>
    </section>
  );
}
