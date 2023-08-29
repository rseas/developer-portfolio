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
    "-- description --",
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
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in Django & Django REST Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Python',
          iconifyTag: 'logos:python',
        },
        {
          skillName: 'Django',
          iconifyTag: 'vscode-icons:file-type-django',
        },

        {
          skillName: 'Redux',
          iconifyTag: 'logos:redux',
        },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          iconifyTag: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          iconifyTag: 'logos:aws',
        },
        {
          skillName: 'Azure',
          iconifyTag: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          iconifyTag: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          iconifyTag: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          iconifyTag: 'logos:github-actions',
        },
        {
          skillName: 'Cloudinary',
          iconifyTag: 'logos:cloudinary',
        },
        {
          skillName: 'Nginx',
          iconifyTag: 'logos:nginx',
        },
        {
          skillName: 'Sentry',
          iconifyTag: 'logos:sentry-icon',
        },
      ],
    }
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '70',
  },
  {
    Stack: 'Programming',
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
    role: 'Frontend Developer',
    company: 'Duseca Software',
    companyLogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'Apr 2022 – Jun 2022',
    desc: 'I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries.',
  },
  {
    role: 'API Engineer',
    company: 'Duseca Software',
    companyLogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'Jan 2022 – Mar 2022',
    desc: 'I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Bleed-AI',
    companyLogo: '/img/icons/common/bleedAI.jpg',
    date: 'Sept 2021 - Oct 2021',
    desc: 'Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.',
  },
  {
    role: 'Backend Developer',
    company: 'Wapidu',
    companyLogo: '/img/icons/common/wapidu.jpg',
    date: 'Sept 2021',
    desc: 'Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.',
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
    desc: 'IPad application geared toward allowing local contractor ARAC to provide clients with an accurate estimate on site.',
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
export const showContactUs: boolean = true;

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
