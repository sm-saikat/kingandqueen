import React from "react";

const DescriptionForAccordion = (props) => {
  return (
    <div>
      <p className="mb-4">{props.detailsOne}</p>
      <p className="mb-4">{props.detailsTwo}</p>
      <p className="mb-4">{props.detailsThree}</p>
      <p className="mb-4">Product ID:{props.productId}</p>
    </div>
  );
};

export default DescriptionForAccordion;
