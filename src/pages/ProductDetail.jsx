import React, { memo, useLayoutEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import useProductStore from './../store/product-store';
import useProductDetailStore from './../store/productDetail-store';

import { ProductDetailContainer } from '../styled/ProductStyles';

import ItemBox from '../components/productDetail/ItemBox';
import InfoBox from '../components/productDetail/InfoBox';

const ProductDetail = memo(() => {
  const { productID } = useParams();
  const parseId = parseInt(productID, 10)
  const { productData } = useProductStore(state => state)
  const { paramsOptionData, paramsSetData, selectedOption } = useProductDetailStore(state => state)
  const { settingParamsData, settingParamsOptionData, settingParamsSetData, settingParamsDetailImageData, initialSelectedItems, settingSetBoxForSelectedOptions } = useProductDetailStore(state => state)
  const { fetchData } = useProductDetailStore(state => state);

  useLayoutEffect(() => {
    initialSelectedItems()
  }, [parseId])

  useLayoutEffect(() => {
    fetchData().then(() => {
      settingParamsData(productData, parseId)
      settingParamsOptionData(parseId)
      settingParamsDetailImageData(parseId)
    })
  }, [parseId]);
  const { paramsData } = useProductDetailStore(state => state)
  console.log(paramsData);
  useLayoutEffect(() => {
    settingParamsSetData()
  }, [paramsOptionData])

  useLayoutEffect(() => {
    settingSetBoxForSelectedOptions()
  }, [paramsSetData, paramsOptionData, selectedOption]);

  return (
    <ProductDetailContainer>
      <div className='inner'>
        {/* <ItemBox />
        <InfoBox /> */}
      </div>
    </ProductDetailContainer >
  );
});

export default ProductDetail;