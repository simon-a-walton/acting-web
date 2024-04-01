/* eslint-disable react/no-unescaped-entities */
export default function Music() {
    return (
       <>
        <div className="flex lg:flex-row flex-col">
          <div className="w-full lg:w-1/2">
            <div className="videocontainer">
              <iframe
                width="560"
                height="349"
                src="https://www.youtube.com/embed/vJjdOPzZThE"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:pt-20">  
            <p className="m-0 p-3">
              Simon is a singer/songwriter and loves to make radio-friendly pop songs that
              have a killer hooks. He has appeared on ITV Merdian News, Gaydar Radio and BBC Sussex
              Radio to discuss being openly gay as a musician.
            </p>
            <p className="m-0 p-3">
              <a href="https://www.youtube.com/watch?v=rQDq0AKGpF4" target="_blank" className="link">Watch the
              ITV feature of Simon's music project →</a>
            </p>
          </div>
        </div>
      </>
    );
  };