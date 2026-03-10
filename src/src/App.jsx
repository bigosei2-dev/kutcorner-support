import { useState } from 'react'

const LOGO = '/logo.jpeg'

const C = {
  navy: '#0A1628',
  navyLight: '#12233D',
  navyMid: '#1A3052',
  silver: '#C0C8D4',
  silverLight: '#D8DEE8',
  accent: '#4A90D9',
  accentLight: '#6AADE0',
  white: '#FFFFFF',
  cream: '#F4F6FA',
  lightGray: '#EDF0F5',
  textBody: '#6B7A8D',
  textMuted: '#8895A7',
  border: '#D0D8E4',
  success: '#22C55E',
}

const LINKS = {
  main: 'https://www.kutcorner.com',
  support: 'https://support.kutcorner.com',
  appStore: '#',
  playStore: '#',
}

function Icon({ name }) {
  const icons = {
    calendar: <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
    scissors: <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>,
    card: <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>,
    refresh: <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg>,
    search: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
    chevron: <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>,
    mail: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,4 12,13 2,4"/></svg>,
    external: <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>,
    menu: <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
    x: <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
    clock: <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    phone: <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
    send: <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>,
    check: <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#22C55E" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>,
    apple: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>,
    play: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.48C2.47 23.15 2 22.42 2 21.58V2.42C2 1.58 2.47.85 3.18.52l10.35 11.48L3.18 23.48zM15.47 13.94L5.27 24l13.12-7.34-2.92-2.72zM21.17 11l-3.63-2.03-3.21 3.03 3.21 3.03L21.17 13c.6-.34.97-.97.97-1S21.77 11.34 21.17 11zM5.27 0l10.2 10.06 2.92-2.72L5.27 0z"/></svg>,
  }
  return icons[name] || null
}

function Header({ page, setPage }) {
  const [open, setOpen] = useState(false)
  const items = [
    { label: 'Home', key: 'home' },
    { label: 'FAQ', key: 'faq' },
    { label: 'Contact', key: 'contact' },
  ]
  const navBtn = (item) => ({
    background: page === item.key ? C.accent + '15' : 'transparent',
    border: 'none',
    padding: '8px 18px',
    borderRadius: 24,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 14,
    fontWeight: page === item.key ? 600 : 500,
    color: page === item.key ? C.accent : C.textBody,
    cursor: 'pointer',
  })

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(244,246,250,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid ' + C.border }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10 }} onClick={() => setPage('home')}>
          <img src={LOGO} alt="KutCorner" style={{ width: 34, height: 34, borderRadius: 8, objectFit: 'cover' }} />
          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 19, fontWeight: 700, color: C.navy }}>KutCorner</span>
        </div>
        <nav className="kc-desktop-nav" style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          {items.map((i) => (
            <button key={i.key} onClick={() => setPage(i.key)} style={navBtn(i)}>{i.label}</button>
          ))}
          <a href={LINKS.support} target="_blank" rel="noopener noreferrer" style={{ background: C.navy, color: C.white, padding: '8px 18px', borderRadius: 24, fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
            Help Center <Icon name="external" />
          </a>
        </nav>
        <button className="kc-mobile-btn" onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: C.navy, display: 'none' }}>
          {open ? <Icon name="x" /> : <Icon name="menu" />}
        </button>
      </div>
      {open && (
        <div className="kc-mobile-menu" style={{ padding: '8px 20px 20px', display: 'flex', flexDirection: 'column', gap: 4, borderTop: '1px solid ' + C.border }}>
          {items.map((i) => (
            <button key={i.key} onClick={() => { setPage(i.key); setOpen(false) }} style={{ ...navBtn(i), padding: '12px 16px', borderRadius: 12, fontSize: 15, textAlign: 'left' }}>{i.label}</button>
          ))}
          <a href={LINKS.support} target="_blank" rel="noopener noreferrer" style={{ background: C.navy, color: C.white, padding: '12px 16px', borderRadius: 12, fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>Help Center ↗</a>
        </div>
      )}
    </header>
  )
}

