import { Routes, Route, Navigate } from 'react-router-dom'
import InvitePage from './pages/InvitePage.jsx'
import NotFound from './pages/NotFound.jsx'
import Home from './pages/Home.jsx'

/* 
  ROUTING STRUCTURE:
  /            → Landing / Home page
  /invite/:id  → Personalized invite for each member (e.g. /invite/rahul)
  *            → 404 Not Found
*/

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/invite/:id" element={<InvitePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
