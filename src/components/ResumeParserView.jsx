import { useState } from 'react';
import { FileText, Upload, RefreshCw, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { parseResume, SAMPLE_RESUME } from '../utils/resumeParser';

export default function ResumeParserView({ onApply, onSelectRole }) {
  const [text, setText] = useState(SAMPLE_RESUME);
  const [result, setResult] = useState(() => parseResume(SAMPLE_RESUME));
  const [scanning, setScanning] = useState(false);

  const scan = () => {
    setScanning(true);
    setTimeout(() => { setResult(parseResume(text)); setScanning(false); }, 350);
  };

  const handleFile = e => {
    const f = e.target.files?.[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = ev => { const c = ev.target?.result; if (typeof c === 'string') { setText(c); setResult(parseResume(c)); } };
    reader.readAsText(f);
  };

  return (
    <div className="page-enter" style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {/* Header */}
      <div className="hero anim-fade-up">
        <div className="badge badge-rose" style={{ marginBottom: 10 }}><Sparkles size={12} /> RESUME INTELLIGENCE</div>
        <h1 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', marginBottom: 8 }}>
          Scan your resume in seconds
        </h1>
        <p style={{ color: 'var(--c-text-2)', fontSize: '.9rem', maxWidth: 540 }}>
          Paste your resume text and SkillPulse extracts your tech stack, scores your ATS density, and recommends matching career tracks.
        </p>
      </div>

      <div className="bento bento-2 anim-fade-up delay-2">
        {/* Left: Input */}
        <div className="card" style={{ padding: 22, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <h3 style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: 8 }}>
            <FileText size={17} color="var(--c-violet)" /> Paste or upload
          </h3>

          {/* Drop zone */}
          <div style={{
            border: '2px dashed var(--border-default)', borderRadius: 'var(--r-md)',
            padding: 14, textAlign: 'center', position: 'relative', cursor: 'pointer',
          }}>
            <input type="file" accept=".txt,.md" onChange={handleFile}
              style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer' }} />
            <Upload size={20} color="var(--c-text-3)" style={{ marginBottom: 4 }} />
            <span style={{ fontSize: '.8rem', color: 'var(--c-text-3)', display: 'block' }}>Drop .txt/.md file or click</span>
          </div>

          <textarea className="input" rows={12} value={text} onChange={e => setText(e.target.value)}
            placeholder="Paste resume text here…" />

          <button className="btn btn-primary btn-block" onClick={scan} disabled={scanning}>
            <RefreshCw size={15} className={scanning ? 'animate-spin' : ''} />
            {scanning ? 'Scanning…' : 'Parse skills'}
          </button>
        </div>

        {/* Right: Results */}
        <div className="card" style={{ padding: 22, display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontSize: '1rem' }}>Extracted Skills</h3>
            <span className="badge badge-indigo">{result.skills.length} found</span>
          </div>

          {/* ATS bar */}
          <div className="metric-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
              <span className="label">ATS density</span>
              <strong className="mono" style={{ color: result.ats >= 70 ? 'var(--c-emerald)' : 'var(--c-amber)', fontSize: '.9rem' }}>{result.ats}%</strong>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${result.ats}%`, background: result.ats >= 70 ? 'var(--c-emerald)' : 'var(--c-amber)' }} />
            </div>
            <span style={{ fontSize: '.72rem', color: 'var(--c-text-3)', marginTop: 4, display: 'block' }}>
              {result.ats >= 70 ? 'Good keyword coverage for ATS filters.' : 'Add more specific frameworks and tools.'}
            </span>
          </div>

          {/* Categorized */}
          {result.skills.length === 0
            ? <p style={{ color: 'var(--c-text-3)', fontStyle: 'italic', fontSize: '.84rem' }}>No skills detected yet.</p>
            : <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
                {Object.entries(result.cats).map(([cat, skills]) => (
                  <div key={cat}>
                    <span style={{ fontSize: '.72rem', color: 'var(--c-indigo)', fontWeight: 700, display: 'block', marginBottom: 4 }}>{cat}</span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {skills.map(s => (
                        <span key={s} className="chip" style={{ cursor: 'default', fontSize: '.75rem' }}>
                          <CheckCircle size={11} color="var(--c-emerald)" /> {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
          }

          <button className="btn btn-primary btn-block" disabled={result.skills.length === 0}
            onClick={() => onApply(result.skills)}>
            Import {result.skills.length} skills into analyzer <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
