/* eslint-disable react/no-unescaped-entities */

'use client';

import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import { urlFor } from '@/services/sanityClient';

const SwiperReview = ({ review }: any) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      // autoplay={{
      //   delay: 10500,
      //   disableOnInteraction: false,
      // }}
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
                  src={
                    review.pfp
                      ? urlFor(review.pfp).url()
                      : `https://ui-avatars.com/api/?name=${review.name
                          .split(' ')
                          .join(
                            '+'
                          )}&background=583FBC&color=fff&size=130&font-size=0.5`
                  }
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
