import { profileData } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="wrap">
      <div className="crumb">
        Scaffold <span className="sep">›</span> body <span className="sep">›</span> Column <span className="sep">›</span>{' '}
        <span className="cur">Card</span>
      </div>
      <div className="contact-grid">
        <div className="wbox contact-copy">
          <span className="wtag">Column</span>
          <h2 className="stitle" style={{ marginBottom: '14px' }}>
            Let&apos;s build something
          </h2>
          <p>
            Open to junior Flutter developer roles, internships, and collaborations. Reach out by email
            or phone — I usually reply within a day.
          </p>
        </div>
        <div className="wbox props-panel">
          <span className="wtag">Properties</span>
          <div className="pp-head">// widget inspector — details</div>
          <div className="prop-row">
            <span className="pk">name</span>
            <span className="pt">: String =</span>
            <span className="pv">&apos;{profileData.name}&apos;</span>
          </div>
          <div className="prop-row">
            <span className="pk">role</span>
            <span className="pt">: String =</span>
            <span className="pv">&apos;{profileData.title}&apos;</span>
          </div>
          <div className="prop-row">
            <span className="pk">location</span>
            <span className="pt">: String =</span>
            <span className="pv">&apos;{profileData.location}&apos;</span>
          </div>
          <div className="prop-row">
            <span className="pk">email</span>
            <span className="pt">: String =</span>
            <span className="pv">
              <a href={`mailto:${profileData.email}`}>&apos;{profileData.email}&apos;</a>
            </span>
          </div>
          <div className="prop-row">
            <span className="pk">phone</span>
            <span className="pt">: String =</span>
            <span className="pv">
              <a href={`tel:${profileData.phone.replace(/\s+/g, '')}`}>
                &apos;{profileData.phone}&apos;
              </a>
            </span>
          </div>
          <div className="prop-row">
            <span className="pk">site</span>
            <span className="pt">: String =</span>
            <span className="pv">&apos;{profileData.site}&apos;</span>
          </div>
        </div>
      </div>
    </section>
  );
}
