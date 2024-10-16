import {
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiTypescript,
} from 'react-icons/si';

export const cards = [
  {
    id: 1,
    title: 'Project Blogchain',
    description:
      'A PWA dedicated to creating articles related to blockchain. Credentials: User: usuario, Password: tester123',
    technologies: ['NextJS', 'NestJS', 'TypeScript', 'PostgreSQL'],
    techIcons: [
      <SiNextdotjs />,
      <SiNestjs />,
      <SiTypescript />,
      <SiPostgresql />,
    ],
    githubLink: 'https://github.com/sensitiky/pwa-blockchain-articles',
    liveDemoLink: 'https://www.blogchain.tech/',
    className: 'md:col-span-1',
    thumbnail: '/blogchain.png',
  },
  {
    id: 2,
    title: 'Project IESA',
    description:
      'SPA dedicated to the academic information of the IESA institute located in Posadas, Misiones, Argentina.',
    technologies: ['NextJS', 'TypeScript'],
    techIcons: [<SiNextdotjs />, <SiTypescript />],
    githubLink: 'https://github.com/sensitiky/SPA-university',
    liveDemoLink: 'https://iesaeducativo.com/',
    className: 'col-span-1',
    thumbnail: '/iesa.png',
  },
];
