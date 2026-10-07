import { useState, useEffect } from 'react';
import {
  Sparkles, Briefcase, MapPin, Clock, DollarSign, Target, CheckCircle2,
  XCircle, ArrowRight, ShieldCheck, RefreshCw, AlertCircle, Award, Brain,
  Bot, Cpu, TrendingUp, Layers, Check, ChevronRight, Zap
} from 'lucide-react';

const PRESET_TEST_CASES = [
  {
    name: 'Standard Test Case (Prompt Specified)',
    skills: 'Python, SQL, Excel, Power BI',
    experience: '2',
    role: 'Data Analyst',
    location: 'Bangalore'
  },
  {
    name: 'Data Scientist Profile',
    skills: 'Python, Machine Learning, SQL, SAS, Statistics, Deep Learning',
    experience: '3',
    role: 'Data Scientist',
    location: 'Bengaluru'
  },
  {
    name: 'Big Data Engineer Profile',
    skills: 'Hadoop, Spark, SQL, Python, Big Data, Hive, Java',
    experience: '4',
    role: 'Data Engineer',
    location: 'Hyderabad'
  },
  {
    name: 'Business Analyst Profile',
    skills: 'Business Analysis, SQL, Excel, Tableau, SAS, Analytics',
    experience: '2',
    role: 'Business Analyst',
    location: 'Mumbai'
  }
];

