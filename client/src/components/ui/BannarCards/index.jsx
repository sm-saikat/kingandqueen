import React from "react";
import { Link } from "@chakra-ui/react";

const BannerCards = (props) => {
  return (
    <div className="flex">
      {/* Left Banner Card */}
      <div className="flex flex-col justify-center w-[50%] h-screen">
        <Link href={props.hrefLeft} className="h-full">
          <img
            src={props.srcLeft}
            alt={props.altLeft}
            className="w-full h-full object-cover"
            srcSet={props.altLeft}
          />
        </Link>
        <Link
          href={props.hrefLeft}
          className="text-center p-2 font-semibold underline m-auto cursor-pointer hover:no-underline hover:text-gray-500"
        >
          {props.leftTitle}
        </Link>
      </div>

      {/* Right Banner Card */}
      <div className="flex flex-col justify-center w-[50%] h-screen">
        <Link href={props.hrefRight} className="h-full">
          <img
            className="w-full h-full object-cover"
            src={props.srcRight}
            alt={props.altRight}
            srcSet={props.altRight}
          />
        </Link>
        <Link
          href={props.hrefRight}
          className="text-center p-2 font-semibold underline m-auto cursor-pointer hover:no-underline hover:text-gray-500"
        >
          {props.rightTitle}
        </Link>
      </div>
    </div>
  );
};

export default BannerCards;
