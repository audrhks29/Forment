import React, { memo } from 'react';

import { BrandSkeletonContainer } from '../../styled/SkeletonStyles';

const BrandSkeleton = memo(() => {
  const previewArr = Array.from(Array(6), (_, index) => ({ id: index + 1 }));
  console.log(previewArr);
  return (
    <BrandSkeletonContainer>
      {
        previewArr.map((item) => {
          return (
            <li key={item.id}>
              <div className='imgBox'></div>
              <h4></h4>
              <span></span>
            </li>
          )
        })
      }
    </BrandSkeletonContainer>
  );
});

export default BrandSkeleton;