import { useRouter } from 'next/router';
import React from 'react';

const Benefit = () => {
  const router = useRouter();

  const benefits = [
    {
      title: 'Netwerk',
      description:
        'Wees onderdeel van het netwerk, leer van elkaar en wordt samen wijzer!',
      icon: `${router.basePath}/assets/images/icons/network.svg`,
    },
    {
      title: 'Modern',
      description: 'Een prettig platform met veel aandacht voor gebruikers',
      icon: `${router.basePath}/assets/images/icons/modern.svg`,
    },
    {
      title: 'Privacy',
      description: 'Jouw data is veilig en conform de nieuwste technieken.',
      icon: `${router.basePath}/assets/images/icons/privacy.svg`,
    },
  ];

  return (
    <section id="benefit">
      <div className="mx-auto mt-48 max-w-screen-2xl px-8 xl:px-16">
        <div className="flex flex-col justify-around gap-24 md:flex-row  2xl:gap-40">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-1 flex-row gap-6 md:flex-col">
              <div className="flex w-full basis-1/3 place-content-center place-self-center ">
                <img
                  src={benefit.icon}
                  alt={benefit.title}
                  className="h-[100px]  w-[100px] lg:h-[150px]  lg:w-[150px]"
                />
              </div>
              <div className="basis-2/3 text-left md:text-center">
                <h3 className="text-[17px] font-semibold text-[#082446]  2xl:text-2xl">
                  {benefit.title}
                </h3>
                <p className="mt-4 text-[14px] font-normal text-[#5E7187] lg:text-[17px] ">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefit;
