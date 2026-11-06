import sfu from '../assets/photos/sfu.webp'
import vancouver from '../assets/photos/vancouver.webp'
import secretLine from '../assets/work/secret-line.webp'
import resumeBuilder from '../assets/work/resume-builder.webp'
import productivityPal from '../assets/work/productivity-pal.webp'
import freehand from '../assets/work/freehand.webp'

// Illustrations are optional: any file missing from the folder is simply skipped.
const illos = import.meta.glob('../assets/illustrations/*.{webp,png}', {
  eager: true,
  import: 'default',
})
const illo = (name) =>
  illos[`../assets/illustrations/${name}.webp`] || illos[`../assets/illustrations/${name}.png`] || null

export const person = {
  first: 'Pratham',
  last: 'Garg',
  role: 'Software engineer',
  school: 'Computing Science, Simon Fraser University',
  city: 'Vancouver, BC',
  email: 'gargpratham.312003@gmail.com',
  github: 'https://github.com/prathamgarg03',
  linkedin: 'https://www.linkedin.com/in/pratham-garg-762a692b3/',
}

export const intro =
  'I grew up in Punjab building robots for competitions, moved to Vancouver to study computer science at SFU, and have spent the years since writing everything from thread-safe C to realtime web apps. This is that story, in three chapters.'

export const chapters = [
  {
    id: 'foundations',
    n: 1,
    name: 'Foundations',
    span: '2018 — 2021',
    place: 'Punjab, India',
    entries: [
      {
        year: 2018,
        heading: ['The', 'robot', 'year'],
        body: 'At Robotex International in Tallinn, Estonia, I led a team of five to design and build a robot for a set of timed tasks. We made the quarter-finals against 500 teams from 46 countries and came home with the Best Team Work award.',
        stat: { value: '500', unit: 'teams', label: 'from 46 countries at Robotex International. We reached the quarter-finals.' },
      },
      {
        year: 2019,
        heading: ['Eight', 'wheels'],
        body: 'I represented my school at the District Level Skating Championship in Ludhiana and won bronze in the under-17 category. I still skate whenever the Vancouver weather allows.',
        stat: { value: 'Bronze', unit: 'U-17', label: 'District Level Skating Championship, Ludhiana.' },
      },
      {
        year: 2021,
        heading: ['One', 'way', 'ticket'],
        body: 'I finished senior secondary at Tagore International in Sanhewal and left for Simon Fraser University to start a Bachelor of Science in Computing Science.',
        images: [{ src: sfu, alt: 'Simon Fraser University crest', ratio: 'wide', fit: 'contain' }],
      },
    ],
  },
  {
    id: 'vancouver',
    n: 2,
    name: 'Vancouver',
    span: '2022 — 2024',
    place: 'Burnaby, BC',
    entries: [
      {
        year: 2022,
        heading: ['Work', 'and', 'school'],
        body: 'I started as a sales associate at Your Dollar Store With More in New Westminster while studying full time. Merchandising, store targets and a lot of customer conversations taught me how to work with people under pressure.',
        images: [{ src: vancouver, alt: 'Vancouver skyline across the water', ratio: 'land' }],
      },
      {
        year: 2023,
        heading: ['Tracking', 'the', 'body'],
        body: 'As a project assistant at SFU I worked with an open-source human body tracker: reproducing its tutorials, cleaning and merging pose data, and documenting experiments so the next person could pick them up.',
        stat: { value: '25%', unit: 'more', label: 'complete and accurate pose data after my integration work.' },
      },
      {
        year: 2024,
        heading: ['Close', 'to the', 'metal'],
        body: 'A semester of systems courses turned into a run of projects: a UDP chat tool on pthreads, a process scheduler simulation, an ls clone, a Java strategy game, a Spring Boot course planner and a Python GUI over SQL Server.',
        work: ['s-talk', 'process-control-block', 'unixls', 'fort-attack', 'course-planner', 'yelp'],
      },
    ],
  },
  {
    id: 'shipping',
    n: 3,
    name: 'Shipping',
    span: '2024 — Today',
    place: 'Vancouver, BC',
    entries: [
      {
        year: 2024,
        heading: ['Secret', 'line'],
        body: 'An anonymous messaging platform on Next.js, MongoDB and NextAuth. Sign up with email verification, share a personal link, and read what people send you from a dashboard. Email delivery runs through Resend.',
        images: [{ src: secretLine, alt: 'Secret Line landing page', ratio: 'land', shot: true }],
        links: { live: 'https://secret-line.prathamgarg.com', code: 'https://github.com/prathamgarg03/secret-line' },
      },
      {
        year: 2025,
        heading: ['Hack', 'the', 'clock'],
        body: 'At StormHacks 2025 I built Very Simple Alarm in a weekend with TypeScript and a Solidity contract. Before that came a competitive LeetCode practice app in Next.js and a web rebuild of my library management system.',
        work: ['very-simple-alarm', 'competitive-leet-code', 'library'],
      },
      {
        year: 2026,
        heading: ['Draw', 'it', 'live'],
        body: 'Freehand is a realtime drawing canvas on Next.js, Convex and Bun. Copy the room link, share it, and everyone sees the same strokes as they land. Export the result as a PNG when you are done.',
        images: [{ src: freehand, alt: 'Freehand drawing canvas with pen toolbar', ratio: 'land', shot: true }],
        links: { live: 'https://freehand-ten.vercel.app', code: 'https://github.com/prathamgarg03/freehand' },
      },
    ],
  },
]

