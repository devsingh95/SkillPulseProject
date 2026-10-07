import { useState } from 'react';
import { Sparkles, TrendingUp, ArrowRight, CheckCircle, PlusCircle, RotateCcw, Zap } from 'lucide-react';
import { whatIf } from '../utils/analyzer';
import { JOB_ROLES } from '../data/jobMarketData';

export default function WhatIfSimulatorView({ selectedRoleId, userSkills, currency, onCommit, onRoadmap }) {
  const role = JOB_ROLES.find(r => r.id === selectedRoleId) || JOB_ROLES[0];
  const [prospect, setProspect] = useState([]);

  const sim = whatIf(role, userSkills, prospect);
  const available = [...role.mustHave, ...role.niceToHave].filter(s => !userSkills.includes(s));

  const toggle = s => setProspect(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);

  return (
    <div className="page-enter" style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {/* Header */}
      <div className="hero anim-fade-up">
        <div className="badge badge-cyan" style={{ marginBottom: 10 }}><Sparkles size={12} /> CAREER SIMULATOR</div>
        <h1 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', marginBottom: 8 }}>
          What if you learned…?
        </h1>
        <p style={{ color: 'var(--c-text-2)', fontSize: '.9rem', maxWidth: 560 }}>
          Toggle skills you're thinking about learning to see exactly how they shift your readiness score, tier, and job access for <strong>{role.title}</strong>.
        </p>
      </div>

      {/* Delta metrics */}
      <div className="bento bento-3 anim-fade-up delay-2">
        {/* Score delta */}
        <div className="card" style={{ padding: 22 }}>
          <span className="label">Readiness shift</span>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, margin: '10px 0' }}>
            <span className="metric-val" style={{ fontSize: '1.6rem', color: 'var(--c-text-3)' }}>{sim.base.score}%</span>
            <ArrowRight size={18} color="var(--c-indigo)" />
            <span className="metric-val" style={{ fontSize: '2.2rem', color: sim.delta > 0 ? 'var(--c-emerald)' : 'var(--c-text)' }}>{sim.next.score}%</span>
          </div>
          {sim.delta > 0
            ? <span style={{ color: 'var(--c-emerald)', fontWeight: 700, fontSize: '.85rem', display: 'flex', alignItems: 'center', gap: 4 }}><TrendingUp size={15} /> +{sim.delta}% jump</span>
            : <span style={{ color: 'var(--c-text-3)', fontSize: '.84rem' }}>Select skills below</span>
          }
        </div>

        {/* Tier */}
        <div className="card" style={{ padding: 22 }}>
          <span className="label">Tier evolution</span>
          <div style={{ margin: '10px 0' }}>
            <div style={{ fontSize: '.82rem', color: 'var(--c-text-3)', marginBottom: 4 }}>Now: <strong style={{ color: 'var(--c-text-2)' }}>{sim.base.tier}</strong></div>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--c-indigo)', display: 'flex', alignItems: 'center', gap: 6 }}>
              <Zap size={16} color="var(--c-amber)" /> {sim.next.tier}
            </div>
          </div>
          {sim.weeksSaved > 0 && <span style={{ fontSize: '.8rem', color: 'var(--c-text-3)' }}>Saves ~{sim.weeksSaved} weeks</span>}
        </div>

        {/* Jobs unlocked */}
        <div className="card" style={{ padding: 22 }}>
          <span className="label">Jobs unlocked</span>
          <div className="metric-val" style={{ color: 'var(--c-cyan)', margin: '10px 0' }}>+{sim.jobs.toLocaleString()}</div>
          <span style={{ fontSize: '.8rem', color: 'var(--c-text-3)' }}>Additional qualifying positions</span>
        </div>
      </div>

      {/* Skill sandbox */}
      <div className="card anim-fade-up delay-3" style={{ padding: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, flexWrap: 'wrap', gap: 10 }}>
          <div>
            <h3 style={{ fontSize: '1.05rem', marginBottom: 2 }}>Simulate learning these</h3>
            <p style={{ fontSize: '.82rem', color: 'var(--c-text-2)' }}>Click to toggle. Watch the metrics update live.</p>
          </div>
          {prospect.length > 0 && (
            <button className="btn btn-ghost btn-xs" onClick={() => setProspect([])}><RotateCcw size={12} /> Reset</button>
          )}
        </div>

        {available.length === 0 ? (
          <div style={{ textAlign: 'center', padding: 28, color: 'var(--c-emerald)' }}>
            <CheckCircle size={28} style={{ margin: '0 auto 8px' }} />
            <h4 style={{ fontSize: '1.05rem' }}>You already have everything.</h4>
            <p style={{ fontSize: '.84rem', color: 'var(--c-text-3)' }}>Ready for interviews!</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 10 }}>
            {available.map(s => {
              const on = prospect.includes(s);
              const core = role.mustHave.includes(s);
              return (
                <div key={s} className={`skill-row ${on ? 'matched' : ''}`}
                  style={{ border: on ? '1px solid var(--c-cyan)' : '1px solid var(--border-default)', borderRadius: 'var(--r-sm)' }}
                  onClick={() => toggle(s)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    {on ? <CheckCircle size={16} color="var(--c-cyan)" /> : <PlusCircle size={16} color="var(--c-text-3)" />}
                    <div>
                      <span style={{ fontSize: '.84rem', fontWeight: 600, display: 'block' }}>{s}</span>
                      <span style={{ fontSize: '.68rem', color: core ? 'var(--c-rose)' : 'var(--c-cyan)' }}>
                        {core ? 'Core req' : 'Differentiator'}
                      </span>
                    </div>
                  </div>
                  <span className="mono" style={{ fontSize: '.68rem', color: on ? 'var(--c-cyan)' : 'var(--c-text-3)' }}>
                    {on ? 'on' : '+ add'}
                  </span>
                </div>
              );
            })}
          </div>
        )}

        {prospect.length > 0 && (
          <div style={{
            marginTop: 20, padding: '16px 20px', borderRadius: 'var(--r-md)',
            background: 'var(--c-indigo-dim)', border: '1px solid rgba(99,102,241,.25)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12,
          }}>
            <div>
              <strong style={{ fontSize: '.9rem' }}>Commit {prospect.length} skills to your profile?</strong>
              <span style={{ fontSize: '.8rem', color: 'var(--c-text-2)', display: 'block' }}>This generates your tailored roadmap.</span>
            </div>
            <button className="btn btn-primary" onClick={() => { onCommit([...userSkills, ...prospect]); setProspect([]); onRoadmap(); }}>
              Commit & build roadmap <ArrowRight size={14} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
