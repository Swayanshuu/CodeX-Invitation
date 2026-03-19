/* ============================================================
   InvitePage.jsx — /invite/:id
   
   FLOW:
   1. Extract :id from URL
   2. Fetch all members from GitHub JSON (via useFetchMembers hook)
   3. Find the member whose id matches
   4. Show loading → envelope animation → invitation card
   5. If no match → redirect to NotFound
   ============================================================ */

import { useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { useFetchMembers } from '../hooks/useFetchMembers.js'
import Starfield from '../components/Starfield.jsx'
import IntroAnimation from '../components/IntroAnimation.jsx'
import InvitationCard from '../components/InvitationCard.jsx'
import NotFound from './NotFound.jsx'
import './InvitePage.css'

export default function InvitePage() {
  // ── Step 1: Get the :id segment from the URL ──
  const { id } = useParams()

  // ── Step 2: Fetch all members (falls back to local data gracefully) ──
  const { members, loading } = useFetchMembers()

  // ── Step 3: Track whether the envelope animation has finished ──
  const [envelopeDone, setEnvelopeDone] = useState(false)
  const handleEnvelopeOpen = useCallback(() => setEnvelopeDone(true), [])

  // ── Loading state ──
  if (loading) {
    return (
      <div className="page-wrapper">
        <Starfield />
        <div className="orb orb-cyan" />
        <div className="orb orb-violet" />
        <div className="loading-state">
          <div className="spinner" />
          <p className="loading-text">Preparing your invitation…</p>
        </div>
      </div>
    )
  }

  // ── Step 4: Find the member matching this URL's :id ──
  // id comparison is case-insensitive for friendliness
  const member = members.find(m => m.id?.toLowerCase() === id?.toLowerCase())

  // ── Step 5: No match → NotFound ──
  if (!member) {
    return <NotFound id={id} />
  }

  // ── Render: Envelope animation first, then card ──
  return (
    <div className="page-wrapper">
      <Starfield />
      <div className="orb orb-cyan" />
      <div className="orb orb-violet" />

      {/* Intro animation — unmounts itself when done */}
      {!envelopeDone && (
        <IntroAnimation onOpen={handleEnvelopeOpen} memberName={member.name} />
      )}

      {/* Invitation card — fades in after envelope */}
      {envelopeDone && (
        <div className="invite-page-content">
          <InvitationCard member={member} />
          <p className="invite-footer-note anim-fade-in delay-900">
            Share this link with <strong>{member.name.split(' ')[0]}</strong> directly 🎉
          </p>
        </div>
      )}
    </div>
  )
}
