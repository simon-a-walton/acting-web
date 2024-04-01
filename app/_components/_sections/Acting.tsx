/* eslint-disable react/no-unescaped-entities */
export default function Acting() {
    return (
      <div className="flex lg:flex-row flex-col">
        <div className="w-full lg:w-1/2">
          <div className="videocontainer">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/155815564"
              width="560"
              height="349"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:pt-20">     
          <p className="m-0 p-3">
            Simon started his acting career in Stockholm, Sweden, where he was cast as a lead role in the production
            ‘English Town’, an International educational soap. On his return to the UK in 2013, he landed the role of Brucie
            in the comedy TV pilot 'Tease'. Simon has worked on BBC3’s comedy series ‘Siblings’, alongside Charlotte Ritchie and
            comedian Phil Nichol, played the lead in the online comedy 'Startup Stories', the short film 'Secret Body' and Josh in
            the theatre production 'The Boys Upstairs' at Above The Stag Theatre.
          </p>
          <p className="m-0 p-3">
            Simon is also an established voice over artist and has worked for children’s TV programmes 'Words to Grow', 'Kids in Action'
            (English Club TV) and voiced the children’s game ‘Gee Whizz’.
          </p>
          <p className="m-0 p-3">
            Commercial campaigns include; McCafe 'Flat What?, BT and Kwiff Betting Advert.
          </p>
          <p className="m-0 p-3">
            <a href="https://app.spotlight.com/2212-9057-3356" target="_blank" className="link">See Simon's Spotlight CV →</a>
          </p>
        </div>
      </div>
    ); 
  }


