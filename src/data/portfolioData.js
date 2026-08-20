export const portfolioData = {
  profile: {
    nameTh: "นฤบดี บุญมา",
    nameEn: "Naruebordee Boonma",
    roleTh: "นักศึกษาเทคโนโลยีสารสนเทศ",
    roleEn: "Information Technology Student",
    statusBadge: "Available for Backend / Software Engineering Internship",
    avatar: "./images/profile_img.jpg",
    phone: "094-272-8880",
    email: "naruebordeework@gmail.com",
    location: "Udon Thani, Thailand",
    github: "https://github.com/Birdie-1",
    githubHandle: "Birdie-1",
    facebook: "https://www.facebook.com/share/1A4sr9g8nV/",
    bioEn: "Information Technology student with backend development experience in Node.js, Express.js, REST APIs, third-party API integration, and webhook security. Experienced in developing backend and full-stack projects with a focus on practical software engineering.",
    bioTh: "นักศึกษาคณะวิทยาศาสตร์ สาขาเทคโนโลยีสารสนเทศ มหาวิทยาลัยราชภัฏอุดรธานี มีประสบการณ์พัฒนา Backend ด้วย Node.js, Express.js, REST APIs, Webhook Security, และการเชื่อมต่อ Third-party APIs (LINE Messaging & Meta APIs)",
    softSkills: [
      "การสื่อสาร (Communication)",
      "การทำงานเป็นทีม (Teamwork)",
      "การแก้ปัญหา (Problem Solving)",
      "Software Quality & QA Testing"
    ]
  },

  skills: {
    languages: ["JavaScript / TypeScript", "Python", "C#"],
    backend: ["Node.js", "Express.js", "FastAPI", "REST APIs", "Webhook Security", "JWT Authentication"],
    databaseOrm: ["PostgreSQL", "MySQL", "SQLite", "Prisma", "Firebase"],
    frontend: ["React", "HTML/CSS", "Tailwind CSS"],
    tools: ["Git", "GitHub", "Postman", "Vitest",]
  },

  experience: [
    {
      role: "Backend Developer Intern",
      company: "Next Triple Nine Co., Ltd.",
      period: "April – June 2026",
      type: "Internship",
      highlights: [
        "Developed and maintained backend services for Widee Backoffice using Node.js, Express.js, and Firebase.",
        "Implemented Webhook signature verification and integrated LINE Messaging API and Meta APIs (Facebook, Instagram, WhatsApp) with the Widee Backoffice system.",
        "Performed manual and automated QA testing to validate functionality, identify defects, and ensure system reliability."
      ],
      techStack: ["Node.js", "Express.js", "Firebase", "LINE Messaging API", "Meta APIs", "Webhook Security", "QA Testing"]
    }
  ],

  projects: [
    {
      id: "inventory-demand-forecasting",
      title: "Inventory Management & Demand Forecasting System",
      type: "Academic Project",
      category: "Full-Stack & Data Analytics",
      description: "A comprehensive full-stack inventory management system integrated with statistical forecasting to optimize inventory levels and prevent stockouts.",
      highlights: [
        "Developed a full-stack inventory management system with React and FastAPI, featuring product management, transaction tracking, analytics, and sales data import.",
        "Implemented ARIMA-based demand forecasting with confidence intervals and recommended order quantities to support inventory planning.",
        "Implemented EOQ (Economic Order Quantity), Safety Stock, and Reorder Point calculations to support inventory replenishment decisions."
      ],
      architecture: "FastAPI REST backend with SQLite database, executing ARIMA time-series models via Pandas, NumPy, and Statsmodels for inventory replenishment calculations.",
      techStack: ["React", "FastAPI", "SQLite", "Pandas", "NumPy", "Statsmodels"],
      githubUrl: "https://github.com/Birdie-1/stock-forcasting-with-react-fastapi",
      liveUrl: null,
      featured: true,
      images: []
    },
    {
      id: "inventory-management-api",
      title: "Inventory Management API",
      type: "Side Project",
      category: "Backend Service / REST API",
      description: "A production-grade RESTful API engineered for high-performance inventory tracking, stock movements, secure authorization, and automated testing.",
      highlights: [
        "Developed a RESTful API for product management, stock-in/out transactions, inventory tracking, and stock movement history.",
        "Implemented JWT authentication, bcrypt password hashing, Zod validation, and security middleware including Helmet and CORS.",
        "Implemented pagination, filtering, soft deletion, and automated API testing using Vitest and Supertest."
      ],
      architecture: "Layered Node.js/Express service in TypeScript with Prisma ORM over PostgreSQL, enforcing strict Zod validation schemas and comprehensive Vitest test coverage.",
      techStack: ["Node.js", "Express.js", "TypeScript", "PostgreSQL", "Prisma", "Zod", "Vitest", "Supertest"],
      githubUrl: "https://github.com/Birdie-1/inventory-management-api",
      liveUrl: null,
      featured: true,
      images: []
    },
    
  ],

  education: [
    {
      level: "Bachelor of Science in Information Technology",
      institution: "Udon Thani Rajabhat University",
      institutionTh: "มหาวิทยาลัยราชภัฏอุดรธานี",
      faculty: "Faculty of Science, Information Technology Major",
      period: "2023 – Present",
      gpa: "3.88",
      current: true
    },
    {
      level: "High School",
      institution: "Udonpittayanukul School",
      institutionTh: "โรงเรียนอุดรพิทยานุกูล",
      faculty: "English–Mathematics Program",
      period: "2020 – 2022",
      gpa: null,
      current: false
    },
   
  ],

  certificates: [
    {
      id: "cisco-networking",
      title: "Networking Certificate",
      issuer: "Cisco Networking Academy",
      description: "ผ่านการอบรมออนไลน์เรื่อง 'Networking' ครอบคลุมพื้นฐานระบบเครือข่าย IP addressing, Routing & Switching และ Network Protocols",
      image: "./images/networking.jpg"
    },
    {
      id: "cisco-cybersec",
      title: "Cybersecurity Certificate",
      issuer: "Cisco Networking Academy",
      description: "ผ่านการอบรมออนไลน์เรื่อง 'Cybersecurity' ครอบคลุมการรักษาความปลอดภัยข้อมูล, ภัยคุกคามทางไซเบอร์ และแนวทางการป้องกัน",
      image: "./images/cybersec.jpg"
    },
    {
      id: "thnca-cybersec",
      title: "ความมั่นคงปลอดภัยไซเบอร์ ระดับพื้นฐาน (THNCA)",
      issuer: "สำนักงานคณะกรรมการการรักษาความมั่นคงปลอดภัยไซเบอร์แห่งชาติ (สกมช.)",
      description: "ผ่านการอบรมออนไลน์เรื่องความมั่นคงปลอดภัยไซเบอร์ระดับพื้นฐาน มาตรฐานความปลอดภัยทางไซเบอร์ระดับประเทศ",
      image: "./images/thnca.jpg"
    }
  ]
};
