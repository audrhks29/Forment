import React, { memo } from 'react';
import useProductDetailStore from '../../../store/productDetail-store';

const SelectedSet = memo(() => {
  const { setBoxForSelectedOptions } = useProductDetailStore(state => state)
  const { handleAddSelectItem } = useProductDetailStore(state => state)

  return (
    <div className='select_set'>
      <label>세트선택</label>
      <select
        name=""
        id=""
        onChange={(e) => handleAddSelectItem(e)}
      >
        <option value="*">- [필수] 옵션을 선택해 주세요 -</option>
        <option value="*">-------------------------------------</option>
        {
          setBoxForSelectedOptions.map(item => {
            return (
              <option
                key={item.id}
                value={item.id}
              >
                {item.productOption}
              </option>
            )
          })
        }
      </select>
    </div>
  );
});

export default SelectedSet;