import React, { memo } from 'react';

const CampaignItem = memo(({ item }) => {
  const { imageUrl, descTitle, desc1, desc2 } = item;
  return (
    <>
      <div className='imgBox'>
        <img src={imageUrl} alt="" />
      </div>
      <div className='txtWrap'>
        <div className='t1'>{descTitle}</div>
        <div className='t2'>{desc1}</div>
        <div className='t3'>{desc2}</div>
      </div>
    </>
  );
});

export default CampaignItem;