/* ============================================================
   InvitationCard.jsx — Luxury Event Pass design
   Split layout: photo + identity left | message + details right
   ============================================================ */

import { useState } from 'react'
import { EVENT_INFO } from '../data/config.js'
import './InvitationCard.css'

function DefaultAvatar({ name }) {
  const initials = name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)
  return (
    <div className="avatar-default">
      <span className="avatar-initials">{initials}</span>
    </div>
  )
}

export default function InvitationCard({ member }) {
  const [imgError, setImgError] = useState(false)
  const { name, year, photo, message } = member
  const showImg = photo && !imgError

  return (
    <article className="invite-card anim-scale-in" role="main">

      {/* ── LEFT PANEL: Identity ── */}
      <div className="card-left">
        {/* Animated gradient background */}
        <div className="left-bg" />

        <div className="left-content">
          {/* Club branding */}
          <div className="left-brand anim-fade-up delay-200">
            <span className="brand-icon">⌨️</span>
            <span className="brand-name">CodeX Club</span>
          </div>

          {/* Avatar */}
          <div className="avatar-wrap anim-fade-up delay-300">
            <div className="avatar-ring">
              {showImg ? (
                <img src={photo} alt={name} className="avatar-img"
                  onError={() => setImgError(true)} />
              ) : (
                <DefaultAvatar name={name} />
              )}
            </div>
            {/* Orbit ring decoration */}
            <div className="orbit-ring" />
          </div>

          {/* Name + year */}
          <div className="left-identity anim-fade-up delay-400">
            <p className="left-invited">You're Invited</p>
            <h1 className="left-name">{name}</h1>
            <div className="left-year-pill">{year}</div>
          </div>
        </div>

        {/* Ticket stub perforation dots */}
        <div className="perforation">
          {Array.from({ length: 14 }).map((_, i) => (
            <span key={i} className="perf-dot" />
          ))}
        </div>
      </div>

      {/* ── RIGHT PANEL: Details ── */}
      <div className="card-right">
        {/* Top accent line */}
        <div className="right-accent-line" />

        {/* Event title */}
        <div className="right-header anim-fade-up delay-300">
          <p className="right-event-label">Farewell Event</p>
          <h2 className="right-event-name">CodeX Farewell<br /><span className="right-year">2026</span></h2>
        </div>

        {/* Divider */}
        <div className="right-divider anim-fade-in delay-400" />

        {/* Personal message */}
        <blockquote className="right-message anim-fade-up delay-400">
          <div className="quote-icon">"</div>
          <p>{message}</p>
        </blockquote>

        {/* Divider */}
        <div className="right-divider anim-fade-in delay-500" />

        {/* Event details grid */}
        <div className="details-grid anim-fade-up delay-500">
          <div className="detail-item">
            <span className="detail-icon">📅</span>
            <span className="detail-label">Date</span>
            <span className="detail-val">{EVENT_INFO.date}</span>
          </div>
          <div className="detail-item">
            <span className="detail-icon">🕐</span>
            <span className="detail-label">Time</span>
            <span className="detail-val">{EVENT_INFO.time}</span>
          </div>
          <div className="detail-item full-width">
            <span className="detail-icon">📍</span>
            <span className="detail-label">Venue</span>
            <span className="detail-val">{EVENT_INFO.venue}</span>
          </div>
        </div>

        {/* Barcode decoration */}
        <div className="barcode-wrap anim-fade-in delay-700">
          <div className="barcode">
            {Array.from({ length: 28 }).map((_, i) => (
              <span key={i} className="bar"
                style={{ height: `${Math.random() * 18 + 14}px`, opacity: Math.random() * 0.5 + 0.5 }} />
            ))}
          </div>
          <p className="barcode-label">{EVENT_INFO.tagline}</p>
        </div>
      </div>

    </article>
  )
}
