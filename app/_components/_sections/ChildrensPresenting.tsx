/* eslint-disable react/no-unescaped-entities */
export default function ChildrensPresenting() {
    return (
      <>
        <div className="flex lg:flex-row flex-col">
          <div className="w-full lg:w-1/2">
          <div className="videocontainer">
            <iframe
              width="560"
              height="349"
              src="https://www.youtube.com/embed/lH_rV2LcoGk"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:pt-20">          
          <p className="m-0 p-3">
            Simon is the creator of 'Simon's Storytelling', which is a children's online YouTube channel. He brings classic
            fairytales to life with his animated performance.
          </p>
          <p className="m-0 p-3">
          <a href="https://www.youtube.com/channel/UCF5NEXyeDlptu43k_fmnJBw" target="_blank" className="link">See more storytelling videos →</a>
          </p>
        </div>
      </div>
    </>
    );
  }
