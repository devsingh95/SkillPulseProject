import { TrendingUp, GitFork, FileText, Sparkles, Sun, Moon, Target, Award, Brain, Briefcase } from 'lucide-react';
import { PERSONAS } from '../data/jobMarketData';

const TABS = [
  { id: 'career',   label: 'Career Analysis',   icon: Briefcase },
  { id: 'trends',   label: 'Market Radar',      icon: TrendingUp },
  { id: 'analyzer', label: 'Role Fit Analyzer', icon: Target },
  { id: 'jds',      label: 'JDS Hike Predictor',icon: Award },
  { id: 'sds',      label: 'SDS Leadership',    icon: Brain },
  { id: 'roadmap',  label: 'Roadmap',           icon: GitFork },
  { id: 'resume',   label: 'Resume Scanner',    icon: FileText },
  { id: 'what-if',  label: 'What-If Sandbox',   icon: Sparkles },
];

export default function Navbar({ activeTab, setActiveTab, currency, setCurrency, theme, setTheme, onPersona, personaId }) {
  return (
    <header className="navbar" style={{ background: theme === 'dark' ? 'rgba(6,8,15,.88)' : 'rgba(255,255,255,.88)' }}>
      <div className="navbar-inner" style={{ maxWidth: 1360 }}>
        {/* Brand */}
        <div className="brand" onClick={() => setActiveTab('career')} style={{ cursor: 'pointer' }}>
          <div className="brand-icon">⚡</div>
          <span className="brand-name">Skill<span className="brand-accent">Pulse</span></span>
          <span style={{
            fontSize: '0.68rem',
            padding: '2px 6px',
            borderRadius: 4,
            background: 'rgba(99,102,241,0.15)',
            color: 'var(--c-indigo)',
            fontWeight: 700,
            marginLeft: 6
          }}>
            ML Engine
          </span>
        </div>

        {/* Tabs */}
        <nav className="nav-tabs" style={{ overflowX: 'auto', maxWidth: '65%' }}>
          {TABS.map(t => {
            const I = t.icon;
            return (
              <button
                key={t.id}
                className={`nav-tab ${activeTab === t.id ? 'active' : ''}`}
                onClick={() => setActiveTab(t.id)}
                style={{ whiteSpace: 'nowrap' }}
              >
                <I size={14} />
                <span>{t.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Controls */}
        <div className="nav-controls">
          <select
            className="nav-control-btn"
            value={personaId || ''}
            onChange={e => onPersona(e.target.value)}
            style={{ paddingRight: 6, fontSize: '0.78rem' }}
          >
            <option value="">Custom Profile</option>
            {PERSONAS.map(p => (
              <option key={p.id} value={p.id}>👤 {p.name}</option>
            ))}
          </select>

          <button
            className="nav-control-btn"
            onClick={() => setCurrency(c => c === 'INR' ? 'USD' : 'INR')}
            title="Toggle currency display"
          >
            {currency === 'INR' ? '₹' : '$'}
          </button>

          <button
            className="nav-control-btn"
            onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
            title="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={15} color="#fbbf24" /> : <Moon size={15} color="#6366f1" />}
          </button>
        </div>
      </div>
    </header>
  );
}
