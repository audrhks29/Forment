import React, { memo } from 'react';
import { MembershipItemContainer } from '../styled/MembershipStyles';

const Membership = memo(() => {
    return (
        <MembershipItemContainer>
            <div className='inner'>
                <span>멤버십 페이지입니다.</span>
            </div>
        </MembershipItemContainer>
    );
});

export default Membership;