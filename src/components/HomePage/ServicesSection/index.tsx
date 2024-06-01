/* eslint-disable react/no-unescaped-entities */

import './style.scss';

function ServicesSection() {
  return (
    <section className='services'>
      <div className='services__content'>
        <div className='title'>
          <h2>Services</h2>

          <div className='subtitle'>
            Let's geek out & build something awesome.
          </div>
        </div>

        <div className='services__content-items'>
          <div className='item'>
            <div className='item-title'>How I Can Help You</div>
            <div className='item-subtitle'>
              Transforming your ideas into reality with expertise and passion.
            </div>

            <ul>
              <li>Full-stack Development</li>
              <li>Product Design</li>
              <li>Front-end Development</li>
            </ul>
          </div>

          <div className='item'>
            <div className='item-title'>Areas of Expertise</div>
            <div className='item-subtitle'>
              A Look at the Programming Languages & Frameworks Powering My Work.
            </div>

            <ul>
              <li>React/Next | NodeJs/Express/Postgres</li>
              <li>Vue/Nuxt | NodeJs/Express/Postgres</li>
              <li>Python/Django | React/Next || Vue/Nuxt</li>
            </ul>
          </div>

          <div className='item'>
            <div className='item-title'>Get Ready for</div>
            <div className='item-subtitle'>
              A development experience that bridges the gap between design and
              functionality.
            </div>

            <ul>
              <li>Pixel perfect Figma to clean and functional code</li>
              <li>Code & clarity, hand in hand</li>
              <li>Your vision, expertly coded.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
