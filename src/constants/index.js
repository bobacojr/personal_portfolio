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
    dungeon,
    chess,
    invader,
    savingchristmas,
    Doom,
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
      title: "Web Development",
      icon: web,
    },
    {
      title: "React Native Developer in training",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Frontend Developer",
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
    },
    {
      title: "Logistics Coordinator Intern",
      company_name: "E2open",
      icon: e2open,
      iconBg: "#E6DEDD",
      date: "May 2023 - Present",
      points: [
        "Work with a team managing the transportation and distribution of a customers product.",
        "Provide logistics services for customers supply chain operation such as planning, routing, appointing, tracking and payment.",
        "Monitor status of KPIs including On-time performance, Tender Acceptance, Routing Guide Compliance, and Cost Trending vs Benchmark(s).",
        "Work directly with the customer and transportation companies, providing immediate assistance to both parties.",
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Kaleb has proven to be a great intern with a solid work ethic since I have known him. He has been able to communicate effectively and is trusted with contacts at both our customer and partner companies. He has learned every task given to him and done them effectively. Based on his performance and work ethic I think he would be a good fit for any role he is qualified for.",
      name: "Brent Buchanan",
      designation: "Manager",
      company: "E2open",
      image: "https://media.licdn.com/dms/image/C4D03AQFSoq5u1x9M6g/profile-displayphoto-shrink_200_200/0/1564181596346?e=2147483647&v=beta&t=2IyVPCnh8ZWfGL4aflShkDaEKinM3iKlgMuALsikc4k",
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
      source_code_link: "https://github.com/bobacojr/personal_portfolio",
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
  ];
  
  export { services, technologies, experiences, testimonials, projects };