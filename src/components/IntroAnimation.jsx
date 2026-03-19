/* ============================================================
   IntroAnimation.jsx
   A sealed invitation card the user CLICKS to open.
   Click → flip animation → card revealed.
   ============================================================ */

import { useState } from 'react'
import './IntroAnimation.css'

export default function IntroAnimation({ onOpen, memberName }) {
  const [clicked, setClicked] = useState(false)

  function handleClick() {
    if (clicked) return
    setClicked(true)
    // Let the flip animation play, then reveal the card
    setTimeout(onOpen, 900)
  }

  return (
    <div className={`intro-scene ${clicked ? 'intro-opening' : ''}`} onClick={handleClick}>
      {/* Background glow */}
      <div className="intro-bg-glow" />

      {/* The sealed card */}
      <div className={`sealed-card ${clicked ? 'sealed-flipping' : ''}`} role="button" tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && handleClick()}
        aria-label="Click to open invitation">

        {/* Front face (sealed) */}
        <div className="sealed-front">
          <div className="sealed-watermark">CodeX</div>
          <div className="sealed-top-line" />

          <div className="sealed-icon">💌</div>
          <h2 className="sealed-for">A Message For</h2>
          <h1 className="sealed-name">{memberName}</h1>

          <div className="sealed-stamp">
            <span className="stamp-text">FAREWELL<br/>2026</span>
          </div>

          <div className="sealed-bottom-line" />
          {!clicked && (
            <div className="sealed-cta">
              <span className="cta-pulse" />
              Tap to open invitation
            </div>
          )}
          {clicked && (
            <div className="sealed-cta opening-text">Opening…</div>
          )}
        </div>

        {/* Back face */}
        <div className="sealed-back">
          <span className="back-icon">✨</span>
        </div>
      </div>

      {/* Corner bracket decorations */}
      <div className="intro-corner intro-corner-tl" />
      <div className="intro-corner intro-corner-tr" />
      <div className="intro-corner intro-corner-bl" />
      <div className="intro-corner intro-corner-br" />
    </div>
  )
}
