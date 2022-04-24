import React from 'react';

type ICustomerProps = {
  name: string;
  logo: string;
  url: string;
  className: string;
  style?: string;
  hoverStyle?: string;
};

const Customer = (props: ICustomerProps) => {
  return (
    <>
      <style jsx>{`
        #${props.name.replace(/\s+/g, '-')}-Logo {
          transition: transform 0.2s ease-in-out;
          max-height: 150px;
          min-height: 75px;
          ${props.style}
        }
        #${props.name.replace(/\s+/g, '-')}-Logo:hover {
          ${props.hoverStyle}
        }
      `}</style>
      <div className="flex flex-wrap">
        <img
          src={props.logo}
          className={`w-full${props.className ? ` ${props.className}` : ''}`}
          alt={props.name}
          id={`${props.name.replace(/\s+/g, '-')}-Logo`}
          title={props.name}
        />
      </div>
    </>
  );
};

export default Customer;
