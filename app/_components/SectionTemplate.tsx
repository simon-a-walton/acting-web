export default function SectionTemplate(props: { BGcolour?: any; colour: any; display: any; colourSVG?: string | undefined; id: string | undefined; sectionName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }) {

    return (
      <>
        <div style={{background: `linear-gradient(#2672AD, ${props.BGcolour || "#3295B2"})`, color: props.colour}} className="w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${props.display === "none" ? "hidden" : "block"}`}
            viewBox="0 0 1440 320"
          >
            <path fill={props.colourSVG || "#3295B2"}
            fillOpacity="1" d="M0,32L48,74.7C96,117,192,203,288,208C384,213,480,139,576,133.3C672,128,768,192,864,229.3C960,267,1056,277,1152,266.7C1248,256,1344,224,1392,208L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
            </path>
          </svg>
          <div className="px-10 lg:px-24">
              <header className={`headingXl pl-5 pb-3`} id={props.id}>
                {props.sectionName}
              </header>
              {props.children}
          </div>
      </div>
      </>
    );
  }

