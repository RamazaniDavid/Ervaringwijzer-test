import { useRouter } from 'next/router';
import React from 'react';

import HorzRuleText from '../misc/HorzRuleText';
import TryButton from '../misc/TryButton';
import BannerAnimatedImage from './BannerAnimatedImage';
import Customer from './Customer';

const Banner = () => {
  const router = useRouter();

  const customers = [
    {
      name: 'Leger des Heils',
      logo: `${router.basePath}/assets/images/logos/leger-des-heils.svg`,
      url: 'https://www.legerdesheils.nl/',
      className: 'fill-red-500',
      style: ``,
      hoverStyle: `
        fill:orange!important
      `,
    },
    {
      name: 'Incluzio',
      logo: `${router.basePath}/assets/images/logos/incluzio.svg`,
      url: 'https://www.incluzio.nl/',
      className: 'fill-orange-500',
      style: ``,
      hoverStyle: ``,
    },
    {
      name: 'Gemeente Utrecht',
      logo: `${router.basePath}/assets/images/logos/gemeente-utrecht.svg`,
      url: 'https://www.utrecht.nl/',
      className: 'fill-red-500',
      style: ``,
      hoverStyle: ``,
    },
    {
      name: 'Delft Support',
      logo: `${router.basePath}/assets/images/logos/delft-support.svg`,
      url: 'https://www.delftsupport.nl/',
      className: 'fill-pink-500',
      style: ``,
      hoverStyle: ``,
    },
    {
      name: 'Youké',
      logo: `${router.basePath}/assets/images/logos/youke.svg`,
      url: 'https://www.youke.nl/',
      className: 'fill-pink-500',
      style: ``,
      hoverStyle: ``,
    },
  ];

  return (
    <section id="banner">
      <div className="mx-auto mt-24 max-w-screen-2xl px-4 xl:px-16">
        <div className="grid grid-flow-row grid-rows-2 gap-8 py-6 sm:grid-flow-col-dense sm:grid-cols-2 sm:py-16 md:grid-rows-1 ">
          <div className="flex flex-col items-start justify-center sm:row-start-1">
            <h1 className="text-left  text-2xl font-medium leading-normal text-[#082446] lg:text-4xl xl:text-5xl">
              Koppel Ervaringwijzer met
              <span className="text-blue-600"> al jouw systemen </span> om
              geautomatiseerd te onderzoeken..
            </h1>
            <p className="mt-4 mb-6 text-left  text-[#5E7187]">
              Met de API van Ervaringwijzer automatiseer je alle onderdelen van
              Ervaringwijzer. Creeër, verstuur en zie resultaten van alle
              onderzoeken van ieder deel van de organisatie.
            </p>
            <TryButton />
          </div>
          <div className="flex w-full">
            <div className="h-full w-full content-center items-center">
              <BannerAnimatedImage />
            </div>
          </div>
        </div>
        <div className="relative flex w-full">
          <div className="inset-0 w-full bg-white">
            <HorzRuleText text="Gebruikt door" />
            <div className="mb-16 flex justify-center gap-10 lg:mb-28">
              {customers.map((customer) => (
                <Customer key={customer.name} {...customer} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
