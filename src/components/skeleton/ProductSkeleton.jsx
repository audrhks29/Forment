import React, { memo } from 'react';

import { ProductSkeletonContainer } from './../../styled/SkeletonStyles';

const ProductSkeleton = memo(() => {
  const previewArr = Array.from(Array(20), (_, index) => ({ id: index + 1 }));
  return (
    <ProductSkeletonContainer>
      {
        previewArr.map((item) => {
          return (
            <div className='itemBox' key={item.id}>
              <div></div>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <div className='reviewContainer'></div>
            </div>
          )
        })
      }
    </ProductSkeletonContainer>
  );
});

export default ProductSkeleton;