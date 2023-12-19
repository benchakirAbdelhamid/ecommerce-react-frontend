import React from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <div className="card-skeleton my-4 mx-4" key={i} >
          <Skeleton width={'100%'} height={210} />
          <Skeleton  height={40} />
          <Skeleton count={3} />
          <Skeleton className="btn-skeleton" width={'60%'} height={40} />
          {/* <Skeleton circle width={40} height={40} /> */}
      </div>
    ));
};

export default CardSkeleton;
