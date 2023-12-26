import React, { useState } from "react";
import SimpleSlider from "../SimpleSlider";
import { NavLink } from "react-router-dom";
import {Star, StarFill} from "react-bootstrap-icons"

const ProductCard = ({ name, link, gallery, price, disscount, offerPrice, compact = false, className }) => {
   const [hover, setHover] = useState(false);
   const [isWishlist, setIsWishlist] = useState(false);

  const hoverHandler = () => {
    setHover(!hover);
  };

  const wishlistClickHandler = ()=>{
    setIsWishlist(!isWishlist);
  }

  return (
    <div className={`productCard relative flex flex-col ${className}`}>
      <NavLink to={link}>
        <div className="cardTop" onMouseEnter={hoverHandler} onMouseLeave={hoverHandler}>
          <div className={`layerOne ${hover ? 'hidden' : ''}`}>
            <img className="w-full" src={gallery[0]} alt={name} />
          </div>
          <div className={`layerTwo w-full h-full ${hover ? '' : 'hidden'}`}>
            {
              compact ? (
                <img className="w-full" src={gallery[1]} alt={name} />
              ) : (
                <SimpleSlider>
              <img src={gallery[0]} alt={name} />
              <img src={gallery[1]} alt={name} />
            </SimpleSlider>
              )
            }
          </div>
        </div>
        <div className="cardBottom text-center py-2">
          <h1 className="text-sm font-bold">{name}</h1>
          <div className="price text-sm font-bold">
            <div className="flex gap-1.5 justify-center my-2">
              <span className={`${disscount ? 'line-through' : ''}`}>${price}</span>
              {disscount ? (<span>-{disscount}</span>) : ''}
            </div>
            {disscount ? (<span className="text-red-500">${offerPrice}</span>) : ''}
          </div>
        </div>
      </NavLink>

      <span className="absolute text-lg top-2 right-2 p-2 cursor-pointer hover:text-primary" onClick={wishlistClickHandler}>
        {isWishlist ? <StarFill className="text-primary" /> : <Star />}
      </span>
    </div>
  )
};

export default ProductCard;
