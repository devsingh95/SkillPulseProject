import { useState } from 'react';
import { ShieldCheck, Compass, Users, Sparkles, TrendingUp, Award, CheckCircle2, ChevronRight, Brain } from 'lucide-react';
import { SAS_SDS_MODEL, predictSdsSuccess } from '../data/jobMarketData';

const PRESETS = [
  {
    name: 'Junior IC Transitioning to Senior',
    scores: { neuroticism: 40, extraversion: 32, openness: 36, agreeableness: 42, conscientiousness: 38 },
    note: 'Strong technical baseline; needs greater client assertiveness and rigor.'
  },
  {
    name: 'Senior Client-Facing Lead',
    scores: { neuroticism: 32, extraversion: 52, openness: 54, agreeableness: 49, conscientiousness: 58 },
    note: 'Top quartile executive benchmark from the SAS dataset.'
  },
  {
    name: 'Deep Research Specialist',
    scores: { neuroticism: 36, extraversion: 28, openness: 58, agreeableness: 40, conscientiousness: 46 },
    note: 'High intellectual curiosity with reserved stakeholder profile.'
  }
];

const OCEAN_CONFIG = [
  {
    prop: 'conscientiousness',
    label: 'Conscientiousness',
    abbr: 'C',
    impact: 'Primary Driver (r = +0.680)',
    badgeColor: 'var(--c-emerald)',
    weight: '+0.247',
    lowMean: 35.7,
    highMean: 53.7,
    desc: 'Methodological rigor, delivering on executive commitments, code quality governance, and meticulous execution.'
  },
  {
    prop: 'openness',
    label: 'Openness to Experience',
    abbr: 'O',
    impact: 'Strategic Driver (r = +0.671)',
    badgeColor: 'var(--c-emerald)',
    weight: '+0.267',
    lowMean: 33.3,
    highMean: 48.5,
    desc: 'Intellectual curiosity, embracing novel architectures (e.g., SAS Viya, Agentic AI, modern lakehouses), and creative problem solving.'
  },
  {
    prop: 'extraversion',
    label: 'Extraversion & Stakeholder Presence',
    abbr: 'E',
    impact: 'Strong Driver (r = +0.494)',
    badgeColor: 'var(--c-indigo)',
    weight: '+0.112',
    lowMean: 36.9,
    highMean: 48.9,
    desc: 'Assertive client engagement, running C-suite workshops, energizing cross-functional teams, and public speaking.'
  },
  {
    prop: 'agreeableness',
    label: 'Agreeableness & Team Empathy',
    abbr: 'A',
    impact: 'Collaboration (r = +0.293)',
    badgeColor: 'var(--c-indigo)',
    weight: '+0.079',
    lowMean: 41.1,
    highMean: 47.7,
    desc: 'Building psychological safety, mentoring junior data scientists, cross-departmental consensus, and cooperative diplomacy.'
  },
  {
    prop: 'neuroticism',
    label: 'Stress Resilience (Low Neuroticism)',
    abbr: 'N',
    impact: 'Baseline Resilience (r = -0.006)',
    badgeColor: 'var(--c-muted)',
    weight: '+0.121',
    lowMean: 36.3,
    highMean: 36.1,
    desc: 'Emotional stability under high-stakes client deadlines, managing delivery setbacks without panic, and sustained composure.'
  }
];

