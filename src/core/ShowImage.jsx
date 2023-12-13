import React from "react";

import { API_URL } from "../config";

const ShowImage = ({ item, url, className }) => {
  return (
    <div>
      <img
         loading="lazy"
        className={className}
        src={`${API_URL}/${url}/${item._id}`}
        alt={`${item.name}`}
      />
    </div>
  );
};

export default ShowImage;
