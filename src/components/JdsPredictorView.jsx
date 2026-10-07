import { useState } from 'react';
import { Sparkles, TrendingUp, Award, AlertCircle, CheckCircle2, ChevronRight, BarChart3, HelpCircle } from 'lucide-react';
import { SAS_JDS_MODEL, predictJdsHike } from '../data/jobMarketData';

const PRESETS = [
  {
    name: 'Typical Entry Level',
    scores: { big_data: 3.2, maths_stats: 3.6, coding: 3.8, ai_ml: 4.0, storytelling: 3.4 },
    note: 'Baseline junior profile with basic analytics skills.'
  },
  {
    name: 'Technical Coder',
    scores: { big_data: 4.5, maths_stats: 4.2, coding: 4.8, ai_ml: 4.6, storytelling: 3.6 },
    note: 'Strong technical engineering, but needs storytelling polish.'
  },
  {
    name: 'High-Hike Promotion Star',
    scores: { big_data: 4.2, maths_stats: 4.8, coding: 4.7, ai_ml: 4.9, storytelling: 4.9 },
    note: 'Benchmark matching the top quartile of junior data scientists.'
  }
];

const TRAIT_CONFIG = [
  {
    key: 'dashboard_and_storytelling_skills',
    prop: 'storytelling',
    label: 'Dashboard & Storytelling Skills',
    impact: 'Highest Impact (r = +0.554)',
    badgeColor: 'var(--c-emerald)',
    weight: '+1.19',
    lowMean: 3.81,
    highMean: 4.85,
    desc: 'Translating complex model outputs into executive dashboards, business narratives, and actionable decisions.'
  },
  {
    key: 'maths-stats_skills',
    prop: 'maths_stats',
    label: 'Maths & Statistics Skills',
    impact: 'Critical Driver (r = +0.524)',
    badgeColor: 'var(--c-emerald)',
    weight: '+1.45',
    lowMean: 3.83,
    highMean: 4.71,
    desc: 'Probability distributions, hypothesis testing, regression analysis, experimental design, and mathematical intuition.'
  },
  {
    key: 'coding_skills',
    prop: 'coding',
    label: 'Coding Skills (SAS, Python, SQL)',
    impact: 'Strong Core (r = +0.444)',
    badgeColor: 'var(--c-indigo)',
    weight: '+0.59',
    lowMean: 3.85,
    highMean: 4.64,
    desc: 'Proficiency in Base SAS, PROC SQL, SAS Macros, Python pandas/numpy, and robust data pipeline authoring.'
  },
  {
    key: 'ai_and_ml_skills',
    prop: 'ai_ml',
    label: 'AI & Machine Learning Skills',
    impact: 'High Impact (r = +0.405)',
    badgeColor: 'var(--c-indigo)',
    weight: '+1.04',
    lowMean: 4.28,
    highMean: 4.82,
    desc: 'Supervised & unsupervised algorithms, feature selection, validation techniques, and predictive modeling.'
  },
  {
    key: 'big_data_skills',
    prop: 'big_data',
    label: 'Big Data & Distributed Systems',
    impact: 'Baseline Skill (r = +0.112)',
    badgeColor: 'var(--c-amber)',
    weight: '+0.75',
    lowMean: 3.75,
    highMean: 3.94,
    desc: 'Hadoop ecosystem, Spark processing, distributed data wrangling, and high-volume data handling.'
  }
];

