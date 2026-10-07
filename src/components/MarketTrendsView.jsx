import { useState, useRef, useEffect } from 'react';
import {
  TrendingUp, ArrowUpRight, Search, Building2, MapPin,
  Briefcase, DollarSign, BarChart2, ShieldCheck, Sparkles, Filter, ChevronDown
} from 'lucide-react';
import {
  TRENDING_SKILLS, JOB_ROLES, SAS_OVERVIEW,
  SAS_TOP_COMPANIES, SAS_LOCATIONS, SAS_SALARY_TIERS, SAS_SAMPLE_JOBS
} from '../data/jobMarketData';

function useCounter(target, duration = 1200) {
  const [val, setVal] = useState(0);
  const ref = useRef();
  useEffect(() => {
    let start = 0;
    const step = ts => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setVal(Math.floor(progress * target));
      if (progress < 1) ref.current = requestAnimationFrame(step);
    };
    ref.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(ref.current);
  }, [target, duration]);
  return val;
}

export default function MarketTrendsView({ currency, onSelectRole }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [skillCategory, setSkillCategory] = useState('ALL');
  const [jobLocationFilter, setJobLocationFilter] = useState('ALL');
  const [selectedCompany, setSelectedCompany] = useState(null);

  const jobsCount = useCounter(SAS_OVERVIEW.totalCombinedOpenings, 1500);
  const postingsCount = useCounter(SAS_OVERVIEW.totalAnalyticsJobs + SAS_OVERVIEW.totalDataSciencePostings, 1500);

  // Filter skills
  const filteredSkills = TRENDING_SKILLS.filter(s => {
    const matchesQuery = s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = skillCategory === 'ALL' || s.category === skillCategory;
    return matchesQuery && matchesCat;
  });

  // Filter sample jobs from SAS Analytics Jobs
  const filteredJobs = SAS_SAMPLE_JOBS.filter(job => {
    const matchesLoc = jobLocationFilter === 'ALL' || job.location.toLowerCase().includes(jobLocationFilter.toLowerCase());
    const matchesSearch = searchQuery === '' ||
      job.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.some(sk => sk.toLowerCase().includes(searchQuery.toLowerCase())) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLoc && matchesSearch;
  });

  const categories = ['ALL', 'Database & Querying', 'Programming & Scripting', 'Enterprise Analytics & SAS', 'AI & Machine Learning', 'Big Data & Cloud', 'Visualization & BI'];

  return (
    <div className="page-enter">
      {/* ── Official SAS Dataset Hero Banner ────────────────────────────── */}
      <section className="hero anim-fade-up" style={{ marginBottom: 36 }}>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center', marginBottom: 14 }}>
          <div className="badge badge-emerald">
            <ShieldCheck size={13} /> OFFICIAL SAS HACKATHON DATASET INTELLIGENCE
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--c-text-3)' }}>
            17,443 Records Across India (2024–2025)
          </span>
        </div>

        <h1 style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.7rem)', maxWidth: 780, marginBottom: 12, lineHeight: 1.15 }}>
          Real Data Science & Analytics <br />
          <span className="text-gradient">Market Intelligence Radar</span>
        </h1>

        <p style={{ color: 'var(--c-text-2)', fontSize: '1rem', maxWidth: 640, lineHeight: 1.6, marginBottom: 28 }}>
          Synthesized directly from <strong>15,841 Analytics Postings</strong>, <strong>1,602 Enterprise Openings</strong>, and psychological trait models (JDS & SDS). No synthetic filler—pure empirical hiring signals.
        </p>

        {/* Bento Stats */}
        <div className="bento bento-4" style={{ maxWidth: 900 }}>
          <div className="metric-card anim-fade-up delay-1">
            <span className="label">Total Job Openings</span>
            <div className="metric-val" style={{ color: 'var(--c-emerald)' }}>
              {jobsCount.toLocaleString()}+
            </div>
            <span style={{ fontSize: '.75rem', color: 'var(--c-text-3)' }}>Across enterprise recruiters</span>
          </div>

          <div className="metric-card anim-fade-up delay-2">
            <span className="label">Sample Records Parsed</span>
            <div className="metric-val" style={{ color: 'var(--c-indigo)' }}>
              {postingsCount.toLocaleString()}
            </div>
            <span style={{ fontSize: '.75rem', color: 'var(--c-text-3)' }}>Analytics & DS postings</span>
          </div>

          <div className="metric-card anim-fade-up delay-3">
            <span className="label">Top Corporate Recruiter</span>
            <div className="metric-val" style={{ color: 'var(--c-cyan)' }}>
              TCS
            </div>
            <span style={{ fontSize: '.75rem', color: 'var(--c-text-3)' }}>9,064 open positions</span>
          </div>

          <div className="metric-card anim-fade-up delay-4">
            <span className="label">Prime Tech Hub</span>
            <div className="metric-val" style={{ color: 'var(--c-text)' }}>
              Bengaluru
            </div>
            <span style={{ fontSize: '.75rem', color: 'var(--c-text-3)' }}>3,333 postings (21.0%)</span>
          </div>
        </div>
      </section>

      {/* ── Enterprise Recruiters Leaderboard ────────────────────────────── */}
      <section className="section anim-fade-up delay-2" style={{ marginBottom: 40 }}>
        <div className="section-header">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 12 }}>
            <div>
              <h2 style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Building2 size={20} color="var(--c-indigo)" /> Top Enterprise Recruiters in SAS Dataset
              </h2>
              <p>Active job openings and real salary brackets from <code>DataScience Jobs.csv</code>.</p>
            </div>
            <span style={{ fontSize: '0.8rem', color: 'var(--c-text-3)' }}>
              Top 10 Indian & Global Tech Majors
            </span>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: 16
        }}>
          {SAS_TOP_COMPANIES.slice(0, 8).map((comp, idx) => (
            <div
              key={comp.name}
              className="card"
              style={{
                padding: 18,
                cursor: 'pointer',
                borderLeft: idx === 0 ? '3px solid var(--c-emerald)' : '3px solid var(--c-indigo)',
                transition: 'transform 0.2s ease, border-color 0.2s ease'
              }}
              onClick={() => setSelectedCompany(comp)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--c-text)' }}>{comp.name}</span>
                <span className="badge badge-indigo">{comp.openings.toLocaleString()} jobs</span>
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--c-text-3)', marginBottom: 8 }}>
                Avg Salary: <strong style={{ color: 'var(--c-emerald)' }}>₹{comp.avgSalary} LPA</strong>
                {comp.minSalary > 0 && ` (₹${comp.minSalary}L – ₹${comp.maxSalary}L)`}
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--c-text-3)' }}>
                Hiring: {comp.roles.slice(0, 2).join(', ')}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Career Tracks Grid ────────────────────────────── */}
      <section className="section anim-fade-up delay-3" style={{ marginBottom: 40 }}>
        <div className="section-header">
          <h2>Verified Analytics & Data Science Roles</h2>
          <p>Directly derived from the SAS dataset. Select any role to analyze your skill match.</p>
        </div>

        <div className="bento bento-3">
          {JOB_ROLES.map((role, i) => (
            <div
              key={role.id}
              className={`card card-interactive anim-fade-up delay-${Math.min(i + 1, 4)}`}
              style={{ padding: 22, display: 'flex', flexDirection: 'column', borderLeft: '3px solid var(--c-indigo)' }}
              onClick={() => onSelectRole(role.id)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <span style={{ fontSize: '1.4rem' }}>{role.emoji}</span>
                <span className="badge badge-emerald">{role.growth}</span>
              </div>

              <h3 style={{ fontSize: '1.08rem', marginBottom: 6 }}>{role.title}</h3>
              <p style={{ fontSize: '.84rem', color: 'var(--c-text-2)', flex: 1, marginBottom: 14, lineHeight: 1.5 }}>
                {role.brief}
              </p>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.78rem', color: 'var(--c-text-3)', padding: '10px 0', borderTop: '1px solid var(--border-default)' }}>
                <span>{role.salary.inr}</span>
                <span style={{ fontWeight: 600 }}>{role.positions}</span>
              </div>

              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', margin: '8px 0 12px 0' }}>
                {role.mustHave.slice(0, 3).map(sk => (
                  <span key={sk} className="chip" style={{ fontSize: '0.7rem', padding: '3px 8px' }}>{sk}</span>
                ))}
              </div>

              <button
                className="btn btn-primary btn-sm btn-block"
                style={{ marginTop: 'auto' }}
                onClick={e => { e.stopPropagation(); onSelectRole(role.id); }}
              >
                Analyze Match & Gap <ArrowUpRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ── Skill Demand Velocity ────────────────────────────── */}
      <section className="section anim-fade-up delay-4" style={{ marginBottom: 40 }}>
        <div className="section-header">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 12 }}>
            <div>
              <h2>Skill Demand Frequency in Analytics Jobs</h2>
              <p>Top empirical skills extracted from 15,841 job postings in <code>Analytics Jobs.csv</code>.</p>
            </div>

            {/* Category Filter Pills */}
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`chip ${skillCategory === cat ? 'chip-active' : ''}`}
                  onClick={() => setSkillCategory(cat)}
                  style={{ fontSize: '0.74rem' }}
                >
                  {cat === 'ALL' ? 'All Skills' : cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="bento bento-3">
          {filteredSkills.map(skill => (
            <div key={skill.name} className="card" style={{ padding: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                <div>
                  <h3 style={{ fontSize: '1rem', marginBottom: 2 }}>{skill.name}</h3>
                  <span style={{ fontSize: '0.72rem', color: 'var(--c-text-3)' }}>{skill.category}</span>
                </div>
                <span className={`badge ${skill.status === 'surging' ? 'badge-rose' : 'badge-indigo'}`}>
                  {skill.postingsCount} postings ({skill.frequencyPct}%)
                </span>
              </div>

              {/* Demand Progress Bar */}
              <div style={{ height: 6, background: 'var(--c-surface)', borderRadius: 3, margin: '10px 0 14px 0', overflow: 'hidden' }}>
                <div
                  style={{
                    height: '100%',
                    width: `${skill.demand}%`,
                    background: skill.name === 'Sas' ? 'var(--c-cyan)' : 'var(--c-indigo)',
                    borderRadius: 3
                  }}
                />
              </div>

              <p style={{ fontSize: '.82rem', color: 'var(--c-text-2)', marginBottom: 12, lineHeight: 1.4 }}>
                {skill.brief}
              </p>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.78rem', color: 'var(--c-text-3)', borderTop: '1px solid var(--border-default)', paddingTop: 10 }}>
                <span>Salary Premium: <strong style={{ color: 'var(--c-emerald)' }}>{skill.salary.inr}</strong></span>
                <span>{skill.growth} Velocity</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Geographic & Salary Distribution ────────────────────────────── */}
      <section className="section anim-fade-up delay-4" style={{ marginBottom: 40 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
          {/* Geographic Hubs */}
          <div className="card" style={{ padding: 22 }}>
            <h3 style={{ fontSize: '1rem', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
              <MapPin size={16} color="var(--c-rose)" /> Geographic Analytics Hubs
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {SAS_LOCATIONS.slice(0, 6).map(loc => (
                <div key={loc.city} style={{ fontSize: '0.82rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                    <span style={{ fontWeight: 600 }}>{loc.city}</span>
                    <span style={{ color: 'var(--c-text-3)' }}>{loc.count.toLocaleString()} jobs ({loc.percentage}%)</span>
                  </div>
                  <div style={{ height: 5, background: 'var(--c-surface)', borderRadius: 3, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${Math.min(100, loc.percentage * 4)}%`, background: 'var(--c-indigo)', borderRadius: 3 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Salary Tiers */}
          <div className="card" style={{ padding: 22 }}>
            <h3 style={{ fontSize: '1rem', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
              <BarChart2 size={16} color="var(--c-emerald)" /> Analytics Salary Distribution Bands
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {SAS_SALARY_TIERS.map(tier => (
                <div key={tier.band} style={{ fontSize: '0.82rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                    <span style={{ fontWeight: 600 }}>{tier.band}</span>
                    <span style={{ color: 'var(--c-text-3)' }}>{tier.count.toLocaleString()} postings ({tier.percentage}%)</span>
                  </div>
                  <div style={{ height: 5, background: 'var(--c-surface)', borderRadius: 3, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${Math.min(100, tier.percentage * 4)}%`, background: 'var(--c-emerald)', borderRadius: 3 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Searchable Real SAS Job Postings Directory ────────────────────────────── */}
      <section className="section anim-fade-up delay-5">
        <div className="section-header">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 12 }}>
            <div>
              <h2>Live Enterprise Job Postings Directory</h2>
              <p>Search real, verifiable listings straight from <code>Analytics Jobs.csv</code>.</p>
            </div>

            {/* City Filter & Search Bar */}
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ position: 'relative' }}>
                <Search size={14} style={{ position: 'absolute', left: 10, top: 10, color: 'var(--c-text-3)' }} />
                <input
                  type="text"
                  placeholder="Filter by skill, title..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  style={{
                    padding: '7px 12px 7px 30px',
                    borderRadius: 6,
                    border: '1px solid var(--border-default)',
                    background: 'var(--c-surface)',
                    color: 'var(--c-text)',
                    fontSize: '0.82rem'
                  }}
                />
              </div>

              <select
                value={jobLocationFilter}
                onChange={e => setJobLocationFilter(e.target.value)}
                style={{
                  padding: '7px 12px',
                  borderRadius: 6,
                  border: '1px solid var(--border-default)',
                  background: 'var(--c-surface)',
                  color: 'var(--c-text)',
                  fontSize: '0.82rem'
                }}
              >
                <option value="ALL">All Locations</option>
                <option value="Bengaluru">Bengaluru</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Gurgaon">Gurgaon</option>
                <option value="Pune">Pune</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Chennai">Chennai</option>
              </select>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))', gap: 16 }}>
          {filteredJobs.slice(0, 9).map(job => (
            <div key={job.id} className="card" style={{ padding: 18, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
                <h4 style={{ fontSize: '0.96rem', fontWeight: 700, margin: 0, color: 'var(--c-text)' }}>
                  {job.designation}
                </h4>
                <span className="badge badge-emerald" style={{ fontSize: '0.7rem' }}>
                  {job.salary}
                </span>
              </div>

              <div style={{ display: 'flex', gap: 12, fontSize: '0.76rem', color: 'var(--c-text-3)', marginBottom: 10 }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                  <MapPin size={12} /> {job.location}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                  <Briefcase size={12} /> {job.experience}
                </span>
              </div>

              <p style={{ fontSize: '0.8rem', color: 'var(--c-text-2)', lineHeight: 1.4, flex: 1, marginBottom: 12 }}>
                {job.description}
              </p>

              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', borderTop: '1px solid var(--border-default)', paddingTop: 10 }}>
                {job.skills.map(sk => (
                  <span key={sk} className="chip" style={{ fontSize: '0.68rem', padding: '2px 7px' }}>
                    {sk}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
