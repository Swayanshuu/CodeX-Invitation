/* ============================================================
   EnvelopeAnimation.jsx
   Envelope open animation → reveals the invitation card.
   Uses pure CSS keyframe animations — no Framer Motion needed.
   ============================================================ */

import { useState, useEffect } from 'react'
import './EnvelopeAnimation.css'

export default function EnvelopeAnimation({ onOpen }) {
  const [phase, setPhase] = useState('closed') 
  // phases: 'closed' → 'opening' → 'open' → 'done'

  // Auto-open after a short delay for a cinematic feel
  useEffect(() => {
    const t1 = setTimeout(() => setPhase('opening'), 1000)
    const t2 = setTimeout(() => setPhase('open'),    2200)
    const t3 = setTimeout(() => {
      setPhase('done')
      onOpen()
    }, 3000)

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [onOpen])

  if (phase === 'done') return null

  return (
    <div className={`envelope-scene ${phase}`}>
      {/* Glow ring */}
      <div className="env-glow-ring" />

      {/* Envelope body */}
      <div className="envelope">
        {/* Flap (top triangle lid) */}
        <div className="env-flap" />

        {/* Inner letter peek */}
        <div className="env-letter">
          <span className="env-letter-icon">💌</span>
        </div>

        {/* Front face */}
        <div className="env-front">
          <div className="env-seal">
            <span className="env-seal-icon">⌨️</span>
          </div>
          <div className="env-label">CodeX Farewell</div>
        </div>

        {/* Bottom triangle */}
        <div className="env-bottom" />
        {/* Left triangle */}
        <div className="env-side env-left" />
        {/* Right triangle */}
        <div className="env-side env-right" />
      </div>

      {/* Hint text */}
      {phase === 'closed' && (
        <p className="env-hint anim-fade-in delay-500">Opening your invitation…</p>
      )}
      {phase === 'opening' && (
        <p className="env-hint anim-fade-in">Unfolding…</p>
      )}
    </div>
  )
}
