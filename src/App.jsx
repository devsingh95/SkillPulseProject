import { useState, useEffect } from 'react';
import './index.css';
import './App.css';
import Navbar from './components/Navbar';
import CareerAnalysisView from './components/CareerAnalysisView';
import MarketTrendsView from './components/MarketTrendsView';
import SkillGapAnalyzerView from './components/SkillGapAnalyzerView';
import JdsPredictorView from './components/JdsPredictorView';
import SdsLeadershipView from './components/SdsLeadershipView';
import RoadmapView from './components/RoadmapView';
import ResumeParserView from './components/ResumeParserView';
import WhatIfSimulatorView from './components/WhatIfSimulatorView';
import { PERSONAS } from './data/jobMarketData';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [tab, setTab] = useState('career');
  const [roleId, setRoleId] = useState('data-scientist');
  const [personaId, setPersonaId] = useState('ananya');
  const [skills, setSkills] = useState(PERSONAS[0].skills);
  const [currency, setCurrency] = useState('INR');
  const [theme, setTheme] = useState('dark');
  const [toast, setToast] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const flash = msg => {
    setToast(msg);
    setTimeout(() => setToast(null), 2800);
  };

  const pickPersona = id => {
    setPersonaId(id);
    const p = PERSONAS.find(x => x.id === id);
    if (p) {
      setSkills(p.skills);
      setRoleId(p.targetRole);
      flash(`Loaded ${p.name}'s verified SAS skills profile`);
    }
  };

  const goRole = id => {
    setRoleId(id);
    setTab('analyzer');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goRoadmap = () => {
    setTab('roadmap');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const applyResume = extracted => {
    setSkills(prev => [...new Set([...prev, ...extracted])]);
    setTab('career');
    flash(`Extracted & imported ${extracted.length} skills into Career Analysis`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar
        activeTab={tab}
        setActiveTab={setTab}
        currency={currency}
        setCurrency={setCurrency}
        theme={theme}
        setTheme={setTheme}
        onPersona={pickPersona}
        personaId={personaId}
      />

      <main className="app-main">
        {tab === 'career' && (
          <CareerAnalysisView
            currency={currency}
            onNavigateToRoadmap={goRoadmap}
          />
        )}

        {tab === 'trends' && (
          <MarketTrendsView
            currency={currency}
            onSelectRole={goRole}
          />
        )}

        {tab === 'analyzer' && (
          <SkillGapAnalyzerView
            selectedRoleId={roleId}
            setSelectedRoleId={setRoleId}
            userSkills={skills}
            setUserSkills={setSkills}
            currency={currency}
            onNavigateToRoadmap={goRoadmap}
            onNavigateToJds={() => setTab('jds')}
            onNavigateToSds={() => setTab('sds')}
          />
        )}

        {tab === 'jds' && (
          <JdsPredictorView
            onNavigateToRoadmap={goRoadmap}
          />
        )}

        {tab === 'sds' && (
          <SdsLeadershipView
            onNavigateToRoadmap={goRoadmap}
          />
        )}

        {tab === 'roadmap' && (
          <RoadmapView
            selectedRoleId={roleId}
            userSkills={skills}
            currency={currency}
          />
        )}

        {tab === 'resume' && (
          <ResumeParserView
            onApply={applyResume}
            onSelectRole={goRole}
          />
        )}

        {tab === 'what-if' && (
          <WhatIfSimulatorView
            selectedRoleId={roleId}
            userSkills={skills}
            currency={currency}
            onCommit={setSkills}
            onRoadmap={goRoadmap}
          />
        )}
      </main>

      {/* Floating Toast notification */}
      {toast && (
        <div className="toast">
          <CheckCircle2 size={17} color="var(--c-emerald)" />
          <span>{toast}</span>
        </div>
      )}

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-inner">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            <span className="footer-brand">SkillPulse</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--c-text-3)' }}>
              Official SAS Hackathon Edition • Powered by <code>Analytics Jobs.csv</code>, <code>DataScience Jobs.csv</code>, <code>JDS Skill Traits.xlsx</code>, <code>SDS Personality Traits.xlsx</code> & <code>skillpulse_models/</code>
            </span>
          </div>
          <div className="footer-status">
            <div className="status-dot" /> 14,840 Pretrained Vectors & Random Forest Model Online
          </div>
        </div>
      </footer>
    </div>
  );
}
