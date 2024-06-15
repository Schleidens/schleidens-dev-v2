/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image';

import './style.scss';
import { client, urlFor } from '@/services/sanityClient';

interface Services {
  title: string;
  subtitle: string;
  description: string;
  items: string[];
  icon: any;
}

const getData = async () => {
  const query = `
*[_type == 'services'] | order(_createdAt asc) {
  title,
    subtitle,
    description,
    items,
    icon,
}
  `;

  const data = await client.fetch(query, {}, { next: { revalidate: 10 } });

  return data;
};

const ServicesSection = async () => {
  const services: Services[] = await getData();

  return (
    <section
      className='services'
      id='services'
    >
      <div className='services__content'>
        <div className='title'>
          <h2>Services</h2>

          <div className='subtitle'>
            Let's geek out & build something awesome.
          </div>
        </div>

        <div className='services__content-items'>
          {services.map((item, index) => {
            return (
              <div
                key={index}
                className='item'
              >
                <div className='item-icon'>
                  <Image
                    src={urlFor(item.icon).url()}
                    alt='How I Can Help You'
                    width={50}
                    height={50}
                  />
                </div>
                <div className='item-title'>{item.title}</div>
                <div className='item-subtitle'>{item.subtitle}</div>

                <ul>
                  {item.items.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
