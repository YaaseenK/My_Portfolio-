import { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import logo from "../../assets/img/banner/logo.png"
import navIcon1 from '../../assets/img/nav/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav/nav-icon3.svg';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false)
      }
      }
    window.addEventListener("scroll", onScroll)
      return () => window.removeEventListener("scrolled", onScroll)
  }, [])

    const updateActiveLink = (value) => {
      setActiveLink(value)
    }  

    return (
      <Router>
          <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
          <Container>
            <Navbar.Brand href="https://yaaseenk.github.io/My_Portfolio-/">
              <img class='logo' src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
          
          <Navbar.Collapse id="basic-navbar-nav">
                <Nav classname='ms-auto'>  
                  <Nav.Link 
                    href="#home" 
                    className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
                    onClick={() => updateActiveLink('home')}
                    >Home
                  </Nav.Link>

                  <Nav.Link 
                    href="#skills" 
                    className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} 
                    onClick={() => updateActiveLink('skills')}
                    >Skills
                  </Nav.Link>

                  <Nav.Link 
                    href="#project" 
                    className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
                    onClick={() => updateActiveLink('projects')}
                    >Projects
                  </Nav.Link>

                </Nav>
                
                  <span className='navbar-text'>
                    <div className='social-icons'>
                      <a href="https://profile.indeed.com/?hl=en_CA&co=CA&from=gnav-homepage"><img src={navIcon1} alt="" /></a>
                      <a href="https://www.instagram.com/alertflow/"><img src={navIcon2} alt="" /></a>
                      <a href="https://www.youtube.com/channel/UCI6MrqNbUOWm_xO1D3J1jbg"><img src={navIcon3} alt="" /></a>
                    </div>
                    <HashLink to='#connect'>
                      <button className="vvd">
                        <span>Let???s Connect</span>
                      </button>
                    </HashLink> 
                  </span>
                  
              </Navbar.Collapse>
            </Container>
          </Navbar>
      </Router>
    );

};