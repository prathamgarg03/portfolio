import {
  LightBulbIcon,
  AcademicCapIcon,
  RocketLaunchIcon,
  BriefcaseIcon,
  CommandLineIcon,
  TrophyIcon
} from '@heroicons/react/24/solid'
import pic1 from '../assets/photos/pic1.jpg'
import sfu from '../assets/photos/sfu.png'
import vancouver from '../assets/photos/vancouver.jpg'

export const github = "https://github.com/prathamgarg03?tab=repositories"

export const linkedin = "https://www.linkedin.com/in/pratham-garg-762a692b3/"

export const email = "gargpratham.312003@gmail.com"

export const results = [
  {
    icon: <LightBulbIcon className="text-blue-500" />,
    header: "Objective",
    title: "My Objective",
    description: "Dedicated to utilizing skills in software development to create innovative and efficient solutions. Aiming to contribute to impactful projects and continuously improve technical abilities. Passionate about leveraging technology to solve real-world problems",
    link: "www.prathamgarg.com > Objective",
    content: [
      {
        title: "",
        subtitle: "",
        date: "",
        location: "",
        text: ["Aspiring Software Engineer and third-year Computer Science student at Simon Fraser University, seeking an internship opportunity to leverage my skills in software development and problem-solving in a professional setting."]
      }
    ]
  },
  {
    icon: <AcademicCapIcon className="text-red-500" />,
    header: "Education",
    title: "My Education",
    description: "Strong academic background in computer science with a focus on practical and theoretical knowledge. Committed to lifelong learning and staying updated with the latest technological advancements. Completed various coursework and projects to enhance skills",
    link: "www.prathamgarg.com > Education",
    content: [
      {
        title: "Bachelor of Science in Computer Science",
        subtitle: "Simon Fraser University",
        date: "Expexted 2026",
        location: "Burnaby, BC",
        text: ["Data Structures, Algorithms, Operating Systems, and Full Stack Web Development."]
      },
      {
        title: "Senior Secondary School",
        subtitle: "Tagore International Senior Secondary School",
        date: "2019 - 2021",
        location: "Sanhewal, Punjab",
        text: []
      }
    ]
  },
  {
    icon: <RocketLaunchIcon className='text-yellow-500' />,
    header: "Skills",
    title: "My Skills",
    description: "Proficient in various programming languages and tools, with a keen eye for solving complex problems. Strong analytical and debugging skills, with experience in full-stack development. Continuously seeking to learn and adapt to new technologies",
    link: "www.prathamgarg.com > Skills",
    content: [
      {
        title: "Programming Languages",
        subtitle: "",
        date: "",
        location: "",
        text: ["JavaScript, Python, Java, C++, C, Assembly"]
      },
      {
        title: "Web Technologies",
        subtitle: "",
        date: "",
        location: "",
        text: ["HTML, CSS, Angular, React, Node.js, Spring Boot, Express, MongoDB, Firebase"]
      },
      {
        title: "Tools",
        subtitle: "",
        date: "",
        location: "",
        text: ["Git, Docker, VS Code, IntelliJ IDEA, Eclipse"]
      },
      {
        title: "Other",
        subtitle: "",
        date: "",
        location: "",
        text: ["Agile, Scrum, RESTful APIs, Data Structures, Algorithms"]
      },
    ]
  },
  {
    icon: <BriefcaseIcon className='text-green-500' />,
    header: "Experience",
    title: "My Experience",
    description: "Extensive experience in both technical and non-technical roles across various industries. Proven ability to lead projects and collaborate effectively with cross-functional teams. Adept at managing multiple tasks and delivering results within deadlines",
    link: "www.prathamgarg.com > Experience",
    content: [
      {
        title: "Sales Associate",
        subtitle: "Your Dollar Store With More",
        date: "April 2022 - Present",
        location: "New Westminster, BC",
        text: [
          "• Provided exceptional customer service to a diverse clientele, ensuring positive customer experiences during transactions.",
          "• Implemented effective merchandising strategies to optimize shelf stocking and enhance product visibility, contributing to increased sales.",
          "• Collaborated with team members to achieve store targets, share product knowledge, and maintain a welcoming environment for guests"
        ]
      },
      {
        title: "Project Assistant",
        subtitle: "Simon Fraser University",
        date: "Sept 2023 - Dec 2023",
        location: "Burnaby, BC",
        text: [
          "• Studied, implemented, and reviewed various existing tutorials for an open-source human body tracker, contributing to a 30% improvement in understanding and utilization of the tool.",
          "• Integrated and enhanced collected data for human poses, aiding in a 25% increase in data accuracy and completeness.",
          "• Conducted experimental studies and documented case studies, facilitating the project’s objectives and providing valuable insights for future development efforts."
        ]
      }
    ]
  },
  {
    icon: <CommandLineIcon className='text-blue-500' />,
    header: "Projects",
    title: "My Projects",
    description: "Successfully developed and deployed multiple projects, showcasing versatility and innovation. Experience in building web applications, and software solutions. Demonstrated ability to handle project lifecycles from concept to completion",
    link: "www.prathamgarg.com > Projects",
    content: [
      {
        title: "",
        subtitle: "",
        date: "",
        location: "",
        text: [""]
      }
    ]
  },
  {
    icon: <TrophyIcon className='text-red-500' />,
    header: "Extra Curriculars",
    title: "My Extra Curriculars",
    description: "Engaged in diverse extracurricular activities, demonstrating leadership and teamwork skills. Committed to personal growth and contributing positively to society",
    link: "www.prathamgarg.com > Extra Curriculars",
    content: [
      {
        title: "Robotex International",
        subtitle: "",
        date: "Dec 2018",
        location: "Tallinn, Estonia",
        text: [
          "• Participated in the Robotex International Robotics Competition, competing against 500 teams from 46 countries.",
          "• Led a team of 5 members to design and build a robot capable of completing complex tasks, resulting in a quater-finals spot at the competition.",
          "• Received the ”Best Team Work” Award, celebrating our collaborative success."
        ]
      },
      {
        title: "District level Skating Championship",
        subtitle: "",
        date: "Oct 2019",
        location: "Ludhiana, Punjab",
        text: [
          "• Represented my school at the District Level Skating Championship, competing in various events.",
          "• Won the Bronze Medal in the U-17 category, showcasing my dedication and perseverance in the sport.",
        ]
      }
    ]
  },
];