export default function SdsLeadershipView({ onNavigateToRoadmap }) {
  const [scores, setScores] = useState({
    neuroticism: 34,
    extraversion: 46,
    openness: 48,
    agreeableness: 46,
    conscientiousness: 52
  });

  const probability = predictSdsSuccess(scores);
  const probPercent = Math.round(probability * 100);

  const handleSliderChange = (prop, val) => {
    setScores(prev => ({ ...prev, [prop]: parseFloat(val) }));
  };

  const getTier = () => {
    if (probPercent >= 80) return { label: 'High Executive Leadership Success', color: '#10b981', bg: 'rgba(16,185,129,0.12)' };
    if (probPercent >= 60) return { label: 'Promising Senior Lead', color: '#6366f1', bg: 'rgba(99,102,241,0.12)' };
    if (probPercent >= 40) return { label: 'Developing Senior Trait Profile', color: '#f59e0b', bg: 'rgba(245,158,11,0.12)' };
    return { label: 'Client-Facing Friction Risk', color: '#fb7185', bg: 'rgba(251,113,133,0.12)' };
  };

  const tier = getTier();

  // Radar Chart coordinates calculation (normalized 0 to 70 scale)
  const center = 150;
  const radius = 105;
  const numPoints = OCEAN_CONFIG.length;

  const getCoordinates = (val, index) => {
    const angle = (Math.PI * 2 / numPoints) * index - Math.PI / 2;
    const r = (val / 70) * radius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return { x, y };
  };

  const candidatePolygon = OCEAN_CONFIG.map((trait, i) => {
    const pt = getCoordinates(scores[trait.prop], i);
    return `${pt.x},${pt.y}`;
  }).join(' ');

  const benchmarkPolygon = OCEAN_CONFIG.map((trait, i) => {
    const pt = getCoordinates(trait.highMean, i);
    return `${pt.x},${pt.y}`;
  }).join(' ');

  return (
    <div className="tab-pane">
      {/* Header */}
      <div className="section-head">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div className="radar-badge">
            <Brain size={13} /> Official SAS Hackathon SDS Model (N=161)
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--c-muted)' }}>
            Dataset: <code>SDS Personality Traits.xlsx</code> (Big Five OCEAN)
          </span>
        </div>
        <h1 className="hero-title" style={{ marginTop: 12 }}>
          Senior Data Scientist <span className="text-gradient">Leadership & Trait Diagnostic</span>
        </h1>
        <p className="hero-sub">
          Evaluates senior and customer-facing data scientists across the psychological Big Five (OCEAN) spectrum. Proven indicators that differentiate high-performing enterprise AI leaders from junior individual contributors.
        </p>
      </div>

      {/* Preset Chips */}
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 28 }}>
        <span style={{ fontSize: '0.82rem', color: 'var(--c-muted)', alignSelf: 'center', fontWeight: 600 }}>
          Archetype Presets:
        </span>
        {PRESETS.map((p, i) => (
          <button
            key={i}
            className="chip"
            onClick={() => setScores(p.scores)}
            title={p.note}
            style={{ fontSize: '0.82rem', padding: '6px 14px' }}
          >
            {p.name}
          </button>
        ))}
      </div>

      <div className="view-grid">
        {/* Left Column: OCEAN Trait Sliders */}
        <div>
          <div className="card" style={{ padding: 24, marginBottom: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>
                Big Five Personality Dimensions
              </h2>
              <span style={{ fontSize: '0.78rem', color: 'var(--c-muted)' }}>
                Normalized Score: 10 (Low) to 70 (High)
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {OCEAN_CONFIG.map(trait => {
                const val = scores[trait.prop];
                return (
                  <div key={trait.prop} style={{ borderBottom: '1px solid var(--c-border)', paddingBottom: 18 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--c-text)', display: 'flex', alignItems: 'center', gap: 6 }}>
                          <span style={{
                            display: 'inline-block',
                            width: 20,
                            height: 20,
                            lineHeight: '20px',
                            textAlign: 'center',
                            borderRadius: 4,
                            background: 'var(--c-surface)',
                            fontSize: '0.72rem',
                            fontWeight: 800,
                            color: 'var(--c-indigo)'
                          }}>
                            {trait.abbr}
                          </span>
                          {trait.label}
                        </div>
                        <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 3 }}>
                          <span style={{ fontSize: '0.72rem', color: trait.badgeColor, fontWeight: 700 }}>
                            {trait.impact}
                          </span>
                          <span style={{ fontSize: '0.72rem', color: 'var(--c-muted)' }}>
                            Model Weight: {trait.weight}
                          </span>
                        </div>
                      </div>
                      <div style={{
                        fontSize: '1.25rem',
                        fontWeight: 800,
                        fontFamily: 'monospace',
                        color: val >= trait.highMean ? 'var(--c-emerald)' : 'var(--c-text)'
                      }}>
                        {Math.round(val)} <span style={{ fontSize: '0.75rem', color: 'var(--c-muted)' }}>/ 70</span>
                      </div>
                    </div>

                    <input
                      type="range"
                      min="15"
                      max="70"
                      step="1"
                      value={val}
                      onChange={e => handleSliderChange(trait.prop, e.target.value)}
                      style={{
                        width: '100%',
                        cursor: 'pointer',
                        accentColor: 'var(--c-emerald)',
                        height: 6,
                        borderRadius: 3
                      }}
                    />

                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--c-muted)', marginTop: 4 }}>
                      <span>Low: 15</span>
                      <span>Low Success Avg: {trait.lowMean}</span>
                      <span style={{ color: 'var(--c-emerald)', fontWeight: 600 }}>High Success Benchmark: {trait.highMean}</span>
                    </div>

                    <p style={{ fontSize: '0.78rem', color: 'var(--c-muted)', margin: '8px 0 0 0', lineHeight: 1.4 }}>
                      {trait.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Radar Chart & Executive Diagnostic */}
        <div>
          {/* Main Success Probability Card */}
          <div className="card" style={{ padding: 26, marginBottom: 20, textAlign: 'center' }}>
            <div style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: 1.2, color: 'var(--c-muted)', fontWeight: 700, marginBottom: 8 }}>
              Senior Customer-Facing Success Probability
            </div>

            <div style={{
              fontSize: '3.8rem',
              fontWeight: 900,
              fontFamily: 'monospace',
              color: tier.color,
              lineHeight: 1,
              margin: '14px 0'
            }}>
              {probPercent}%
            </div>

            <div style={{
              display: 'inline-block',
              padding: '6px 16px',
              borderRadius: 20,
              background: tier.bg,
              color: tier.color,
              fontWeight: 700,
              fontSize: '0.9rem',
              marginBottom: 16
            }}>
              {tier.label}
            </div>

            <p style={{ fontSize: '0.85rem', color: 'var(--c-muted)', lineHeight: 1.5, margin: 0 }}>
              Calculated via logistic regression trained on <strong>161 customer-facing senior data scientists</strong> in the SAS dataset.
            </p>
          </div>

          {/* Interactive SVG Radar Chart */}
          <div className="card" style={{ padding: 24, marginBottom: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, margin: 0 }}>
                OCEAN Leadership Radar
              </h3>
              <div style={{ display: 'flex', gap: 12, fontSize: '0.75rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span style={{ width: 10, height: 10, borderRadius: 2, background: 'rgba(16,185,129,0.4)', border: '1px solid #10b981' }} />
                  You
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span style={{ width: 10, height: 10, borderRadius: 2, background: 'rgba(99,102,241,0.2)', border: '1px dashed #6366f1' }} />
                  Senior Benchmark
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <svg width="300" height="300" viewBox="0 0 300 300" style={{ overflow: 'visible' }}>
                {/* Concentric grid rings */}
                {[0.25, 0.5, 0.75, 1.0].map((level, idx) => (
                  <circle
                    key={idx}
                    cx={center}
                    cy={center}
                    r={radius * level}
                    fill="none"
                    stroke="var(--c-border)"
                    strokeDasharray={level === 1 ? 'none' : '3,3'}
                    strokeWidth="1"
                  />
                ))}

                {/* Axis lines and labels */}
                {OCEAN_CONFIG.map((trait, i) => {
                  const end = getCoordinates(70, i);
                  const labelPt = getCoordinates(82, i);
                  return (
                    <g key={i}>
                      <line
                        x1={center}
                        y1={center}
                        x2={end.x}
                        y2={end.y}
                        stroke="var(--c-border)"
                        strokeWidth="1"
                      />
                      <text
                        x={labelPt.x}
                        y={labelPt.y}
                        fill="var(--c-muted)"
                        fontSize="10"
                        fontWeight="600"
                        textAnchor="middle"
                        dominantBaseline="central"
                      >
                        {trait.abbr} ({Math.round(scores[trait.prop])})
                      </text>
                    </g>
                  );
                })}

                {/* Benchmark Polygon */}
                <polygon
                  points={benchmarkPolygon}
                  fill="rgba(99,102,241,0.15)"
                  stroke="#6366f1"
                  strokeWidth="1.5"
                  strokeDasharray="4,4"
                />

                {/* Candidate Polygon */}
                <polygon
                  points={candidatePolygon}
                  fill="rgba(16,185,129,0.3)"
                  stroke="#10b981"
                  strokeWidth="2.5"
                />

                {/* Points on Candidate Polygon */}
                {OCEAN_CONFIG.map((trait, i) => {
                  const pt = getCoordinates(scores[trait.prop], i);
                  return (
                    <circle
                      key={i}
                      cx={pt.x}
                      cy={pt.y}
                      r="4"
                      fill="#10b981"
                    />
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Key Empirical Insight Box */}
          <div className="card" style={{ padding: 22, borderLeft: '4px solid var(--c-emerald)' }}>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: 6 }}>
              <ShieldCheck size={16} color="var(--c-emerald)" /> The Senior IC &rarr; Lead Transition Formula
            </h4>
            <p style={{ fontSize: '0.82rem', color: 'var(--c-text)', lineHeight: 1.5, margin: '0 0 10px 0' }}>
              The SAS dataset proves that in senior customer-facing roles, technical brilliance alone is insufficient. High-success senior data scientists score <strong>+17.9 points higher in Conscientiousness</strong> and <strong>+15.2 points higher in Openness</strong>.
            </p>
            <div style={{ fontSize: '0.78rem', color: 'var(--c-muted)', lineHeight: 1.4 }}>
              To qualify for Senior Data Scientist roles paying ₹22.3L+ (at firms like Accenture, IBM, and TCS), elevate your stakeholder communication and proactive architecture design.
            </div>

            {onNavigateToRoadmap && (
              <button
                className="btn btn-secondary"
                onClick={onNavigateToRoadmap}
                style={{ width: '100%', marginTop: 16, justifyContent: 'center' }}
              >
                <span>View Senior Leadership Pathway</span>
                <ChevronRight size={15} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
