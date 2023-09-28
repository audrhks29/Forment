import React, { memo } from 'react';
import { QnaItemContainer } from '../styled/QnaStyles';

const Qna = memo(() => {
    return (
        <QnaItemContainer>
            <div className='inner'>
                Q&A 페이지입니다.
            </div>
        </QnaItemContainer>
    );
});

export default Qna;