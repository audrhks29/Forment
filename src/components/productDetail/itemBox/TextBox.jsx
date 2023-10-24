import React, { memo, useEffect } from 'react';
import useProductDetailStore from '../../../store/productDetail-store';

const TextBox = memo(() => {
  const { paramsData, paramsOptionData, paramsSetData, selectedOption } = useProductDetailStore(state => state)
  const { settingSetBoxForSelectedOptions } = useProductDetailStore(state => state)

  useEffect(() => {
    settingSetBoxForSelectedOptions()
  }, [paramsSetData, paramsOptionData, selectedOption]);
  return (
    <>
      <p><strong>{paramsData.productName.toLocaleString()}</strong></p>
      <p className='product_price'>
        <span className='style-line-through'>
          {paramsData.price}
          원</span>
        <strong> {paramsData.salePrice.toLocaleString()}원</strong>
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
              <td>{paramsData.fragranceTop}</td>
            </tr>
            <tr>
              <th>MID</th>
              <td>{paramsData.fragranceMid}</td>
            </tr>
            <tr>
              <th>BASE</th>
              <td>{paramsData.fragranceBase}</td>
            </tr>
          </tbody>
        </table>
      </p>
      <p className='fragranceInfo'>{paramsData.fragranceInfo}</p>
      <ul className='desc'>
        {
          paramsData.desc.split('\n').map((item, index) => {
            return <li key={index} >{item}</li>
          })
        }
      </ul>
    </>
  );
});

export default TextBox;