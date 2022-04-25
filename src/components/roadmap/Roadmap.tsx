import { useRouter } from 'next/router';
import React from 'react';

import TryButton from '../misc/TryButton';
import Step from './Step';

const Roadmap = () => {
  const router = useRouter();

  const steps = [
    {
      name: 'Stap #1',
      nameClassName: 'text-[#FFB802] ',
      title: 'Inventariseer systemen',
      description: `Met welke systemen wil je Ervaringwijzer koppelen? De mogelijkheden zijn eindeloos!`,
      image: `${router.basePath}/assets/images/roadmap/step-1.png`,
      className: 'md:flex-row-reverse',
      imageContainerClassName: '',
      imageClassName: 'h-[187px] lg:h-[400px]',
    },
    {
      name: 'Stap #2',
      nameClassName: 'text-[#16B86A] ',
      title: 'Ontwikkel onderzoeken',
      description: `Ontwerp vragenlijsten en richt het proces van versturen in hoe je de doelgroep wil benaderen.`,
      image: `${router.basePath}/assets/images/roadmap/step-2.png`,
      className: '',
      imageContainerClassName: '',
      imageClassName: 'h-[126px] lg:h-[268px]',
    },
    {
      name: 'Stap #3',
      nameClassName: 'text-[#FF0000] ',
      title: 'Koppel met onze API',
      description: `Onze koppeling is zo geschreven dat in no time we met andere systemen kunnen praten.`,
      image: `${router.basePath}/assets/images/roadmap/step-3.png`,
      className: 'md:flex-row-reverse',
      imageContainerClassName: 'bg-[#082446]',
    },
  ];

  return (
    <section id="roudmap">
      <div className="mx-auto mt-24 max-w-screen-2xl px-4 xl:px-16">
        <div className="flex flex-col items-center justify-center">
          <h3
            data-aos="fade-up"
            className=" text-2xl font-semibold  text-[#082446] lg:font-extrabold 2xl:text-4xl"
          >
            Koppel in 3 stappen
          </h3>
          <div className="3xl:w-8/12 mt-12 w-11/12 2xl:w-10/12">
            {steps.map((step, index) => (
              <Step key={index} {...step} />
            ))}
          </div>
        </div>

        <div className="mx-auto mt-48 flex justify-center">
          <TryButton />
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
