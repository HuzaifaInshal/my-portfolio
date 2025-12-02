import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import toast from "react-hot-toast";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export const DATA = {
  name: "Huzaifa Inshal",
  initials: "HI",
  url: "https://huzaifa-inshal.vercel.app/",
  location: "Karachi, Pakistan",
  description:
    "Computer Systems Engineer who specialize in Software Development & Deployment, AI integrations, and more",
  summary: [
    "My name is Muhammad Huzaifa Inshal, and an experienced Computer Systems Engineer specializing in full-stack development. Special expertise in Next.js for frontend, Django and NestJS for backend. Skilled in delivering robust, scalable web applications and collaborating effectively with cross-functional teams. Dedicated to quality and staying updated with industry trends.",
    "I began my journey as a data scientist/analyst, but soon transitioned into software development, starting with Django and later mastering the MERN stack before refining my expertise with NestJS on the backend and Next.js on the frontend. During my university years, I also explored cybersecurity in depth—particularly SOC and GRC practices—while running offensive security scripts using tools like Nmap and BurpSuite in Kali Linux, which strengthened my understanding of networks and security principles. Today, I have strong command over NestJS concepts including real-time communication with sockets, and I am highly advanced in Next.js features such as SSR, SSG, and component-driven architectures. On the deployment side, I am experienced with advanced Vercel setups, environment configurations, and DNS settings, along with foundational deployments on AWS EC2, S3, and RDS, plus basic CI/CD using GitHub Actions. Always eager to grow, I’m currently learning GoLang and enhancing my system design and large-scale software architecture skills.",
  ],
  avatarUrl: "/me.png",
  skills: [
    {
      heading: "Frontend",
      skills: [
        "NextJS",
        "ReactJS/Redux/Zustand",
        "Bootstrap/TailwindCSS",
        "JQuery",
      ],
    },
    {
      heading: "Backend",
      skills: ["NestJS/TypeORM/Prisma", "ExpressJs/NodeJS", "DJango"],
    },
    {
      heading: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"],
    },
    {
      heading: "Design (UIUX) and Animations",
      skills: ["ThreeJS", "GSAP", "Figma", "Framer-motion", "Spline"],
    },
    {
      heading: "Others",
      skills: [
        "Docker/Docker-Compose",
        "CI/CD",
        "Github Actions",
        "WebSockets",
        "npm/npx/pip",
        "MERN Stack",
        "JavaScript",
        "TypeScript",
        "Python",
      ],
    },
    {
      heading: "Cloud Skills",
      skills: ["AWS S3", "EC2", "RDS"],
    },
    {
      heading: "Cybersecurity Tools",
      skills: ["Nmap", "Wifite", "Kali"],
    },
    {
      heading: "Soft Skills",
      skills: [
        "Communication",
        "Creativity",
        "Problem Solving",
        "Teamwork",
        "Dedication",
        "Time Management",
        "Adaptability",
        "Critical Thinking",
      ],
    },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "huzaifainshal@gmail.com",
    tel: "+923302546626",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/HuzaifaInshal",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/huzaifainshal/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Facebook: {
        name: "Facebook",
        url: "https://www.facebook.com/muhammadhuzaifainshal",
        icon: Icons.facebook,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/huzaifa_inshal/",
        icon: Icons.instagram,
        navbar: true,
      },
      WhatsApp: {
        name: "WhatsApp/Phone",
        onClick: () => {
          navigator.clipboard
            .writeText("+923302546626")
            .then(() => toast.success("Phone Number copied to clipboard"))
            .catch((err) => console.error("Failed to copy:", err));
        },
        icon: Icons.phone,
        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "",
      //   icon: Icons.x,

      //   navbar: false,
      // },
      // Youtube: {
      //   name: "Youtube",
      //   url: "",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "mailto:huzaifainshal@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Zenkoders",
      href: "https://zenkoders.com/",
      badges: [],
      logoUrl: "/zenkoders.png",
      journey: [
        {
          start: "Jul 2024",
          location: "OnSite, Karachi - Pakistan",
          end: "Present",
          title: "Junior Full Stack Developer",
          description: [
            "Currently serving as a Junior Full Stack Developer, dedicated to delivering and collaborating on diverse projects.",
            "My responsibilities span across client-side, server-side, and database technologies, encompassing Next.js, Nest.js, and PostgreSQL, among others.",
          ],
          skills: [
            "NextJs",
            "NestJS",
            "PostgreSQL",
            "MongoDB",
            "MySQL",
            "ReduxJs",
            "react query",
            "Git",
          ],
        },
        {
          start: "May 2024",
          location: "OnSite, Karachi - Pakistan",
          end: "Jul 2024",
          title: "Trainee Full Stack Developer",
          description: [
            "Started as a trainee developer to gain hands on experience in various software development technologies and methods. ",
            "The trainee period went on for 2 months.",
          ],
          skills: ["NextJs", "NestJS", "PostgreSQL", "MongoDB"],
        },
      ],
    },
    {
      company: "Ibranext Technologies",
      href: "https://ibranext.com/",
      badges: [],
      logoUrl: "/ibranext.png",
      journey: [
        {
          start: "March 2024",
          location: "Remote - Part time",
          end: "Sep 2025",
          title: "Full Stack Developer",
          description: [
            "My Full Stack role features work with ReactJs, ExpressJs, AI and Python for business automation and scripting.",
          ],
          skills: [
            "ExpressJs",
            "OpenAi",
            "ReactJs",
            "Python",
            "Automation",
            "Git",
          ],
        },
        {
          start: "Oct 2023",
          location: "Remote - Part time",
          end: "Feb 2025",
          title: "Frontend Developer",
          description: [
            "Collaborated with their frontend team to develop user friendly and responsive application with ReactJS.",
            "Improving pre-existing and developing new client side code by using frontend languages; Html, CSS, JavaScript.",
          ],
          skills: ["ReactJs"],
        },
      ],
    },
    {
      company: "Karachi Development Authority (KDA)",
      href: "",
      badges: [],
      logoUrl: "/kda.png",
      journey: [
        {
          start: "Aug 2023",
          location: "OnSite - Karachi",
          end: "Oct 2023",
          title: "Internship Trainee",
          description: [
            "Performed my duties as an Internee in DAD/SWD Section of I.T. Department of Karachi Development Authority (KDA)",
          ],
          skills: ["IT Management", "IT Infrastructure", "Databases"],
        },
      ],
    },
    {
      company: "Pakistan Council of Scientific and Industrial Research (PCSIR)",
      href: "",
      badges: [],
      logoUrl: "/pcsir.png",
      journey: [
        {
          start: "Sep 2023",
          location: "Hybrid - Karachi",
          end: "Sep 2023",
          title: "UIUX Internee",
          description: [
            "A 15 day internship focus on UI/UX based role with tools like Figma etc.",
            "Improvised the design for easypaisa app, a loan and mobile banking application.",
            "Also documented and presented the design in a comprehensive Case Study.",
          ],
          skills: ["Figma", "Mobile App Design", "UIUX", "Web Design"],
        },
      ],
    },
    {
      company: "NCAI - NEDUET, Smart City Lab",
      href: "",
      badges: [],
      logoUrl: "/ncai.png",
      journey: [
        {
          start: "Sep 2022",
          location: "OnSite - Karachi",
          end: "Oct 2022",
          title: "Computer Vision Intern",
          description: [
            "Worked on a defective bottle detection system that utilizes the concepts of deep learning and computer vision.",
            "The tools that I utilized were ScikitLearn, openCV and Tensorflow, both are Python modules that provide functionalities in Deep Learning and Data Science.",
          ],
          skills: ["Python", "TensorFlow", "Computer Vision"],
        },
      ],
    },
  ],
  education: [
    {
      school: "NED University of Engineering and Technology",
      href: "https://www.neduet.edu.pk/",
      degree:
        "Bachelors of Engineering in Computer and Information Systems Engineering",
      logoUrl: "/NEDUET_logo.svg",
      start: "2020",
      end: "2024",
      description: [
        "CIS Engineering (Computer and Information Systems Engineering) combines computer science and engineering principles to design and develop both hardware and software solutions. Engineers in this field work on system design, software development, and networking to create efficient, secure, and scalable computing systems.",
        "Their expertise extends to embedded systems, cybersecurity, cloud computing, and data management. They design and optimize algorithms, develop operating systems, and ensure seamless integration between hardware and software components.",
      ],
      skills: [
        "Digital Signal Processing",
        "Machine Learning",
        "Artificial Neural Networks",
        "Data Structures",
        "Networking",
        "Databases",
        "Operating Systems",
        "Cloud Computing",
        "Object-Oriented Programming",
        "Algorithms",
      ],
      gradeAcheived: "3.62",
      key: "Final Year Project",
      value:
        "Image Captioning for Visually Impaired People; to integrate the Computer Vision based image captioning or object detection model into an IoT based sunglasses that takes pictures and captions them in audio.",
    },
    {
      school: "Adamjee Government Science College",
      href: "https://g.co/kgs/h3MyE4B",
      degree: "Pre-Engineering in Intermediate",
      logoUrl: "/Adamjee.png",
      start: "2018",
      end: "2020",
      description: [
        "I completed my Intermediate in Pre-Engineering, building a strong foundation in mathematics, physics, and chemistry, which enhanced my analytical and problem-solving skills.",
      ],
      skills: [
        "Calculus",
        "Integration",
        "Differentiation",
        "Trignometry",
        "Analytical & Applied Physics",
        "Organic & Inorganic Chemistry",
      ],
      gradeAcheived: "87%",
      key: "",
      value: "",
    },
    {
      school: "Montessori Complex High School",
      href: "https://g.co/kgs/aFQRwsn",
      degree: "Matriculation in Computer Science",
      logoUrl: "/mchs.png",
      start: "2016",
      end: "2018",
      description: [],
      skills: ["Computer Science", "Algebra"],
      gradeAcheived: "88%",
      key: "",
      value: "",
    },
  ],
  // hackathons: [
  //   {
  //     title: "Hack Western 5",
  //     dates: "November 23rd - 25th, 2018",
  //     location: "London, Ontario",
  //     description:
  //       "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  // ],
} as const;
