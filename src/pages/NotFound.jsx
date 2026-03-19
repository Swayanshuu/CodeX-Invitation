/* ============================================================
   NotFound.jsx — shown when /invite/:id has no match
   ============================================================ */
import { useNavigate } from 'react-router-dom'
import Starfield from '../components/Starfield.jsx'
import './NotFound.css'

export default function NotFound({ id }) {
  const navigate = useNavigate()
  return (
    <div className="page-wrapper">
      <Starfield />
      <div className="orb orb-cyan" />
      <div className="orb orb-violet" />
      <div className="notfound-box glass-card anim-scale-in">
        <div className="notfound-icon">🔍</div>
        <h1 className="notfound-title">Invitation Not Found</h1>
        {id && (
          <p className="notfound-id">
            No invite for <code>"{id}"</code>
          </p>
        )}
        <p className="notfound-sub">
          Check the link or ask the admin to add this person to the JSON data.
        </p>
        <button className="btn-primary" id="go-home-btn" onClick={() => navigate('/')}>
          ← Back to Home
        </button>
      </div>
    </div>
  )
}
