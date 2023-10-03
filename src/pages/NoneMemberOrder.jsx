import React, { memo } from 'react';
import { NoneMemberOrderContainer } from '../styled/NoneMeberOrderStyles';

const NoneMemberOrder = memo(() => {
  return (
    <NoneMemberOrderContainer>
      <div className='inner'>
        비회원주문페이지입니다.
      </div>
    </NoneMemberOrderContainer>
  );
});

export default NoneMemberOrder;