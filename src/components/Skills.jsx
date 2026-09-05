import { skillGroups } from '../data/portfolioData';

export default function Skills() {
  const totalSkills = skillGroups.reduce((acc, group) => acc + group.skills.length, 0);

  return (
    <section id="skills" className="wrap">
      <div className="crumb">
        Scaffold <span className="sep">›</span> body <span className="sep">›</span> Column <span className="sep">›</span>{' '}
        <span className="cur">Wrap</span>
      </div>
      <h2 className="stitle">Skills &amp; tools</h2>
      <div className="wbox skills-box">
        <span className="wtag">Wrap(spacing: 10)</span>
        <span className="wdim">children: {totalSkills}</span>
        <div className="wrap-groups">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <div className="wg-label">{group.category}</div>
              <div className="chip-row">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="chip"
                    style={{ background: skill.bg }}
                  >
                    <span className="sw" style={{ background: skill.color }}></span>
                    {skill.name} <span className="lv">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
