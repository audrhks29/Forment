import React, { memo } from 'react';
import { CampaignItemContainer } from '../styled/CampaignStyles';

const Campaign = memo(() => {
    return (
        <CampaignItemContainer>
            <div className='inner'>
                캠페인 페이지입니다.
            </div>
        </CampaignItemContainer>
    );
});

export default Campaign;