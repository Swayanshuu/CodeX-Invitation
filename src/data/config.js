/* ============================================================
   config.js — Central data configuration
   ============================================================

   👉 ADMIN: To connect your real data, replace the URL below.
      Go to your GitHub repo → open the JSON file → click "Raw"
      → copy that URL and paste it here.

   REPLACE THIS URL WITH YOUR GITHUB RAW JSON LINK
   Example: https://raw.githubusercontent.com/your-username/your-repo/main/members.json

   Expected JSON format:
   [
     {
       "id": "rahul",           ← must match the URL: /invite/rahul
       "name": "Rahul Sharma",
       "year": "Final Year",
       "photo": "https://...", ← direct image URL
       "message": "You are invited..."
     },
     ...
   ]
   ============================================================ */

// ↓↓↓ REPLACE THIS URL WITH YOUR GITHUB RAW JSON LINK ↓↓↓
export const DATA_URL = 'https://example.com/dummy-data.json'
// ↑↑↑ REPLACE THIS URL WITH YOUR GITHUB RAW JSON LINK ↑↑↑


/*
  FALLBACK DATA — used when the fetch fails (e.g. during dev or if URL is not set).
  You can also just put your data here directly instead of using a remote URL!
  Delete entries or add more as needed.
*/
export const FALLBACK_DATA = [
  {
    id: 'rahul',
    name: 'Rahul Sharma',
    year: 'Final Year, 2026',
    photo: '',   // leave empty to use default avatar
    message: "Your brilliance lit up every late-night coding session. CodeX wouldn't have been the same without you. Here's to all the bugs you crushed and the breakthroughs you sparked — farewell, legend! 🚀",
  },
  {
    id: 'ananya',
    name: 'Ananya Verma',
    year: 'Final Year, 2026',
    photo: '',
    message: "From whiteboard sketches to polished projects, your creativity always pushed the team to think bigger. The club's heart beats a little differently because of you. Farewell and fly high! ✨",
  },
  {
    id: 'arjun',
    name: 'Arjun Mehta',
    year: 'Final Year, 2026',
    photo: '',
    message: "Every hackathon felt unstoppable with you around. Your calm under pressure and sharp instincts are truly one of a kind. Wishing you the greatest adventures ahead! 💡",
  },
]

/* Event details — update these as needed */
export const EVENT_INFO = {
  name: 'CodeX Farewell 2026',
  date: 'April 12, 2026',
  time: '5:00 PM onwards',
  venue: 'CS Department Auditorium',
  tagline: 'End of an era. Beginning of a legend.',
}
