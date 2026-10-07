import { useState } from 'react';
import { CheckCircle2, Circle, BookOpen, ExternalLink, Code2, Award, Download, Share2, Clock, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { calcGap } from '../utils/analyzer';
import { JOB_ROLES } from '../data/jobMarketData';

export default function RoadmapView({ selectedRoleId, userSkills, currency }) {
  const role = JOB_ROLES.find(r => r.id === selectedRoleId) || JOB_ROLES[0];
  const gap = calcGap(role, userSkills);
  const [done, setDone] = useState({});
  const [copied, setCopied] = useState(false);

  const togglePhase = n => {
    const next = { ...done, [n]: !done[n] };
    setDone(next);
    const total = role.roadmap.length;
    if (role.roadmap.filter(p => next[p.phase]).length === total && next[n])
      confetti({ particleCount: 100, spread: 70, origin: { y: .6 } });
  };

  const phases = role.roadmap || [];
  const progress = Math.round((Object.values(done).filter(Boolean).length / phases.length) * 100);

  const exportMD = () => {
    let md = `# SkillPulse Roadmap — ${role.title}\n\n`;
    md += `Match: ${gap.score}% | Est: ~${gap.weeks} weeks\n\n`;
    phases.forEach(p => {
      md += `## Phase ${p.phase}: ${p.title} (${p.weeks})\n${p.summary}\n\n`;
      md += `Resources:\n`;
      p.resources.forEach(r => md += `- [${r.name}](${r.url})\n`);
      md += `\nProject: **${p.project.title}** — ${p.project.brief}\n\n`;
    });
    const blob = new Blob([md], { type: 'text/markdown' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `roadmap-${role.id}.md`;
    a.click();
  };

  return (
    <div className="page-enter" style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {/* Header */}
      <div className="hero anim-fade-up" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
        <div style={{ maxWidth: 620 }}>
          <div className="badge badge-cyan" style={{ marginBottom: 10 }}><Sparkles size={12} /> LEARNING BLUEPRINT</div>
          <h1 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', marginBottom: 8 }}>
            Roadmap for <span className="text-gradient">{role.title}</span>
          </h1>
          <p style={{ color: 'var(--c-text-2)', fontSize: '.9rem' }}>
            {phases.length} phases, curated resources, and portfolio-ready projects — ordered from foundations to production.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 8, alignSelf: 'flex-start' }}>
          <button className="btn btn-ghost btn-sm" onClick={exportMD}><Download size={14} /> Export .md</button>
          <button className="btn btn-ghost btn-sm" onClick={() => { navigator.clipboard.writeText(location.href); setCopied(true); setTimeout(() => setCopied(false), 2000); }}>
            <Share2 size={14} /> {copied ? 'Copied!' : 'Share'}
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="card anim-fade-up delay-1" style={{ padding: '16px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
          <span style={{ fontSize: '.875rem', fontWeight: 600 }}>Progress: {progress}%</span>
          <span style={{ fontSize: '.8rem', color: 'var(--c-text-3)' }}>
            {Object.values(done).filter(Boolean).length}/{phases.length} milestones
          </span>
        </div>
        <div className="progress-track" style={{ height: 8 }}>
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Missing skills callout */}
      {gap.missing.length > 0 && (
        <div className="anim-fade-up delay-2" style={{
          padding: '16px 20px', borderRadius: 'var(--r-md)',
          background: 'var(--c-indigo-dim)', border: '1px solid rgba(99,102,241,.25)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8,
        }}>
          <p style={{ fontSize: '.84rem', color: 'var(--c-text-2)', margin: 0 }}>
            <strong style={{ color: 'var(--c-indigo)' }}>{gap.missing.length} gaps</strong> to close: {gap.missing.join(', ')}
          </p>
          <span style={{ fontSize: '.8rem', color: 'var(--c-emerald)', fontWeight: 600 }}>~{gap.weeks} weeks</span>
        </div>
      )}

      {/* ── Timeline ──────────────────────────────────── */}
      <div className="timeline">
        {phases.map((p, i) => {
          const isDone = !!done[p.phase];
          return (
            <div key={p.phase} className={`timeline-node anim-slide-right delay-${i + 1}`}>
              <div className={`timeline-dot ${isDone ? 'done' : ''}`}>
                {isDone && <CheckCircle2 size={12} color="#fff" />}
              </div>

              <div className="card" style={{ padding: 24, borderLeft: isDone ? '3px solid var(--c-emerald)' : '3px solid var(--c-indigo)' }}>
                {/* Phase header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, flexWrap: 'wrap', gap: 10 }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                      <span className="badge badge-indigo" style={{ fontSize: '.65rem' }}>Phase {p.phase}</span>
                      <span style={{ fontSize: '.78rem', color: 'var(--c-text-3)', display: 'flex', alignItems: 'center', gap: 4 }}>
                        <Clock size={12} /> Weeks {p.weeks}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '1.15rem' }}>{p.title}</h3>
                  </div>

                  <button
                    className={`btn btn-sm ${isDone ? 'btn-primary' : 'btn-ghost'}`}
                    onClick={() => togglePhase(p.phase)}
                    style={isDone ? { background: 'var(--c-emerald)', boxShadow: '0 2px 10px rgba(52,211,153,.3)' } : {}}
                  >
                    {isDone ? <CheckCircle2 size={14} /> : <Circle size={14} />}
                    {isDone ? 'Done' : 'Mark done'}
                  </button>
                </div>

                <p style={{ fontSize: '.84rem', color: 'var(--c-text-2)', lineHeight: 1.55, marginBottom: 14 }}>{p.summary}</p>

                {/* Skills chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
                  {p.skills.map(s => {
                    const has = userSkills.includes(s);
                    return (
                      <span key={s} className={`chip ${has ? 'active' : ''}`} style={{ cursor: 'default', fontSize: '.75rem' }}>
                        {has && <CheckCircle2 size={11} />} {s}
                      </span>
                    );
                  })}
                </div>

                {/* Resources + Project side by side */}
                <div className="bento bento-2" style={{ gap: 14 }}>
                  <div style={{ background: 'var(--bg-raised)', border: '1px solid var(--border-default)', borderRadius: 'var(--r-md)', padding: 14 }}>
                    <h4 style={{ fontSize: '.82rem', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6, color: 'var(--c-cyan)' }}>
                      <BookOpen size={14} /> Resources
                    </h4>
                    {p.resources.map(r => (
                      <a key={r.name} href={r.url} target="_blank" rel="noreferrer"
                        style={{
                          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                          padding: '7px 8px', borderRadius: 6, fontSize: '.78rem',
                          color: 'var(--c-text-2)', textDecoration: 'none', transition: 'background .15s',
                          marginBottom: 4,
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-hover)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                      >
                        <span style={{ fontWeight: 500 }}>{r.name}</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                          <span className="badge badge-muted" style={{ fontSize: '.6rem' }}>{r.tag}</span>
                          <ExternalLink size={11} color="var(--c-text-3)" />
                        </span>
                      </a>
                    ))}
                  </div>

                  <div style={{
                    background: 'var(--c-indigo-dim)', border: '1px solid rgba(99,102,241,.2)',
                    borderRadius: 'var(--r-md)', padding: 14, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                  }}>
                    <div>
                      <h4 style={{ fontSize: '.78rem', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6, color: 'var(--c-indigo)', textTransform: 'uppercase', letterSpacing: '.04em', fontWeight: 700 }}>
                        <Code2 size={14} /> Portfolio Project
                      </h4>
                      <h5 style={{ fontSize: '.92rem', marginBottom: 4 }}>{p.project.title}</h5>
                      <p style={{ fontSize: '.78rem', color: 'var(--c-text-2)', lineHeight: 1.5 }}>{p.project.brief}</p>
                    </div>
                    <div style={{ marginTop: 10, fontSize: '.7rem', color: 'var(--c-emerald)', display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Award size={12} /> Resume-ready proof of work
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
