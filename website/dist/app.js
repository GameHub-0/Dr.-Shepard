'use strict';
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const menu = $('.menu-toggle');
const nav = $('#nav');
function closeMenu() { menu.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); }
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('is-open', open); });
$$('a', nav).forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });
document.addEventListener('click', event => { if (!event.target.closest('.header')) closeMenu(); });

const phases = [
  {kicker:'BEGIN WITH WHO YOU WANT TO BECOME', title:'A foundation for growth.', description:'Name the character qualities you want to develop, choose a trusted accountability partner, and identify an example worth following.', milestone:'A written character goal, an accountability relationship, and one practice to begin.'},
  {kicker:'TRY THE PRACTICE IN REAL LIFE', title:'Turn intention into action.', description:'Work through difficult conversations, recognize pressure points, and revisit habits. Honest feedback and reflection help turn experience into a revised plan.', milestone:'A revised practice plan for one recurring pressure point.'},
  {kicker:'CARRY CHARACTER ACROSS CONTEXTS', title:'The same person, everywhere.', description:'Consider how you show up in competition, academics, friendships, and moments without an audience. Examine how you receive correction and keep commitments.', milestone:'A clearer understanding of character under pressure and without an audience.'},
  {kicker:'PREPARE FOR WHAT COMES NEXT', title:'Growth beyond the semester.', description:'Think about the example you set for others, rehearse responses to future challenges, and reflect on progress that still needs attention.', milestone:'A personal character statement and a forward plan for the next season of life.'}
];
const tabs = $$('[data-phase]');
function setPhase(index, focus = false) {
  tabs.forEach((tab, i) => { tab.setAttribute('aria-selected', String(i === index)); tab.tabIndex = i === index ? 0 : -1; });
  const phase = phases[index];
  ['kicker','title','description','milestone'].forEach(key => { $('#phase-' + key).textContent = phase[key]; });
  $('#phase-panel').setAttribute('aria-labelledby', tabs[index].id);
  if (focus) tabs[index].focus();
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => setPhase(index));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) { event.preventDefault(); setPhase(next, true); }
  });
});

let dialogTrigger;
function openDialog(dialog, trigger) { dialogTrigger = trigger; dialog.showModal(); document.body.style.overflow = 'hidden'; }
$$('dialog').forEach(dialog => {
  $('[data-close]', dialog).addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) { const box = dialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); } });
  dialog.addEventListener('close', () => { document.body.style.overflow = ''; if (dialog.id === 'video-dialog') $('#video-container').replaceChildren(); dialogTrigger?.focus(); });
});
$$('[data-video-open]').forEach(button => button.addEventListener('click', () => {
  const iframe = document.createElement('iframe');
  iframe.src = 'https://player.vimeo.com/video/1021017823?h=33bc082e94&autoplay=1&dnt=1';
  iframe.title = 'The Freedom Fellows, official Benedictine College film';
  iframe.allow = 'autoplay; fullscreen; picture-in-picture';
  iframe.allowFullscreen = true;
  iframe.referrerPolicy = 'strict-origin-when-cross-origin';
  $('#video-container').replaceChildren(iframe);
  openDialog($('#video-dialog'), button);
}));

$$('[data-interest]').forEach(link => link.addEventListener('click', () => { $('#interest').value = link.dataset.interest; }));
$('#inquiry-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  $('#inquiry-output').value = `Hello Dr. Shephard,\n\nMy name is ${String(data.get('name')).trim()} and I am reaching out from ${String(data.get('institution')).trim()}.\n\nI would like to discuss: ${data.get('interest')}.\n\n${String(data.get('message')).trim()}\n\nCould we discuss whether this would be a fit and what a next step might look like?\n\nThank you,\n${String(data.get('name')).trim()}`;
  $('#copy-status').textContent = '';
  openDialog($('#inquiry-dialog'), $('button[type="submit"]', form));
});
$('#inquiry-fields').disabled = false;
$('#copy-inquiry').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText($('#inquiry-output').value); $('#copy-status').textContent = 'Copied. Open Tyler’s contact form and paste your inquiry.'; }
  catch { $('#inquiry-output').focus(); $('#inquiry-output').select(); $('#copy-status').textContent = 'Please copy the selected text, then paste it into Tyler’s contact form.'; }
});
const info = {
  privacy: {title:'Your privacy.', content:'<p>The inquiry tool prepares text locally in your browser. This website does not send, save, or retain the information you enter. No analytics or marketing cookies are added by this site.</p><p>The video player loads only after you choose to watch. Vimeo and the hosting provider may process technical information under their own policies. Contacting Tyler takes you to Benedictine College’s Formstack form, where that service’s privacy terms apply.</p><p>This website concept is intended for private review. Clear the form or close the tab to discard your draft.</p>'},
  credits: {title:'Sources & media credits.', content:'<p>Professional biography and academic roles are based on Benedictine College’s official publications. The consulting formats are proposed areas for discussion, not confirmed commercial offerings or promises of results.</p><div class="info-links"><a href="https://www.benedictine.edu/person/tyler-shephard" target="_blank" rel="noopener noreferrer">Official biography and portrait · Benedictine College ↗</a><a href="https://www.benedictine.edu/academics/centers/human-flourishing" target="_blank" rel="noopener noreferrer">Center for Human Flourishing ↗</a><a href="https://media.benedictine.edu/benedictine-college-announces-new-center-for-human-flourishing" target="_blank" rel="noopener noreferrer">Center announcement · October 27, 2026 ↗</a><a href="https://www.benedictine.edu/academics/programs-distinction/freedom" target="_blank" rel="noopener noreferrer">Freedom Fellows · program photograph and official video ↗</a><a href="https://www.linkedin.com/feed/update/urn:li:activity:7083505115667562497/" target="_blank" rel="noopener noreferrer">Tyler speaking at Saint Louis University’s Upward Bound program · LinkedIn photograph ↗</a></div><p>The 15-week pathway is adapted from the supplied Center for Human Flourishing: Character Beyond Competition presentation. College media remains attributed to its source; this site does not imply an institutional endorsement.</p>'}
};
$$('[data-info]').forEach(button => button.addEventListener('click', () => { const entry = info[button.dataset.info]; $('#info-title').textContent = entry.title; $('#info-content').innerHTML = entry.content; openDialog($('#info-dialog'), button); }));
$('#year').textContent = new Date().getFullYear();

const reduced = matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }); }, {threshold:0.08});
  $$('.about-copy,.service,.section-heading,.reading-list article,.faq-grid').forEach(element => { if (!reduced.matches) { element.classList.add('reveal-ready'); observer.observe(element); } });
}
let scheduled = false;
function heroDepth() {
  scheduled = false;
  if (reduced.matches || innerWidth < 900) { document.documentElement.style.setProperty('--photo-y', '0px'); document.documentElement.style.setProperty('--note-y', '0px'); return; }
  const progress = Math.min(1, Math.max(0, scrollY / 750));
  document.documentElement.style.setProperty('--photo-y', `${progress * 18}px`);
  document.documentElement.style.setProperty('--note-y', `${progress * -24}px`);
}
addEventListener('scroll', () => { if (!scheduled) { scheduled = true; requestAnimationFrame(heroDepth); } }, {passive:true});
addEventListener('resize', heroDepth);
reduced.addEventListener('change', () => { if (reduced.matches) $$('.reveal-ready').forEach(element => element.classList.add('is-visible')); heroDepth(); });
