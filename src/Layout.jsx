import { Outlet, NavLink, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { github, linkedin, email } from './constants';
export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return <><a className="skip" href="#main">Skip to content</a><header className="site-header"><Link className="monogram" to="/" aria-label="Pratham Garg home">PG<span>®</span></Link><nav aria-label="Main navigation"><NavLink to="/" end>About</NavLink><NavLink to="/projects">Work</NavLink><NavLink to="/resume">Resume</NavLink></nav><a className="contact-link" href={`mailto:${email}`}>Let’s talk ↗</a></header><main id="main"><Outlet /></main><footer><p>Have something in mind?</p><a className="footer-title" href={`mailto:${email}`}>LET’S BUILD<span>↗</span></a><div className="footer-bottom"><Link to="/">Pratham Garg</Link><div><a href={github}>GitHub ↗</a><a href={linkedin}>LinkedIn ↗</a><a href={`mailto:${email}`}>Email ↗</a></div><span>Made with curiosity.</span></div></footer></>;
}
