import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import SectionTemplate from '../components/section-template'
import utilStyles from '../styles/utils.module.css'
import NavBar from '../components/navbar'
import Acting from '../sections/acting'
import ChildrensPresenting from '../sections/childrens-presenting'
import Comedy from '../sections/comedy'
import Music from '../sections/music'
import Contact from '../sections/contact'
import { colours } from '../styles/colours.js'
import { Carousel } from 'react-responsive-carousel';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossorigin="anonymous"
        />
        <script src="https://kit.fontawesome.com/ca63d90480.js" crossorigin="anonymous"></script>
      </Head>
      <NavBar />
      <div className="row" style={{ background: colours.primary }}>
        <div className="col-sm-12 p-0">
          <img src="/images/Simon-walton-montage.png" />
        </div>
      </div>
      <SectionTemplate
        colour="#fff"
        BGcolour={colours.primary}
        colourSVG={colours.filler}
        display="none"
        sectionName="Acting"
        id="acting">
        <Acting />
      </SectionTemplate>
      <SectionTemplate
        colour="white"
        BGcolour={colours.primary}
        colourSVG={colours.primary}
        display="block"
        sectionName="Children's Presenting"
        id="childrens-presenting">
        <ChildrensPresenting />
      </SectionTemplate>
      <SectionTemplate
        colour="#fff"
        BGcolour={colours.primary}
        colourSVG={colours.primary}
        display="block"
        sectionName="Comedy"
        id="comedy">
        <Comedy />
      </SectionTemplate>
      <SectionTemplate
        colour="#fff"
        BGcolour={colours.primary}
        colourSVG={colours.primary}
        display="block"
        sectionName="Music"
        id="music">
        <Music />
      </SectionTemplate>
      <SectionTemplate
        colour="white"
        BGcolour={colours.primary}
        colourSVG={colours.primary}
        display="block"
        sectionName="Contact"
        id="contact">
        <Contact />
      </SectionTemplate>
      <SectionTemplate
        colour="black"
        BGcolour=""
        colourSVG={colours.primary}
        display="block"
        sectionName=""
        id="contact">
        <div className="pl-3 pt-3">
          <p className="mb-0 pb-3">
          &copy;
          {new Date().getFullYear()}
          &nbsp;
          Simon Walton
        </p>
        </div>
      </SectionTemplate>

    </Layout>
  )
};
