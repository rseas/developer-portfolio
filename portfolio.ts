import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Raymond Seas',
  title: "Hi, I'm Raymond Seas",
  description:
    "Computer Scientist",
  resumeLink:
    'https://drive.google.com/file/d/1tZfTuOykrOVdFy9LyJLkTiICveWW5pAr/view?usp=drive_link',
};

export const openSource = {
  githubUserName: 'rseas',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://rseas.github.io/',
  linkedin: 'https://www.linkedin.com/in/raymondseas/',
  github: 'https://github.com/rseas',
};

export const skillsSection: SkillsSectionType = {
  title: 'Skills',
  subTitle: 'Always looking for new ways to expand my knowledge',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/computer.json', // Path of Lottie Animation JSON File
      skills: [
        'Experience building and deploying various web and mobile applications',
        'Utilizing multiple backend services to support application'
      ],
      softwareSkills: [
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          iconifyTag: 'logos:yarn',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Flutter',
          iconifyTag: 'logos:flutter',
        },
        {
          skillName: 'Nextjs',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'MongoDB',
          iconifyTag: 'devicon:mongodb-wordmark',
        },
        {
          skillName: 'Firebase',
          iconifyTag: 'logos:firebase',
        },

        {
          skillName: 'Parse',
          iconifyTag: 'logos:parse',
        },
      ],
    },
    {
      title: 'Programming Languages',
      lottieAnimationFile: '/lottie/skills/pLang.json', // Path of Lottie Animation JSON File
      skills: [
        'Ability to use multiple programming languages',
        'Able to learn and pickup new languages quickly'
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'Java',
          iconifyTag: 'logos:java',
        },
        {
          skillName: 'Python',
          iconifyTag: 'logos:python',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Cpp',
          iconifyTag: 'vscode-icons:file-type-cpp',
        },
        {
          skillName: 'HTML-5',
          iconifyTag: 'logos:html-5',
        },
        {
          skillName: 'SQL',
          iconifyTag: 'vscode-icons:file-type-sql',
        }
      ],
    },
    {
      title: 'Operating Systems',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        'Experience with working on multiple OS platforms',
        'Willing and able to learn new operating systems as necessary',
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'Windows',
          iconifyTag: 'logos:microsoft-windows-icon',
        },
        {
          skillName: 'MacOS',
          iconifyTag: 'logos:macos',
        },
        {
          skillName: 'Ubuntu Linux',
          iconifyTag: 'logos:ubuntu',
        },
        {
          skillName: 'Linux Mint',
          iconifyTag: 'logos:linux-mint',
        },
        {
          skillName: 'Linux',
          iconifyTag: 'logos:linux-tux',
        }
      ],
    }
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '80', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '60',
  },
  {
    Stack: 'Programming',
    progressPercentage: '70',
  },
  {
    Stack: 'Networking',
    progressPercentage: '60',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'University of South Carolina',
    subHeader: 'Bachelor of Science in Computer Science',
    duration: 'August 2019 - May 2023',
    desc: 'Included Coursework: Algorithmic Design, Computer Architecture, Unix/Linux Fundamentals, Data Structure & Algorithms, Advanced Programming Techniques, Operating Systems, Information Security Principles, Intro to Computer Networks, Information Security Principles',
    grade: 'GPA: 3.918',
    descBullets: [
      'Recipient of the President’s Honor Roll in Spring 2020, Fall 2022 and Spring 2023',
      'Dean\'s List recognition 2019-2022',
      'Undergraduate Information Assurance Specialization 2023'
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Freelance App Developer',
    company: '',
    companyLogo: '/img/icons/common/rsLogo.png',
    date: 'May 2023 – Present',
    desc: 'I currently work for myself developing applications using React Native and Flutter coupled with various libraries.'
  },
  {
    role: 'Carpenter Apprentice',
    company: 'A & A Renovations and Construction LLC',
    companyLogo: '/img/icons/common/aracLogo.jpg',
    date: 'May 2022 – Present',
    desc: 'I also work part time as a carpenter apprentice applying critical thinking and mathematical skills to divise solutions to various complex problems.',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: 'Floor Associate/Cashier',
    company: 'Super Buy-Rite Liquors',
    companyLogo: '/img/icons/common/superbuyRite.png',
    date: 'July 2019 - August 2021',
    desc: 'Worked both individually and in a team to effectively stock and serve customers needs, fostering effective communication and teamwork.',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Grubber',
    desc: 'Team project using React Native to develop Android application.',
    github: 'https://github.com/SCCapstone/Mind404'
  },
  {
    name: 'JobEstimator',
    desc: 'IPad application for local contractor  to provide clients with an accurate estimate on-site.',
    github: 'https://github.com/rseas/JobEstimator',
  },
  {
    name: 'WorkoutLog',
    desc: 'MERN stack web application allowing users to track and view past workouts',
    github: 'https://github.com/rseas/WorkoutLog',
  },
  {
    name: 'MacroTracker',
    desc: 'IN PROGRESS: IOS application allowing users to store and track their daily nutrition goals using React Native and Parse',
    github: 'https://github.com/rseas/MacroTracker'
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = false;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Raymond Seas',
  description:
    'A passionate software developer/engineer.',
  author: 'Raymond Seas',
  image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: 'https://portfolio-rseas.vercel.app/',
  keywords: [
    'Raymond',
    'Raymond Seas',
    '@rseas',
    'Portfolio',
    'Raymond Seas Portfolio',
  ],
};
