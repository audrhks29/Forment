import React, { memo, useEffect, useLayoutEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import useProductStore from './../store/product-store';
import useProductDetailStore from './../store/productDetail-store';

import { ProductDetailContainer } from '../styled/ProductStyles';

import ItemBox from '../components/productDetail/ItemBox';
import InfoBox from '../components/productDetail/InfoBox';

const ProductDetail = memo(() => {
  const { productID } = useParams();
  const { productData } = useProductStore(state => state)
  const { fetchData } = useProductStore(state => state);
  const { paramsData, paramsOptionData, paramsSetData, selectedOption } = useProductDetailStore(state => state)
  const { settingParamsData, settingParamsOptionData, settingParamsSetData, settingParamsDetailImageData, initialSelectedItems, settingSetBoxForSelectedOptions } = useProductDetailStore(state => state)
  const { fetchDetailData } = useProductDetailStore(state => state);
  const [parseId, setParseID] = useState(parseInt(productID, 10));
  localStorage.setItem('parseId', parseId.toString());

  useLayoutEffect(() => {
    initialSelectedItems()
    const storedParseID = localStorage.getItem('parseId');
    if (storedParseID) {
      setParseID(storedParseID)
    }
    if (!productData) {
      fetchData()
    }
    fetchData()
    fetchDetailData().then(() => {
      settingParamsOptionData(parseId);
      settingParamsDetailImageData(parseId);
    });
  }, [parseId])

  useEffect(() => {
    settingParamsData(productData, parseId)
  }, [productData])

  useLayoutEffect(() => {
    settingParamsSetData()
  }, [paramsOptionData])

  useLayoutEffect(() => {
    settingSetBoxForSelectedOptions()
  }, [paramsSetData, paramsOptionData, selectedOption]);

  return (
    <ProductDetailContainer>
      <div className='inner'>
        {paramsData && parseId && < ItemBox />}
        <InfoBox />
      </div>
    </ProductDetailContainer >
  );
});

export default ProductDetail;