function Footer({ setPage }) {
  return (
    <footer style={{ background: C.navy, color: C.white, padding: '48px 20px 24px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 36, marginBottom: 40 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <img src={LOGO} alt="KutCorner" style={{ width: 28, height: 28, borderRadius: 7, objectFit: 'cover' }} />
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 18, fontWeight: 700 }}>KutCorner</span>
            </div>
            <p style={{ fontSize: 13, color: C.textMuted, lineHeight: 1.6, maxWidth: 260 }}>Book your perfect haircut, anytime, anywhere. The easiest way to connect with barbers and stylists near you.</p>
          </div>
          <div>
            <h4 style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', color: C.textMuted, marginBottom: 14 }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Home', 'FAQ', 'Contact'].map((l) => (
                <button key={l} onClick={() => setPage(l.toLowerCase())} style={{ background: 'none', border: 'none', color: C.silverLight, fontSize: 14, cursor: 'pointer', textAlign: 'left', padding: 0 }}>{l}</button>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', color: C.textMuted, marginBottom: 14 }}>Resources</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href={LINKS.support} target="_blank" rel="noopener noreferrer" style={{ color: C.silverLight, fontSize: 14, textDecoration: 'none' }}>Support Center ↗</a>
              <a href={LINKS.main} target="_blank" rel="noopener noreferrer" style={{ color: C.silverLight, fontSize: 14, textDecoration: 'none' }}>Main Website ↗</a>
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', color: C.textMuted, marginBottom: 14 }}>Get the App</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[{ label: 'App Store', icon: 'apple', href: LINKS.appStore }, { label: 'Google Play', icon: 'play', href: LINKS.playStore }].map((s) => (
                <a key={s.label} href={s.href} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: C.navyLight, color: C.white, padding: '10px 16px', borderRadius: 10, textDecoration: 'none', fontSize: 13, fontWeight: 500, border: '1px solid ' + C.navyMid, width: 'fit-content' }}>
                  <Icon name={s.icon} /> {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid ' + C.navyMid, paddingTop: 20, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
          <p style={{ fontSize: 12, color: C.textMuted }}>© {new Date().getFullYear()} KutCorner. All rights reserved.</p>
          <div style={{ display: 'flex', gap: 20 }}>
            <a href="#" style={{ fontSize: 12, color: C.textMuted, textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ fontSize: 12, color: C.textMuted, textDecoration: 'none' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function HomePage({ setPage }) {
  const [q, setQ] = useState('')
  const topics = [
    { icon: 'calendar', title: 'Booking & Appointments', desc: 'Schedule, view, and manage your upcoming appointments.' },
    { icon: 'scissors', title: 'Finding a Barber', desc: 'Discover top-rated barbers and stylists near you.' },
    { icon: 'card', title: 'Payments & Pricing', desc: 'Payment methods, pricing info, and receipts.' },
    { icon: 'refresh', title: 'Reschedule & Cancel', desc: 'Change or cancel your bookings hassle-free.' },
  ]

  return (
    <div>
      <section style={{ background: 'linear-gradient(165deg, ' + C.navy + ' 0%, ' + C.navyLight + ' 40%, ' + C.navyMid + ' 100%)', padding: '64px 20px 72px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 620, margin: '0 auto' }}>
          <img src={LOGO} alt="KutCorner" style={{ width: 72, height: 72, borderRadius: 16, objectFit: 'cover', marginBottom: 20, boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }} />
          <div style={{ display: 'inline-block', background: C.accent + '20', color: C.accentLight, fontSize: 12, fontWeight: 600, padding: '6px 14px', borderRadius: 20, marginBottom: 20, letterSpacing: '0.04em', textTransform: 'uppercase' }}>Support Center</div>
          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 700, color: C.white, marginBottom: 12, lineHeight: 1.2 }}>
            How can we help <span style={{ color: C.accentLight, fontStyle: 'italic' }}>you</span> today?
          </h1>
          <p style={{ fontSize: 16, color: C.silver, marginBottom: 32, lineHeight: 1.6 }}>Search our help articles or browse topics below to find what you need.</p>
          <div style={{ display: 'flex', alignItems: 'center', background: C.white, borderRadius: 16, padding: '4px 4px 4px 20px', boxShadow: '0 4px 24px rgba(0,0,0,0.15)', maxWidth: 520, margin: '0 auto' }}>
            <span style={{ color: C.textMuted, display: 'flex' }}><Icon name="search" /></span>
            <input type="text" placeholder="Search for help..." value={q} onChange={(e) => setQ(e.target.value)} style={{ flex: 1, border: 'none', outline: 'none', padding: 12, fontSize: 15, color: C.navy, background: 'transparent' }} />
            <a href={LINKS.support + (q ? '?q=' + encodeURIComponent(q) : '')} target="_blank" rel="noopener noreferrer" style={{ background: C.accent, color: C.white, padding: '12px 24px', borderRadius: 12, fontSize: 14, fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}>Search</a>
          </div>
        </div>
      </section>

      <section style={{ padding: '56px 20px', maxWidth: 1080, margin: '0 auto' }}>
        <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 24, fontWeight: 700, color: C.navy, textAlign: 'center', marginBottom: 8 }}>Browse by Topic</h2>
        <p style={{ textAlign: 'center', color: C.textBody, fontSize: 14, marginBottom: 36 }}>Find quick answers to the most common questions.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 16 }}>
          {topics.map((t, i) => (
            <a key={i} href={LINKS.support} target="_blank" rel="noopener noreferrer" style={{ background: C.white, border: '1px solid ' + C.border, borderRadius: 16, padding: '28px 24px', textDecoration: 'none', transition: 'all 0.25s', display: 'block' }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, background: C.accent + '12', color: C.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}><Icon name={t.icon} /></div>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: C.navy, marginBottom: 6 }}>{t.title}</h3>
              <p style={{ fontSize: 13, color: C.textBody, lineHeight: 1.5 }}>{t.desc}</p>
            </a>
          ))}
        </div>
      </section>

      <section style={{ background: 'linear-gradient(135deg, ' + C.navyLight + ', ' + C.navyMid + ')', padding: '48px 20px', margin: '0 20px 40px', borderRadius: 20, maxWidth: 1040, marginLeft: 'auto', marginRight: 'auto' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 24, fontWeight: 700, color: C.white, marginBottom: 10 }}>Still need help?</h2>
          <p style={{ fontSize: 14, color: C.silver, marginBottom: 28, lineHeight: 1.6 }}>Our support team is here for you. Reach out and we will get back to you within 24 hours.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setPage('contact')} style={{ background: C.accent, color: C.white, border: 'none', padding: '14px 28px', borderRadius: 12, fontSize: 14, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}><Icon name="mail" /> Email Support</button>
            <a href={LINKS.support} target="_blank" rel="noopener noreferrer" style={{ background: 'transparent', color: C.white, border: '1px solid rgba(192,200,212,0.4)', padding: '14px 28px', borderRadius: 12, fontSize: 14, fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>Visit Help Center <Icon name="external" /></a>
          </div>
        </div>
      </section>
    </div>
  )
}

function FAQPage() {
  const [openIdx, setOpenIdx] = useState(null)
  const sections = [
    { title: 'Booking & Appointments', items: [
      { q: 'How do I book an appointment?', a: 'Open the KutCorner app, browse barbers near you or search by name, select your preferred service and time slot, then confirm your booking. You will receive a confirmation notification immediately.' },
      { q: 'Can I book for a specific barber?', a: 'Yes! You can search for barbers by name, view their profiles, ratings, and available times, then book directly with them. You can also save favorite barbers for quick rebooking.' },
      { q: 'How far in advance can I book?', a: 'You can book appointments up to 30 days in advance, depending on the barber availability settings. Some barbers also accept same-day bookings.' },
    ]},
    { title: 'Rescheduling & Cancellations', items: [
      { q: 'Can I cancel or reschedule my appointment?', a: 'Yes. Go to My Appointments in the app, select the booking, and choose Reschedule or Cancel. Free cancellation is available up to 2 hours before your appointment time.' },
      { q: 'Is there a cancellation fee?', a: 'Cancellations made more than 2 hours before the appointment are free. Late cancellations or no-shows may incur a fee set by the barber, typically 25 to 50 percent of the service price.' },
    ]},
    { title: 'Payments & Pricing', items: [
      { q: 'How do I pay for my haircut?', a: 'KutCorner supports multiple payment methods including credit and debit cards, mobile money, and in-app wallet. You can add and manage payment methods in your account settings.' },
      { q: 'Can I tip my barber through the app?', a: 'Absolutely. After your appointment is completed, you will be prompted to leave a rating and an optional tip. Tips go directly to your barber.' },
      { q: 'Where can I find my receipts?', a: 'All receipts are available under My Appointments then Past. Tap any completed appointment to view or download the receipt.' },
    ]},
    { title: 'Troubleshooting', items: [
      { q: 'What if my barber is late or does not show up?', a: 'If your barber is more than 15 minutes late, you can cancel for free and report the issue through the app. Our team will follow up and may offer a credit toward your next booking.' },
      { q: 'I am having issues with the app. What should I do?', a: 'Try updating to the latest version of the app from the App Store or Google Play. If the issue persists, clear the app cache or reinstall. You can also reach out via our Contact page for direct support.' },
    ]},
  ]

  let idx = 0
  return (
    <div style={{ padding: '48px 20px 64px', maxWidth: 720, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <div style={{ display: 'inline-block', background: C.accent + '15', color: C.accent, fontSize: 12, fontWeight: 600, padding: '6px 14px', borderRadius: 20, marginBottom: 16, letterSpacing: '0.04em', textTransform: 'uppercase' }}>FAQ</div>
        <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: 700, color: C.navy, marginBottom: 8 }}>Frequently Asked Questions</h1>
        <p style={{ fontSize: 15, color: C.textBody }}>Quick answers to the most common questions about KutCorner.</p>
      </div>
      {sections.map((sec) => (
        <div key={sec.title} style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: 13, fontWeight: 600, color: C.accent, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12, paddingLeft: 4 }}>{sec.title}</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {sec.items.map((item) => {
              const i = idx++
              const isOpen = openIdx === i
              return (
                <div key={i} style={{ background: C.white, border: '1px solid ' + (isOpen ? C.accent + '40' : C.border), borderRadius: 14, overflow: 'hidden' }}>
                  <button onClick={() => setOpenIdx(isOpen ? null : i)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', background: 'none', border: 'none', cursor: 'pointer', fontSize: 15, fontWeight: 500, color: C.navy, textAlign: 'left', gap: 12 }}>
                    <span>{item.q}</span>
                    <span style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', flexShrink: 0, color: C.textMuted }}><Icon name="chevron" /></span>
                  </button>
                  {isOpen && <div style={{ padding: '0 20px 18px', fontSize: 14, color: C.textBody, lineHeight: 1.7 }}>{item.a}</div>}
                </div>
              )
            })}
          </div>
        </div>
      ))}
      <div style={{ textAlign: 'center', background: C.lightGray, borderRadius: 16, padding: '32px 24px', marginTop: 16 }}>
        <p style={{ fontSize: 15, color: C.textBody, marginBottom: 16 }}>Need more help? Visit our full Support Center for detailed guides and articles.</p>
        <a href={LINKS.support} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: C.navy, color: C.white, padding: '12px 28px', borderRadius: 12, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>Visit Support Center <Icon name="external" /></a>
      </div>
    </div>
  )
}

