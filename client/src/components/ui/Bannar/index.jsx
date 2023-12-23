import React from "react";
import { Link } from "@chakra-ui/react";
const Bannar = (props) => {
  return (
    <div className="flex">
      <div className="flex flex-col justify-center w-full ">
        <Link href={props.link} className="h-full w-full">
          <img
            src={props.img}
            alt={props.alt}
            className="w-full h-full object-cover"
          />
        </Link>

        <div className="flex">
          <Link
            href={props.link}
            className="text-center p-2 font-semibold underline m-auto cursor-pointer hover:no-underline hover:text-gray-500"
          >
            {props.leftButton}
          </Link>
          <Link
            href={props.link}
            className="text-center p-2 font-semibold underline m-auto cursor-pointer hover:no-underline hover:text-gray-500"
          >
            {props.rightButton}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
