import React from 'react';

import TryButton from '../misc/TryButton';

const Summary = () => {
  return (
    <section id="summary">
      <div className="mx-auto mt-48 flex flex-col items-center gap-12 ">
        <h3 className="text-3xl text-[#082446]">Samen Wijzer Worden?</h3>
        <TryButton />
      </div>
    </section>
  );
};

export default Summary;
