import { projectData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="wrap">
      <div className="crumb">
        Scaffold <span className="sep">›</span> body <span className="sep">›</span> Column <span className="sep">›</span>{' '}
        <span className="cur">GridView</span>
      </div>
      <h2 className="stitle">Things I&apos;ve built</h2>
      <div className="grid2">
        {projectData.map((project) => (
          <div key={project.id} className="wbox pcard">
            <span className="wtag">Card</span>
            <span className="wdim">{project.indexDisplay}</span>
            <div className="picon">{project.icon}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="pstat">{project.status}</div>
            <div className="pstack">
              {project.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
