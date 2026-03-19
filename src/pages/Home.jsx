/* ============================================================
   Home.jsx — Landing page at /
   Shows the event title + links to all invitations listed in
   the FALLBACK_DATA (for easy admin testing).
   ============================================================ */

import { useNavigate } from 'react-router-dom'
import { useFetchMembers } from '../hooks/useFetchMembers.js'
import Starfield from '../components/Starfield.jsx'
import { EVENT_INFO } from '../data/config.js'
import './Home.css'

export default function Home() {
  const navigate = useNavigate()
  const { members, loading, usedFallback } = useFetchMembers()

  return (
    <div className="page-wrapper home-page">
      <Starfield />
      <div className="orb orb-cyan" />
      <div className="orb orb-violet" />

      <main className="home-content" role="main">
        {/* ── Hero ── */}
        <div className="home-hero anim-fade-up">
          <div className="home-eyebrow anim-fade-up delay-100">
            <span className="eyebrow-icon">⌨️</span>
            <span>CodeX Crew</span>
          </div>
          <h1 className="home-title" style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)' }}>
            <span className="text-gradient">Project</span>
            <br />
            <span className="home-year-text" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', letterSpacing: '4px' }}>Showcase</span>
          </h1>
          <p className="home-subtitle anim-fade-up delay-200">
            Pushing boundaries and building the future of the web.
          </p>
        </div>

        {/* ── Project Details ── */}
        <section className="home-project anim-fade-up delay-300">
          <h2 className="home-section-title">Featured Project</h2>
          <div className="project-card">
            <div className="project-content">
              <h3 className="project-name">Nexus Platform</h3>
              <p className="project-desc">
                An immersive, high-performance ecosystem integrating state-of-the-art AI with real-time collaborative development tools. Architected from the ground up by the CodeX Crew to redefine developer productivity.
              </p>
              <div className="project-tags">
                <span className="ptag">React</span>
                <span className="ptag">Node</span>
                <span className="ptag">AI Core</span>
                <span className="ptag">WebSockets</span>
              </div>
            </div>
            <div className="project-code-window">
              <div className="window-header">
                <div className="window-dot red"></div>
                <div className="window-dot yellow"></div>
                <div className="window-dot green"></div>
              </div>
              <div className="window-body">
                <code>
                  $ npx codex-crew initiate<br/>
                  <span style={{color: 'var(--accent-red)'}}>&gt; Booting Nexus Engine...</span><br/>
                  <span style={{color: 'var(--text-muted)'}}>&gt; AI Modules Online</span><br/>
                  <span style={{color: 'var(--text-primary)'}}>&gt; System Ready. Let's Build.</span>
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* ── Member grid ── */}
        <section className="home-members anim-fade-up delay-500">
          <h2 className="home-section-title">
            {loading ? 'Loading invitations…' : 'Invitation'}
          </h2>

          {usedFallback && (
            <p className="home-fallback-note">
              ⚠️ Using local data (remote JSON not reachable). Set your GitHub URL in{' '}
              <code>src/data/config.js</code>
            </p>
          )}

          {loading ? (
            <div className="home-loading">
              <div className="spinner" />
            </div>
          ) : (
            <div className="members-grid">
              {members.map((m, i) => (
                <button
                  key={m.id}
                  id={`member-btn-${m.id}`}
                  className="member-card glass-card anim-fade-up"
                  style={{ animationDelay: `${0.1 * i + 0.4}s` }}
                  onClick={() => navigate(`/invite/${m.id}`)}
                  aria-label={`View ${m.name}'s invitation`}
                >
                  <div className="member-card-avatar">
                    {m.photo ? (
                      <img src={m.photo} alt={m.name}
                        onError={e => { e.target.style.display = 'none' }} />
                    ) : (
                      <span className="member-initials">
                        {m.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0,2)}
                      </span>
                    )}
                  </div>
                  <div className="member-card-info">
                    <p className="member-name">{m.name}</p>
                    <p className="member-year">{m.year}</p>
                  </div>
                  <span className="member-arrow">→</span>
                </button>
              ))}
            </div>
          )}
        </section>

        {/* ── Admin hint ── */}
        <div className="home-admin-hint anim-fade-in delay-700">
          <p>
            🔗 Each invite URL: <code>/invite/:id</code>
            &nbsp;—&nbsp;e.g.&nbsp;<code>/invite/rahul</code>
          </p>
        </div>
      </main>
    </div>
  )
}
