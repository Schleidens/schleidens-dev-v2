import { client, urlFor } from '@/services/sanityClient';
import './style.scss';

interface Projects {
  title: string;
  github: string | null;
  live: string | null;
  description: string;
  tags: string[];
  image: any;
}

const getData = async () => {
  const query = `
*[_type == 'project'] | order(_createdAt desc) {
  title,
    description,
    github,
    live,
    image,
    tags,
}
  `;

  const data = await client.fetch(query, {}, { next: { revalidate: 10 } });

  return data;
};

const PortfolioSection = async () => {
  const projects: Projects[] = await getData();

  return (
    <section
      className='portfolio'
      id='projects'
    >
      <div className='portfolio__content'>
        <div className='title'>
          <h2>My projects</h2>
          <div className='subtitle'>
            My software gems, Take a peek at my proudest projects.
          </div>
        </div>

        <div className='portfolio__content-items'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='item'
              style={{ backgroundImage: `url('/portfolio/bg1.svg')` }}
            >
              <div className='details'>
                <h3 className='item__title'>{project.title}</h3>
                <p className='item__description'>{project.description}</p>
                <p className='item__tags'>
                  {project.tags.map((tag, index) => {
                    return <span key={index}>{tag}</span>;
                  })}
                </p>
                <div className='item__links'>
                  {project.github && (
                    <a
                      href={project.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='item__link'
                    >
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='item__link'
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
              <div
                className='img__cover'
                style={{
                  backgroundImage: `url(${urlFor(project.image).url()})`,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
