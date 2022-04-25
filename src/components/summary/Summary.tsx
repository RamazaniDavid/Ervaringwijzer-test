import React from 'react';

import TryButton from '../misc/TryButton';

const Summary = () => {
  return (
    <section id="summary">
      <div className="mx-auto mt-24 max-w-screen-2xl px-4 xl:px-16">
        <div className="flex flex-col items-center gap-12 ">
          <h3 className="text-2xl font-extrabold text-[#082446] lg:text-4xl">
            Samen Wijzer Worden?
          </h3>
          <TryButton />
        </div>
      </div>
    </section>
  );
};

export default Summary;
