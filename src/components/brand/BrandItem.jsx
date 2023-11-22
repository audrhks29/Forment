import React, { memo } from 'react';

import useBrandStore from '../../store/brand-store';

import { BrandItemContainer } from '../../styled/BrandStyles';

const BrandItem = memo(() => {
  const { brandData } = useBrandStore(state => state);
  return (
    <BrandItemContainer>
      {
        brandData.map((item) => {
          const { id, title, magazine, year, month, imageUrl, link } = item
          return (
            <li key={id}>
              <a href={link}>
                <div className='imgBox'>
                  <img src={imageUrl} alt="" />
                </div>
                <h4>{title}</h4>
                <span>{magazine}.{month}.{year}</span>
              </a>
            </li>
          )
        })
      }
    </BrandItemContainer>
  );
});

export default BrandItem;