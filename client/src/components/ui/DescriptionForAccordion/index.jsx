import React from "react";

const DescriptionForAccordion = (props) => {
  return (
    <div>
      <p className="mb-4 uppercase">{props.detailsOne}</p>
      <p className="mb-4 uppercase">{props.detailsTwo}</p>
      <p className="mb-4 uppercase">{props.detailsThree}</p>
      <p className="mb-4 uppercase">Product ID:{props.productId}</p>
    </div>
  );
};

export default DescriptionForAccordion;
