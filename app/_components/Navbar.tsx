"use client";

import styles from './navbar.module.scss'
import { useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap';

const navTitles = [
  {
    name: "Acting",
    link: "#acting"
  },
  {
    name: "Children's Presenting",
    link: "#childrens-presenting"
  },
  {
    name: "Comedy",
    link: "#comedy"
  },
  {
    name: "Music",
    link: "#music"
  },
  {
    name: "Contact",
    link: "#contact"
  }
];

export default function NavBar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const getClassName = () => {
    if (isScrolled) {
      return styles.sticky;
    }
    return null;
  }

  const handleScroll = () => {
    const navbar = document.getElementById("nav");
    const sticky = navbar?.offsetTop;
    if (sticky && window.pageYOffset > sticky) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className={`p-0 w-full hidden lg:block h-[88px] ${styles.bgColoured}`}>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav id="nav" className={`${isScrolled ? styles.sticky : styles.navgrid} mr-auto`}>
              {navTitles.map((nav, index) => (
            <Nav.Link key={index} href={nav.link} className={`${activeIndex === index && styles.active} ${styles.navlink}`}
              onClick={() => setActiveIndex(index)}>{nav.name}</Nav.Link>
          ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
}


