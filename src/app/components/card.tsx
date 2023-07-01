import React from "react";
import Image from "next/image";
type card = {
  img: string;
  title: string;
  acr: string;
  number: string;
  number2: string;
  text: string;
  text2: string;
};

export const Card = (props: card) => {
  return (
    <main className="bg-black border border-white rounded-3xl p-7 flex flex-col gap-36 ">
      <div className="flex items-center gap-4">
        <Image alt="coin" src={props.img} width="30" height="30" />
        <div>
          <p>{props.title}</p>
          <p className="text-slate-500 text-sm">{props.acr}</p>
        </div>
      </div>
      <div>
        <p className="py-6 pr-36">FLEXIBLE PRODUCTS</p>
        <p className="text-4xl">
          {props.number}
          <span className=" text-xs">%</span>
        </p>
        <p className="text-4xl py-2">
          {props.number2}
          <span className=" text-xs">%</span>
        </p>
        <p className="max-w-xs text-slate-500 text-xs ">{props.text}</p>
        <p className="max-w-xs text-slate-500 text-xs ">{props.text2} </p>
      </div>
    </main>
  );
};
