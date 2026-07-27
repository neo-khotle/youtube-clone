# YouTube Clone — Project Plan

Living document for **Zaio YouTube Clone**: what exists today, what to fix next, and where the product could go feature-wise.

---

## Vision

Build a **front-end YouTube experience** that looks and behaves like the real home feed on desktop, tablet, and mobile—starting as static HTML/CSS, then layering **data, interactivity, and optional pages** (watch, search, channel) without requiring a full backend at first.

**North-star (optional end state):** A multi-page or lightweight SPA clone with dynamic video data, working navigation, search/filter, watch page with player UI, and responsive patterns that match YouTube (sidebar collapse, mobile bottom nav, hover previews on desktop only).

---

## Current stack

| Layer | Choice |
|--------|--------|
| Markup | Single `index.html` (~700+ lines) |
| Styles | `style.css` with breakpoint-based layout |
| Scripts | None |
| Build / package manager | None |
| Assets | Local SVGs in `assets/`; images/videos via external URLs |
| Fonts / icons | Google Roboto, Material Icons |

**How to run:** Open `index.html` in a browser (or use a simple static server).

---

## Repository layout

```
youtube-clone/
├── index.html      # Entire UI (navbar, sidebar, video feed)
├── style.css       # Global + desktop / tablet / mobile rules
├── plan.md         # This file
├── README.md       # Placeholder (not yet documented)
└── assets/         # Nav SVGs (home, shorts, music, live, gaming, kids, arrows, etc.)
```

---

## What exists today (implemented)

### Top navigation
- [x] Sticky header (56px desktop, adjusted on mobile)
- [x] Menu icon + YouTube logo (external SVG)
- [x] Search form (rounded input + search button + mic icon)
- [x] Right actions: Create button, notifications, account (visual only)
- [x] Search bar polish: flex input, 64px submit area, `#f8f8f8` button background

### Sidebar (desktop ≥1024px only)
- [x] Home & Shorts (custom SVG icons)
- [x] Subscriptions section header + 5 channel names
- [x] “You” library links (History, Playlists, Watch Later, Liked, Your Videos, Downloads)
- [x] Explore (Music, Live, Gaming, Show More)
- [x] More from YouTube (YouTube Kids)
- [x] Report history
- [x] Footer link groups + copyright (“© 2026 Zaio YouTube Clone”)
- [x] Hover states on category rows
- [x] Custom scrollbar (visible thumb on hover)

### Home feed
- [x] **15 video cards** (hard-coded HTML), themed around study/lifestyle/vlog channels
- [x] Thumbnail, duration badge, channel avatar, title, channel name, views • date
- [x] **Hover preview** on desktop: muted autoplay loop video over thumbnail (CSS opacity transition)
- [x] 16:9 thumbnails on tablet/mobile via `aspect-ratio`

### Responsive layout
- [x] **Desktop (≥1024px):** Sidebar + feed; feed ~3 columns (flex wrap); independent scroll areas
- [x] **Tablet (768–1023px):** Sidebar hidden; 2-column grid; previews disabled
- [x] **Mobile (≤767px):** Minimal navbar (logo + search icon); single column; sidebar hidden

### Assets prepared but underused
- [ ] Tablet/mobile bottom nav (commented HTML: home, shorts, subscriptions, profile SVGs)
- [ ] Local `yt-logo.svg` (navbar uses external logo URL instead)

---

## What is not implemented (UI shell only)

These elements are **visible but non-functional**:

- Search submit / voice search
- Menu hamburger (no sidebar toggle)
- All sidebar and footer links
- Create, notifications, account
- Video card click → watch page
- “Subscriptions >”, “You >”, “Show more” expanders
- Any routing or multiple HTML pages

---

## Known issues & tech debt (from current code)

Priority fixes before adding big features:

1. **Duration badge on tablet/mobile** — Overrides use `position: relative` + fixed `left` pixels; should stay absolute on `.thumbnail` at all breakpoints.
2. **Hover fade bug (desktop)** — `.thumbnail:hover .thumbnail` does not match DOM; thumbnail image may not hide under preview (likely need `.thumbnail:hover img`).
3. **Desktop grid** — `calc(33% - 2px)` + margins can wrap unevenly; consider CSS Grid like tablet/mobile.
4. **HTML repetition** — 15 duplicate card blocks; hard to maintain and extend.
5. **Semantics & a11y** — Mostly `div`/`span`; empty avatar alts; icon-only controls lack labels; footer uses `ul` with `span` children.
6. **Copy / content** — Footer typo “Pospancy”; duplicate thumbnail alts; channel name casing inconsistent (sidebar vs cards).
7. **Performance** — Many `<video>` elements with sources loaded; no `preload="none"` or hover-only load strategy.
8. **Dead code** — Large commented CSS/HTML blocks; README still default template.
9. **Card markup** — Review nesting/validation for consistent `.video` structure.

---

## Feature roadmap (potential end state)

