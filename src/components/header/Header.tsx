import React, { useEffect } from 'react';

import HeaderLogo from '@/components/header/HeaderLogo';

import TryButton from '../misc/TryButton';

const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isScrolledTryBtn, setIsScrolledTryBtn] = React.useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsScrolledTryBtn(
        (window.innerWidth < 640 && window.scrollY > 350) ||
          (window.innerWidth >= 640 && window.scrollY > 500)
      );
      setIsScrolled(window.scrollY > 30);
    });
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 rounded z-30 w-full transition-all ${
          isScrolled ? ' pt-0' : '  pt-4 '
        }`}
      >
        <nav
          className={`mx-auto rounded-xl grid  max-w-screen-2xl grid-flow-col px-6 py-3 sm:px-8 sm:py-4  ${
            isScrolled ? ' backdrop-blur-sm bg-gray-50  ' : 'bg-transparent'
          }`}
        >
          <div className="col-start-1 col-end-2 flex w-fit items-center">
            <HeaderLogo textInVisible={isScrolled && window.innerWidth < 640} />
          </div>

          <div
            className={`col-start-10 transition-opacity duration-1000 linear col-end-12 flex items-center justify-end font-medium ${
              isScrolledTryBtn ? 'visible opacity-100' : 'opacity-0 invisible '
            }`}
          >
            <TryButton />
          </div>
        </nav>
      </header>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
