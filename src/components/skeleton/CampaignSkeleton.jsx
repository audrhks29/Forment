import React, { memo } from 'react';

const CampaignSkeleton = memo(() => {
  return (
    <>
      <div className='imgBox'></div>
      <div className='txtWrap'>
        <div className='t1'></div>
        <div className='t2'></div>
        <div className='t3'></div>
      </div>
    </>
  );
});

export default CampaignSkeleton;