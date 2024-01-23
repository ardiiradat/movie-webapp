// SkeletonLoader.js
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonLoader = () => {
  return (
    <div>
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Skeleton height={350} width={250} />
            <Skeleton height={30} />
        </SkeletonTheme>
    </div>
  );
};

export default SkeletonLoader;
