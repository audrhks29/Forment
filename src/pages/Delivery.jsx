import React, { memo, useLayoutEffect } from 'react';
import { DeliveryContainer, LeftContent, RightContent, TxtWrap } from '../styled/DeliveryStyles';
import DeliveryItems from '../components/DeliveryItems';
import useDeliveryStore from '../store/delivery-store';

const Delivery = memo(() => {
    const { fetchData } = useDeliveryStore(state => state);

    useLayoutEffect(() => {
        fetchData()
    }, []);

    return (
        <DeliveryContainer>
            <div className="inner">
                <LeftContent>
                    <img src="/images/delivery/regular23_01.jpg" art="" />
                    <img src="/images/delivery/regular23_02.jpg" art="" />
                    <TxtWrap>
                        <div className='e1'>무료 정기배송</div>
                        <div className='e2'>
                            포맨트의 향기와 라이프 스타일 제품을<br />
                            정기배송을 통해 더욱 쉽고 편리하게<br />
                            이용하는 서비스입니다.
                        </div>
                        <div className='e3'>
                            Subscribtion
                        </div>
                    </TxtWrap>
                </LeftContent>
                <RightContent>
                    <DeliveryItems />
                </RightContent>
            </div>
        </DeliveryContainer>
    );
});

export default Delivery;