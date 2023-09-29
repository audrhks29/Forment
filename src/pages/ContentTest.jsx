import React, { memo } from 'react';
import { TestItemContainer } from '../styled/TestStyles';

const ContentTest = memo(() => {
    return (
        <TestItemContainer>
            <div className='inner'>
                <div>회원가입을 하지 않으셔도 주문이 가능합니다.<br /><br />아래에서 안내드릴게요<br /><img src="../public/images/faq/formentFaq13_01.png" alt="" /><br />구매하시려는 상품을 [바로 구매] 버튼을 클릭해주세요!<br />(구매하시는 상품이 많을 경우 장바구니에 담으시고, 장바구니로 이동하시어 한 번에 결제 가능합니다!)<br /><img src="../public/images/faq/formentFaq13_02.png" alt="" /><br />로그인 하단에 표시되는 [비회원구매] 버튼을 클릭해주세요!<br /><img src="../public/images/faq/formentFaq13_03.png" alt="" /><br />주문자 정보, 배송 정보를 작성해주세요!<br />주문서를 작성해주실 때 [주문조회 비밀번호] 를 작성하시는 칸이 있답니다.<br />해당 비밀번호를 꼭 기억해주세요 ! (정보보안차 해당 비밀번호는 고객센터에서도 안내드리기가 어렵답니다 ㅠㅠ)<br /><br /><img src="../public/images/faq/formentFaq13_04.jpg" alt="" /><br />결제가 완료되면,이렇게 카카오톡 알림톡 (혹은 SMS)를 받아보실 수 있답니다!<br /><br />하지만!!!<br /><br /><img src="../public/images/faq/formentFaq13_05.jpeg" alt="" /><br />간편 로그인 회원가입을 통해 회원 가입을 해주신다면,<br />가입 절차가 간편하면서 쿠폰 및 적립금, 이벤트, 구매금액대별 사은품도 보내드리고 있사오니 포맨트에 회원이 되어주세요 (✿◠‿◠✿) </div>
            </div>
        </TestItemContainer >
    );
});

export default ContentTest;