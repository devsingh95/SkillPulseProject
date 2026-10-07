import { useState } from 'react';
import { Target, CheckCircle, XCircle, Plus, X, Clock, TrendingUp, ChevronRight, Sparkles, Zap, Award, Brain } from 'lucide-react';
import { calcGap } from '../utils/analyzer';
import { ALL_SKILLS, JOB_ROLES } from '../data/jobMarketData';

// Map skills to categories for easy navigation
const SKILL_CATEGORIES = {
  'Enterprise Analytics & SAS': ['Sas', 'Analytics', 'Data Analysis', 'Business Analysis', 'Excel'],
  'Programming & Databases': ['Python', 'Sql', 'R', 'Java', 'Scala', 'Nosql', 'Oracle'],
  'AI & Machine Learning': ['Machine Learning', 'Deep Learning', 'Statistics', 'Data Mining', 'Nlp', 'Data Science'],
  'Big Data & Engineering': ['Big Data', 'Hadoop', 'Spark', 'Hive', 'Etl', 'Data Modeling', 'Cloud Platforms'],
  'BI & Storytelling': ['Tableau', 'Power Bi', 'Dashboard & Storytelling', 'Executive Storytelling', 'Finance', 'Project Management']
};

export default function SkillGapAnalyzerView({
  selectedRoleId,
  setSelectedRoleId,
  userSkills,
  setUserSkills,
  currency,
  onNavigateToRoadmap,
  onNavigateToJds,
  onNavigateToSds
}) {
  const [search, setSearch] = useState('');
  const [catFilter, setCatFilter] = useState('All');

  const role = JOB_ROLES.find(r => r.id === selectedRoleId) || JOB_ROLES[0];
  const gap = calcGap(role, userSkills);

  const toggle = skillName => {
    setUserSkills(prev =>
      prev.includes(skillName)
        ? prev.filter(s => s !== skillName)
        : [...prev, skillName]
    );
  };

  const cats = ['All', ...Object.keys(SKILL_CATEGORIES)];

  // Filter skills pool
  const pool = ALL_SKILLS.filter(s => {
    const skillName = typeof s === 'string' ? s : s.name;
    const matchesSearch = skillName.toLowerCase().includes(search.toLowerCase());
    if (catFilter === 'All') return matchesSearch;
    const inCategory = SKILL_CATEGORIES[catFilter]?.includes(skillName);
    return matchesSearch && inCategory;
  });

  const R = 64, C = 2 * Math.PI * R;
  const offset = C - (gap.score / 100) * C;

  return (
    <div className="page-enter" style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {/* ── Header + Role Picker ────────────────────────────── */}
      <div className="hero anim-fade-up" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, alignItems: 'flex-start' }}>
        <div style={{ maxWidth: 600 }}>
          <div className="badge badge-indigo" style={{ marginBottom: 10 }}>
            <Target size={12} /> EMPIRICAL SAS SKILL FIT ENGINE
          </div>
          <h1 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', marginBottom: 8, lineHeight: 1.2 }}>
            Career Match & <span className="text-gradient">Skill Gap Analyzer</span>
          </h1>
          <p style={{ color: 'var(--c-text-2)', fontSize: '.92rem', lineHeight: 1.5 }}>
            Benchmarking your skills against requirements extracted from <strong>15,841 real job postings</strong> across India's top data enterprises.
          </p>
        </div>

        <div style={{ minWidth: 280 }} className="card" style={{ padding: 18 }}>
          <span className="label" style={{ marginBottom: 6, display: 'block' }}>Target Career Track</span>
          <select
            className="input"
            value={role.id}
            onChange={e => setSelectedRoleId(e.target.value)}
            style={{ fontWeight: 600, width: '100%', marginBottom: 10 }}
          >
            {JOB_ROLES.map(r => (
              <option key={r.id} value={r.id}>{r.emoji} {r.title} ({r.salary.inr.split('(')[0].trim()})</option>
            ))}
          </select>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.78rem', color: 'var(--c-text-3)' }}>
            <span>Median Exp: <strong>{role.medianMinExp || 2} yrs</strong></span>
            <span>Openings: <strong style={{ color: 'var(--c-emerald)' }}>{role.positions}</strong></span>
          </div>
          <div style={{ fontSize: '.72rem', color: 'var(--c-text-3)', marginTop: 6 }}>
            Top Employers: {role.topCompanies?.slice(0, 3).join(', ')}
          </div>
        </div>
      </div>

      {/* ── Score + ROI Row ────────────────────────────── */}
      <div className="bento bento-2 anim-fade-up delay-2">
        {/* SVG Circular Gauge */}
        <div className="card" style={{ padding: 32, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <span className="label" style={{ marginBottom: 14 }}>Role Match Index</span>

          <div className="gauge-container">
            <svg width="170" height="170" viewBox="0 0 170 170" style={{ transform: 'rotate(-90deg)' }}>
              <circle className="gauge-track" cx="85" cy="85" r={R} />
              <circle
                className="gauge-fill"
                cx="85" cy="85" r={R}
                stroke={gap.score >= 80 ? 'var(--c-emerald)' : gap.score >= 50 ? 'var(--c-indigo)' : 'var(--c-amber)'}
                strokeDasharray={C}
                strokeDashoffset={offset}
              />
            </svg>
            <div className="gauge-center">
              <div className="gauge-score" style={{ color: 'var(--c-text)' }}>{gap.score}%</div>
              <span style={{ fontSize: '.75rem', color: 'var(--c-text-3)' }}>verified fit</span>
            </div>
          </div>

          <div style={{
            marginTop: 16,
            padding: '5px 16px',
            borderRadius: 'var(--r-pill)',
            border: `1px solid ${gap.tierColor}`,
            color: gap.tierColor,
            fontWeight: 700,
            fontSize: '.82rem',
          }}>
            {gap.tier}
          </div>
          <p style={{ fontSize: '.8rem', color: 'var(--c-text-3)', marginTop: 10 }}>
            {gap.filled} of {gap.total} target role competencies acquired
          </p>
        </div>

        {/* ROI metrics & Promotion Shortcuts */}
        <div className="card" style={{ padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <h3 style={{ fontSize: '1.05rem', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
              <Zap size={18} color="var(--c-amber)" /> Career Advancement Upside
            </h3>

            <div className="bento" style={{ gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
              <div className="metric-card">
                <span className="label">Estimated Prep</span>
                <div className="metric-val" style={{ color: 'var(--c-indigo)', fontSize: '1.4rem' }}>
                  <Clock size={16} style={{ verticalAlign: 'middle', marginRight: 4 }} />{gap.weeks}w
                </div>
                <span style={{ fontSize: '.72rem', color: 'var(--c-text-3)' }}>@ 10 hrs/wk study</span>
              </div>
              <div className="metric-card">
                <span className="label">Empirical Salary Lift</span>
                <div className="metric-val" style={{ color: 'var(--c-emerald)', fontSize: '1.4rem' }}>
                  <TrendingUp size={16} style={{ verticalAlign: 'middle', marginRight: 4 }} />{gap.liftINR}
                </div>
                <span style={{ fontSize: '.72rem', color: 'var(--c-text-3)' }}>vs current bracket</span>
              </div>
            </div>

            <p style={{ fontSize: '.84rem', color: 'var(--c-text-2)', lineHeight: 1.55 }}>
              You are missing <strong>{gap.missing.length} core requirements</strong>. Closing them qualifies you for candidate pools across {role.topCompanies?.join(', ')}.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 16 }}>
            <button className="btn btn-primary" style={{ flex: 1 }} onClick={onNavigateToRoadmap}>
              <span>View Learning Roadmap</span>
              <ChevronRight size={15} />
            </button>
            {onNavigateToJds && (
              <button className="btn btn-secondary" onClick={onNavigateToJds} title="Test your promotion probability">
                <Award size={14} /> JDS Hike Predictor
              </button>
            )}
            {onNavigateToSds && (
              <button className="btn btn-secondary" onClick={onNavigateToSds} title="Test Senior leadership traits">
                <Brain size={14} /> SDS Traits
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── Must-Have vs Nice-to-Have ─────────────────── */}
      <div className="bento bento-2 anim-fade-up delay-3">
        {/* Core Must-Haves */}
        <div className="card" style={{ padding: 22 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <h3 style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: 6, margin: 0 }}>
              <Target size={16} color="var(--c-rose)" /> Core Must-Have Skills
              <span style={{ color: 'var(--c-text-3)', fontWeight: 400 }}>({gap.matched.length}/{role.mustHave.length})</span>
            </h3>
            <span className="badge badge-rose" style={{ fontSize: '.65rem' }}>75% Weight</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {role.mustHave.map(s => {
              const has = gap.matched.includes(s);
              return (
                <div key={s} className={`skill-row ${has ? 'matched' : 'missing'}`} onClick={() => toggle(s)} style={{ cursor: 'pointer' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    {has ? <CheckCircle size={16} color="var(--c-emerald)" /> : <XCircle size={16} color="var(--c-rose)" />}
                    <span style={{ fontSize: '.85rem', fontWeight: 600 }}>{s}</span>
                  </div>
                  <span className="mono" style={{ fontSize: '.68rem', color: has ? 'var(--c-emerald)' : 'var(--c-rose)' }}>
                    {has ? 'acquired' : 'gap'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recommended Differentiators */}
        <div className="card" style={{ padding: 22 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <h3 style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: 6, margin: 0 }}>
              <Sparkles size={16} color="var(--c-cyan)" /> Enterprise Differentiators
              <span style={{ color: 'var(--c-text-3)', fontWeight: 400 }}>({gap.bonus.length}/{role.niceToHave.length})</span>
            </h3>
            <span className="badge badge-cyan" style={{ fontSize: '.65rem' }}>25% Weight</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {role.niceToHave.map(s => {
              const has = gap.bonus.includes(s);
              return (
                <div key={s} className={`skill-row ${has ? 'matched' : ''}`} onClick={() => toggle(s)} style={{ cursor: 'pointer' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    {has ? <CheckCircle size={16} color="var(--c-cyan)" /> : <div style={{ width: 16, height: 16, borderRadius: '50%', border: '2px dashed var(--c-text-3)' }} />}
                    <span style={{ fontSize: '.85rem', fontWeight: 500, color: has ? 'var(--c-text)' : 'var(--c-text-2)' }}>{s}</span>
                  </div>
                  <span className="mono" style={{ fontSize: '.68rem', color: has ? 'var(--c-cyan)' : 'var(--c-text-3)' }}>
                    {has ? 'acquired' : 'bonus'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Skill Inventory / Selector ──────────────────────────── */}
      <div className="card anim-fade-up delay-4" style={{ padding: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14, flexWrap: 'wrap', gap: 10 }}>
          <h3 style={{ fontSize: '1.05rem', margin: 0 }}>
            Your Verified Skills Profile ({userSkills.length})
          </h3>
          {userSkills.length > 0 && (
            <button className="btn btn-ghost btn-xs" onClick={() => setUserSkills([])}>Clear All</button>
          )}
        </div>

        {/* Selected skills pill box */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: 8,
          padding: 14, background: 'var(--bg-raised)', borderRadius: 'var(--r-md)',
          border: '1px solid var(--border-default)', minHeight: 52, marginBottom: 16,
        }}>
          {userSkills.length === 0
            ? <span style={{ margin: 'auto', color: 'var(--c-text-3)', fontSize: '.84rem', fontStyle: 'italic' }}>No skills added yet — click skills below or scan your resume.</span>
            : userSkills.map(s => (
              <span key={s} className="chip active" onClick={() => toggle(s)} style={{ cursor: 'pointer' }}>
                {s} <X size={13} style={{ opacity: .7 }} />
              </span>
            ))
          }
        </div>

        {/* Category filter pills */}
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 12 }}>
          {cats.map(c => (
            <button
              key={c}
              className={`chip ${catFilter === c ? 'active' : ''}`}
              onClick={() => setCatFilter(c)}
              style={{ fontSize: '.75rem', padding: '4px 11px' }}
            >
              {c}
            </button>
          ))}
        </div>

        <input
          className="input"
          placeholder="Search skills (e.g., SAS, Python, SQL, Hadoop, Spark)..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ marginBottom: 14, width: '100%' }}
        />

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, maxHeight: 180, overflowY: 'auto' }}>
          {pool.map(skill => {
            const skillName = typeof skill === 'string' ? skill : skill.name;
            const on = userSkills.includes(skillName);
            return (
              <button
                key={skillName}
                className={`chip ${on ? 'active' : ''}`}
                onClick={() => toggle(skillName)}
                style={{ fontSize: '0.8rem', padding: '5px 12px' }}
              >
                {on ? <CheckCircle size={12} color="var(--c-emerald)" /> : <Plus size={12} />} {skillName}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
