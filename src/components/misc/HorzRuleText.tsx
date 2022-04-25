import React from 'react';

type IHorzRuleTextProps = {
  text: string;
};

const HorzRuleText = (props: IHorzRuleTextProps) => {
  return (
    <div className="relative flex w-full items-center py-5">
      <div className="grow border-t border-[#082446]"></div>
      <span className="mx-4 shrink text-[15px]  text-[#082446]">
        {props.text}
      </span>
      <div className="grow border-t border-[#082446]"></div>
    </div>
  );
};

export default HorzRuleText;
