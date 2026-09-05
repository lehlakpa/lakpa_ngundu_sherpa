export const profileData = {
  name: 'Lakpa Ngundu Sherpa',
  title: 'Junior Flutter Developer',
  tagline: 'I build widgets, not just screens.',
  bio: 'Lakpa Ngundu Sherpa — a BCA student building Flutter apps backed by Firebase. Currently turning ideas into working mobile products, one component at a time.',
  location: 'Siddhicharan-5, Okhaldhunga',
  email: 'lehlakpaa@gmail.com',
  phone: '+977 9709047193',
  site: 'lakpa.dev',
};

export const educationData = [
  {
    title: 'Bachelor of Computer Applications (BCA)',
    institution: 'Texas International College · Semester 2',
    status: 'running',
    index: 0,
  },
  {
    title: 'Higher Secondary Education',
    institution: 'Completed',
    status: 'done',
    index: 1,
  },
];

export const skillGroups = [
  {
    category: 'app development',
    skills: [
      { name: 'Flutter', level: 'core', bg: 'rgba(124,77,255,.1)', color: 'var(--purple)' },
      { name: 'Firebase', level: 'core', bg: 'rgba(0,179,104,.1)', color: 'var(--green)' },
    ],
  },
  {
    category: 'web & scripting',
    skills: [
      { name: 'JavaScript', level: 'basics', bg: 'rgba(255,196,0,.14)', color: '#9A6E00' },
      { name: 'Node.js', level: 'basics', bg: 'rgba(255,196,0,.14)', color: '#9A6E00' },
    ],
  },
  {
    category: 'tools & workflow',
    skills: [
      { name: 'Git & GitHub', level: 'basics', bg: 'rgba(41,121,255,.1)', color: 'var(--blue)' },
    ],
  },
];

export const projectData = [
  {
    id: 1,
    icon: '🛒',
    title: 'E-commerce App — Firebase Backend',
    description:
      'A basic e-commerce mobile app built in Flutter, using Firebase for authentication, product data, and storage — no separate server needed.',
    status: 'in progress',
    stack: ['Flutter', 'Firebase Auth', 'Cloud Firestore', 'Storage'],
    indexDisplay: '1 of 2',
  },
  {
    id: 2,
    icon: '📦',
    title: 'E-commerce App — API Integration',
    description:
      'A second e-commerce app fetching and managing product and order data through REST APIs instead of a Firebase backend.',
    status: 'in progress',
    stack: ['Flutter', 'REST APIs', 'HTTP package', 'State mgmt'],
    indexDisplay: '2 of 2',
  },
];
