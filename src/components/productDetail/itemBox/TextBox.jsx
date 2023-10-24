import React, { memo, useEffect } from 'react';
import useProductDetailStore from '../../../store/productDetail-store';

const TextBox = memo(() => {
  const { paramsData, paramsOptionData, paramsSetData, selectedOption } = useProductDetailStore(state => state)
  const { settingSetBoxForSelectedOptions } = useProductDetailStore(state => state)
  const benefitsTextData = [
    { id: 1, th: "카드혜택", td: "무이자혜택" },
    { id: 2, th: "멤버십혜택", td: "등급별혜택보기" },
    { id: 3, th: "배송비", td: "3,000원 (50,000원 이상 구매 시 무료)" },
    { id: 4, th: "배송예상", td: "오늘출발가능" }
  ]
  useEffect(() => {
    settingSetBoxForSelectedOptions()
  }, [paramsSetData, paramsOptionData, selectedOption]);

  return (
    <>
      <p><strong>{paramsData.productName}</strong></p>
      {
        paramsData.price &&
        <p className='product_price'>
          <span className='style-line-through'>
            {paramsData.price.toLocaleString()}
            원</span>
          <strong> {paramsData.salePrice.toLocaleString()}원</strong>
        </p>
      }
      <p className='benefits_info'>
        <table>
          <tbody>
            {
              benefitsTextData.map(item => {
                const { id, th, td } = item;
                return (
                  <tr key={id}>
                    <th>{th}</th>
                    <td>{td}</td>
                  </tr>
                )
              })
            }
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
      {
        paramsData.desc &&
        <ul className='desc'>
          {
            paramsData.desc.split('\n').map((item, index) => {
              return <li key={index} >{item}</li>
            })
          }
        </ul>
      }
    </>
  );
});

export default TextBox;