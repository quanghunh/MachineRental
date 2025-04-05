import React from "react";

const Helmet = (props) => {
  // Đã đổi "Rent Car Service" thành "Rent Machine Service"
  document.title = "Rent Machine Service - " + props.title;
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;