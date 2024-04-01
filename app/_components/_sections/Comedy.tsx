export default function Comedy() {
    return (
      <>
       <div className="flex lg:flex-row flex-col">
          <div className="w-full lg:w-1/2">
          <div className="videocontainer">
            <iframe
              width="560"
              height="349"
              src="https://www.youtube.com/embed/vdgfN2eBi-0"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:pt-20">     
          <p className="m-0 p-3">
            Simon has a gift of different accents and playing hilarious characters. To demonstrate this, he
            created a mocumentary of people talking about what happiness means to them.
          </p>
          <p className="m-0 p-3">
            <a href="https://www.youtube.com/watch?v=Zx63jdmysDs" target="_blank" className="link">Watch the full-length version →</a>
          </p>
        </div>
      </div>
    </>
    );
}