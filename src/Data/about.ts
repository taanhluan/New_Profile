// src/data/about.ts

export const profileInfo = {
  name: 'Ta Anh Luan',
  title: 'Product Owner & Web Consultant',
  summary:
    'With over a decade of experience in the financial and digital sectors, I specialize in bridging the gap between business goals and tech implementation. I’ve worked with global teams in Switzerland, France, Japan, Singapore, and Vietnam—bringing agile leadership, product strategy, and delivery excellence.',
  bio: 'Passionate about turning ideas into reality through powerful product strategy and seamless user experiences.',
  contacts: [
    { label: 'Birthday', value: '04 Feb 1992' },
    { label: 'Website', value: 'jonathanta.info', link: 'https://jonathanta.info' },
    { label: 'Phone', value: '+84 939 451 139' },
    { label: 'City', value: 'Ho Chi Minh City, Vietnam' },
    { label: 'Age', value: `${new Date().getFullYear() - 1992}` },
    { label: 'Degree', value: 'Bachelor in IT (Network Engineering)' },
    { label: 'Email', value: 'taanhluan@gmail.com', mail: true },
    { label: 'Freelance', value: 'Available' },
  ],
  stats: [
    { icon: 'far fa-smile', value: '20+', label: 'Clients & Projects' },
    { icon: 'fas fa-tasks', value: '50+', label: 'Product Features Delivered' },
    { icon: 'fas fa-headset', value: '3000+', label: 'Consulting Hours' },
    { icon: 'fas fa-users', value: '15+', label: 'Teams Supported' },
  ],
  skills: [
    { label: 'Agile / Scrum', value: 95 },
    { label: 'Product Strategy', value: 90 },
    { label: 'UX Collaboration', value: 85 },
    { label: 'Technical Documentation', value: 80 },
    { label: 'Project Leadership', value: 88 },
  ],
  image: 'https://raw.githubusercontent.com/taanhluan/JonathanTa/main/assets/images/Avtn.jpg',
  cvLink: 'https://github.com/taanhluan/JonathanTa/raw/main/Ta%20Anh%20Luan%20Resume.pdf'
};
