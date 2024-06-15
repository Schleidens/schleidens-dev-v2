/* eslint-disable react/no-unescaped-entities */

import './style.scss';
import SwiperReview from './component/SwiperReview';
import { client } from '@/services/sanityClient';

export const revalidate = 30;

interface Review {
  name: string;
  at: string;
  description: string;
  pfp: any;
}

const getData = async () => {
  const query = `
    *[_type == 'review'] {
  name,
    at,
    description,
    pfp
}
  `;

  const data = await client.fetch(query, {}, { next: { revalidate: 10 } });

  return data;
};

const TestimonialsSection = async () => {
  const review: Review = await getData();

  return (
    <section
      className='testimonials'
      id='testimonials'
    >
      <div className='testimonials__content'>
        <div className='title'>
          <h2>Reviews</h2>

          <div className='subtitle'>
            Beyond the Code, Reviews That Show the Impact of My Work
          </div>
        </div>

        <SwiperReview review={review} />
      </div>
    </section>
  );
};

export default TestimonialsSection;
