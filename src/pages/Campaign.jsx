import React, { memo, useLayoutEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import './styles.css';
import { CampaignItemContainer } from '../styled/CampaignStyles';
import useCampaignStore from '../store/campaign-store';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Campaign = memo(() => {
    const { campaignData } = useCampaignStore(state => state);
    const { fetchData } = useCampaignStore(state => state);
    useLayoutEffect(() => {
        fetchData()
    }, []);
    return (
        <CampaignItemContainer>
            <div className='inner'>
                <h3>CAMPAIGN</h3>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                >
                    {
                        campaignData.map(item => {
                            const { id, imageUrl, descTitle, desc1, desc2, link } = item;
                            return (
                                <SwiperSlide key={id}>
                                    <div className='imgBox'>
                                        <img src={imageUrl} alt="" />
                                    </div>
                                    <div className='txtWrap'>
                                        <div className='t1'>{descTitle}</div>
                                        <div className='t2'>{desc1}</div>
                                        <div className='t3'>{desc2}</div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
            </div>

        </CampaignItemContainer>
    );
});

export default Campaign;