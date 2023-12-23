import React from "react";
import { Link } from "@chakra-ui/react";

const ProductCard = ({ src, link, title, hoverSrc }) => {
  return (
    <Link
      href={link}
      className="text-center p-2 font-semibold m-auto cursor-pointer relative inline-block "
    >
      {/* Original image */}
      <img
        src={src}
        alt={title}
        className="m-auto mt-0 transition duration-300 ease-in-out transform hover:opacity-0 h-[800px] w-[600px] object-cover"
      />

      {/* Hover image */}
      <img
        src={hoverSrc}
        alt={title}
        className="m-auto mt-[8px] opacity-0 transition duration-300 ease-in-out transform hover:opacity-100 absolute inset-0 h-[800px] w-[600px] object-cover"
      />

      {/* Title */}
      <p className="text-center p-2 font-semibold m-auto cursor-pointer">
        {title}
      </p>
    </Link>
  );
};

export default ProductCard;
