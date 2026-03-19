/* ============================================================
   useFetchMembers.js — Custom hook
   Fetches member data from the remote URL (config.js).
   Falls back to FALLBACK_DATA if the fetch fails.
   No backend needed — pure browser fetch API.
   ============================================================ */

import { useState, useEffect } from 'react'
import { DATA_URL, FALLBACK_DATA } from '../data/config.js'

export function useFetchMembers() {
  const [members, setMembers]   = useState([])
  const [loading, setLoading]   = useState(true)
  const [error, setError]       = useState(null)
  const [usedFallback, setUsedFallback] = useState(false)

  useEffect(() => {
    let cancelled = false

    async function fetchData() {
      setLoading(true)
      setError(null)

      try {
        // ── Attempt to fetch from remote JSON URL ──
        const res = await fetch(DATA_URL, { cache: 'no-store' })

        if (!res.ok) throw new Error(`HTTP ${res.status}`)

        const json = await res.json()

        if (!cancelled) {
          setMembers(Array.isArray(json) ? json : [])
          setUsedFallback(false)
        }
      } catch (err) {
        // ── Fetch failed → gracefully fall back to local data ──
        console.warn('[CodeX] Remote fetch failed, using fallback data.', err.message)
        if (!cancelled) {
          setMembers(FALLBACK_DATA)
          setUsedFallback(true)
          // Don't surface this as an error — the app still works via fallback
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchData()
    return () => { cancelled = true }
  }, [])

  return { members, loading, error, usedFallback }
}
