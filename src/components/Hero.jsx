import { profileData } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="hero wrap">
      <div className="hero-inner">
        <div className="wbox hero-copy">
          <span className="wtag">Scaffold</span>
          <span className="wdim">w: 100% · h: auto</span>
          <div className="hero-top-row">
          
            <div className="hatch"></div>
          </div>
          <h1 className="htitle">
            I build <span className="accent">widgets</span>,<br />
            not just screens.
          </h1>
          <p className="hsub">{profileData.bio}</p>
          <div className="hmeta">
            <span>
              <span className="dot"></span>
              {profileData.location}
            </span>
            <span>
              <span className="dot"></span>
              <a href={`mailto:${profileData.email}`} style={{ textDecoration: 'none' }}>
                {profileData.email}
              </a>
            </span>
          </div>
          <div className="hactions">
            <a className="btn btn-primary" href="#projects">
              View projects
            </a>
            <a className="btn btn-ghost" href="#contact">
              Get in touch
            </a>
          </div>
        </div>

        <div className="wbox tree-panel">
          <span></span>
          <span className="wtag">Widget Tree</span>
          <div className="tp-label">// inspector.dart</div>
          <div className="tree-line">
            <span className="k">Scaffold</span>
          </div>
          <div className="tree-line dim">├─ AppBar(&apos;lakpa.dev&apos;)</div>
          <div className="tree-line dim">└─ body: Column</div>
          <div className="tree-line dim">   ├─ CircleAvatar(image: &apos;lakpa.png&apos;) <span className="v">✓</span></div>
          <div className="tree-line dim">   ├─ Text(&apos;Junior Flutter Dev&apos;)</div>
          <div className="tree-line dim">   ├─ Wrap(skills) <span className="v">✓</span></div>
          <div className="tree-line dim">   ├─ ListView(education)</div>
          <div className="tree-line dim">   ├─ GridView(projects) <span className="v">×2</span></div>
          <div className="tree-line dim">   └─ Card(contact)</div>
        </div>
      </div>
    </section>
  );
}
