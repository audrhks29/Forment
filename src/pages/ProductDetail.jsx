import React, { memo, useEffect, useLayoutEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import useProductStore from './../store/product-store';
import useProductDetailStore from './../store/productDetail-store';

import { ProductDetailContainer } from '../styled/ProductStyles';

const ProductDetail = memo(() => {
  const { productID } = useParams();
  const { productData } = useProductStore(state => state)
  const { productSelectedData, productOptionData } = useProductDetailStore(state => state)
  const { fetchData } = useProductDetailStore(state => state);
  const parseId = parseInt(productID, 10)
  const [data, setData] = useState(productData[parseId - 1]);
  const [selectBox, setSelectBox] = useState(productSelectedData[parseId - 1] || {});
  const [optionBox, setOptionBox] = useState(productOptionData || {});
  useLayoutEffect(() => {
    fetchData()
  }, []);
  useLayoutEffect(() => {
    if (productSelectedData[parseId - 1]) {
      setSelectBox(productSelectedData[parseId - 1]);
      setOptionBox(productOptionData)
    }
  }, [productSelectedData, productOptionData, parseId]);
  console.log(selectBox);
  console.log(optionBox);
  const { productName, price, salePrice, fragranceInfo, desc, titleImage } = data
  return (
    <ProductDetailContainer>
      <div className='inner'>
        <div className='product_itemBox'>
          <div className='product_imgBox'>
            <img src={titleImage} alt="" />
          </div>
          <div className='product_descBox'>
            <p><strong>{productName}</strong></p>
            <p className='product_price'>
              <span className='style-line-through'>{price.toLocaleString()}원</span>
              <strong> {salePrice.toLocaleString()}원</strong>
            </p>
            <p className='benefits_info'>
              <table>
                <tbody>
                  <tr>
                    <th>카드혜택</th>
                    <td>무이자혜택</td>
                  </tr>
                  <tr>
                    <th>멤버십혜택</th>
                    <td>등급별혜택보기</td>
                  </tr>
                  <tr>
                    <th>배송비</th>
                    <td>
                      3,000원 (50,000원 이상 구매 시 무료)
                    </td>
                  </tr>
                  <tr>
                    <th>배송예상</th>
                    <td>오늘출발가능</td>
                  </tr>
                </tbody>
              </table>
            </p>
            <p className='fragranceNote'>
              <table>
                <tbody>
                  <tr>
                    <th>TOP</th>
                    <td>자몽 | 베르가못 | 만다린</td>
                  </tr>
                  <tr>
                    <th>MID</th>
                    <td>진저 | 네롤리</td>
                  </tr>
                  <tr>
                    <th>BASE</th>
                    <td>샌달우드 | 패출리 | 코튼 머스크</td>
                  </tr>
                </tbody>
              </table>
            </p>
            <p className='fragranceInfo'>{fragranceInfo}</p>
            <dt className='desc'>
              {
                desc.split('\n').map((item, index) => {
                  return <dd key={index} >{item}</dd>
                })
              }
            </dt>
            <select>
              <option value="*">- [필수] 옵션을 선택해 주세요 -</option>
              <option value="*">-------------------------------------</option>
              {Object.keys(selectBox).map((key, index) => {
                if (key !== "id" && key !== "productCode" && key !== "productName" && selectBox[key]) {
                  return (
                    <option key={index} value={key}>
                      {selectBox[key]}
                    </option>
                  );
                }
                return null; // id와 productCode 키를 무시합니다.
              })}
            </select>
          </div>
        </div>
      </div>
    </ProductDetailContainer >
  );
});

export default ProductDetail;