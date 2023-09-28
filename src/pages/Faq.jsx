import React, { memo } from 'react';
import { FaqItemContainer } from '../styled/FaqStyles';

const Faq = memo(() => {
    return (
        <FaqItemContainer>
            <div className='inner'>
                자주묻는질문 페이지입니다.
            </div>
        </FaqItemContainer>
    );
});

export default Faq;