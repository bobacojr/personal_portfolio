import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    target,
    e2open,
    gfs,
    dungeon,
    chess,
    invader,
    savingchristmas,
    Doom,
    prodcon,
    josueweb,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Operating Systems Concepts",
      icon: web,
    },
    {
      title: "Software/Web Design",
      icon: mobile,
    },
    {
      title: "Backend Development",
      icon: backend,
    },
    {
      title: "Frontend Development",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Technical Support Administrator",
      company_name: "Gordon Food Service",
      icon: gfs,
      iconBg: "#E6DEDD",
      date: "May 2024 - Present",
      points: [
        "Provide remote and on-site technical support to 180+ GFS stores involving hardware and software issues for multiple devices and systems.",
        "Perform regular device and system maintenance to pinpads, multiple Zebra products, printers, POS systems, UPS devices, Zoom phone systems, switches, servers, routers, etc.",
        "Develop troubleshooting guides and general documentation with Confluence to assist the stores and GFS team in resolving issues and understanding product and system functionalities.",
        "Managed the IT Administrator depot and ticket queue resolving 260+ ServiceNow tickets and Corrigo Work Orders in my first 4 months.",
        "Utilized Apps Script to create a link between ServiceNow and UPS to automate all tracking information for any package shipped from our office.",
      ],
    },
    {
      title: "Logistics Coordinator Intern",
      company_name: "E2open",
      icon: e2open,
      iconBg: "#E6DEDD",
      date: "May 2023 - December 2023",
      points: [
        "Work with a team managing the transportation and distribution of a customers product.",
        "Provide logistics services for customers supply chain operation such as planning, routing, appointing, tracking and payment.",
        "Monitor status of KPIs including On-time performance, Tender Acceptance, Routing Guide Compliance, and Cost Trending vs Benchmark(s).",
        "Work directly with the customer and transportation companies, providing immediate assistance to both parties.",
        "Reviewed all lumper receipts submitted by drivers, approving or denying charges based on submitted documents, time stamps, and signatures."
      ],
    },
    {
      title: "Closing/Opening Fulfillment Team Member",
      company_name: "Target",
      icon: target,
      iconBg: "#383E56",
      date: "2019 - April 2023",
      points: [
        "Completed timed online orders for store guests quickly and efficiently.",
        "Reorganized and stocked items in all areas on the main floor and backroom.",
        "Properly opened and closed the fulfillment area of the facility.",
        "Assisted guests in all area of the store.",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "During his time with us, Kaleb has made impactful contributions to our teams operations. He played a role in defining processes and creating technical documentation, which has helped our team support our business. His support for our stores has been invaluable, and he leveraged his coding skill set to take a unique approach to streamline our depot process, demonstrating his ability to apply technical knowledge to practical business needs.",
      name: "Dennis Bacon",
      designation: "IT Administrator",
      company: "Gordon Food Service",
      image: "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_960_720.png",
    },
    {
      testimonial:
        "Keep doing what youre doing, Kaleb, and I am 100% confident youll go on to become successful in whatever career path you choose for yourself. I think youll have an especially easy time finding good work if you stick with computer science — the industry is rife with fakers and difficult personalities. You are quite the opposite.",
      name: "David Yrueta",
      designation: "Professor",
      company: "Grand Valley State University",
      image: "http://dev2019.cuttingball.com/wp-content/uploads/portrait_DaveYrueta.jpg",
    },
    {
      testimonial:
        "I thoroughly enjoyed my time working with Kaleb and came to know him as a truly valuable asset to our team. He is honest, dependable, and incredibly hardworking. Beyond that, he caught on very quickly and learned the role of Logistics Coordinator at e2open to the point where he was able to fill in for LC's that were performing the job full time.",
      name: "Jason Elder",
      designation: "Manager",
      company: "E2open",
      image: "https://media.licdn.com/dms/image/C5603AQF5UhEQDj-Fiw/profile-displayphoto-shrink_200_200/0/1521052307855?e=2147483647&v=beta&t=o_eLyLSKHzIVP3N_C_zAqJlLd5hV12BLi3gvf62pkeo",
    },
  ];
  
  const projects = [
    {
      name: "OS Producer Consumer",
      description:
        "Demonstrates a solid understanding of Multi-Process Synchronization.",
      tags: [
        {
          name: "Django Python",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "Celery & Redis",
          color: "blue-text-gradient",
        },
      ],
      image: prodcon,
      source_code_link: "https://github.com/bobacojr/ProducerConsumer",
    },
    {
      name: "Tortilleria Y Taqueria Mi Tierra",
      description:
        "Fully responsive Mexican restaurant website.",
      tags: [
        {
          name: "HTML/CSS/Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "Fully Responsive",
          color: "green-text-gradient",
        },
        {
          name: "Static Webpage",
          color: "blue-text-gradient",
        },
      ],
      image: josueweb,
      source_code_link: "https://github.com/bobacojr/TortilleriaYTaqueria",
    },
    {
      name: "Amazon Web Scraper",
      description:
        "Web scraper that allows the user to track mutliple prdoucts on Amazon, receieving alerts when there is a price change or update.",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "Three.js",
          color: "blue-text-gradient",
        },
      ],
      image: savingchristmas,
      source_code_link: "https://github.com/bobacojr/SavingChristmas",
    },
    {
      name: "Doom",
      description:
        "Singleplayer pixel shooter inspired by the original Doom and Wolfenstein games.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Pygame",
          color: "green-text-gradient",
        },
        {
          name: "Raycasting",
          color: "blue-text-gradient",
        },
      ],
      image: Doom,
      source_code_link: "https://github.com/ostrocon/GVSU-CIS350-Just3Dudes",
    },
    {
      name: "Chess",
      description:
        "Fully functioning chess game with an enemy AI.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "pygame",
          color: "green-text-gradient",
        },
      ],
      image: chess,
      source_code_link: "https://github.com/bobacojr/Chess",
    },
    {
      name: "Space Invaders",
      description:
        "Space Invaders clone with music and sounds.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "pygame",
          color: "green-text-gradient",
        },
      ],
      image: invader,
      source_code_link: "https://github.com/bobacojr/Spaceinvader",
    },
    {
      name: "Pixel Jumper",
      description:
        "Pixel Jumper, where you dodge enemies by jumping. Inlcludes custom music and sounds, along with enemy and player animations.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "pygame",
          color: "green-text-gradient",
        },
      ],
      image: dungeon,
      source_code_link: "https://github.com/bobacojr/PixelGame",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };