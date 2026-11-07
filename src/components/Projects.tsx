"use client";
import { useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
const filters = [
  "전체 프로젝트",
  "자동화",
  "SIEM",
  "플랫폼",
  "AI / PoC",
] as const;
export function Projects() {
  const [filter, setFilter] = useState<string>("전체 프로젝트");
  return (
    <section id="projects" className="section container">
      <div className="section-head">
        <div>
          <span className="eyebrow">03 / 주요 프로젝트</span>
          <h2>
            운영 현장의 문제를
            <br />
            엔지니어링으로 해결합니다<span className="accent">.</span>
          </h2>
        </div>
        <p>
          실제 업무에서 발견한 문제와
          <br />
          운영자를 중심으로 설계한 시스템입니다.
        </p>
      </div>
      <div className="filters" role="group" aria-label="프로젝트 분야 선택">
        {filters.map((item) => (
          <button
            key={item}
            aria-pressed={filter === item}
            onClick={() => setFilter(item)}
          >
            {item}
            {item === "전체 프로젝트" && (
              <span>{projects.length.toString().padStart(2, "0")}</span>
            )}
          </button>
        ))}
      </div>
      <div className="project-grid" aria-live="polite">
        {projects
          .filter((p) => filter === "전체 프로젝트" || p.category === filter)
          .map((p) => (
            <ProjectCard key={p.id} project={p} index={projects.indexOf(p)} />
          ))}
      </div>
    </section>
  );
}
