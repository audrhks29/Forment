import React, { memo, useEffect } from 'react';

import { BrandContainer } from '../styled/BrandStyles';

import useBrandStore from '../store/brand-store';

import BrandItem from '../components/brand/BrandItem';
import BrandSkeleton from '../components/skeleton/BrandSkeleton';

const Brand = memo(() => {
  const { isLoading } = useBrandStore(state => state);
  const { fetchData } = useBrandStore(state => state);

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <BrandContainer>
      <div className="inner">
        <h3>BRAND</h3>
        {!isLoading ? <BrandItem /> : <BrandSkeleton />}
      </div>
    </BrandContainer>
  );
});

export default Brand;