import { useRouter } from 'next/router';
import React from 'react';

import TryButton from '../misc/TryButton';

const Assertion = () => {
  const router = useRouter();

  const assertions = [
    {
      icon: `${router.basePath}/assets/images/icons/Folder.svg`,
      title: 'Ontdek onze bibliotheek met 200+ vragenlijsten',
      description: 'Gebruik best practices voor een vliegende start.',
    },
    {
      icon: `${router.basePath}/assets/images/icons/Message.svg`,
      title: 'Verstuur automatisch op iedere manier die je wilt',
      description:
        'Van papier tot digitaal zodat je altijd aansluit bij jouw doelgroep.',
    },
    {
      icon: `${router.basePath}/assets/images/icons/Smile.svg`,
      title: 'Behaal de hoogste respons zonder moeite',
      description:
        'Visueel aantrekkelijk voor de beste ervaring bij respondenten.',
    },
  ];

  return (
    <section id="assertion">
      <div className="mx-auto mt-2 max-w-screen-2xl px-4 xl:px-16">
        <div className="my-16 flex w-full flex-col">
          <h3 className="sm: mx-auto w-9/12 text-center text-2xl font-semibold leading-normal text-[#082446] lg:w-5/12 lg:text-4xl lg:font-extrabold">
            Beheer alles van Ervaringwijzer zonder een{' '}
            <span className="text-blue-600">digitale stap</span> te zetten in
            het dashboard
          </h3>
        </div>
        <div className="flex flex-col gap-24 md:flex-row 2xl:gap-48">
          {assertions.map((assertion, index) => (
            <div key={index} className="flex flex-1 flex-row gap-6 md:flex-col">
              <div className="flex w-full basis-1/3 place-content-center place-self-center ">
                <img
                  src={assertion.icon}
                  alt={assertion.title}
                  className="h-[75px]  w-[75px] lg:h-[150px]  lg:w-[150px]"
                />
              </div>
              <div className="flex basis-2/3 flex-col text-left md:-mt-4 md:text-center">
                <h3 className="flex-1 text-[17px] font-bold text-[#082446] md:text-lg 2xl:text-2xl">
                  {assertion.title}
                </h3>
                <p className="mt-4 flex-1 text-sm font-normal text-[#5E7187] lg:text-[17px]">
                  {assertion.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-12 flex justify-center">
          <TryButton />
        </div>
      </div>
    </section>
  );
};

export default Assertion;
