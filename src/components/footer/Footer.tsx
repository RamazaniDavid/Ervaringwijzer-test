import React from 'react';

const Footer = () => {
  return (
    <footer className="">
      <div className=" pt-44 pb-12">
        <div className="container mx-auto px-6">
          <hr />

          <div className="mt-4 flex  flex-col  gap-6 text-[#5E7187] md:flex-row-reverse 2xl:gap-36">
            <div>© 2022 - Ervaringwijzer</div>
            <div>
              <a
                href="https://www.ervaringwijzer.nl/privacy/"
                target={'_blank'}
                rel="noreferrer"
              >
                Privacy policy
              </a>
            </div>
            <div>
              {' '}
              <a
                href="https://www.ervaringwijzer.nl/gebruikersvoorwaarden/"
                target={'_blank'}
                rel="noreferrer"
              >
                Gebruikersvoorwaarden
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
