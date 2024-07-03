/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import './style.scss';
import { FaArrowRightLong } from 'react-icons/fa6';
import schleidens_hero_img from '../../../../public/Schleidens.svg';

const HeroSection = () => {
  return (
    <header
      className='hero'
      id='about'
    >
      <div className='hero__content'>
        <div className='left'>
          <div className='title'>
            Hey! <span>I'm Alectine</span> <br />{' '}
            <span className='schleidens'>Schleidens</span>
          </div>
          <div className='description'>
            <p>
              I am a software developer specializing in building user-friendly
              web-apps. Problem solver, calm under pressure, quick learner with
              the goal of customer satisfaction.
            </p>
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
              href='https://drive.google.com/file/d/1BEmsDX-fRPlITlgXVqYc6j6HO5HX8ini/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
              download
            >
              Download my CV
            </a>
          </div>
        </div>
        <div className='right image'>
          <Image
            src='/Schleidens.svg'
            alt='Alectine Schleidens'
            width={580}
            height={668}
          />
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
