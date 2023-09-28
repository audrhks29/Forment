import React, { memo } from 'react';
import { TestItemContainer } from '../styled/TestStyles';

const ContentTest = memo(() => {
    return (
        <TestItemContainer>
            <div className='inner'>
                <div><h3>공휴일 휴무 안내</h3>안녕하세요, 포맨트 입니다.<br /><br />추석 연휴 배송 및 휴무일 공지입니다.<br />휴일 전/후로 물류량이 급증하여 출고 및 배송이 지연될 수 있는 점 양해 부탁드립니다.<br /><br />🚚 2023-09-26(화) 15:00 이전 결제 완료시 : 당일 순차출고 <span>(* 연휴 전 배송이 진행되지 않을 수 있음)</span><br />🚚 2023-09-26(화) 15:00 이후 결제 완료시 : 10/4(수) 부터 순차출고<br /><br />고객센터 또한 운영되지 않사오니<br />문의사항은 Q&A 게시판을 통해 문의주시면<br />확인하는대로 최대한 신속하고 친절한 답변 드리도록 하겠습니다.<br /><br />감사합니다.</div>
            </div>
        </TestItemContainer >
    );
});

export default ContentTest;