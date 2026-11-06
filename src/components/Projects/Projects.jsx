import { projects } from '../../constants';
import { Helmet } from 'react-helmet-async';
export default function Projects() {
 return <><Helmet><title>Projects | Pratham Garg</title></Helmet><section className="page-heading section"><p className="eyebrow">Ideas, built.</p><h1>THE WORK<span>↘</span></h1><p>From anonymous conversations to operating systems.<br/>A collection of things I’ve made and learned from.</p></section><section className="project-list section" aria-label="Projects">{projects.map((project, i) => <article id={project.title.toLowerCase().replaceAll(' ', '-')} className="project-row" key={project.title}><span className="project-index">{String(i + 1).padStart(2, '0')}</span><div><h2>{project.title}</h2><p>{project.description}</p><a className="text-link" href={project.link}>View source on GitHub ↗</a></div><span className="project-arrow" aria-hidden="true">↗</span></article>)}</section></>;
}
