import React, { memo } from 'react';
import useProductDetailStore from '../../../store/productDetail-store';

const SelectedOption = memo(() => {
  const { paramsOptionData, selectedOption } = useProductDetailStore(state => state)
  const { settingSelectedOption } = useProductDetailStore(state => state)

  return (
    <div className='select_option'>
      <label>옵션선택</label>
      <select
        name=""
        id=""
        onChange={settingSelectedOption}
        value={selectedOption}
      >
        <option value="*">- [필수] 옵션을 선택해 주세요 -</option>
        <option value="*">-------------------------------------</option>
        {
          Object.keys(paramsOptionData).map((key, index) => {
            if (key !== "id" && key !== "productCode" && key !== "productName" && paramsOptionData[key]) {
              return (
                <option key={index} value={paramsOptionData[key]}>
                  {paramsOptionData[key]}
                </option>
              );
            }
            return null;
          })
        }
      </select>
    </div>
  );
});

export default SelectedOption;