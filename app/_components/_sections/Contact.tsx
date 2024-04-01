export default function Contact() {
    return (
      <>
         <div className="flex lg:flex-row flex-col w-full items-center">
          <div className="col-sm-12 col-lg-6 text-center">
            <a href="https://akagents.co.uk" target="_blank" className="p-3 d-block">
              <img
                src="/images/AK.png"
                alt="AK Agents"
                width="50%"
                height="auto"
              />
            </a>
          </div>
          <div className="col-sm-12 col-lg-6">
            <p className="m-0 pb-3">
              Simon is represented by AK Agents, a boutique talent management agency based in London, UK.
            </p>
            <p className="m-0">
              <a href="mailto:info@akagents.co.uk" target="_blank" className="link">
                &nbsp;&nbsp;info@akagents.co.uk
              </a>
            </p>
            <p className="m-0">
              <a href="mailto:simonwaltontv@gmail.com" target="_blank" className="link">
                &nbsp;&nbsp;simonwaltontv@gmail.com
              </a>
            </p>
          </div>
        </div>
      </>
    );
  }