export const work = [
  { id: 'freehand', name: 'Freehand', year: 2026, stack: 'Next.js, Convex, Bun', what: 'Realtime shared drawing canvas', code: 'https://github.com/prathamgarg03/freehand', live: 'https://freehand-ten.vercel.app', image: freehand },
  { id: 'productivity-pal', name: 'Productivity Pal', year: 2025, stack: 'Next.js', what: 'Landing site for an AI workflow tool', code: 'https://github.com/prathamgarg03/productivity-pal', live: 'https://productivity-pal.vercel.app', image: productivityPal },
  { id: 'very-simple-alarm', name: 'Very Simple Alarm', year: 2025, stack: 'TypeScript, Solidity', what: 'StormHacks 2025 project', code: 'https://github.com/prathamgarg03/Very-Simple-Alarm', image: null },
  { id: 'competitive-leet-code', name: 'Competitive LeetCode', year: 2025, stack: 'Next.js, TypeScript', what: 'Competitive coding practice', code: 'https://github.com/prathamgarg03/competitive-leet-code', image: null },
  { id: 'secret-line', name: 'Secret Line', year: 2024, stack: 'Next.js, MongoDB, NextAuth', what: 'Anonymous messaging platform', code: 'https://github.com/prathamgarg03/secret-line', live: 'https://secret-line.prathamgarg.com', image: secretLine },
  { id: 'resume-builder', name: 'Resume Builder', year: 2024, stack: 'React, Vite', what: 'Section-by-section resume editor', code: 'https://github.com/prathamgarg03/ResumeBuilder', live: 'https://resume-builder-omega-five.vercel.app', image: resumeBuilder },
  { id: 'yelp', name: 'Yelp Database Manager', year: 2024, stack: 'Python, pyodbc, tkinter', what: 'Search and review businesses over SQL Server', code: 'https://github.com/prathamgarg03/Yelp-Database-Management', image: illo('yelp-database') },
  { id: 'course-planner', name: 'Course Planner', year: 2024, stack: 'Java, Spring Boot, Gradle', what: 'REST API and graphs for SFU course offerings', code: 'https://github.com/prathamgarg03/Course-Planner', image: illo('course-planner') },
  { id: 'fort-attack', name: 'Fort Attack', year: 2024, stack: 'Java', what: 'Turn-based fort destruction game', code: 'https://github.com/prathamgarg03/Fort-Attack', image: illo('fort-attack') },
  { id: 'process-control-block', name: 'Process Control Block', year: 2024, stack: 'C', what: 'Priority scheduler and semaphore simulation', code: 'https://github.com/prathamgarg03/Process-Control-Block', image: illo('process-control-block') },
  { id: 'unixls', name: 'UnixLs', year: 2024, stack: 'C', what: 'ls clone with long listing and inodes', code: 'https://github.com/prathamgarg03/UnixLs', image: illo('unix-ls') },
  { id: 's-talk', name: 'S-Talk', year: 2024, stack: 'C, pthreads, UDP', what: 'Terminal-to-terminal chat', code: 'https://github.com/prathamgarg03/s-talk', image: illo('s-talk') },
  { id: 'library', name: 'Library Management System', year: 2023, stack: 'HTML, CSS, JavaScript', what: 'Catalog, patrons and loans for libraries', code: 'https://github.com/prathamgarg03/Library-Management-System', image: null },
]

export const workById = Object.fromEntries(work.map((w) => [w.id, w]))

export const stack = [
  'JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'C', 'React', 'Next.js', 'Node.js',
  'Spring Boot', 'Express', 'MongoDB', 'Firebase', 'Convex', 'Docker', 'Git',
]
