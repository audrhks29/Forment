import React, { memo, useLayoutEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';

import { CampaignItemContainer } from '../styled/CampaignStyles';
import { CampaignSkeletonContainer } from '../styled/SkeletonStyles';

import useCampaignStore from '../store/campaign-store';

import CampaignItem from '../components/campaign/CampaignItem';
import CampaignSkeleton from '../components/skeleton/CampaignSkeleton';

const Campaign = memo(() => {
  const { campaignData, isLoading } = useCampaignStore(state => state);
  const { fetchData } = useCampaignStore(state => state);

  const previewArr = Array.from(Array(5), (_, index) => ({ id: index + 1 }));

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
            !isLoading && campaignData.map(item => {
              return (
                <SwiperSlide key={item.id} >
                  <CampaignItem item={item} />
                </SwiperSlide>
              )
            })
          }
          {
            isLoading && previewArr.map(item => {
              return (
                <SwiperSlide key={item.id} >
                  <CampaignSkeletonContainer>
                    <CampaignSkeleton />
                  </CampaignSkeletonContainer>
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