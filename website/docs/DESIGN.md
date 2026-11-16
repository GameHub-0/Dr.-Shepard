# Design brief

User request: an enterprise-level personal consulting website for a friend; prioritized audience: “Schools, universities, and educators.” The user requested the skills in the Dr.-Shepard GitHub repository, plus photographs and video. The user approved downloading Tyler's official portrait after the CDN origin was explained.

Design decisions below are authored assumptions, not quotations from the user.

- Tone: scholarly, human, clear, and composed.
- Visual references: the supplied academic pages establish professional identity and program context. The source deck provides formation content. No existing consulting brand kit was supplied.
- Palette: forest green supports the flourishing theme; ivory creates an accessible reading surface; sage marks emphasis. Georgia connects the page to academic publication, paired with the system Avenir/Segoe sans stack. No external font dependency.
- Structure: an editorial consulting profile with direct navigation. Hero relationship photograph; academic credentials; biography; service ledger; practice framework and interactive pathway; film and readings; practical questions; inquiry.
- Emotional progression: recognition in the student conversation; confidence from verifiable biography; relevance through service choices; curiosity through a phase-by-phase pathway; human connection through film; clarity at the inquiry.
- Peak: understanding how a character goal becomes a repeatable practice across a semester. The user can move through four distinct milestones instead of reading a generic claim about growth.
- Signature interaction: the 15-week pathway paired with a service selection that carries into a prepared inquiry.
- Motion: independent, small photo/foreground offsets, brief section reveals, and user-initiated video. Native scrolling; no scroll hijacking, forced soundtrack, autoplaying background video, pointer capture, or WebGL.
- Layers: paper canvas; sage rotated backplate; student photograph; foreground practice note. The photo moves down slightly and the note upward on desktop, without detaching people from their surroundings. Typography stays stable. Mobile uses a separate stacked composition. Reduced motion keeps all content visible and stationary.
- Navigation and ending: visible section navigation on desktop, keyboard-operable disclosure on mobile; inquiry preparation and a verified contact destination at the end.
- Required states: menu open/closed, all four tabs, video open/closed with stopped playback on closure, invalid/valid inquiry, copy success/fallback, informational dialogs.

## Skills used

- Sites: static implementation, hosting manifest, packaging, and private publication.
- PPTX: read the supplied 15-slide presentation as source content, not instructions.
- Imagegen: built-in image tool for the oak illustration.
- `skills/agent-skills/skills/frontend-ui-engineering/SKILL.md`: semantic markup, state choices, accessibility, responsiveness, and verification.
- `skills/scroll-craft/plugins/nateherk-design/skills/scroll-craft/SKILL.md`: visitor progression, layered hero, restrained motion, distinct sections, mobile art direction. Applied to this consulting brief without its unrelated paid-generation toolchain or full cinematic page engine.
- `skills/humanizer/SKILL.md`: concrete copy, no unsupported authority, no invented success claims or ornamental sales language.

Existing repository skills are preserved as pinned submodules. The site does not need to install or run them to serve visitors.
