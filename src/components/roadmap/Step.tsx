import React from 'react';

type IStepProps = {
  name: string;
  nameClassName?: string;
  title: string;
  titleClassName?: string;
  description: string;
  descriptionClassName?: string;
  image: string;
  imageClassName?: string;
  imageContainerClassName?: string;
  className: string;
};

const Step = (props: IStepProps) => {
  return (
    <div
      data-aos="fade-up"
      className={`flex flex-col gap-12 mt-10 md:flex-row ${props.className}`}
    >
      <div className="flex basis-1/3 flex-col justify-center">
        <h3
          className={`font-bold text-2xl  2xl:text-4xl xl:text-3xl ${props.nameClassName}`}
        >
          {props.name}
        </h3>
        <h4 className="text-2xl font-medium text-[#082446]">{props.title}</h4>
        <p className="mt-4 font-extralight text-[#5E7187]">
          {props.description}
        </p>
      </div>
      <div className="basis-2/3 justify-items-center ">
        <div
          className={` flex rounded-2xl border-2 border-solid place-content-center items-center 
          border-gray-100 p-2 
          shadow-lg md:rounded-3xl min-h-[250px] lg:min-h-[500px] ${props.imageContainerClassName}`}
        >
          <img
            className={`w-fit h-fit ${props.imageClassName}`}
            src={props.image}
            alt={props.name}
          />
        </div>
      </div>
    </div>
  );
};

export default Step;
