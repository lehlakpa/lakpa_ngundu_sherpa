export default function Navbar({
  debugOn,
  onToggleDebug,
  activeSection,
  mobileOpen,
  onToggleMobile,
  onCloseMobile,
}) {
  const navItems = [
    { id: 'home', label: 'home' },
    { id: 'education', label: 'education' },
    { id: 'skills', label: 'skills' },
    { id: 'projects', label: 'projects' },
    { id: 'contact', label: 'contact' },
  ];

  return (
    <header>
      <div className="wrap toolbar">
        <div className="logo">
          <img src="/lakpa.png" alt="Lakpa Ngundu Sherpa" className="logo-avatar" />
          lakpa.dev
        </div>
        <nav className="navlinks" id="navlinks">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? 'active' : ''}
              onClick={onCloseMobile}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="dbg-toggle">
          <span className="dbg-label">
            <span className="lbl-text">debug paint: </span>
            <span className="state" id="dbgState">
              {debugOn ? 'on' : 'off'}
            </span>
          </span>
          <button
            type="button"
            className="switch"
            id="dbgSwitch"
            aria-pressed={debugOn}
            aria-label="Toggle debug paint overlay"
            onClick={onToggleDebug}
          />
        </div>
        <button
          type="button"
          className="menu-btn"
          id="menuBtn"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          aria-controls="navlinks"
          onClick={onToggleMobile}
        >
          <span></span>
        </button>
      </div>
    </header>
  );
}
