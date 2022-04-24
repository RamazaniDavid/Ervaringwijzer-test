import React from 'react';

type IHorzRuleTextProps = {
  text: string;
};

const HorzRuleText = (props: IHorzRuleTextProps) => {
  return (
    <div className="relative flex w-full items-center py-5">
      <div className="grow border-t border-gray-400"></div>
      <span className="text-black-400 mx-4 shrink">{props.text}</span>
      <div className="grow border-t border-gray-400"></div>
    </div>
  );
};

export default HorzRuleText;
