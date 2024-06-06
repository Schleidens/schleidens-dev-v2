/* eslint-disable react/no-unescaped-entities */

import './style.scss';
import SwiperReview from './component/SwiperReview';

const TestimonialsSection = () => {
  return (
    <section className='testimonials'>
      <div className='testimonials__content'>
        <div className='title'>
          <h2>Reviews</h2>

          <div className='subtitle'>
            Beyond the Code, Reviews That Show the Impact of My Work
          </div>
        </div>

        <SwiperReview />
      </div>
    </section>
  );
};

export default TestimonialsSection;
