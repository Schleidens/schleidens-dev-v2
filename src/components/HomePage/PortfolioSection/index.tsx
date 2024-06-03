import './style.scss';

const PortfolioSection = () => {
  const projects = [
    {
      title: 'Care-Wise',
      description:
        'Redesigned the website with a clean look, improving SEO, optimization and performance by 70%, which led to higher search rankings and a better user experience.',
      image: 'https://ik.imagekit.io/nv2j2amfx9/care-wise.png',
      tags: 'Next.js, React, SCSS, Bootstrap5, ReactStrap, Figma, Vercel',
      github: '',
      demo: 'https://care-wise.com/',
    },
    {
      title: 'Good Sport Golf Club',
      description:
        'Work as a as a Full Stack Developer to deliver crucial features including payment integration and robust admin account management features with client-centric communication.',
      image: 'https://ik.imagekit.io/nv2j2amfx9/gsgc.png',
      tags: 'React, Signal, SCSS, TailwindCSS, Figma, Firebase, Nodejs, Express, Postgres, TypeORM, Paypal, Twilio/sendgrid',
      github: '',
      demo: 'https://goodsportgolf.com/',
    },
    {
      title: 'We Just Chat',
      description:
        'A real-time chat application with user authentication, messaging functionality, and a user list feature.',
      image: 'https://ik.imagekit.io/nv2j2amfx9/we-just-chat.png',
      tags: 'React, Signal, SCSS, Boostrap5, Figma, Firebase, Nodejs, Express, Websocket, Postgres, Netlify, Heroku',
      github: '',
      demo: 'https://we-just-chat.netlify.app/',
    },
    {
      title: 'SuperBlaBlaLand',
      description:
        'Work as a full-stack developer, implementing amazing features with an incredible team.',
      image: 'https://ik.imagekit.io/nv2j2amfx9/superblablaland.png',
      tags: 'React, Node.js, Express, Prisma, PostgreSQL, websocket,  SCSS, tailwind, Figma',
      github: '',
      demo: 'https://www.superblablaland.com/',
    },
  ];
  return (
    <section className='portfolio'>
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
                  {project.tags.split(',').map((tag, index) => {
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
                  {project.demo && (
                    <a
                      href={project.demo}
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
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
