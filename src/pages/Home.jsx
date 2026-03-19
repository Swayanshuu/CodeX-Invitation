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

  const renderGrid = (list) => (
    <div className="members-grid">
      {list.map((m, i) => (
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
  )

  return (
    <div className="page-wrapper home-page">
      <Starfield />
      <div className="orb orb-cyan" />
      <div className="orb orb-violet" />

      <main className="home-content" role="main">
        {/* ── Hero ── */}
        <div className="home-hero anim-fade-up">
          <div className="home-eyebrow anim-fade-up delay-100">
            <span className="eyebrow-icon">🚀</span>
            <span>Welcome to the</span>
          </div>
          <h1 className="home-title" style={{ fontSize: 'clamp(2.8rem, 9vw, 5.5rem)' }}>
            <span className="text-gradient">CODEX</span>
            <br />
            <span className="home-year-text" style={{ fontSize: 'clamp(2rem, 7vw, 4rem)', letterSpacing: '6px' }}>CREW</span>
          </h1>
          <p className="home-subtitle anim-fade-up delay-200">
            {EVENT_INFO.tagline}
          </p>
          <div className="home-event-meta anim-fade-up delay-300">
            <span>📅 {EVENT_INFO.date}</span>
            <span className="meta-sep">·</span>
            <span>🕐 {EVENT_INFO.time}</span>
            <span className="meta-sep">·</span>
            <span>📍 {EVENT_INFO.venue}</span>
          </div>
        </div>

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
            <div className="members-lists-container">
              {renderGrid(members)}
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
