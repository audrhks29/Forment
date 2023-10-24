import React, { memo, useState } from 'react';
import useProductDetailStore from '../../store/productDetail-store';

const InfoBox = memo(() => {
  const { paramsDetailImageData } = useProductDetailStore(state => state)
  const [toggleInfo, setToggleInfo] = useState(1);

  const handleToggleInfo = (num) => {
    setToggleInfo(num)
  }

  return (
    <div className='product_infoBox'>
      <div className="btn_wrap">
        <button
          className={toggleInfo === 1 ? "on" : ""}
          onClick={() => handleToggleInfo(1)}>
          상품정보
        </button>
        <button
          className={toggleInfo === 2 ? "on" : ""}
          onClick={() => handleToggleInfo(2)}>
          구매후기
        </button>
      </div>
      {
        toggleInfo === 1 && paramsDetailImageData && Object.keys(paramsDetailImageData).map((key, index) => {
          if (paramsDetailImageData[key] !== null) {
            return (
              <img src={paramsDetailImageData[key]} alt="" key={index} loading='lazy' />
            );
          }
          return null;
        })
      }
    </div>
  );
});

export default InfoBox;