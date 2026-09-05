import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="wrap">
      <div className="crumb">
        Scaffold <span className="sep">›</span> body <span className="sep">›</span> Column <span className="sep">›</span>{' '}
        <span className="cur">ListView</span>
      </div>
      <h2 className="stitle">Education</h2>
      <div className="edu-list">
        {educationData.map((item) => (
          <div key={item.index} className="wbox edu-item">
            <span className="wtag">ListTile</span>
            <span className="wdim">index: {item.index}</span>
            <div>
              <div className="ei-title">{item.title}</div>
              <div className="ei-sub">{item.institution}</div>
            </div>
            <span className={`status ${item.status === 'running' ? 'run' : 'done'}`}>
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
