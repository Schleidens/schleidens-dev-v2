/* eslint-disable react/no-unescaped-entities */

import { GetStaticProps, NextPage } from 'next';

import { Entry } from 'contentful';

import './style.scss';
import client from '@/services/contentfulClient';
import SwiperReview from './component/SwiperReview';

interface HomePageProps {
  entries: Entry<any>[];
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const contentType = 'reviews'; // Replace with your content type ID

  try {
    const entries = await client.getEntries({
      content_type: contentType,
    });

    console.log('Fetched Entries:', entries.items);

    return {
      props: {
        entries: entries.items || [],
      },
      revalidate: 60, // Revalidate at most every 60 seconds
    };
  } catch (error) {
    console.error('Error fetching entries:', error);
    return {
      props: {
        entries: [],
      },
      revalidate: 60,
    };
  }
};

const TestimonialsSection: NextPage<HomePageProps> = ({ entries }) => {
  console.log(entries);

  // if (!entries || entries.length === 0) {
  //   return <div>No entries found.</div>;
  // }

  return (
    <section className='testimonials'>
      <div className='testimonials__content'>
        <div className='title'>
          <h2>Reviews</h2>

          <div className='subtitle'>
            Beyond the Code, Reviews That Show the Impact of My Work
          </div>
        </div>

        <SwiperReview review={entries} />
      </div>
    </section>
  );
};

export default TestimonialsSection;
