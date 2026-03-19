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
export const DATA_URL = "https://example.com/dummy-data.json";
// ↑↑↑ REPLACE THIS URL WITH YOUR GITHUB RAW JSON LINK ↑↑↑

/*
  FALLBACK DATA — used when the fetch fails (e.g. during dev or if URL is not set).
  You can also just put your data here directly instead of using a remote URL!
  Delete entries or add more as needed.
*/
export const FALLBACK_DATA = [
  {
    id: "Sekhar Parida",
    name: "Sekhar Parida",
    year: "Final Year, Batch 41",
    batch: 41,
    photo:
      "https://media.licdn.com/dms/image/v2/D5603AQGWROiz7FRNpg/profile-displayphoto-shrink_200_200/B56ZcDJ4MWHgAY-/0/1748104611515?e=1775692800&v=beta&t=_T0nIofxnddavmz1L1JNXOum8ZM5GNAp4K81hXkU0Lg", // leave empty to use default avatar
    message:
      "Your brilliance lit up every late-night coding session. CodeX wouldn't have been the same without you. Here's to all the bugs you crushed and the breakthroughs you sparked — farewell, legend! 🚀",
  },
  {
    id: "Ashis Kumar",
    name: "Ashis Kumar Behura",
    year: "Final Year, Batch 41",
    batch: 41,
    photo:
      "https://media.licdn.com/dms/image/v2/D5603AQHKuDwksq_XmA/profile-displayphoto-scale_200_200/B56ZlTpPvcH8AY-/0/1758044946591?e=1775692800&v=beta&t=1FH4Vq9DvTr7Yk8jtvkIHa8nGlpJNLFaZsxEjz2AcTM",
    message:
      "From whiteboard sketches to polished projects, your creativity always pushed the team to think bigger. The club's heart beats a little differently because of you. Farewell and fly high! ✨",
  },
  {
    id: "Seetal Panda",
    name: "Seetal Panda",
    year: "Final Year, Batch 41",
    batch: 41,
    photo:
      "https://media.licdn.com/dms/image/v2/D5635AQHz81XdgWAo5w/profile-framedphoto-shrink_200_200/B56Zb7xbUCHwAY-/0/1747980760675?e=1774533600&v=beta&t=LUzZlJ32JpvBEWtQ1r7Ak9bqyyriSoX-9VKn_6RdKcY",
    message:
      "Every hackathon felt unstoppable with you around. Your calm under pressure and sharp instincts are truly one of a kind. Wishing you the greatest adventures ahead! 💡",
  },
  {
    id: "tanaya",
    name: "Tanaya Rout",
    year: "Final Year, Batch 2026",
    batch: 2026,
    photo:
      "https://media.licdn.com/dms/image/v2/D5635AQEUrVTVLjft6A/profile-framedphoto-shrink_200_200/B56ZqLA5nMIYAY-/0/1763268860616?e=1774533600&v=beta&t=sX-WTfcxhMy6O1Hmb7MOZTK0VmbER71VDkdkOX_CVG8",
    message:
      "From your full-stack development projects to your core contributions at CodeX and your internship at iServeU, your dedication has been incredible. Wishing you the absolute best in your engineering journey!",
  },
  {
    id: "trupti",
    name: "Trupti Das",
    year: "Final Year, Batch 2026",
    batch: 2026,
    photo:
      "https://media.licdn.com/dms/image/v2/D5603AQFihsxhCB6CdA/profile-displayphoto-shrink_200_200/B56Zikcsu7G4Ag-/0/1755105644535?e=1775692800&v=beta&t=aGsSuJbCxU_2W8VFS_DWWD4B5YPIYju4FU4S67rZH94",
    message:
      "Your passion for data, your leadership at GDG, and your active energy in the Codex and Robotics clubs have left a great mark. Keep aiming for the stars in your Analytics and Machine Learning career!",
  },
];

/* Event details — update these as needed */
export const EVENT_INFO = {
  name: "CodeX Farewell 2026",
  date: "March 20, 2026",
  time: "2:30 PM onwards",
  venue: "New building, Room 202",
  tagline: "Inviting all the 41 crew members",
};
