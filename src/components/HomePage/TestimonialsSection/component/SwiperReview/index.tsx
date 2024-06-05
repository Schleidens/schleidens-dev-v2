/* eslint-disable react/no-unescaped-entities */

'use client';

import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

const SwiperReview = ({ review }: any) => {
  console.log(review);

  return (
    <section className='testimonials'>
      <div className='testimonials__content'>
        <div className='title'>
          <h2>Reviews</h2>

          <div className='subtitle'>
            Beyond the Code, Reviews That Show the Impact of My Work
          </div>
        </div>

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination, Navigation]}
          className='swiper__box'
        >
          {[...Array(7)].map((_, index: any) => {
            // const review = entry.fields;
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
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Distinctio mollitia ipsa impedit cum eum unde sit
                      obcaecati, sequi culpa qui aperiam cupiditate ratione
                      maiores repellat odio non molestiae et nobis?{' '}
                      <span>
                        <RiDoubleQuotesR />
                      </span>
                    </p>
                    <h3 className='review-details-name'>John Doe</h3>
                    <div className='review-details-position'>CEO Nothing</div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default SwiperReview;