export const resumeAbout = {
  title: "About",
  description: "Pratham Garg is a Computer Science student at Simon Fraser University. Passionate about technology and innovation, he specializes  in software development and web technologies.",
  section: [
    {
      header: "Current Status",
      text: ["Third-year Computer Science student at Simon Fraser University"]
    },
    {
      header: "Hobbies",
      text: ["Watching Cricket", "Coding innovative solutions", "Roller Blading"]
    },
    {
      header: "Future Goals",
      text: ["Work on innovative projects", "Contribute to open-source", "Connect with like-minded individuals"]
    }
  ]
};


export const projects = [
  {
    icon: <CommandLineIcon className='text-blue-500' />,
    header: "Library Management System",
    title: "Library Management System",
    description: "Manages books, patrons, and loans efficiently. Streamlines library operations. Provides essential functionalities for book cataloging and patron records. Includes administrative tools for library staff",
    link: "https://github.com/prathamgarg03/Library-Management-System",
    content: [
      {
        title: "",
        subtitle: "",
        date: "",
        location: "",
        text: [
          "• Provided exceptional customer service to a diverse clientele, ensuring positive customer experiences during transactions.",
          "• Implemented effective merchandising strategies to optimize shelf stocking and enhance product visibility, contributing to increased sales.",
          "• Collaborated with team members to achieve store targets, share product knowledge, and maintain a welcoming environment for guests"
        ],
        liveLink: "https://prathamgarg03.github.io/Library-Management-System/",
        githubLink: "https://github.com/prathamgarg03/Library-Management-System"
      },
    ]
  },
  {
    icon: <CommandLineIcon className='text-red-500' />,
    header: "S-Talk",
    title: "S-Talk",
    description: "Facilitates real-time communication between users on different terminals over a network connection. Handles keyboard input, UDP datagrams, and screen output while ensuring secure concurrent access",
    link: "https://github.com/prathamgarg03/s-talk",
    content: [
      {
        title: "",
        subtitle: "",
        date: "",
        location: "",
        text: [
          "• Developed a real-time communication tool using C and pthreads, enabling users to exchange messages over different terminals via a network connection.",
          "• The tool is designed with a kernel-level thread implementation for LINUX, handling keyboard input, UDP datagrams, screen output, and UDP output.",
          "• It ensures safe concurrent access using mutexes and condition variables.",
          "• The tool is widely used for inter-terminal communication, with thousands of sessions initiated and a high rate of successful message exchanges."
        ],
        githubLink: "https://github.com/prathamgarg03/s-talk"
      },
    ]
  },
  {
    icon: <CommandLineIcon className='text-yellow-500' />,
    header: "Course Planner",
    title: "Course Planner",
    description: "Streamlines course management tasks for Simon Fraser University, offering features for department and course management, including course offerings and data-driven planning. Widely utilized for efficient course organization and management, ensuring reliability through robust testing",
    link: "https://github.com/prathamgarg03/Course-Planner",
    content: [
      {
        title: "",
        subtitle: "",
        date: "",
        location: "",
        text: [
          "• Engineered a comprehensive course management system using Java, Spring Boot, and Gradle for Simon Fraser University.",
          "• The application provides a RESTful API for managing and retrieving information about departments, courses, course offerings, and watchers.",
          "• It also includes features for planning courses using data-driven graphs.",
          "• The system has been extensively utilized, managing numerous departments and courses efficiently. Robust testing with JUnit ensures high reliability and performance."
        ],
        githubLink: "https://github.com/prathamgarg03/Course-Planner"
      },
    ]
  },
  {
    icon: <CommandLineIcon className='text-green-500' />,
    header: "Yelp Database Management Application",
    title: "Yelp Database Management Application",
    description: "Enables user interaction with a Yelp-like database via Python. Offers login, search, friendship, and review features in a user-friendly GUI. Enhances user experience with robust search and review capabilities",
    link: "https://github.com/prathamgarg03/Yelp-Database-Management",
    content: [
      {
        title: "",
        subtitle: "",
        date: "",
        location: "",
        text: [
          "• Engineered a Python-based application to interact with a Yelp-like SQL Server database using Python 3.8, pyodbc, and tkinter libraries.",
          "• The application offers a GUI for users to log in, search for businesses and users, establish friendships, and review businesses.",
          "• The search functionality is robust, supporting multiple filters and case-insensitive queries.",
          "• The application has been utilized by a multitude of users, with thousands of searches executed, friendships formed, and businesses reviewed.",
          "• The application has significantly enhanced the user experience of interacting with the Yelp-like database, providing a platform for users to share and access reviews of various businesses."
        ],
        githubLink: "https://github.com/prathamgarg03/Yelp-Database-Management"
      },
    ]
  },
  {
    icon: <CommandLineIcon className='text-blue-500' />,
    header: "Process Control Block",
    title: "Process Control Block",
    description: "Simulates a process scheduler in a multitasking operating system using C. It handles operations like process creation, scheduling, inter-process communication, and semaphore operations. The simulation is useful for understanding and studying operating system",
    link: "https://github.com/prathamgarg03/Process-Control-Block",
    content: [
      {
        title: "",
        subtitle: "",
        date: "",
        location: "",
        text: [
          "• Developed a process scheduler simulation tool using C, simulating the behavior of a multitasking operating system.",
          "• The tool is designed with a priority-based scheduling algorithm, handling process creation, scheduling, inter-process communication, and semaphore operations.",
          "• It ensures proper process management using priority queues and message queues. ",
          "• The tool is widely used for understanding and studying operating system concepts, with numerous simulations run and a high rate of successful process scheduling and communication."
        ],
        githubLink: "https://github.com/prathamgarg03/Process-Control-Block"
      },
    ]
  },
  {
    icon: <CommandLineIcon className='text-red-500' />,
    header: "Unix ls",
    title: "Unix ls",
    description: "A simple implementation of the Unix ls command in C. It provides a way to list files and directories in a given path. The tool has options for long listing, which displays detailed information about the files and directories, and showing inode numbers. It is designed to mimic the functionality of the original ls command in Unix-based systems",
    link: "https://github.com/prathamgarg03/UnixLs",
    content: [
      {
        title: "",
        subtitle: "",
        date: "",
        location: "",
        text: [
          "• Developed a Unix ls command clone using C, providing users with the ability to list files and directories in a given path.",
          "• The tool is designed with options for long listing and showing inode numbers, mimicking the functionality of the original ls command.",
          "•  It handles file and directory retrieval, inode number printing, and detailed information display. The tool ensures efficient memory usage by dynamically allocating and deallocating memory for file and directory names. ",
          "• It is widely used for file and directory listing, with thousands of uses and a high rate of successful file and directory retrievals.",
        ],
        githubLink: "https://github.com/prathamgarg03/UnixLs"
      },
    ]
  },
  {
    icon: <CommandLineIcon className='text-yellow-500' />,
    header: "Fort Attack",
    title: "Fort Attack",
    description: "A game developed in Java, named Fort Attack. The game allows players to engage in strategic battles by destroying opponent's forts. Each fort in the game is made up of cells, and the objective is to destroy the opponent's forts by hitting their cells",
    link: "https://github.com/prathamgarg03/Fort-Attack",
    content: [
      {
        title: "",
        subtitle: "",
        date: "",
        location: "",
        text: [
          "• Developed a game in Java, named Fort Attack, enabling players to engage in strategic battles by destroying opponent's forts.",
          "• The game is designed with object-oriented principles, handling fort creation, cell management, board updates, and user input.",
          "• It ensures a smooth gameplay experience using encapsulation and inheritance.",
          "• The game is widely enjoyed for its strategic depth, with numerous games initiated and a high rate of successful fort destructions."
        ],
        githubLink: "https://github.com/prathamgarg03/Fort-Attack"
      },
    ]
  },
];

export const items = [
  {
    icon:
      <div className="grid auto-rows-[7rem] sm:auto-rows-[8rem] grid-cols-2 gap-1">
        <div className="col-span-1 row-span-1">
          <img className="h-full w-full object-cover rounded-l-xl sm:rounded-none sm:rounded-tl-xl" src={sfu} alt="" />
        </div>
        <div className="sm:col-span-1 sm:row-span-2 hidden sm:block">
          <img className="h-full w-full object-cover rounded-r-xl" src={pic1} alt="" />
        </div>
        <div className="sm:col-span-1 sm:row-span-1">
          <img className="h-full w-full object-cover rounded-r-xl sm:rounded-none sm:rounded-bl-xl" src={vancouver} alt="" />
        </div>
      </div>
    ,
  },
  {
    carousel: true,
  },
];

