import Link from 'next/link';
import './style.scss';
import { FaArrowRightLong } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <div className='navbar'>
      <nav>
        <h1>A. Schleidens</h1>
        <div className='nav-list'>
          <ul>
            <li>
              <Link href='/#about'> About me.</Link>
            </li>
            <li>
              <Link href='/#services'>Services.</Link>
            </li>
            <li>
              <Link href='/#projects'>Projects.</Link>
            </li>
            <li>
              <Link href='/#testimonials'>Testimonials.</Link>
            </li>
          </ul>
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
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
