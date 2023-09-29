import React, { memo } from 'react';
import { MembershipItemContainer } from '../styled/MembershipStyles';

const Membership = memo(() => {
    return (
        <MembershipItemContainer>
            <div className='inner'>
                <div className='imgBox'>
                    <img src="../public/images/membership/membership_01.png" alt="" />
                </div>
            </div>
        </MembershipItemContainer>
    );
});

export default Membership;