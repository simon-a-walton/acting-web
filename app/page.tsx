import Image from "next/image";
import NavBar from "./_components/Navbar";
import SectionTemplate from "./_components/SectionTemplate";
import Acting from "./_components/_sections/Acting";
import ChildrensPresenting from "./_components/_sections/ChildrensPresenting";
import Comedy from "./_components/_sections/Comedy";
import Music from "./_components/_sections/Music";
import Contact from "./_components/_sections/Contact";

export default function Home() {
  return (
    <>
      <NavBar />
          <div className="bg-[#2672AD] flex flex-row">
            <a className="px-0 mb-10" href="https://app.spotlight.com/2212-9057-3356" target="_blank">
              <img src="/images/Simon-walton-montage.png" />
            </a>
          </div>
        <main className="flex min-h-screen flex-col items-center justify-between">
          <SectionTemplate
            colour="#fff"
            colourSVG={"#A1C5ED"}
            display="none"
            sectionName="Acting"
            id="acting">
            <Acting />
          </SectionTemplate>
          <SectionTemplate
            colour="white"
            display="block"
            sectionName="Children's Presenting"
            id="childrens-presenting">
            <ChildrensPresenting />
          </SectionTemplate>
          <SectionTemplate
            colour="#fff"
            display="block"
            sectionName="Comedy"
            id="comedy">
          <Comedy />
          </SectionTemplate>
          <SectionTemplate
            colour="#fff"
            display="block"
            sectionName="Music"
            id="music">
          <Music />
          </SectionTemplate>
          <SectionTemplate
            colour="white"
            display="block"
            sectionName="Contact"
            id="contact">
            <Contact />
            <div className="pt-10">
              <p className="mb-0 pb-3">
              &copy;
              {new Date().getFullYear()}
              &nbsp;
              Simon Walton
            </p>
            </div>
          </SectionTemplate>
        </main>
    </> 
  );
}