Phases are ordered so each step builds on the last. Check items off as you go; adjust scope for Zaio deadlines.

### Phase 0 — Stabilize foundation
- [ ] Fix duration badges (all breakpoints)
- [ ] Fix hover preview (hide static img on hover)
- [ ] Unify desktop feed layout (CSS Grid)
- [ ] Clean commented dead code; update README
- [ ] Validate/fix video card HTML structure
- [ ] Quick a11y pass (labels, alt text, focus styles)

### Phase 1 — Data-driven feed (still static hosting)
- [ ] Add `videos.json` (id, title, channel, views, published, thumbnail, previewVideo, duration, avatar)
- [ ] Add `main.js`: fetch JSON, render cards from one template
- [ ] Align sidebar channel list with data (optional)
- [ ] Prefer local or stable asset URLs for portfolio reliability

### Phase 2 — Core interactivity (vanilla JS)
- [ ] Sidebar menu toggle (desktop collapsed rail / overlay on smaller widths)
- [ ] Search: filter feed by title/channel client-side; empty state UI
- [ ] Video card click → `watch.html?id=` or hash routing
- [ ] Hover preview: load/play on `mouseenter`, pause on `mouseleave`; `preload="none"`
- [ ] `prefers-reduced-motion`: disable hover video

### Phase 3 — Responsive navigation (match YouTube mobile/tablet)
- [ ] Implement bottom nav (Home, Shorts, Subscriptions, You) using existing SVGs
- [ ] Mobile: expand search (overlay or full-width bar on icon tap)
- [ ] Tablet: optional mini sidebar or bottom nav (pick one pattern and stick to it)
- [ ] Active state for current “page” or section

### Phase 4 — Watch experience
- [ ] New page or view: embedded HTML5 player, title, channel row, description stub
- [ ] Related videos sidebar (reuse feed component + filter same channel or random)
- [ ] Like/dislike/share/subscribe UI (visual or localStorage counters for demo)
- [ ] Comments section UI (static mock threads)

### Phase 5 — Additional surfaces (pick any subset)
- [ ] **Shorts:** vertical 9:16 grid or full-screen swipe mock
- [ ] **Channel page:** banner, tabs (Videos, Playlists, About)
- [ ] **Library pages:** History / Watch Later / Liked (filtered lists from same JSON)
- [ ] **Subscriptions feed:** only videos from subscribed channels
- [ ] **Explore / category chips:** horizontal filter bar above grid (Music, Gaming, etc.)
- [ ] **Dark theme:** CSS variables + toggle (YouTube dark palette)

### Phase 6 — Polish & portfolio quality
- [ ] CSS variables for colors, spacing, radii
- [ ] Skeleton loaders or shimmer for cards (if simulating async fetch)
- [ ] Favicon + consistent use of `assets/yt-logo.svg`
- [ ] Deploy to GitHub Pages / Netlify; link in README
- [ ] Lighthouse pass (performance, accessibility)

### Phase 7 — Stretch (only if course or goals require backend)
- [ ] Backend API (Node/Express or serverless) for videos CRUD
- [ ] Auth mock (profile menu, “your channel”)
- [ ] Real upload flow (out of scope for most UI clones)
- [ ] YouTube Data API integration (search only; mind quotas and ToS)

---

## Suggested milestone targets

| Milestone | Outcome |
|-----------|---------|
| **M1 — Solid clone** | Phases 0–1: pixel-stable layout, JSON feed, clean repo |
| **M2 — Feels alive** | Phase 2–3: search, navigation, watch link, mobile bottom nav |
| **M3 — Product slice** | Phase 4–5: watch page + 1–2 extra surfaces (e.g. Shorts or Channel) |
| **M4 — Showcase** | Phase 6: deployed, documented, accessible |

---

## Content model (for Phase 1+)

Example fields per video (extend as needed):

```json
{
  "id": "cafe-study-01",
  "title": "Cafe Study With Me",
  "channel": { "name": "Cozy Cafe", "handle": "cozy-cafe", "avatarUrl": "..." },
  "views": 20000,
  "publishedAt": "2026-06-01",
  "duration": "14:25",
  "thumbnailUrl": "...",
  "previewVideoUrl": "...",
  "category": "study"
}
```

Channels already referenced in UI: Cozy Cafe, jwsothogirl / JWsothoGirl, Midday Moon, Mosafilms, Study with Mei, Dawn Whispers, Playlists by Beach.

---

## Decisions to make later

Record choices here as the project grows:

| Topic | Options | Decision |
|-------|---------|----------|
| Routing | Multi-page HTML vs hash vs lightweight framework | _TBD_ |
| Styling | Plain CSS vs CSS modules vs Tailwind | _TBD_ |
| Data | Static JSON vs localStorage vs API | _TBD_ |
| Scope for Zaio | Home only vs home + watch | _TBD_ |

---

## Notes

- Add dated notes below when you complete phases or change scope.

<!-- Example: 2026-07-28 — Completed Phase 0 badge fix. -->
