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
      <SiNextdotjs style={{ fill: 'url(#gradient)' }} />,
      <SiNestjs style={{ fill: 'url(#gradient)' }} />,
      <SiTypescript style={{ fill: 'url(#gradient)' }} />,
      <SiPostgresql style={{ fill: 'url(#gradient)' }} />,
    ],
    githubLink: 'https://github.com/sensitiky/pwa-blockchain-articles',
    liveDemoLink: 'https://www.blogchain.tech/',
    className: 'md:col-span-1',
    thumbnail: '/blogchain.gif',
  },
  {
    id: 2,
    title: 'Project IESA',
    description:
      'SPA dedicated to the academic information of the IESA institute located in Posadas, Misiones, Argentina.',
    technologies: ['NextJS', 'TypeScript'],
    techIcons: [
      <SiNextdotjs style={{ fill: 'url(#gradient)' }} />,
      <SiTypescript style={{ fill: 'url(#gradient)' }} />,
    ],
    githubLink: 'https://github.com/sensitiky/SPA-university',
    liveDemoLink: 'https://iesaeducativo.com/',
    className: 'col-span-1',
    thumbnail: '/iesa.gif',
  },
];
<svg width="0" height="0">
  <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="0%">
    <stop stopColor="#fafafa" offset="0%" />
    <stop stopColor="#737373" offset="100%" />
  </linearGradient>
</svg>;