export default function JdsPredictorView({ onNavigateToRoadmap }) {
  const [scores, setScores] = useState({
    big_data: 3.8,
    maths_stats: 4.3,
    coding: 4.3,
    ai_ml: 4.6,
    storytelling: 4.4
  });

  const probability = predictJdsHike(scores);
  const probPercent = Math.round(probability * 100);

  const handleSliderChange = (prop, val) => {
    setScores(prev => ({ ...prev, [prop]: parseFloat(val) }));
  };

  const applyPreset = (presetScores) => {
    setScores(presetScores);
  };

  // Identify primary bottleneck (biggest gap between current and highMean)
  let maxGap = -1;
  let bottleneckTrait = null;
  TRAIT_CONFIG.forEach(trait => {
    const currentVal = scores[trait.prop];
    const gap = trait.highMean - currentVal;
    if (gap > maxGap) {
      maxGap = gap;
      bottleneckTrait = trait;
    }
  });

  const getTier = () => {
    if (probPercent >= 80) return { label: 'Elite Fast-Track Promotion', color: '#10b981', bg: 'rgba(16,185,129,0.12)' };
    if (probPercent >= 60) return { label: 'High Hike Probable', color: '#6366f1', bg: 'rgba(99,102,241,0.12)' };
    if (probPercent >= 40) return { label: 'Moderate Hike Potential', color: '#f59e0b', bg: 'rgba(245,158,11,0.12)' };
    return { label: 'Low Hike Risk — Action Needed', color: '#fb7185', bg: 'rgba(251,113,133,0.12)' };
  };

  const tier = getTier();

  return (
    <div className="tab-pane">
      {/* Header */}
      <div className="section-head">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div className="radar-badge">
            <Award size={13} /> Official SAS Hackathon JDS Model (N=139)
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--c-muted)' }}>
            Dataset: <code>JDS Skill Traits.xlsx</code>
          </span>
        </div>
        <h1 className="hero-title" style={{ marginTop: 12 }}>
          Junior Data Scientist <span className="text-gradient">Hike & Promotion Predictor</span>
        </h1>
        <p className="hero-sub">
          Predict your salary hike and fast-track promotion probability based on empirical evaluations of 139 junior data scientists. Discover which technical skills directly trigger enterprise promotions.
        </p>
      </div>

      {/* Preset Chips */}
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 28 }}>
        <span style={{ fontSize: '0.82rem', color: 'var(--c-muted)', alignSelf: 'center', fontWeight: 600 }}>
          Quick Benchmark Presets:
        </span>
        {PRESETS.map((p, i) => (
          <button
            key={i}
            className="chip"
            onClick={() => applyPreset(p.scores)}
            title={p.note}
            style={{ fontSize: '0.82rem', padding: '6px 14px' }}
          >
            {p.name}
          </button>
        ))}
      </div>

      <div className="view-grid">
        {/* Left Column: Interactive Sliders */}
        <div>
          <div className="card" style={{ padding: 24, marginBottom: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>
                Technical Evaluation Dimensions
              </h2>
              <span style={{ fontSize: '0.78rem', color: 'var(--c-muted)' }}>
                Scale: 1.0 (Novice) to 5.0 (Mastery)
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {TRAIT_CONFIG.map(trait => {
                const val = scores[trait.prop];
                return (
                  <div key={trait.prop} style={{ borderBottom: '1px solid var(--c-border)', paddingBottom: 18 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--c-text)' }}>
                          {trait.label}
                        </div>
                        <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 2 }}>
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
                        {val.toFixed(1)} <span style={{ fontSize: '0.75rem', color: 'var(--c-muted)' }}>/ 5.0</span>
                      </div>
                    </div>

                    <input
                      type="range"
                      min="1.0"
                      max="5.0"
                      step="0.1"
                      value={val}
                      onChange={e => handleSliderChange(trait.prop, e.target.value)}
                      style={{
                        width: '100%',
                        cursor: 'pointer',
                        accentColor: 'var(--c-indigo)',
                        height: 6,
                        borderRadius: 3
                      }}
                    />

                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--c-muted)', marginTop: 4 }}>
                      <span>Min: 1.0</span>
                      <span>Low Hike Avg: {trait.lowMean}</span>
                      <span style={{ color: 'var(--c-emerald)', fontWeight: 600 }}>High Hike Benchmark: {trait.highMean}</span>
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

        {/* Right Column: Predictive Results & Peer Comparison */}
        <div>
          {/* Main Probability Card */}
          <div className="card" style={{ padding: 26, marginBottom: 20, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: 1.2, color: 'var(--c-muted)', fontWeight: 700, marginBottom: 8 }}>
              Predicted Promotion & Hike Probability
            </div>

            {/* Circular Gauge / Giant Metric */}
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
              Calculated using empirical logistic regression coefficients trained on <strong>139 actual Junior Data Scientists</strong> in the SAS hackathon dataset.
            </p>

            <div style={{ marginTop: 20, paddingTop: 18, borderTop: '1px solid var(--c-border)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, textAlign: 'left' }}>
              <div style={{ background: 'var(--c-surface)', padding: 12, borderRadius: 8 }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--c-muted)' }}>Dataset Hike Rate</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--c-text)' }}>52.5%</div>
                <div style={{ fontSize: '0.68rem', color: 'var(--c-muted)' }}>73 of 139 received high hike</div>
              </div>
              <div style={{ background: 'var(--c-surface)', padding: 12, borderRadius: 8 }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--c-muted)' }}>Model Intercept</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--c-text)' }}>{SAS_JDS_MODEL.intercept}</div>
                <div style={{ fontSize: '0.68rem', color: 'var(--c-muted)' }}>Sigmoid decision boundary</div>
              </div>
            </div>
          </div>

          {/* Diagnostic Bottleneck Insight */}
          {bottleneckTrait && (
            <div className="card" style={{ padding: 22, marginBottom: 20, borderLeft: '4px solid var(--c-indigo)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <AlertCircle size={18} color="var(--c-indigo)" />
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, margin: 0 }}>
                  Strategic Growth Recommendation
                </h3>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--c-text)', lineHeight: 1.5, margin: '0 0 12px 0' }}>
                Your biggest promotion lever is <strong>{bottleneckTrait.label}</strong> (currently {scores[bottleneckTrait.prop].toFixed(1)} vs high-hike target {bottleneckTrait.highMean}).
              </p>
              <div style={{ fontSize: '0.8rem', color: 'var(--c-muted)', lineHeight: 1.4 }}>
                In the SAS dataset, candidates with storytelling scores &ge; 4.8 had an <strong>88.4% promotion rate</strong>, making visual reporting & storytelling the single greatest differentiator over raw coding.
              </div>
            </div>
          )}

          {/* Peer Comparison Table */}
          <div className="card" style={{ padding: 22 }}>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
              <BarChart3 size={16} /> Peer Trait Benchmark Comparison
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {TRAIT_CONFIG.map(t => {
                const userVal = scores[t.prop];
                const targetVal = t.highMean;
                const pct = Math.min(100, Math.round((userVal / 5.0) * 100));
                const targetPct = Math.min(100, Math.round((targetVal / 5.0) * 100));

                return (
                  <div key={t.prop} style={{ fontSize: '0.8rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                      <span style={{ fontWeight: 600 }}>{t.label.split(' ')[0]}</span>
                      <span style={{ fontFamily: 'monospace' }}>
                        You: <strong>{userVal.toFixed(1)}</strong> | Benchmark: <strong style={{ color: 'var(--c-emerald)' }}>{targetVal}</strong>
                      </span>
                    </div>
                    <div style={{ height: 6, background: 'var(--c-surface)', borderRadius: 3, position: 'relative', overflow: 'hidden' }}>
                      <div style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: `${pct}%`,
                        background: userVal >= targetVal ? 'var(--c-emerald)' : 'var(--c-indigo)',
                        borderRadius: 3
                      }} />
                      <div style={{
                        position: 'absolute',
                        left: `${targetPct}%`,
                        top: 0,
                        bottom: 0,
                        width: 2,
                        background: '#ffffff',
                        zIndex: 2
                      }} title="High Hike Benchmark" />
                    </div>
                  </div>
                );
              })}
            </div>

            {onNavigateToRoadmap && (
              <button
                className="btn btn-primary"
                onClick={onNavigateToRoadmap}
                style={{ width: '100%', marginTop: 20, justifyContent: 'center' }}
              >
                <span>View Recommended Learning Modules</span>
                <ChevronRight size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
