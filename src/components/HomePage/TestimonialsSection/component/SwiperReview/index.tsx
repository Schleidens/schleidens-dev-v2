/* eslint-disable react/no-unescaped-entities */

'use client';

import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

const SwiperReview = ({ review }: any) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination, Navigation]}
      className='swiper__box'
    >
      {review.map((review: any, index: any) => {
        return (
          <SwiperSlide key={index}>
            <div className='review'>
              <div className='review-details'>
                <Image
                  src='/'
                  alt='ok'
                  width={130}
                  height={130}
                  className='profile_pic'
                />
                <p className='review-details-text'>
                  <span>
                    <RiDoubleQuotesL />
                  </span>{' '}
                  {review.description}{' '}
                  <span>
                    <RiDoubleQuotesR />
                  </span>
                </p>
                <h3 className='review-details-name'>{review.name}</h3>
                <div className='review-details-position'>{review.at}</div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperReview;