export default function CareerAnalysisView({ currency = 'INR', onNavigateToRoadmap }) {
  // Candidate Input State (Steps 1 to 5)
  const [skillsInput, setSkillsInput] = useState('Python, SQL, Excel, Power BI');
  const [experienceInput, setExperienceInput] = useState('2');
  const [roleInput, setRoleInput] = useState('Data Analyst');
  const [locationInput, setLocationInput] = useState('Bangalore');

  // Analysis State
  const [isLoading, setIsLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [selectedJobIndex, setSelectedJobIndex] = useState(0);
  const [selectedAgentId, setSelectedAgentId] = useState('Agent-4');
  const [serverStatus, setServerStatus] = useState('checking');
  const [errorMessage, setErrorMessage] = useState(null);

  // Check backend server health on mount
  useEffect(() => {
    checkServerHealth();
  }, []);

  const checkServerHealth = async () => {
    try {
      const res = await fetch('/api/health');
      if (res.ok) {
        const data = await res.json();
        setServerStatus('online');
      } else {
        setServerStatus('offline');
      }
    } catch {
      // Direct check to port 5001 if proxy is pending
      try {
        const directRes = await fetch('http://127.0.0.1:5001/api/health');
        if (directRes.ok) {
          setServerStatus('online');
        } else {
          setServerStatus('offline');
        }
      } catch {
        setServerStatus('offline');
      }
    }
  };

  const handleApplyPreset = (preset) => {
    setSkillsInput(preset.skills);
    setExperienceInput(preset.experience);
    setRoleInput(preset.role);
    setLocationInput(preset.location);
    setErrorMessage(null);
  };

  // Step 6: Click "Analyze My Career"
  const handleAnalyze = async () => {
    if (!skillsInput.trim() && !roleInput.trim()) {
      setErrorMessage('Please enter at least one skill or a preferred job role to analyze.');
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);

    const payload = {
      skills: skillsInput,
      experience: experienceInput,
      role: roleInput,
      location: locationInput
    };

    try {
      let res;
      try {
        res = await fetch('/api/analyze', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
      } catch {
        // Fallback to direct port 5001
        res = await fetch('http://127.0.0.1:5001/api/analyze', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
      }

      if (res.ok) {
        const data = await res.json();
        setAnalysisResult(data);
        setSelectedJobIndex(0);
        setServerStatus('online');
      } else {
        throw new Error(`Server responded with status ${res.status}`);
      }
    } catch (err) {
      console.warn('API fetch warning:', err);
      setErrorMessage(
        'The local ML model server is initializing. Please verify python scripts/skillpulse_server.py is running on port 5001.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Trigger initial test case analysis on first mount
  useEffect(() => {
    handleAnalyze();
  }, []);

  const currentJob = analysisResult?.top_recommendations?.[selectedJobIndex] ||
    analysisResult?.top_recommendations?.[0];

  return (
    <div className="page-enter" style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {/* ── Header ──────────────────────────────────────── */}
      <section className="hero anim-fade-up">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 12 }}>
          <div className="badge badge-indigo">
            <Sparkles size={13} /> OFFICIAL TRAINED MODEL INFERENCE ENGINE
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.78rem' }}>
            <span style={{
              display: 'inline-block',
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: serverStatus === 'online' ? 'var(--c-emerald)' : 'var(--c-amber)',
              boxShadow: `0 0 8px ${serverStatus === 'online' ? 'var(--c-emerald)' : 'var(--c-amber)'}`
            }} />
            <span style={{ color: 'var(--c-text-2)', fontFamily: 'monospace' }}>
              {serverStatus === 'online' ? 'TF-IDF & Random Forest Server Live (Port 5001)' : 'Connecting Model Server...'}
            </span>
          </div>
        </div>

        <h1 style={{ fontSize: 'clamp(1.7rem, 4vw, 2.5rem)', maxWidth: 760, marginBottom: 10, lineHeight: 1.18 }}>
          SkillPulse <span className="text-gradient">Career Intelligence & Recommendation</span>
        </h1>
        <p style={{ color: 'var(--c-text-2)', fontSize: '0.96rem', maxWidth: 660, lineHeight: 1.6 }}>
          Transform candidate profiles into verified job recommendations using the precomputed <strong>TF-IDF Vectorizer</strong>, <strong>Job Matrix</strong>, and trained <strong>Salary Random Forest Model</strong>.
        </p>

        {/* Quick Test Presets */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 18, alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--c-text-3)', fontWeight: 600 }}>
            Load Test Profile:
          </span>
          {PRESET_TEST_CASES.map((preset, idx) => (
            <button
              key={idx}
              className="chip"
              onClick={() => handleApplyPreset(preset)}
              style={{ fontSize: '0.76rem', padding: '5px 12px' }}
            >
              {preset.name}
            </button>
          ))}
        </div>
      </section>

      {/* ── Candidate Profile Input Form (Steps 1 to 5) ──────────────── */}
      <section className="card anim-fade-up delay-1" style={{ padding: 26 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18, borderBottom: '1px solid var(--border-default)', paddingBottom: 14 }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, display: 'flex', alignItems: 'center', gap: 8 }}>
            <Briefcase size={18} color="var(--c-indigo)" /> Step 1 – 5: Candidate Profile Configuration
          </h2>
          <span style={{ fontSize: '0.78rem', color: 'var(--c-text-3)' }}>
            All inferences computed via <code>skillpulse_models/</code>
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 18, marginBottom: 20 }}>
          {/* Step 2: Skills */}
          <div style={{ gridColumn: 'span 2' }}>
            <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--c-text-2)', display: 'block', marginBottom: 6 }}>
              Step 2: Candidate Skills (Comma-separated)
            </label>
            <input
              type="text"
              className="input"
              value={skillsInput}
              onChange={e => setSkillsInput(e.target.value)}
              placeholder="e.g. Python, SQL, Excel, Power BI, Machine Learning, Tableau"
              style={{ width: '100%', fontSize: '0.9rem' }}
            />
            <span style={{ fontSize: '0.74rem', color: 'var(--c-text-3)', marginTop: 4, display: 'block' }}>
              Used to compute TF-IDF cosine similarity against 14,840 job requirement vectors.
            </span>
          </div>

          {/* Step 3: Experience */}
          <div>
            <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--c-text-2)', display: 'block', marginBottom: 6 }}>
              Step 3: Experience (Years)
            </label>
            <input
              type="number"
              min="0"
              max="25"
              step="0.5"
              className="input"
              value={experienceInput}
              onChange={e => setExperienceInput(e.target.value)}
              placeholder="e.g. 2"
              style={{ width: '100%' }}
            />
            <span style={{ fontSize: '0.74rem', color: 'var(--c-text-3)', marginTop: 4, display: 'block' }}>
              Mapped to <code>min_experience</code> & <code>avg_experience</code> features.
            </span>
          </div>

          {/* Step 4: Preferred Role */}
          <div>
            <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--c-text-2)', display: 'block', marginBottom: 6 }}>
              Step 4: Preferred Job Role
            </label>
            <input
              type="text"
              className="input"
              value={roleInput}
              onChange={e => setRoleInput(e.target.value)}
              placeholder="e.g. Data Analyst, Data Scientist, Business Analyst"
              style={{ width: '100%' }}
            />
            <span style={{ fontSize: '0.74rem', color: 'var(--c-text-3)', marginTop: 4, display: 'block' }}>
              Target title in Analytics Jobs dataset.
            </span>
          </div>

          {/* Step 5: Preferred Location */}
          <div>
            <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--c-text-2)', display: 'block', marginBottom: 6 }}>
              Step 5: Preferred Location
            </label>
            <input
              type="text"
              className="input"
              value={locationInput}
              onChange={e => setLocationInput(e.target.value)}
              placeholder="e.g. Bangalore, Mumbai, Gurgaon, Hyderabad"
              style={{ width: '100%' }}
            />
            <span style={{ fontSize: '0.74rem', color: 'var(--c-text-3)', marginTop: 4, display: 'block' }}>
              Indian analytics hub filter.
            </span>
          </div>
        </div>

        {/* Step 6: CTA Button */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <button
            className="btn btn-primary"
            onClick={handleAnalyze}
            disabled={isLoading}
            style={{ padding: '10px 24px', fontSize: '0.92rem' }}
          >
            <RefreshCw size={16} className={isLoading ? 'animate-spin' : ''} />
            <span>{isLoading ? 'Running TF-IDF & Salary Models...' : 'Analyze My Career'}</span>
            {!isLoading && <ArrowRight size={16} />}
          </button>

          {errorMessage && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--c-rose)', fontSize: '0.82rem' }}>
              <AlertCircle size={15} />
              <span>{errorMessage}</span>
            </div>
          )}
        </div>
      </section>

      {/* ── Step 7: Generated SkillPulse Career Analysis ──────────────── */}
      {analysisResult && (
        <section className="anim-fade-up delay-2" style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {/* Header Summary Banner */}
          <div className="card" style={{ padding: 24, borderLeft: '4px solid var(--c-emerald)' }}>
            <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: 1.2, color: 'var(--c-emerald)', fontWeight: 700, marginBottom: 6 }}>
              SKILLPULSE CAREER ANALYSIS REPORT
            </div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 800, margin: '0 0 16px 0', color: 'var(--c-text)' }}>
              Candidate Profile & Empirical Valuation
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
              <div style={{ background: 'var(--bg-raised)', padding: 14, borderRadius: 'var(--r-md)', border: '1px solid var(--border-default)' }}>
                <span style={{ fontSize: '0.72rem', color: 'var(--c-text-3)', display: 'block', marginBottom: 4 }}>Skills Configured</span>
                <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                  {analysisResult.candidate_profile.skills.map((sk, i) => (
                    <span key={i} className="chip active" style={{ fontSize: '0.72rem', padding: '2px 8px' }}>
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ background: 'var(--bg-raised)', padding: 14, borderRadius: 'var(--r-md)', border: '1px solid var(--border-default)' }}>
                <span style={{ fontSize: '0.72rem', color: 'var(--c-text-3)', display: 'block', marginBottom: 4 }}>Experience</span>
                <span style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--c-text)' }}>
                  {analysisResult.candidate_profile.experience}
                </span>
              </div>

              <div style={{ background: 'var(--bg-raised)', padding: 14, borderRadius: 'var(--r-md)', border: '1px solid var(--border-default)' }}>
                <span style={{ fontSize: '0.72rem', color: 'var(--c-text-3)', display: 'block', marginBottom: 4 }}>Target Role</span>
                <span style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--c-indigo)' }}>
                  {analysisResult.candidate_profile.preferred_role}
                </span>
              </div>

              <div style={{ background: 'var(--bg-raised)', padding: 14, borderRadius: 'var(--r-md)', border: '1px solid var(--border-default)' }}>
                <span style={{ fontSize: '0.72rem', color: 'var(--c-text-3)', display: 'block', marginBottom: 4 }}>Target Location</span>
                <span style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--c-text)' }}>
                  {analysisResult.candidate_profile.preferred_location}
                </span>
              </div>
            </div>
          </div>

          {/* ── Career Value / Salary Model Card ──────────────── */}
          <div className="card" style={{ padding: 24, borderLeft: '4px solid var(--c-indigo)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 14 }}>
              <div>
                <h3 style={{ fontSize: '1.08rem', fontWeight: 700, margin: '0 0 4px 0', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <DollarSign size={18} color="var(--c-emerald)" /> Career Value & Compensation Estimation
                </h3>
                <span style={{ fontSize: '0.78rem', color: 'var(--c-text-3)' }}>
                  Predicted using the fitted <code>salary_model.pkl</code> (Random Forest Regressor trained on 14,840 records).
                </span>
              </div>
              <span className="badge badge-emerald">Verified Model Inference</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
              <div style={{ background: 'var(--bg-raised)', padding: 18, borderRadius: 'var(--r-md)', border: '1px solid var(--border-default)' }}>
                <span style={{ fontSize: '0.74rem', color: 'var(--c-text-3)', textTransform: 'uppercase', letterSpacing: 0.8, fontWeight: 700, display: 'block', marginBottom: 4 }}>
                  Estimated Salary
                </span>
                <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--c-emerald)', lineHeight: 1.1 }}>
                  {analysisResult.career_value.estimated_salary}
                </div>
                <span style={{ fontSize: '0.74rem', color: 'var(--c-text-3)', marginTop: 4, display: 'block' }}>
                  Model-predicted continuous compensation midpoint.
                </span>
              </div>

              <div style={{ background: 'var(--bg-raised)', padding: 18, borderRadius: 'var(--r-md)', border: '1px solid var(--border-default)' }}>
                <span style={{ fontSize: '0.74rem', color: 'var(--c-text-3)', textTransform: 'uppercase', letterSpacing: 0.8, fontWeight: 700, display: 'block', marginBottom: 4 }}>
                  Estimated Salary Band
                </span>
                <div style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--c-indigo)', lineHeight: 1.1 }}>
                  {analysisResult.career_value.estimated_salary_band}
                </div>
                <span style={{ fontSize: '0.74rem', color: 'var(--c-text-3)', marginTop: 4, display: 'block' }}>
                  Expected band based on skill count & experience bracket.
                </span>
              </div>
            </div>

            <div style={{ marginTop: 14, padding: '10px 14px', background: 'var(--bg-base)', borderRadius: 'var(--r-sm)', fontSize: '0.78rem', color: 'var(--c-text-3)' }}>
              <strong>Notice:</strong> Estimated values are generated directly from the historical distribution of <code>cleaned_jobs.csv</code>. They represent model midpoints and are not guaranteed wage offers.
            </div>
          </div>

          {/* ── Agentic AI Multi-Agent Copilot Section ──────────────── */}
          {analysisResult.agentic_copilot && (
            <div className="card" style={{ padding: 24, borderLeft: '4px solid var(--c-cyan)', background: 'linear-gradient(180deg, rgba(6,182,212,0.04) 0%, rgba(15,23,42,0) 100%)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
                <div>
                  <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: 1.1, color: 'var(--c-cyan)', fontWeight: 800, marginBottom: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Bot size={15} /> AGENTIC AI MULTI-AGENT COPILOT &bull; PRESCRIPTIVE CORE
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0, color: 'var(--c-text)' }}>
                    Autonomous 4-Agent Career Decision Swarm
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--c-text-3)', margin: '4px 0 0 0' }}>
                    Coordinating Macro Market Intelligence, JDS Skill Attribution, SDS OCEAN Psychometrics, and Chief Strategy Execution without hallucination.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span className="badge badge-cyan" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--c-cyan)', boxShadow: '0 0 8px var(--c-cyan)', display: 'inline-block' }}></span>
                    4 Agents Synchronized
                  </span>
                </div>
              </div>

              {/* Agent Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12, marginBottom: 20 }}>
                {analysisResult.agentic_copilot.agents.map((agent) => {
                  const isSelected = selectedAgentId === agent.agent_id;
                  let icon = <Briefcase size={16} color="var(--c-indigo)" />;
                  if (agent.agent_id === 'Agent-2') icon = <TrendingUp size={16} color="var(--c-emerald)" />;
                  if (agent.agent_id === 'Agent-3') icon = <Brain size={16} color="var(--c-rose)" />;
                  if (agent.agent_id === 'Agent-4') icon = <Cpu size={16} color="var(--c-cyan)" />;

                  return (
                    <div
                      key={agent.agent_id}
                      onClick={() => setSelectedAgentId(agent.agent_id)}
                      style={{
                        cursor: 'pointer',
                        padding: '14px 16px',
                        borderRadius: 'var(--r-md)',
                        background: isSelected ? 'var(--bg-card)' : 'var(--bg-raised)',
                        border: isSelected ? '2px solid var(--c-cyan)' : '1px solid var(--border-default)',
                        boxShadow: isSelected ? '0 0 16px rgba(6,182,212,0.18)' : 'none',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                        <span style={{ fontSize: '0.68rem', fontWeight: 800, color: 'var(--c-text-3)', textTransform: 'uppercase', letterSpacing: 0.8 }}>
                          {agent.agent_id}
                        </span>
                        <span style={{ fontSize: '0.68rem', padding: '2px 6px', borderRadius: 10, background: 'rgba(16,185,129,0.15)', color: 'var(--c-emerald)', fontWeight: 700 }}>
                          {agent.status}
                        </span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                        {icon}
                        <strong style={{ fontSize: '0.85rem', color: isSelected ? 'var(--c-cyan)' : 'var(--c-text)' }}>
                          {agent.name}
                        </strong>
                      </div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--c-text-3)', lineHeight: 1.35 }}>
                        {agent.role}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Selected Agent Deep Reasoning Inspector */}
              {(() => {
                const activeAgent = analysisResult.agentic_copilot.agents.find(a => a.agent_id === selectedAgentId) ||
                  analysisResult.agentic_copilot.agents[3];

                return (
                  <div style={{ background: 'var(--bg-raised)', borderRadius: 'var(--r-md)', border: '1px solid var(--border-default)', padding: 18, marginBottom: 18 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, borderBottom: '1px solid var(--border-default)', pb: 10, paddingBottom: 10 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <Bot size={18} color="var(--c-cyan)" />
                        <div>
                          <strong style={{ fontSize: '0.92rem', color: 'var(--c-text)' }}>{activeAgent.name}</strong>
                          <span style={{ fontSize: '0.75rem', color: 'var(--c-text-3)', marginLeft: 8 }}>({activeAgent.role})</span>
                        </div>
                      </div>
                      <span className="badge badge-emerald" style={{ fontSize: '0.7rem' }}>Empirically Grounded</span>
                    </div>

                    {/* Agent Specific Breakdown */}
                    {activeAgent.agent_id === 'Agent-1' && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        <p style={{ fontSize: '0.84rem', color: 'var(--c-text-2)', margin: 0, lineHeight: 1.5 }}>
                          {activeAgent.findings}
                        </p>
                        <div>
                          <span style={{ fontSize: '0.74rem', color: 'var(--c-text-3)', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>
                            Top Hiring Employer Clusters in Dataset:
                          </span>
                          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                            {activeAgent.target_employers?.map((emp, i) => (
                              <span key={i} className="chip" style={{ fontSize: '0.75rem', padding: '3px 10px', background: 'var(--bg-card)' }}>
                                <Briefcase size={12} color="var(--c-indigo)" /> {emp}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {activeAgent.agent_id === 'Agent-2' && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
                          <div style={{ background: 'var(--bg-card)', padding: 12, borderRadius: 'var(--r-sm)' }}>
                            <span style={{ fontSize: '0.72rem', color: 'var(--c-text-3)', display: 'block' }}>Primary Bottleneck Skill</span>
                            <strong style={{ fontSize: '1rem', color: 'var(--c-rose)' }}>{activeAgent.identified_bottleneck}</strong>
                          </div>
                          <div style={{ background: 'var(--bg-card)', padding: 12, borderRadius: 'var(--r-sm)' }}>
                            <span style={{ fontSize: '0.72rem', color: 'var(--c-text-3)', display: 'block' }}>Marginal Hike Potential</span>
                            <strong style={{ fontSize: '1rem', color: 'var(--c-emerald)' }}>{activeAgent.marginal_hike_potential}</strong>
                          </div>
                        </div>
                        <p style={{ fontSize: '0.82rem', color: 'var(--c-text-2)', margin: 0, lineHeight: 1.5 }}>
                          <strong>Empirical Attribution:</strong> {activeAgent.empirical_rationale}
                        </p>
                      </div>
                    )}

                    {activeAgent.agent_id === 'Agent-3' && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
                          <div style={{ background: 'var(--bg-card)', padding: 12, borderRadius: 'var(--r-sm)' }}>
                            <span style={{ fontSize: '0.72rem', color: 'var(--c-text-3)', display: 'block' }}>Assessed Career Track</span>
                            <strong style={{ fontSize: '0.92rem', color: 'var(--c-indigo)' }}>{activeAgent.current_track}</strong>
                          </div>
                          <div style={{ background: 'var(--bg-card)', padding: 12, borderRadius: 'var(--r-sm)' }}>
                            <span style={{ fontSize: '0.72rem', color: 'var(--c-text-3)', display: 'block' }}>Key Behavioral Focus</span>
                            <strong style={{ fontSize: '0.92rem', color: 'var(--c-rose)' }}>{activeAgent.key_behavioral_focus}</strong>
                          </div>
                        </div>
                        <p style={{ fontSize: '0.82rem', color: 'var(--c-text-2)', margin: 0, lineHeight: 1.5 }}>
                          <strong>SDS Psychometric Finding:</strong> {activeAgent.prescriptive_guidance}
                        </p>
                      </div>
                    )}

                    {activeAgent.agent_id === 'Agent-4' && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        <div style={{ background: 'var(--bg-card)', padding: 14, borderRadius: 'var(--r-sm)', borderLeft: '3px solid var(--c-cyan)' }}>
                          <span style={{ fontSize: '0.72rem', color: 'var(--c-cyan)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 0.8, display: 'block', marginBottom: 4 }}>
                            Autonomous Strategic Synthesis
                          </span>
                          <p style={{ fontSize: '0.86rem', color: 'var(--c-text)', margin: '0 0 8px 0', lineHeight: 1.5 }}>
                            {activeAgent.synthesis_summary}
                          </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 12 }}>
                          <div style={{ background: 'var(--bg-card)', padding: 12, borderRadius: 'var(--r-sm)' }}>
                            <span style={{ fontSize: '0.72rem', color: 'var(--c-text-3)', display: 'block' }}>Immediate 30-Day Sprint</span>
                            <strong style={{ fontSize: '0.86rem', color: 'var(--c-emerald)' }}>{activeAgent.immediate_30_day_sprint}</strong>
                          </div>
                          <div style={{ background: 'var(--bg-card)', padding: 12, borderRadius: 'var(--r-sm)' }}>
                            <span style={{ fontSize: '0.72rem', color: 'var(--c-text-3)', display: 'block' }}>Projected Valuation Lift</span>
                            <strong style={{ fontSize: '0.86rem', color: 'var(--c-indigo)' }}>{activeAgent.projected_valuation_lift}</strong>
                          </div>
                        </div>

                        <div style={{ fontSize: '0.8rem', color: 'var(--c-text-3)', fontStyle: 'italic' }}>
                          💡 <strong>Recommended Portfolio Capstone:</strong> {activeAgent.portfolio_capstone_recommendation}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })()}

              {/* 3-Phase Prescriptive Strategic Roadmap */}
              {analysisResult.agentic_copilot.strategic_action_plan && (
                <div style={{ borderTop: '1px solid var(--border-default)', paddingTop: 16 }}>
                  <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: 0.8, color: 'var(--c-text-3)', fontWeight: 800, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Zap size={14} color="var(--c-amber)" /> Prescriptive 90-Day Execution Roadmap (Synthesized by Agent-4)
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12 }}>
                    <div style={{ background: 'var(--bg-base)', padding: 12, borderRadius: 'var(--r-sm)', borderLeft: '3px solid var(--c-emerald)' }}>
                      <span style={{ fontSize: '0.7rem', color: 'var(--c-emerald)', fontWeight: 800, textTransform: 'uppercase', display: 'block', marginBottom: 4 }}>
                        Phase 1 &bull; 0 to 30 Days
                      </span>
                      <p style={{ fontSize: '0.78rem', color: 'var(--c-text-2)', margin: 0, lineHeight: 1.45 }}>
                        {analysisResult.agentic_copilot.strategic_action_plan.step_1_30_days}
                      </p>
                    </div>

                    <div style={{ background: 'var(--bg-base)', padding: 12, borderRadius: 'var(--r-sm)', borderLeft: '3px solid var(--c-indigo)' }}>
                      <span style={{ fontSize: '0.7rem', color: 'var(--c-indigo)', fontWeight: 800, textTransform: 'uppercase', display: 'block', marginBottom: 4 }}>
                        Phase 2 &bull; 30 to 60 Days
                      </span>
                      <p style={{ fontSize: '0.78rem', color: 'var(--c-text-2)', margin: 0, lineHeight: 1.45 }}>
                        {analysisResult.agentic_copilot.strategic_action_plan.step_2_60_days}
                      </p>
                    </div>

                    <div style={{ background: 'var(--bg-base)', padding: 12, borderRadius: 'var(--r-sm)', borderLeft: '3px solid var(--c-rose)' }}>
                      <span style={{ fontSize: '0.7rem', color: 'var(--c-rose)', fontWeight: 800, textTransform: 'uppercase', display: 'block', marginBottom: 4 }}>
                        Phase 3 &bull; 60 to 90 Days
                      </span>
                      <p style={{ fontSize: '0.78rem', color: 'var(--c-text-2)', margin: 0, lineHeight: 1.45 }}>
                        {analysisResult.agentic_copilot.strategic_action_plan.step_3_90_days}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ── Top Job Recommendations & Skill Gap Analysis ──────────────── */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 24, alignItems: 'start' }}>
            {/* Left: Top Recommendations List */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Target size={18} color="var(--c-cyan)" /> Top Job Recommendations ({analysisResult.top_recommendations.length})
                </h3>
                <span style={{ fontSize: '0.78rem', color: 'var(--c-text-3)' }}>
                  Ranked by Job Match Score (TF-IDF Cosine Similarity)
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {analysisResult.top_recommendations.map((job, idx) => {
                  const isSelected = selectedJobIndex === idx;
                  return (
                    <div
                      key={job.rank}
                      className={`card ${isSelected ? 'card-interactive' : ''}`}
                      onClick={() => setSelectedJobIndex(idx)}
                      style={{
                        padding: 18,
                        cursor: 'pointer',
                        borderColor: isSelected ? 'var(--c-indigo)' : 'var(--border-default)',
                        background: isSelected ? 'var(--bg-overlay)' : 'var(--bg-card)',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                        <div>
                          <div style={{ fontSize: '0.72rem', color: 'var(--c-text-3)', fontWeight: 600, textTransform: 'uppercase' }}>
                            Job #{job.rank}
                          </div>
                          <h4 style={{ fontSize: '1.02rem', fontWeight: 700, margin: '2px 0 0 0', color: 'var(--c-text)' }}>
                            {job.job_desig}
                          </h4>
                        </div>

                        {/* Match Score */}
                        <div style={{ textAlign: 'right' }}>
                          <span className={`badge ${job.match_score >= 35 ? 'badge-emerald' : 'badge-indigo'}`} style={{ fontSize: '0.78rem' }}>
                            Job Match Score: {job.match_score}%
                          </span>
                        </div>
                      </div>

                      {/* Job Metadata Chips */}
                      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', fontSize: '0.78rem', color: 'var(--c-text-2)', marginBottom: 10 }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                          <MapPin size={13} color="var(--c-rose)" /> {job.location}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                          <Clock size={13} color="var(--c-indigo)" /> {job.experience}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                          <DollarSign size={13} color="var(--c-emerald)" /> Original Salary Band: <strong>{job.salary_band}</strong>
                        </span>
                      </div>

                      {/* Required Skills list */}
                      <div style={{ marginBottom: 10 }}>
                        <span style={{ fontSize: '0.72rem', color: 'var(--c-text-3)', display: 'block', marginBottom: 4 }}>
                          Required Skills in Dataset:
                        </span>
                        <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                          {job.required_skills.slice(0, 6).map((sk, i) => (
                            <span key={i} className="chip" style={{ fontSize: '0.7rem', padding: '2px 7px' }}>
                              {sk}
                            </span>
                          ))}
                        </div>
                      </div>

                      <p style={{ fontSize: '0.8rem', color: 'var(--c-text-3)', margin: 0, lineHeight: 1.45 }}>
                        {job.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Detailed Skill Gap Analysis on Selected Job */}
            {currentJob && (
              <div style={{ position: 'sticky', top: 80 }}>
                <div className="card" style={{ padding: 22, borderTop: '4px solid var(--c-cyan)' }}>
                  <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: 0.8, color: 'var(--c-cyan)', fontWeight: 700, marginBottom: 4 }}>
                    DEEP SKILL GAP INSPECTOR
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '0 0 12px 0', color: 'var(--c-text)' }}>
                    {currentJob.job_desig}
                  </h3>

                  {/* Skill Match Percentage Bar */}
                  <div style={{ background: 'var(--bg-raised)', padding: 14, borderRadius: 'var(--r-md)', marginBottom: 16 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                      <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>Skill Match Ratio</span>
                      <strong style={{ fontSize: '1.1rem', color: currentJob.skill_match_pct >= 50 ? 'var(--c-emerald)' : 'var(--c-amber)' }}>
                        {currentJob.skill_match_pct}%
                      </strong>
                    </div>
                    <div className="progress-track" style={{ height: 8 }}>
                      <div
                        className="progress-fill"
                        style={{
                          width: `${currentJob.skill_match_pct}%`,
                          background: currentJob.skill_match_pct >= 50 ? 'var(--c-emerald)' : 'var(--c-amber)'
                        }}
                      />
                    </div>
                    <span style={{ fontSize: '0.72rem', color: 'var(--c-text-3)', marginTop: 4, display: 'block' }}>
                      Based on direct keyword overlap with dataset requirements.
                    </span>
                  </div>

                  {/* Matched Skills */}
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--c-emerald)', display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                      <CheckCircle2 size={15} /> Matched Skills ({currentJob.matched_skills.length})
                    </div>
                    {currentJob.matched_skills.length === 0 ? (
                      <span style={{ fontSize: '0.78rem', color: 'var(--c-text-3)', fontStyle: 'italic' }}>
                        None directly matched with this posting's tags.
                      </span>
                    ) : (
                      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                        {currentJob.matched_skills.map((s, i) => (
                          <span key={i} className="chip active" style={{ fontSize: '0.75rem', padding: '3px 9px', color: 'var(--c-emerald)' }}>
                            ✓ {s}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Missing Skills */}
                  <div style={{ marginBottom: 18 }}>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--c-rose)', display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                      <XCircle size={15} /> Missing Skills ({currentJob.missing_skills.length})
                    </div>
                    {currentJob.missing_skills.length === 0 ? (
                      <span style={{ fontSize: '0.78rem', color: 'var(--c-emerald)', fontWeight: 600 }}>
                        All listed competencies covered!
                      </span>
                    ) : (
                      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                        {currentJob.missing_skills.map((s, i) => (
                          <span key={i} className="chip" style={{ fontSize: '0.75rem', padding: '3px 9px', color: 'var(--c-rose)' }}>
                            • {s}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Dataset Source Integrity Tag */}
                  <div style={{ borderTop: '1px solid var(--border-default)', paddingTop: 14, fontSize: '0.74rem', color: 'var(--c-text-3)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <ShieldCheck size={13} color="var(--c-emerald)" />
                      Verified against <code>Analytics Jobs.csv</code> row entry.
                    </span>
                  </div>
                </div>

                {/* Trait Alignment Insights Box */}
                {analysisResult.trait_insights && (
                  <div className="card" style={{ padding: 18, marginTop: 16 }}>
                    <h4 style={{ fontSize: '0.88rem', fontWeight: 700, margin: '0 0 10px 0', display: 'flex', alignItems: 'center', gap: 6 }}>
                      <Brain size={15} color="var(--c-indigo)" /> Observed Trait Profile Alignment
                    </h4>
                    <p style={{ fontSize: '0.78rem', color: 'var(--c-text-2)', lineHeight: 1.45, margin: '0 0 10px 0' }}>
                      Correlation observations from <code>JDS Skill Traits.xlsx</code> and <code>SDS Personality Traits.xlsx</code>:
                    </p>
                    <ul style={{ fontSize: '0.76rem', color: 'var(--c-text-3)', paddingLeft: 18, lineHeight: 1.5 }}>
                      <li><strong>Storytelling & Dashboards:</strong> High positive correlation with junior salary hikes.</li>
                      <li><strong>Conscientiousness:</strong> Strongest statistical predictor of senior customer-facing success.</li>
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