function ContactPage() {
  const [fd, setFd] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const inp = { width: '100%', padding: '14px 16px', border: '1px solid ' + C.border, borderRadius: 12, fontSize: 14, color: C.navy, background: C.white, outline: 'none', boxSizing: 'border-box' }

  return (
    <div style={{ padding: '48px 20px 64px', maxWidth: 840, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <div style={{ display: 'inline-block', background: C.accent + '15', color: C.accent, fontSize: 12, fontWeight: 600, padding: '6px 14px', borderRadius: 20, marginBottom: 16, letterSpacing: '0.04em', textTransform: 'uppercase' }}>Contact Us</div>
        <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: 700, color: C.navy, marginBottom: 8 }}>Get in Touch</h1>
        <p style={{ fontSize: 15, color: C.textBody }}>We are here to help. Send us a message and we will respond as soon as we can.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
        <div style={{ background: C.white, border: '1px solid ' + C.border, borderRadius: 20, padding: '32px 28px' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ width: 60, height: 60, borderRadius: '50%', background: C.success + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}><Icon name="check" /></div>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: C.navy, marginBottom: 8 }}>Message Sent!</h3>
              <p style={{ fontSize: 14, color: C.textBody }}>Thank you for reaching out. We will get back to you within 24 hours.</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <h3 style={{ fontSize: 17, fontWeight: 600, color: C.navy, marginBottom: 4 }}>Send a Message</h3>
              {[{ l: 'Name *', k: 'name', p: 'Your name' }, { l: 'Email *', k: 'email', p: 'your@email.com', t: 'email' }, { l: 'Subject', k: 'subject', p: 'What is this about?' }].map((f) => (
                <div key={f.k}>
                  <label style={{ fontSize: 13, fontWeight: 500, color: C.textBody, display: 'block', marginBottom: 6 }}>{f.l}</label>
                  <input type={f.t || 'text'} placeholder={f.p} value={fd[f.k]} onChange={(e) => setFd({ ...fd, [f.k]: e.target.value })} style={inp} />
                </div>
              ))}
              <div>
                <label style={{ fontSize: 13, fontWeight: 500, color: C.textBody, display: 'block', marginBottom: 6 }}>Message *</label>
                <textarea placeholder="Describe your issue or question..." rows={5} value={fd.message} onChange={(e) => setFd({ ...fd, message: e.target.value })} style={{ ...inp, resize: 'vertical' }} />
              </div>
              <button onClick={() => { if (fd.name && fd.email && fd.message) setSent(true) }} style={{ background: C.accent, color: C.white, border: 'none', padding: '14px 28px', borderRadius: 12, fontSize: 15, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, width: '100%', marginTop: 4 }}><Icon name="send" /> Send Message</button>
            </div>
          )}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {[
            { icon: 'mail', title: 'Email Us', desc: 'support@kutcorner.com', sub: 'We will reply within 24 hours' },
            { icon: 'clock', title: 'Support Hours', desc: 'Mon to Fri, 8am to 8pm', sub: 'Weekend: 9am to 5pm' },
            { icon: 'phone', title: 'Social Media', desc: '@kutcorner on Twitter and Instagram', sub: 'DM us for quick questions' },
          ].map((it, i) => (
            <div key={i} style={{ background: C.white, border: '1px solid ' + C.border, borderRadius: 16, padding: 24, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: C.accent + '12', color: C.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon name={it.icon} /></div>
              <div>
                <h4 style={{ fontSize: 14, fontWeight: 600, color: C.navy, marginBottom: 4 }}>{it.title}</h4>
                <p style={{ fontSize: 14, color: C.navy, marginBottom: 2 }}>{it.desc}</p>
                <p style={{ fontSize: 12, color: C.textMuted }}>{it.sub}</p>
              </div>
            </div>
          ))}
          <a href={LINKS.support} target="_blank" rel="noopener noreferrer" style={{ background: 'linear-gradient(135deg, ' + C.navyLight + ', ' + C.navyMid + ')', borderRadius: 16, padding: 24, textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
            <div>
              <h4 style={{ fontSize: 14, fontWeight: 600, color: C.white, marginBottom: 4 }}>Visit our Help Center</h4>
              <p style={{ fontSize: 13, color: C.silver }}>Browse detailed guides and tutorials</p>
            </div>
            <span style={{ color: C.accentLight }}><Icon name="external" /></span>
          </a>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [page, setPage] = useState('home')
  const nav = (p) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <style>{`
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: ${C.cream}; font-family: 'DM Sans', sans-serif; }
        ::placeholder { color: ${C.textMuted}; }
        @media (max-width: 768px) {
          .kc-desktop-nav { display: none !important; }
          .kc-mobile-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .kc-mobile-menu { display: none !important; }
        }
      `}</style>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header page={page} setPage={nav} />
        <main style={{ flex: 1 }}>
          {page === 'home' && <HomePage setPage={nav} />}
          {page === 'faq' && <FAQPage />}
          {page === 'contact' && <ContactPage />}
        </main>
        <Footer setPage={nav} />
      </div>
    </>
  )
}

export default App
