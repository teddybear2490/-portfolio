import { ArrowUpRight, GitBranch } from "lucide-react";
import type { Project } from "@/types";
export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const measured = Object.entries(project.metrics).filter(
    ([, metric]) => metric !== null,
  );
  return (
    <article className="project-card">
      <div className="card-top">
        <span className="mono">사례 {String(index + 1).padStart(2, "0")}</span>
        <span className={`status ${project.status === "PoC" ? "poc" : ""}`}>
          {project.status}
        </span>
      </div>
      <div className="project-symbol">
        <GitBranch size={23} />
        <span>{project.category}</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <div className="tags">
        {project.stack.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <details>
        <summary>
          상세 사례 보기 <ArrowUpRight size={16} />
        </summary>
        <div className="case-content">
          <h4>문제</h4>
          <p>{project.problem}</p>
          <h4>접근 방법</h4>
          <p>{project.approach}</p>
          <h4>구조 · 개념적 흐름</h4>
          <ol className="pipeline">
            {project.architecture.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <h4>구현 내용</h4>
          <ul>
            {project.implementation.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h4>운영 가치</h4>
          <p>{project.value}</p>
          <h4>{measured.length ? "측정된 성과" : "향후 측정할 지표"}</h4>
          {measured.length ? (
            <ul>
              {measured.map(([key, metric]) => (
                <li key={key}>
                  {key}: {metric?.value} {metric?.unit} — {metric?.evidence}
                </li>
              ))}
            </ul>
          ) : (
            <p className="metric-note">
              {Object.keys(project.metrics).join(" · ")}. 아직 실제 측정 결과는
              입력되지 않았습니다.
            </p>
          )}
          {project.repository && (
            <a
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
            >
              저장소 보기 ↗
            </a>
          )}
        </div>
      </details>
    </article>
  );
}
