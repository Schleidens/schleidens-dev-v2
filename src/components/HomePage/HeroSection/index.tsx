import Image from 'next/image';
import './style.scss';
import { FaArrowRightLong } from 'react-icons/fa6';

const HeroSection = () => {
  return (
    <header
      className='hero'
      id='about'
    >
      <div className='hero__content'>
        <div className='left'>
          <div className='title'>
            Hey! <span>{"I'm"} Alectine</span> <br />{' '}
            <span className='schleidens'>Schleidens</span>
          </div>
          <div className='description'>
            <p>Creative Fullstack Software Developer & Problem Solver</p>
          </div>

          <div className='call_to_action_btn'>
            <a
              className='book__call'
              href='https://calendly.com/alectineschleidens2016/chat'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>Book a call</span>
              <span className='icon'>
                <FaArrowRightLong />
              </span>
            </a>
            <a
              className='download_cv'
              href='http://'
              target='_blank'
              rel='noopener noreferrer'
            >
              Download my CV
            </a>
          </div>
        </div>
        <div className='right image'>
          {/* <Image
            src='/header_img.svg'
            alt='Alectine Schleidens'
            width={580}
            height={668}
          /> */}
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
