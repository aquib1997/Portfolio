import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects: any = [
    // {
    //   id: 1,
    //   title: 'Read data from Google spreadsheet in Angular',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/MyShop/#/',
    //   githurl: 'https://github.com/mehulk05/MyShop',
    //   mediumlink: 'https://itnext.io/read-data-from-google-spreadsheet-in-angular-209ee74b6cb4',
    //   imgUrl: 'assets/images/z1.png',
    //   tech: 'Angular 10 , Google SpreadsheetApi'
    // },
    {
      id: 1,
      title: 'Tournament Management System With Live Videos And Stream Matches',
      desc: '',
      livedemo: 'https://mehulk05.github.io/MyShop/#/',
      githurl: 'https://github.com/mehulk05/MyShop',
      mediumlink: 'https://itnext.io/read-data-from-google-spreadsheet-in-angular-209ee74b6cb4',
      imgUrl: 'https://stupaprodsguscentral.blob.core.windows.net/cbtm/UserProfile/21/StupaLiveMatch.png',
      tech: 'Angular 10 , .Net Core'
    },

    // {
    //   id: 2,
    //   title: 'Blog App Using MERN Stack',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/Blogapp-using-MERN/#/',
    //   githurl: 'https://github.com/mehulk05/Blogapp-using-MERN',
    //   mediumlink: 'https://itnext.io/blog-app-using-mern-stack-b0b4d69d7ea1',
    //   imgUrl: 'assets/images/z26.png',
    //   tech: 'React, Node, MongoDB, Express'
    // },
    {
      id: 2,
      title: 'Onya Get Live Location Of Trucks And Inventory',
      desc: '',
      livedemo: 'https://mehulk05.github.io/Blogapp-using-MERN/#/',
      githurl: 'https://github.com/mehulk05/Blogapp-using-MERN',
      mediumlink: 'https://itnext.io/blog-app-using-mern-stack-b0b4d69d7ea1',
      imgUrl: 'https://stupaprodsguscentral.blob.core.windows.net/cbtm/UserProfile/21/Onya.png',
      tech: 'Angular 12 +, .Net Core'
    },

    {
      id: 3,
      title: 'Admin Panel For Get Deliver Onya Invertory And',
      desc: '',
      livedemo: 'https://mehulk05.github.io/Blog-using-mean/#/',
      githurl: 'https://github.com/mehulk05/Blog-using-mean',
      mediumlink: 'https://itnext.io/crud-operation-using-mean-stack-7dfa2f51ec8c',
      imgUrl: 'https://stupaprodsguscentral.blob.core.windows.net/cbtm/UserProfile/21/Onya.png',
      tech: 'Angular 14, .Net Core'
    },

    {
      id: 4,
      title: 'EMS Created For Manage Event For Table Tennis',
      desc: '',
      livedemo: 'https://chatapp-using-node.herokuapp.com/',
      githurl: 'https://github.com/mehulk05/Chat-app-using-Nodejs',
      mediumlink: 'https://medium.com/weekly-webtips/building-a-multiroom-chat-application-in-node-js-8a8adca5acf2',
      imgUrl: 'https://stupaprodsguscentral.blob.core.windows.net/cbtm/UserProfile/21/StupaLiveMatch.png',
      tech: 'Angular 15 ,.Net Core'
    },


    {
      id: 5,
      title: 'Created Admin Panel For Add Dynamically Option In Web',
      desc: '',
      livedemo: 'https://mehulk05.github.io/Medium-Blog-On-React-App#/',
      githurl: 'https://github.com/mehulk05/Medium-Blog-On-React-App',
      mediumlink: 'https://javascript.plainenglish.io/how-to-add-medium-blogs-on-your-react-app-a3898a729aad',
      imgUrl: 'https://stupaprodsguscentral.blob.core.windows.net/cbtm/UserProfile/21/StupaLiveMatch.png',
      tech: '.Net Core,Angular 14'
    },



    // {
    //   id: 6,
    //   title: 'News App using ReactJS (Parsing XML to JSON)',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/NewsApp-using-React',
    //   githurl: 'https://github.com/mehulk05/NewsApp-using-React',
    //   mediumlink: 'https://codeburst.io/news-app-using-reactjs-f9752d7ab6ce',
    //   imgUrl: 'assets/images/z24.png',
    //   tech: 'React JS, XMl to JSON'
    // },



    // {
    //   id: 7,
    //   title: 'Medium-Like Blog App Using Angular 9 and Firebase',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/Blog-Book/',
    //   githurl: 'https://github.com/mehulk05/Blog-Book',
    //   mediumlink: 'https://codeburst.io/blogging-app-using-angular-9-and-firebase-98e36168d850',
    //   imgUrl: 'assets/images/z21.png',
    //   tech: 'HTML, Bootstrap, CSS, Angular-9, Firebase'
    // },



    // {
    //   id: 8,
    //   title: 'COVID 19 Tracker (Statistics) app Using Angularr',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/COVOID-19/',
    //   githurl: 'https://github.com/mehulk05/COVOID-19',
    //   mediumlink: 'https://codeburst.io/covoid-19-tracker-statistics-app-using-angular-2358347b3d1f',
    //   imgUrl: 'assets/images/z2.png',
    //   tech: 'Angular 10 ,Bootstrap,Javascript'
    // },


    // {
    //   id: 9,
    //   title: 'Weather App with React',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/React-Weather/',
    //   githurl: 'https://github.com/mehulk05/React-Weather-App',
    //   mediumlink: 'https://medium.com/analytics-vidhya/weather-app-with-react-adaa7268bbdb',
    //   imgUrl: 'assets/images/z9.png',
    //   tech: 'React, Open MAp Api'
    // },


    // {
    //   id: 10,
    //   title: 'Spring Boot + Angular 8 CRUD Example',
    //   desc: '',
    //   livedemo: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
    //   githurl: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
    //   mediumlink: 'https://medium.com/analytics-vidhya/spring-boot-angular-8-crud-example-8aeafd47b54',
    //   imgUrl: 'assets/images/z28.png',
    //   tech: 'Angular8, Java ,Hibernate'
    // },


    // {
    //   id: 11,
    //   title: 'Personal Portfolio Using Angular',
    //   desc: '',
    //   livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
    //   githurl: 'https://github.com/mehulk05/Personal-Portfolio-Angular-Updated',
    //   mediumlink: 'https://javascript.plainenglish.io/personal-portfolio-using-angular-8-and-bootstrap-5dde6fc7cf9b',
    //   imgUrl: 'assets/images/z11.png',
    //   tech: 'Angular ,Bootstrap'
    // },


    // {
    //   id: 12,
    //   title: 'Personal Portfolio Using Django',
    //   desc: '',
    //   livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
    //   githurl: 'https://github.com/mehulk05/My-Personal-Portfolio',
    //   mediumlink: 'https://aquibkhanasr.medium.com/personal-portfolio-using-django-dba49c355905',
    //   imgUrl: 'assets/images/z12.png',
    //   tech: 'Django'
    // },

    // {
    //   id: 13,
    //   title: 'Movie Success Prediction',
    //   desc: '',
    //   livedemo: 'https://aquibkhanasr.medium.com/',
    //   githurl: 'https://github.com/mehulk05',
    //   mediumlink: 'https://aquibkhanasr.medium.com/movie-success-prediction-a67d871a7b1',
    //   imgUrl: 'assets/images/z13.png',
    //   tech: 'Python, Machine Learning, Django Framework.'
    // },

    // {
    //   id: 14,
    //   title: 'Matrimonial Website',
    //   desc: '',
    //   livedemo: 'https://aquibkhanasr.medium.com/',
    //   githurl: 'https://github.com/mehulk05/Matrimonial-Website.git',
    //   mediumlink: 'https://aquibkhanasr.medium.com/matrimonial-website-9cd5247f477d',
    //   imgUrl: 'assets/images/z14.png',
    //   tech: 'HTML, CSS, Bootstrap, Jquery'
    // },

  ]
  about2 = `Software Developer with 2.5+ years of experience .
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Expertise in Angular 10+ All versions, HTML, Javascript,  .Net Core and  with Azure Service .
  Have good understanding of .Net Core, Jquery, Bootstrap, SQL Server, Azure Service,DevOPS, and MYSQL`

  about = "Lover of innovation and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do."
  resumeurl = "https://docs.google.com/document/d/1WODFuhIzQw2AXPsjt6f3rs-EDWhdhT8s89fOTrGRh70/edit?usp=sharing"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'Containerization and Orchestration: Docker, Kubernetes',
      'progress': '90%'
    },
    {
      'id': '2',
      'skill': 'Cloud Platforms: AWS (Amazon Web Services), Azure',
      'progress': '70%'
    },
    {
      'id': '3',
      'skill': 'Cloud Native: Serverless, GCP Functions, AWS Lambda',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'Web Technologies: React, Node.js, JavaScript',
      'progress': '85%'
    },
    {
      'id': '5',
      'skill': 'DevOps Tools: Jenkins, GitHub, Kubernetes, Docker',
      'progress': '80%'
    },
    {
      'id': '6',
      'skill': 'Data Analytics Tools: Azure Data Lakes, Azure Factory',
      'progress': '6=90%'
    },
    {
      'id': '6',
      'skill': 'ML Frameworks: Scikit-learn, Matplotlib.',
      'progress': '70%'
    },
    {
      'id': '6',
      'skill': 'IDE: Java IDE, Jupyter Notebook, Python IDE',
      'progress': '60%'
    },
    {
      'id': '6',
      'skill': 'Coding Languages: Python, Java, C#',
      'progress': '80%'
    },
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2015 - 2019',
      'education': 'Bachelor\'s Degree',
      'stream': 'B.Tech',
      'info': `Rayat Group Of Institute is PTU Affiliated and ranks 3th in Punjab
Completed B.Tech in Computer Engineering with 7.82 CGPA.
Won the Best Student Award 3 times for excellent Academic records at College.
Maintained above 7.82 spi in every semester of college academic .`,
      'institution': 'ADITYA SILVER OAK INSTITUTE OF TECHNOLOGY, AHMEDABAD'
    },
    {
      'id': '2',
      'from_to_year': '2013 - 2015',
      'education': 'Higher Secondary',
      'stream': 'Science and Mathematics',
      'institution': 'SR. SEC. RESIDENTIAL MERITORIOUS SCHOOL, AMRITSAR, ATARI ROAD, BACKSIDE GURU NANAK DEV UNIVERSITY, PUNJAB',
      'info': `The High School was mainly focus on the bases of science, mathematics, and Chemistry
There was also a good base on physics, mathematics and chemistry.
Completed my high school with 75%.`
    },
    {
      'id': '3',
      'from_to_year': '2012 - 2013',
      'education': 'Secondary  School',
      'stream': 'Science and Mathematics',
      'institution': 'GOVT HIGH SCHOOL ATHWAL AMRITSAR',
      'info': `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.
Completed my Secondary school with 82%.`
    }
  ];
  exprienceData: any = [
    {
      id: 4,
      company: 'Bismi Services, Hyderabad',
      location: 'New Delhi',
      timeline: ' Aug 2016 - Jun 2018',
      role: 'Junior System Administrator',
      work: 'Installed and maintained operating systems, software, and hardware components. Provided technical support to end-users for hardware and software issues. Collaborated with cross-functional teams to implement IT projects. Documented system configurations, troubleshooting steps, and procedures. Conducted regular system backups and implemented disaster recovery protocols to ensure data integrity and availability. Assisted in the evaluation and selection of new hardware and software solutions to meet evolving business needs. Monitored system performance and identified areas for optimization, resulting in a 15% increase in overall efficiency. Managed user accounts, permissions, and access levels in compliance with company security policies and procedures. '

    },
    {
      id: 3,
      company: 'Knoah Solutions - Google Nest',
      location: 'Australia',
      timeline: 'Jan 2019 - Jan 2020',
      role: 'E Support Officer',
      work: `Provided top-tier technical support for Google Nest Thermostats, ensuring customer satisfaction.
      Expertly diagnosed and resolved connectivity issues across Wi-Fi, Electric, and Software networks.
      Created user-friendly documentation for technical processes.
      Maintained a 90% average customer satisfaction rating.
      Contributed to a 20% reduction in resolution time through optimized troubleshooting workflows.
      Recognized for teamwork and problem-solving skills.
      `
    },
    {
      id: 2,
      company: 'Amazon',
      location: 'Remote',
      timeline: `Oct 2020 – April 2021
        Dec2021- Feb 2022
`,
      role: 'Customer Service Representative ',
      work: `Resolved 50 complex daily customer issues with under 10-minute call handle time.
        Increased customer satisfaction by 20% through cross-functional collaboration and process improvement.
        Converted weekly customer inquiries into sales opportunities, contributing to revenue growth.
        Decreased escalated issues by 35% by training and mentoring new hires and efficiently escalating problems.
        Conducted 50+ B2B meetings, resulting in a 15% increase in new business deals.
        Maintained organized customer and seller records in CRM system for effective management.
        
    `
    }
  ]

  extraCircularInfo: any = [
    {
      id: 1,
      title: 'Blogger',
      description: '',
      img: 'assets/images/aquib khan – Medium1.png',
      url: 'https://aquibkhanasr.medium.com/'
    },
    {
      id: 1,
      title: 'Github',
      description: '',
      img: 'assets/images/Mehulkothari_github.png',
      url: 'https://github.com/mehulk05/'
    },
    {
      id: 1,
      title: 'Freelancing',
      description: '',
      img: 'assets/images/mehul_freelancing.png',
      url: 'https://www.upwork.com/freelancers/~016d6f497a5629df4b'
    },
  ]
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  extraCircular(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.extraCircularInfo;
  }
}
