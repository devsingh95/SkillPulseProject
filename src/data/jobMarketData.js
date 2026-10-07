/**
 * Official SAS Hackathon Job Market Intelligence & Model Data
 * Extracted directly from:
 * 1. Analytics Jobs.csv (15,841 job postings across India)
 * 2. DataScience Jobs.csv (1,602 enterprise postings, 93,005 active openings)
 * 3. JDS Skill Traits.xlsx (139 Junior Data Scientists technical assessments)
 * 4. SDS Personality Traits.xlsx (161 Senior Data Scientists Big Five OCEAN traits)
 */

export const SAS_OVERVIEW = {
  "totalAnalyticsJobs": 15841,
  "totalDataSciencePostings": 1602,
  "totalCombinedOpenings": 93005,
  "jdsCandidatesEvaluated": 139,
  "sdsLeadersEvaluated": 161,
  "years": "2024-2025",
  "source": "Official SAS Hackathon Datasets"
};

export const SAS_TOP_COMPANIES = [
  {
    "name": "TCS",
    "openings": 9064,
    "rolesCount": 10,
    "avgSalary": 9.5,
    "minSalary": 2.4,
    "maxSalary": 30.0,
    "roles": [
      "Data Scientist",
      "Business Analyst",
      "Data Analyst",
      "Data Engineer",
      "Senior Data Scientist",
      "Senior Business Analyst",
      "Senior Data Analyst",
      "Senior Data Engineer",
      "Machine Learning Engineer",
      "Data Architect"
    ]
  },
  {
    "name": "Accenture",
    "openings": 5425,
    "rolesCount": 10,
    "avgSalary": 12.2,
    "minSalary": 2.3,
    "maxSalary": 33.0,
    "roles": [
      "Data Scientist",
      "Business Analyst",
      "Data Analyst",
      "Data Engineer",
      "Senior Data Scientist",
      "Senior Business Analyst",
      "Senior Data Analyst",
      "Senior Data Engineer",
      "Machine Learning Engineer",
      "Data Architect"
    ]
  },
  {
    "name": "Cognizant",
    "openings": 3813,
    "rolesCount": 10,
    "avgSalary": 11.2,
    "minSalary": 2.9,
    "maxSalary": 25.5,
    "roles": [
      "Data Scientist",
      "Business Analyst",
      "Data Analyst",
      "Data Engineer",
      "Senior Data Scientist",
      "Senior Business Analyst",
      "Senior Data Analyst",
      "Senior Data Engineer",
      "Machine Learning Engineer",
      "Data Architect"
    ]
  },
  {
    "name": "Wipro",
    "openings": 2566,
    "rolesCount": 10,
    "avgSalary": 10.5,
    "minSalary": 2.2,
    "maxSalary": 30.0,
    "roles": [
      "Data Scientist",
      "Business Analyst",
      "Data Analyst",
      "Data Engineer",
      "Senior Data Scientist",
      "Senior Business Analyst",
      "Senior Data Analyst",
      "Senior Data Engineer",
      "Machine Learning Engineer",
      "Data Architect"
    ]
  },
  {
    "name": "IBM",
    "openings": 2480,
    "rolesCount": 10,
    "avgSalary": 13.3,
    "minSalary": 4.0,
    "maxSalary": 36.0,
    "roles": [
      "Data Scientist",
      "Business Analyst",
      "Data Analyst",
      "Data Engineer",
      "Senior Data Scientist",
      "Senior Business Analyst",
      "Senior Data Analyst",
      "Senior Data Engineer",
      "Machine Learning Engineer",
      "Data Architect"
    ]
  },
  {
    "name": "Genpact",
    "openings": 2147,
    "rolesCount": 8,
    "avgSalary": 11.8,
    "minSalary": 2.5,
    "maxSalary": 37.0,
    "roles": [
      "Data Scientist",
      "Business Analyst",
      "Data Analyst",
      "Data Engineer",
      "Senior Data Scientist",
      "Senior Business Analyst",
      "Senior Data Analyst",
      "Data Architect"
    ]
  },
  {
    "name": "Capgemini",
    "openings": 1994,
    "rolesCount": 10,
    "avgSalary": 10.8,
    "minSalary": 3.0,
    "maxSalary": 32.0,
    "roles": [
      "Data Scientist",
      "Business Analyst",
      "Data Analyst",
      "Data Engineer",
      "Senior Data Scientist",
      "Senior Business Analyst",
      "Senior Data Analyst",
      "Senior Data Engineer",
      "Machine Learning Engineer",
      "Data Architect"
    ]
  },
  {
    "name": "L&T Infotech",
    "openings": 1873,
    "rolesCount": 9,
    "avgSalary": 12.6,
    "minSalary": 3.8,
    "maxSalary": 33.5,
    "roles": [
      "Data Scientist",
      "Business Analyst",
      "Data Analyst",
      "Data Engineer",
      "Senior Data Scientist",
      "Senior Business Analyst",
      "Senior Data Analyst",
      "Senior Data Engineer",
      "Data Architect"
    ]
  },
  {
    "name": "Tech Mahindra",
    "openings": 1830,
    "rolesCount": 10,
    "avgSalary": 9.9,
    "minSalary": 2.2,
    "maxSalary": 27.0,
    "roles": [
      "Data Scientist",
      "Business Analyst",
      "Data Analyst",
      "Data Engineer",
      "Senior Data Scientist",
      "Senior Business Analyst",
      "Senior Data Analyst",
      "Senior Data Engineer",
      "Machine Learning Engineer",
      "Data Architect"
    ]
  },
  {
    "name": "HCL Technologies",
    "openings": 1783,
    "rolesCount": 10,
    "avgSalary": 11.7,
    "minSalary": 2.3,
    "maxSalary": 31.0,
    "roles": [
      "Data Scientist",
      "Business Analyst",
      "Data Analyst",
      "Data Engineer",
      "Senior Data Scientist",
      "Senior Business Analyst",
      "Senior Data Analyst",
      "Senior Data Engineer",
      "Machine Learning Engineer",
      "Data Architect"
    ]
  },
  {
    "name": "Deloitte",
    "openings": 1714,
    "rolesCount": 10,
    "avgSalary": 14.2,
    "minSalary": 4.3,
    "maxSalary": 35.0,
    "roles": [
      "Data Scientist",
      "Business Analyst",
      "Data Analyst",
      "Data Engineer",
      "Senior Data Scientist",
      "Senior Business Analyst",
      "Senior Data Analyst",
      "Senior Data Engineer",
      "Machine Learning Engineer",
      "Data Architect"
    ]
  },
  {
    "name": "Evalueserve",
    "openings": 1698,
    "rolesCount": 3,
    "avgSalary": 9.6,
    "minSalary": 4.7,
    "maxSalary": 17.4,
    "roles": [
      "Business Analyst",
      "Senior Business Analyst",
      "Senior Data Engineer"
    ]
  },
  {
    "name": "Infosys",
    "openings": 1686,
    "rolesCount": 10,
    "avgSalary": 10.6,
    "minSalary": 3.4,
    "maxSalary": 32.0,
    "roles": [
      "Data Scientist",
      "Business Analyst",
      "Data Analyst",
      "Data Engineer",
      "Senior Data Scientist",
      "Senior Business Analyst",
      "Senior Data Analyst",
      "Senior Data Engineer",
      "Machine Learning Engineer",
      "Data Architect"
    ]
  },
  {
    "name": "Amazon",
    "openings": 1279,
    "rolesCount": 9,
    "avgSalary": 20.1,
    "minSalary": 2.5,
    "maxSalary": 75.0,
    "roles": [
      "Data Scientist",
      "Business Analyst",
      "Data Analyst",
      "Data Engineer",
      "Senior Data Scientist",
      "Senior Business Analyst",
      "Senior Data Analyst",
      "Senior Data Engineer",
      "Machine Learning Engineer"
    ]
  },
  {
    "name": "DXC Technology",
    "openings": 1076,
    "rolesCount": 10,
    "avgSalary": 11.5,
    "minSalary": 3.7,
    "maxSalary": 25.0,
    "roles": [
      "Data Scientist",
      "Business Analyst",
      "Data Analyst",
      "Data Engineer",
      "Senior Data Scientist",
      "Senior Business Analyst",
      "Senior Data Analyst",
      "Senior Data Engineer",
      "Machine Learning Engineer",
      "Data Architect"
    ]
  },
  {
    "name": "EXL Service",
    "openings": 996,
    "rolesCount": 8,
    "avgSalary": 11.3,
    "minSalary": 2.2,
    "maxSalary": 30.0,
    "roles": [
      "Data Scientist",
      "Business Analyst",
      "Data Analyst",
      "Data Engineer",
      "Senior Data Scientist",
      "Senior Business Analyst",
      "Senior Data Analyst",
      "Senior Data Engineer"
    ]
  },
  {
    "name": "Ernst & Young",
    "openings": 896,
    "rolesCount": 9,
    "avgSalary": 14.1,
    "minSalary": 3.4,
    "maxSalary": 30.0,
    "roles": [
      "Data Scientist",
      "Business Analyst",
      "Data Analyst",
      "Data Engineer",
      "Senior Data Scientist",
      "Senior Business Analyst",
      "Senior Data Analyst",
      "Senior Data Engineer",
      "Data Architect"
    ]
  },
  {
    "name": "HSBC",
    "openings": 795,
    "rolesCount": 8,
    "avgSalary": 14.2,
    "minSalary": 3.4,
    "maxSalary": 28.0,
    "roles": [
      "Data Scientist",
      "Business Analyst",
      "Data Analyst",
      "Data Engineer",
      "Senior Data Scientist",
      "Senior Business Analyst",
      "Senior Data Analyst",
      "Senior Data Engineer"
    ]
  },
  {
    "name": "Quantiphi Analytics Solutions",
    "openings": 785,
    "rolesCount": 6,
    "avgSalary": 11.7,
    "minSalary": 6.5,
    "maxSalary": 22.5,
    "roles": [
      "Data Scientist",
      "Business Analyst",
      "Data Engineer",
      "Senior Business Analyst",
      "Senior Data Engineer",
      "Machine Learning Engineer"
    ]
  },
  {
    "name": "American Express",
    "openings": 781,
    "rolesCount": 7,
    "avgSalary": 15.9,
    "minSalary": 3.0,
    "maxSalary": 40.0,
    "roles": [
      "Data Scientist",
      "Business Analyst",
      "Data Analyst",
      "Senior Data Scientist",
      "Senior Business Analyst",
      "Senior Data Analyst",
      "Senior Data Engineer"
    ]
  }
];

export const SAS_LOCATIONS = [
  {
    "city": "Bengaluru",
    "count": 3753,
    "percentage": 23.7
  },
  {
    "city": "Mumbai",
    "count": 2394,
    "percentage": 15.1
  },
  {
    "city": "Gurgaon",
    "count": 1578,
    "percentage": 10.0
  },
  {
    "city": "Delhi NCR",
    "count": 1282,
    "percentage": 8.1
  },
  {
    "city": "Pune",
    "count": 998,
    "percentage": 6.3
  },
  {
    "city": "Hyderabad",
    "count": 931,
    "percentage": 5.9
  },
  {
    "city": "Chennai",
    "count": 891,
    "percentage": 5.6
  },
  {
    "city": "Noida",
    "count": 423,
    "percentage": 2.7
  },
  {
    "city": "Delhi",
    "count": 261,
    "percentage": 1.6
  },
  {
    "city": "Ahmedabad",
    "count": 179,
    "percentage": 1.1
  }
];

export const SAS_SALARY_TIERS = [
  {
    "band": "0 - 3 LPA",
    "raw": "0to3",
    "count": 2592,
    "percentage": 16.4
  },
  {
    "band": "3 - 6 LPA",
    "raw": "3to6",
    "count": 2239,
    "percentage": 14.1
  },
  {
    "band": "6 - 10 LPA",
    "raw": "6to10",
    "count": 2876,
    "percentage": 18.2
  },
  {
    "band": "10 - 15 LPA",
    "raw": "10to15",
    "count": 3608,
    "percentage": 22.8
  },
  {
    "band": "15 - 25 LPA",
    "raw": "15to25",
    "count": 3281,
    "percentage": 20.7
  },
  {
    "band": "25 - 50 LPA",
    "raw": "25to50",
    "count": 1245,
    "percentage": 7.9
  }
];

export const SAS_EXPERIENCE_BANDS = [
  {
    "exp": "5-10 yrs",
    "count": 1010,
    "pct": 6.4
  },
  {
    "exp": "2-5 yrs",
    "count": 964,
    "pct": 6.1
  },
  {
    "exp": "3-8 yrs",
    "count": 750,
    "pct": 4.7
  },
  {
    "exp": "2-7 yrs",
    "count": 665,
    "pct": 4.2
  },
  {
    "exp": "3-5 yrs",
    "count": 545,
    "pct": 3.4
  },
  {
    "exp": "4-9 yrs",
    "count": 527,
    "pct": 3.3
  },
  {
    "exp": "3-6 yrs",
    "count": 523,
    "pct": 3.3
  },
  {
    "exp": "7-12 yrs",
    "count": 485,
    "pct": 3.1
  }
];

export const SAS_SAMPLE_JOBS = [
  {
    "id": 12709,
    "designation": "Manager - Model Validation - Cash Equities - Python - Execution",
    "experience": "3-8 yrs",
    "salary": "15 - 25 LPA",
    "location": "Bengaluru",
    "skills": [
      "Model Validation",
      "Monthly Reports",
      "Cash Equities"
    ],
    "description": "- 1-3 years- experience working with financial data or economic data;Knowledge & Experience / ......"
  },
  {
    "id": 170,
    "designation": "HR Recruiter - Internal HR",
    "experience": "1-3 yrs",
    "salary": "3 - 6 LPA",
    "location": "Ahmedabad",
    "skills": [
      "Recruitment",
      "Hr",
      "Compensation",
      "Interviewing",
      "Placement"
    ],
    "description": "Should be able to work in a fast paced ......"
  },
  {
    "id": 2100,
    "designation": "Quality Analyst - Pharmacovigilance",
    "experience": "3-4 yrs",
    "salary": "6 - 10 LPA",
    "location": "Pune",
    "skills": [
      "Qms",
      "Compliance",
      "Capa",
      "New Projects",
      "Quality Analysis",
      "Rca"
    ],
    "description": "Develop and implement processes to conduct root-cause analysis to investigate deviations and plan CAPAs ......"
  },
  {
    "id": 4949,
    "designation": "Senior SAP Technical Consultant - Successfactors/erp Modules",
    "experience": "4-9 yrs",
    "salary": "15 - 25 LPA",
    "location": "Gurgaon, Gurugram",
    "skills": [
      "Sap Technical Consultant",
      "Successfactors",
      "Erp",
      "Sap",
      "Hr",
      "Sap Erp"
    ],
    "description": "- 4 -8 years experience in working with HR and Talent Management systems, HR Cloud Software Solution ......"
  },
  {
    "id": 5772,
    "designation": "Financial Advisor",
    "experience": "0-4 yrs",
    "salary": "0 - 3 LPA",
    "location": "Indore",
    "skills": [
      "Finance",
      "Investment Products",
      "Advisor",
      "Adviser",
      "Business Analyst..."
    ],
    "description": "nan..."
  },
  {
    "id": 8498,
    "designation": "Senior BI Analyst - Ssis/ssas",
    "experience": "4-9 yrs",
    "salary": "15 - 25 LPA",
    "location": "Bengaluru",
    "skills": [
      "Ssis",
      "Mysql",
      "Php",
      "Olap",
      "Sql",
      "Project Management"
    ],
    "description": "- At least 5+ years of progressive development experience in an enterprise data warehouse environment ......"
  },
  {
    "id": 9580,
    "designation": "Project Manager Analytics",
    "experience": "7-10 yrs",
    "salary": "15 - 25 LPA",
    "location": "Pune",
    "skills": [
      "Project Management",
      "Sql",
      "Us Healthcare",
      "Sas"
    ],
    "description": "Our 100,000+ staff deliver technology-infused, omni-channel customer experience management, marketing ......"
  },
  {
    "id": 11753,
    "designation": "Software Trainees",
    "experience": "0-1 yrs",
    "salary": "0 - 3 LPA",
    "location": "Chennai(Navalur)",
    "skills": [
      "It Support",
      "Development",
      "Testing",
      "Fresher"
    ],
    "description": "We are looking for Freshers as Trainees in Development, IT support and Testing. Interested candidates ......"
  },
  {
    "id": 89,
    "designation": "Job Opportunity Edp/dtp Executive for Leading Education Industry",
    "experience": "1-5 yrs",
    "salary": "0 - 3 LPA",
    "location": "Bengaluru",
    "skills": [
      "Photoshop",
      "Corel Draw",
      "Pagemaker",
      "Advanced Excel",
      "Ms Office Word",
      "Vlookup..."
    ],
    "description": "Analyzing data and make reports as per management requirement;Analyzing data and make reports as per ......"
  },
  {
    "id": 10136,
    "designation": "Manager FP&A",
    "experience": "4-9 yrs",
    "salary": "10 - 15 LPA",
    "location": "Gurgaon",
    "skills": [
      "Corporate Finance",
      "Budgeting",
      "Auditing",
      "Forecasting",
      "Financial Reporting..."
    ],
    "description": "Supporting management team in building contract wise budgets, capex budget, conducting variance analysis ......"
  },
  {
    "id": 4094,
    "designation": "Microsoft Modern Data Platform",
    "experience": "2-7 yrs",
    "salary": "3 - 6 LPA",
    "location": "Mumbai",
    "skills": [
      "Business Intelligence",
      "Analytics",
      "Business Process",
      "Outsourcing..."
    ],
    "description": "nan..."
  },
  {
    "id": 2803,
    "designation": "Cloud Application Developer - Golang/openstack",
    "experience": "3-8 yrs",
    "salary": "15 - 25 LPA",
    "location": "Mumbai",
    "skills": [
      "Business Analysis",
      "Solution Design",
      "Application Development..."
    ],
    "description": "- Should have progressing skills on Business Analysis, Business Knowledge, Software Engineering ......"
  },
  {
    "id": 15038,
    "designation": "Microsoft SQL Server Reporting Services (srss)",
    "experience": "3-6 yrs",
    "salary": "6 - 10 LPA",
    "location": "Mumbai",
    "skills": [
      "Business Intelligence",
      "Coding",
      "Business Process",
      "Outsourcing",
      "Operations..."
    ],
    "description": "Accenture Technology powers our clients businesses with innovative technologies established and emerging ......"
  },
  {
    "id": 5720,
    "designation": "Brand Manager - Tea House - IIM/ MDI/ ISB/ FMS",
    "experience": "3-5 yrs",
    "salary": "6 - 10 LPA",
    "location": "Bengaluru",
    "skills": [
      "Integrated Marketing",
      "Brand Management",
      "Brand Communication..."
    ],
    "description": "- Prior experience in conducting customer research studies is an added advantage;- We are looking for a ......"
  },
  {
    "id": 13169,
    "designation": "CN - Strategy MC V&IS - CVL - 11",
    "experience": "0-3 yrs",
    "salary": "0 - 3 LPA",
    "location": "Gurgaon",
    "skills": [
      "Healthcare",
      "Industrial Products",
      "Industry Research",
      "Financial Analysis..."
    ],
    "description": "0 to 3 years of progressive industry and/ or consulting experience in one or more of the following ......"
  },
  {
    "id": 8439,
    "designation": "Associate Vice President - Analytics - SAS - Bank",
    "experience": "7-12 yrs",
    "salary": "25 - 50 LPA",
    "location": "Delhi NCR, Gurgaon",
    "skills": [
      "Analytics",
      "Sas",
      "Banking",
      "Insurance",
      "Analytics Head"
    ],
    "description": "- Experience in banking domain with knowledge across customer lifecycle is must;- Candidate should have ......"
  },
  {
    "id": 5517,
    "designation": "Required ASP .Net Developer",
    "experience": "5-7 yrs",
    "salary": "10 - 15 LPA",
    "location": "Gurgaon",
    "skills": [
      "Asp.Net",
      "Mvc Architecture",
      "Web Api",
      "Sql Server",
      "Net"
    ],
    "description": "Design and/or development experience with .NET, C#, ASP.NET, Windows Forms and SQL Server in an n-tier ......"
  },
  {
    "id": 9715,
    "designation": "Walkin_18th October_associate-fth | Contract Review",
    "experience": "0-1 yrs",
    "salary": "3 - 6 LPA",
    "location": "Gurgaon",
    "skills": [
      "Legal Services",
      "Drafting",
      "Contract Review",
      "Law",
      "Contract Abstraction",
      "Llb..."
    ],
    "description": "nan..."
  },
  {
    "id": 305,
    "designation": "Business Analyst | IT MNC of Aeronube Technology | Chennai",
    "experience": "6-10 yrs",
    "salary": "15 - 25 LPA",
    "location": "Chennai",
    "skills": [
      "Business Analyst",
      "Wealth Management"
    ],
    "description": "Experience: 6 to 10 yrs;Approximately 6 - 8 years of experience in Business Analysis ......"
  },
  {
    "id": 3269,
    "designation": "Senior Analyst - IT (OIM - Development & Support)",
    "experience": "5-8 yrs",
    "salary": "15 - 25 LPA",
    "location": "Pune",
    "skills": [
      "Oim"
    ],
    "description": "Support access provisioning and certification processes to ensure regulatory compliance and operational ......"
  },
  {
    "id": 12591,
    "designation": "Customer Support Quality Analyst",
    "experience": "1-4 yrs",
    "salary": "0 - 3 LPA",
    "location": "Ahmedabad",
    "skills": [
      "Call Quality",
      "Feedback",
      "Quality Analysis",
      "Training",
      "Customer Support..."
    ],
    "description": "Collaborate with call quality team members to identify and streamline processes and implement process ......"
  },
  {
    "id": 1035,
    "designation": "Team Lead - Search Engines Optimization - Internet / Online",
    "experience": "4-9 yrs",
    "salary": "10 - 15 LPA",
    "location": "Delhi NCR",
    "skills": [
      "Team Lead",
      "Search Engines Optimization",
      "Sem",
      "Seo",
      "Web Analytics",
      "Marketing..."
    ],
    "description": "Should be technically proficient & understand tech details right from site architecture to webmaster ......"
  },
  {
    "id": 9250,
    "designation": "Account Manager",
    "experience": "6-11 yrs",
    "salary": "3 - 6 LPA",
    "location": "Chennai",
    "skills": [
      "Provider",
      "Account Management",
      "Client Servicing",
      "Us Healthcare..."
    ],
    "description": "Should have done client servicing and handled clients/Doctors individually;Should have at least 2 to 3 ......"
  },
  {
    "id": 10036,
    "designation": "Opening for Manager-retail Loans",
    "experience": "6-9 yrs",
    "salary": "15 - 25 LPA",
    "location": "Bengaluru, Kolkata, Ahmedabad",
    "skills": [
      "Performance Appraisal",
      "Hr",
      "Training",
      "Self Service",
      "Branch Banking..."
    ],
    "description": "nan..."
  },
  {
    "id": 709,
    "designation": "Business Research Analyst",
    "experience": "2-7 yrs",
    "salary": "0 - 3 LPA",
    "location": "Gurgaon",
    "skills": [
      "Primary Research",
      "Market Sizing",
      "Research Analysis",
      "Data Analysis..."
    ],
    "description": "Senior researchers with 4+ years of experience in research must have at least 1+ year in managing ......"
  },
  {
    "id": 15351,
    "designation": "Manager- Business Continuity",
    "experience": "10-12 yrs",
    "salary": "15 - 25 LPA",
    "location": "Bengaluru",
    "skills": [
      "Security",
      "Administration",
      "Crisis Management",
      "Business Continuity Planning..."
    ],
    "description": "Must be able to deal effectively with ambiguity and have a dedication to deliver results within strict ......"
  },
  {
    "id": 6246,
    "designation": "Corrosion Inspectors (AG - 573)",
    "experience": "5-10 yrs",
    "salary": "10 - 15 LPA",
    "location": "Kuwait",
    "skills": [
      "Corrosion Inspector",
      "Cathodic Protection",
      "Failure Analysis",
      "Nace",
      "Refinery",
      "..."
    ],
    "description": "-Diploma in Chemical / Electrical / Mechanical Engineering with 10 years corrosion experience;-English ......"
  },
  {
    "id": 5383,
    "designation": "Opening for ''business Process Supervisor Compliance'' with Pharma MNC",
    "experience": "8-13 yrs",
    "salary": "15 - 25 LPA",
    "location": "Bengaluru",
    "skills": [
      "Fcpa Lddr",
      "Us Healthcare Compliance",
      "Business Process Supervisor Compliance..."
    ],
    "description": "Experience  & ......"
  },
  {
    "id": 7809,
    "designation": "Avp/senior/avp - Digital Analytics + Retail Analytics",
    "experience": "10-15 yrs",
    "salary": "25 - 50 LPA",
    "location": "Bengaluru",
    "skills": [
      "Sas",
      "Data Science",
      "Machine Learning",
      "Digital Analytics",
      "Python",
      "Logistic..."
    ],
    "description": "- Hands on experience in statistical techniques like logistic regression, clustering, segmentation etc ......"
  },
  {
    "id": 124,
    "designation": "Sourcing & Development Engineer",
    "experience": "2-7 yrs",
    "salary": "10 - 15 LPA",
    "location": "Hosur",
    "skills": [
      "Production Planning",
      "Cost Reduction",
      "Capacity Enhancement..."
    ],
    "description": "Actions of supplier QCD improvement / Encourage supplier to go for QMS ......"
  },
  {
    "id": 11076,
    "designation": "Accenture is  Hiring for \"  Secondary Research Analyst",
    "experience": "3-8 yrs",
    "salary": "0 - 3 LPA",
    "location": "Gurgaon(Sector-24 Gurgaon)",
    "skills": [
      "Secondary Research",
      "Research Analysis",
      "Gartner",
      "Hoovers",
      "Bloomberg",
      "Fosster"
    ],
    "description": "nan..."
  },
  {
    "id": 9295,
    "designation": "Regional Credit Manager - Small Business Banking Loans - NBFC",
    "experience": "7-12 yrs",
    "salary": "15 - 25 LPA",
    "location": "Delhi NCR",
    "skills": [
      "Mba Finance",
      "Accounting",
      "Banking Products",
      "Team Management..."
    ],
    "description": "Requirement In-depth knowledge of:;- Should have handled SME Loans / Working Capital Loans;- Should have ......"
  },
  {
    "id": 2128,
    "designation": "Direct Walk in at Teleperformance Mansarovar| sal upto 27K",
    "experience": "0-5 yrs",
    "salary": "3 - 6 LPA",
    "location": "Jaipur",
    "skills": [
      "Csr",
      "Tsr",
      "Tsa",
      "Helpdesk",
      "Jaipur",
      "Fresher"
    ],
    "description": "We are a team of 223,000 passionate people working in 350 sites providing outstanding customer ......"
  },
  {
    "id": 11764,
    "designation": "Urgent Opportunity for Senior Analyst - Meed Reports",
    "experience": "5-6 yrs",
    "salary": "6 - 10 LPA",
    "location": "Hyderabad",
    "skills": [
      "Primary Research",
      "Industry Reports",
      "Process Improvement",
      "Writing Skills"
    ],
    "description": "nan..."
  },
  {
    "id": 12874,
    "designation": "Software Sales Engineer - II",
    "experience": "10-15 yrs",
    "salary": "25 - 50 LPA",
    "location": "Delhi NCR",
    "skills": [
      "Software Sales",
      "Solution Architecting",
      "Software Solutions..."
    ],
    "description": "Degree in Engineering / Computer Science/ MCA   with 10 to 12+ years relevant experience;Good Knowledge ......"
  }
];

export const SAS_JDS_MODEL = {
  "intercept": -21.7739,
  "weights": {
    "big_data_skills": 0.7533,
    "maths-stats_skills": 1.4513,
    "coding_skills": 0.5896,
    "ai_and_ml_skills": 1.0425,
    "dashboard_and_storytelling_skills": 1.1861
  },
  "totalSample": 139,
  "highHikeRate": 52.5,
  "stats": {
    "big_data_skills": {
      "mean": 3.85,
      "median": 3.8,
      "min": 2.3,
      "max": 5.0,
      "q25": 3.1,
      "q75": 4.6,
      "lowMean": 3.75,
      "highMean": 3.94
    },
    "maths-stats_skills": {
      "mean": 4.29,
      "median": 4.6,
      "min": 2.2,
      "max": 5.0,
      "q25": 3.8,
      "q75": 5.0,
      "lowMean": 3.83,
      "highMean": 4.71
    },
    "coding_skills": {
      "mean": 4.27,
      "median": 4.6,
      "min": 2.2,
      "max": 5.0,
      "q25": 3.35,
      "q75": 5.0,
      "lowMean": 3.85,
      "highMean": 4.64
    },
    "ai_and_ml_skills": {
      "mean": 4.57,
      "median": 4.9,
      "min": 2.2,
      "max": 5.0,
      "q25": 4.4,
      "q75": 5.0,
      "lowMean": 4.28,
      "highMean": 4.82
    },
    "dashboard_and_storytelling_skills": {
      "mean": 4.36,
      "median": 5.0,
      "min": 2.3,
      "max": 5.0,
      "q25": 3.75,
      "q75": 5.0,
      "lowMean": 3.81,
      "highMean": 4.85
    }
  }
};

export const SAS_SDS_MODEL = {
  "intercept": -36.1046,
  "weights": {
    "neuroticism": 0.1207,
    "extraversion": 0.1123,
    "openness_to_experience": 0.2672,
    "agreeableness": 0.0794,
    "conscientiousness": 0.2473
  },
  "totalSample": 161,
  "highSuccessRate": 52.8,
  "stats": {
    "neuroticism": {
      "mean": 36.2,
      "median": 34.0,
      "min": 17.0,
      "max": 68.0,
      "q25": 27.0,
      "q75": 44.0,
      "lowMean": 36.3,
      "highMean": 36.1
    },
    "extraversion": {
      "mean": 43.2,
      "median": 45.0,
      "min": 17.0,
      "max": 67.0,
      "q25": 34.0,
      "q75": 53.0,
      "lowMean": 36.9,
      "highMean": 48.9
    },
    "openness_to_experience": {
      "mean": 41.3,
      "median": 44.0,
      "min": 18.0,
      "max": 65.0,
      "q25": 32.0,
      "q75": 49.0,
      "lowMean": 33.3,
      "highMean": 48.5
    },
    "agreeableness": {
      "mean": 44.6,
      "median": 46.0,
      "min": 17.0,
      "max": 68.0,
      "q25": 39.0,
      "q75": 51.0,
      "lowMean": 41.1,
      "highMean": 47.7
    },
    "conscientiousness": {
      "mean": 45.2,
      "median": 49.0,
      "min": 18.0,
      "max": 66.0,
      "q25": 35.0,
      "q75": 56.0,
      "lowMean": 35.7,
      "highMean": 53.7
    }
  }
};

export const TRENDING_SKILLS = [
  {
    "name": "Sql",
    "category": "Database & Querying",
    "demand": 99,
    "growth": "+92%",
    "frequencyPct": 5.8,
    "postingsCount": 917,
    "status": "surging",
    "salary": {
      "inr": "+\u20b95.0L",
      "usd": "+$25k"
    },
    "roles": "917 jobs",
    "brief": "Demanded in 917 postings (5.8% market share) across leading enterprise analytics employers."
  },
  {
    "name": "Analytics",
    "category": "Analytics Foundations",
    "demand": 99,
    "growth": "+90%",
    "frequencyPct": 5.7,
    "postingsCount": 904,
    "status": "surging",
    "salary": {
      "inr": "+\u20b94.5L",
      "usd": "+$25k"
    },
    "roles": "904 jobs",
    "brief": "Demanded in 904 postings (5.7% market share) across leading enterprise analytics employers."
  },
  {
    "name": "Python",
    "category": "Programming & Scripting",
    "demand": 99,
    "growth": "+84%",
    "frequencyPct": 5.3,
    "postingsCount": 840,
    "status": "surging",
    "salary": {
      "inr": "+\u20b95.0L",
      "usd": "+$25k"
    },
    "roles": "840 jobs",
    "brief": "Demanded in 840 postings (5.3% market share) across leading enterprise analytics employers."
  },
  {
    "name": "Finance",
    "category": "Business & Domain",
    "demand": 97,
    "growth": "+76%",
    "frequencyPct": 4.8,
    "postingsCount": 756,
    "status": "surging",
    "salary": {
      "inr": "+\u20b94.5L",
      "usd": "+$25k"
    },
    "roles": "756 jobs",
    "brief": "Demanded in 756 postings (4.8% market share) across leading enterprise analytics employers."
  },
  {
    "name": "Java",
    "category": "Software Engineering",
    "demand": 95,
    "growth": "+73%",
    "frequencyPct": 4.6,
    "postingsCount": 728,
    "status": "surging",
    "salary": {
      "inr": "+\u20b94.5L",
      "usd": "+$25k"
    },
    "roles": "728 jobs",
    "brief": "Demanded in 728 postings (4.6% market share) across leading enterprise analytics employers."
  },
  {
    "name": "Sas",
    "category": "Enterprise Analytics & SAS",
    "demand": 88,
    "growth": "+64%",
    "frequencyPct": 4.0,
    "postingsCount": 637,
    "status": "surging",
    "salary": {
      "inr": "+\u20b95.0L",
      "usd": "+$25k"
    },
    "roles": "637 jobs",
    "brief": "Demanded in 637 postings (4.0% market share) across leading enterprise analytics employers."
  },
  {
    "name": "Business Analysis",
    "category": "Business & Domain",
    "demand": 88,
    "growth": "+63%",
    "frequencyPct": 4.0,
    "postingsCount": 633,
    "status": "surging",
    "salary": {
      "inr": "+\u20b94.5L",
      "usd": "+$25k"
    },
    "roles": "633 jobs",
    "brief": "Demanded in 633 postings (4.0% market share) across leading enterprise analytics employers."
  },
  {
    "name": "Machine Learning",
    "category": "AI & Machine Learning",
    "demand": 88,
    "growth": "+63%",
    "frequencyPct": 4.0,
    "postingsCount": 629,
    "status": "surging",
    "salary": {
      "inr": "+\u20b96.5L",
      "usd": "+$25k"
    },
    "roles": "629 jobs",
    "brief": "Demanded in 629 postings (4.0% market share) across leading enterprise analytics employers."
  },
  {
    "name": "Data Analysis",
    "category": "Analytics Foundations",
    "demand": 86,
    "growth": "+62%",
    "frequencyPct": 3.9,
    "postingsCount": 618,
    "status": "high",
    "salary": {
      "inr": "+\u20b94.5L",
      "usd": "+$25k"
    },
    "roles": "618 jobs",
    "brief": "Demanded in 618 postings (3.9% market share) across leading enterprise analytics employers."
  },
  {
    "name": "Project Management",
    "category": "Technical Analytics",
    "demand": 78,
    "growth": "+50%",
    "frequencyPct": 3.2,
    "postingsCount": 505,
    "status": "high",
    "salary": {
      "inr": "+\u20b94.5L",
      "usd": "+$25k"
    },
    "roles": "505 jobs",
    "brief": "Demanded in 505 postings (3.2% market share) across leading enterprise analytics employers."
  },
  {
    "name": "Data Analytics",
    "category": "Technical Analytics",
    "demand": 71,
    "growth": "+41%",
    "frequencyPct": 2.6,
    "postingsCount": 412,
    "status": "high",
    "salary": {
      "inr": "+\u20b93.2L",
      "usd": "+$25k"
    },
    "roles": "412 jobs",
    "brief": "Demanded in 412 postings (2.6% market share) across leading enterprise analytics employers."
  },
  {
    "name": "Excel",
    "category": "Analytics Foundations",
    "demand": 70,
    "growth": "+39%",
    "frequencyPct": 2.5,
    "postingsCount": 393,
    "status": "high",
    "salary": {
      "inr": "+\u20b93.2L",
      "usd": "+$25k"
    },
    "roles": "393 jobs",
    "brief": "Demanded in 393 postings (2.5% market share) across leading enterprise analytics employers."
  }
];

export const JOB_ROLES = [
  {
    "id": "data-scientist",
    "title": "Data Scientist",
    "emoji": "\ud83d\udd2c",
    "growth": "High Demand",
    "positions": "9,051 openings",
    "openingsCount": 9051,
    "salary": {
      "inr": "\u20b94.5 - 21.5 LPA (Avg \u20b913.5L)",
      "usd": "$16k\u201330k"
    },
    "avgSalaryLPA": 13.5,
    "salaryRange": "4.5 - 21.5 LPA",
    "brief": "Extract insights, train predictive ML models, and transform business challenges into algorithmic solutions.",
    "topCompanies": [
      "TCS",
      "Accenture",
      "IBM",
      "Cognizant",
      "Capgemini"
    ],
    "mustHave": [
      "Python",
      "Machine Learning",
      "Sql",
      "Data Analysis",
      "Deep Learning",
      "Statistics"
    ],
    "niceToHave": [
      "Sas",
      "Nlp",
      "Data Mining",
      "Big Data",
      "Tableau"
    ],
    "roadmap": [
      {
        "phase": 1,
        "title": "Statistical Foundations & Exploratory Data Analysis",
        "weeks": "1\u20133",
        "skills": [
          "Python",
          "Sql",
          "Statistics",
          "Data Analysis"
        ],
        "summary": "Master exploratory data analysis, hypothesis testing, SQL window functions, and pandas wrangling.",
        "resources": [
          {
            "name": "SAS Statistics & Analytics Foundations",
            "url": "https://www.sas.com/en_us/training/courses/statistics.html",
            "tag": "Official"
          },
          {
            "name": "Python for Data Analysis (Wes McKinney)",
            "url": "https://wesmckinney.com/book/",
            "tag": "Book"
          }
        ],
        "project": {
          "title": "Customer Churn & Segment Analysis",
          "brief": "End-to-end exploratory pipeline cleaning 50k customer transactions with statistical significance tests."
        }
      },
      {
        "phase": 2,
        "title": "Applied Machine Learning & Predictive Modeling",
        "weeks": "4\u20136",
        "skills": [
          "Machine Learning",
          "Data Mining",
          "Deep Learning"
        ],
        "summary": "Train ensemble algorithms (XGBoost, Random Forest), hyperparameter tuning, cross-validation, and metrics (AUC-ROC, F1).",
        "resources": [
          {
            "name": "Scikit-Learn Machine Learning Guide",
            "url": "https://scikit-learn.org/stable/",
            "tag": "Docs"
          },
          {
            "name": "SAS Model Studio & Machine Learning",
            "url": "https://www.sas.com/en_us/software/model-studio.html",
            "tag": "Tool"
          }
        ],
        "project": {
          "title": "Multi-Class Risk Scoring Engine",
          "brief": "Build, evaluate, and calibrate a risk classifier with feature importance and SHAP explainability."
        }
      },
      {
        "phase": 3,
        "title": "SAS Enterprise Analytics & Visual Analytics",
        "weeks": "7\u20139",
        "skills": [
          "Sas",
          "Tableau",
          "Dashboard & Storytelling"
        ],
        "summary": "PROC SQL, SAS Macros, enterprise data flows, and interactive dashboard authoring in SAS Visual Analytics.",
        "resources": [
          {
            "name": "SAS Visual Analytics Interactive Tutorials",
            "url": "https://video.sas.com/category/videos/sas-visual-analytics",
            "tag": "Video"
          },
          {
            "name": "Enterprise Reporting Best Practices",
            "url": "https://support.sas.com/",
            "tag": "Guide"
          }
        ],
        "project": {
          "title": "Executive Visual Analytics Dashboard",
          "brief": "Design a C-suite business KPI report linking predictive churn probabilities to revenue impact."
        }
      },
      {
        "phase": 4,
        "title": "Big Data Pipelines & MLOps Deployment",
        "weeks": "10\u201312",
        "skills": [
          "Big Data",
          "Nlp",
          "Spark"
        ],
        "summary": "Deploy models as REST microservices, process streaming analytics with Spark, and monitor drift.",
        "resources": [
          {
            "name": "Distributed Computing with Apache Spark",
            "url": "https://spark.apache.org/docs/latest/",
            "tag": "Docs"
          },
          {
            "name": "MLOps & Model Lifecycle Management",
            "url": "https://ml-ops.org/",
            "tag": "Framework"
          }
        ],
        "project": {
          "title": "End-to-End Enterprise Predictive Service",
          "brief": "Full-stack pipeline ingesting raw batches, running feature transformations, and serving low-latency inference."
        }
      }
    ]
  },
  {
    "id": "senior-data-scientist",
    "title": "Senior Data Scientist",
    "emoji": "\u26a1",
    "growth": "Executive Track",
    "positions": "2,129 openings",
    "openingsCount": 2129,
    "salary": {
      "inr": "\u20b98.5 - 30.0 LPA (Avg \u20b922.3L)",
      "usd": "$27k\u201349k"
    },
    "avgSalaryLPA": 22.3,
    "salaryRange": "8.5 - 30.0 LPA",
    "brief": "Lead enterprise AI strategy, architect scalable ML pipelines, and communicate strategic ROI to C-suite stakeholders.",
    "topCompanies": [
      "Accenture",
      "IBM",
      "TCS",
      "Amazon",
      "Deloitte"
    ],
    "mustHave": [
      "Machine Learning",
      "Python",
      "Big Data",
      "Deep Learning",
      "Sas",
      "Statistical Modeling"
    ],
    "niceToHave": [
      "Spark",
      "Hadoop",
      "Cloud Architecture",
      "Executive Storytelling",
      "Nlp"
    ],
    "roadmap": [
      {
        "phase": 1,
        "title": "Statistical Foundations & Exploratory Data Analysis",
        "weeks": "1\u20133",
        "skills": [
          "Python",
          "Sql",
          "Statistics",
          "Data Analysis"
        ],
        "summary": "Master exploratory data analysis, hypothesis testing, SQL window functions, and pandas wrangling.",
        "resources": [
          {
            "name": "SAS Statistics & Analytics Foundations",
            "url": "https://www.sas.com/en_us/training/courses/statistics.html",
            "tag": "Official"
          },
          {
            "name": "Python for Data Analysis (Wes McKinney)",
            "url": "https://wesmckinney.com/book/",
            "tag": "Book"
          }
        ],
        "project": {
          "title": "Customer Churn & Segment Analysis",
          "brief": "End-to-end exploratory pipeline cleaning 50k customer transactions with statistical significance tests."
        }
      },
      {
        "phase": 2,
        "title": "Applied Machine Learning & Predictive Modeling",
        "weeks": "4\u20136",
        "skills": [
          "Machine Learning",
          "Data Mining",
          "Deep Learning"
        ],
        "summary": "Train ensemble algorithms (XGBoost, Random Forest), hyperparameter tuning, cross-validation, and metrics (AUC-ROC, F1).",
        "resources": [
          {
            "name": "Scikit-Learn Machine Learning Guide",
            "url": "https://scikit-learn.org/stable/",
            "tag": "Docs"
          },
          {
            "name": "SAS Model Studio & Machine Learning",
            "url": "https://www.sas.com/en_us/software/model-studio.html",
            "tag": "Tool"
          }
        ],
        "project": {
          "title": "Multi-Class Risk Scoring Engine",
          "brief": "Build, evaluate, and calibrate a risk classifier with feature importance and SHAP explainability."
        }
      },
      {
        "phase": 3,
        "title": "SAS Enterprise Analytics & Visual Analytics",
        "weeks": "7\u20139",
        "skills": [
          "Sas",
          "Tableau",
          "Dashboard & Storytelling"
        ],
        "summary": "PROC SQL, SAS Macros, enterprise data flows, and interactive dashboard authoring in SAS Visual Analytics.",
        "resources": [
          {
            "name": "SAS Visual Analytics Interactive Tutorials",
            "url": "https://video.sas.com/category/videos/sas-visual-analytics",
            "tag": "Video"
          },
          {
            "name": "Enterprise Reporting Best Practices",
            "url": "https://support.sas.com/",
            "tag": "Guide"
          }
        ],
        "project": {
          "title": "Executive Visual Analytics Dashboard",
          "brief": "Design a C-suite business KPI report linking predictive churn probabilities to revenue impact."
        }
      },
      {
        "phase": 4,
        "title": "Big Data Pipelines & MLOps Deployment",
        "weeks": "10\u201312",
        "skills": [
          "Big Data",
          "Nlp",
          "Spark"
        ],
        "summary": "Deploy models as REST microservices, process streaming analytics with Spark, and monitor drift.",
        "resources": [
          {
            "name": "Distributed Computing with Apache Spark",
            "url": "https://spark.apache.org/docs/latest/",
            "tag": "Docs"
          },
          {
            "name": "MLOps & Model Lifecycle Management",
            "url": "https://ml-ops.org/",
            "tag": "Framework"
          }
        ],
        "project": {
          "title": "End-to-End Enterprise Predictive Service",
          "brief": "Full-stack pipeline ingesting raw batches, running feature transformations, and serving low-latency inference."
        }
      }
    ]
  },
  {
    "id": "data-engineer",
    "title": "Data Engineer",
    "emoji": "\u2699\ufe0f",
    "growth": "Infrastructure",
    "positions": "8,044 openings",
    "openingsCount": 8044,
    "salary": {
      "inr": "\u20b92.1 - 17.9 LPA (Avg \u20b911.8L)",
      "usd": "$14k\u201326k"
    },
    "avgSalaryLPA": 11.8,
    "salaryRange": "2.1 - 17.9 LPA",
    "brief": "Construct robust data pipelines, orchestrate distributed compute clusters, and ensure high-throughput data reliability.",
    "topCompanies": [
      "Cognizant",
      "TCS",
      "Accenture",
      "Wipro",
      "L&T Infotech"
    ],
    "mustHave": [
      "Hadoop",
      "Spark",
      "Sql",
      "Python",
      "Big Data",
      "Etl"
    ],
    "niceToHave": [
      "Hive",
      "Java",
      "Scala",
      "Nosql",
      "Cloud Platforms"
    ],
    "roadmap": [
      {
        "phase": 1,
        "title": "Database Engineering & Advanced SQL",
        "weeks": "1\u20133",
        "skills": [
          "Sql",
          "Python",
          "Etl"
        ],
        "summary": "Schema normalization, indexing, query execution plan optimization, and automated ETL ingestion.",
        "resources": [
          {
            "name": "PostgreSQL High Performance Querying",
            "url": "https://www.postgresql.org/docs/",
            "tag": "Docs"
          },
          {
            "name": "Python ETL Pipelines Guide",
            "url": "https://realpython.com/",
            "tag": "Tutorial"
          }
        ],
        "project": {
          "title": "Automated Multi-Source ETL Ingestion",
          "brief": "Build robust idempotent extract-transform-load scripts syncing legacy flat files into normalized relational schemas."
        }
      },
      {
        "phase": 2,
        "title": "Distributed Storage & Hadoop Ecosystem",
        "weeks": "4\u20136",
        "skills": [
          "Hadoop",
          "Big Data",
          "Hive"
        ],
        "summary": "HDFS architecture, MapReduce paradigms, Hive partitioning, and columnar storage (Parquet/ORC).",
        "resources": [
          {
            "name": "Apache Hadoop Architecture Guide",
            "url": "https://hadoop.apache.org/",
            "tag": "Docs"
          },
          {
            "name": "Apache Hive Data Warehousing",
            "url": "https://hive.apache.org/",
            "tag": "Docs"
          }
        ],
        "project": {
          "title": "Distributed Data Lake Ingestion Pipeline",
          "brief": "Store and partition terabytes of clickstream logs in HDFS with queryable Hive external tables."
        }
      },
      {
        "phase": 3,
        "title": "Distributed Computation with Apache Spark",
        "weeks": "7\u20139",
        "skills": [
          "Spark",
          "Java",
          "Scala"
        ],
        "summary": "Spark DataFrames, Catalyst optimizer, in-memory transformations, broadcast joins, and shuffle tuning.",
        "resources": [
          {
            "name": "Apache Spark Programming Guide",
            "url": "https://spark.apache.org/",
            "tag": "Docs"
          }
        ],
        "project": {
          "title": "Real-Time Aggregation Engine",
          "brief": "Process streaming financial transactions, deduplicate records, and compute rolling window aggregations."
        }
      },
      {
        "phase": 4,
        "title": "NoSQL & Modern Lakehouse Architecture",
        "weeks": "10\u201312",
        "skills": [
          "Nosql",
          "Cloud Platforms",
          "Big Data"
        ],
        "summary": "Multi-modal NoSQL data stores, cloud object storage orchestration, and lakehouse table formats (Delta/Iceberg).",
        "resources": [
          {
            "name": "Modern Data Architecture Patterns",
            "url": "https://databricks.com/glossary/data-lakehouse",
            "tag": "Guide"
          }
        ],
        "project": {
          "title": "Enterprise Cloud Lakehouse Platform",
          "brief": "Production lakehouse architecture with automated schema enforcement, partition pruning, and RBAC."
        }
      }
    ]
  },
  {
    "id": "senior-data-engineer",
    "title": "Senior Data Engineer",
    "emoji": "\ud83c\udfd7\ufe0f",
    "growth": "Distributed Systems",
    "positions": "3,411 openings",
    "openingsCount": 3411,
    "salary": {
      "inr": "\u20b93.4 - 25.0 LPA (Avg \u20b919.0L)",
      "usd": "$23k\u201342k"
    },
    "avgSalaryLPA": 19.0,
    "salaryRange": "3.4 - 25.0 LPA",
    "brief": "Architect petabyte-scale distributed data platforms, optimize query latency, and lead data infrastructure teams.",
    "topCompanies": [
      "Accenture",
      "Cognizant",
      "TCS",
      "Capgemini",
      "IBM"
    ],
    "mustHave": [
      "Spark",
      "Hadoop",
      "Big Data",
      "Hive",
      "Python",
      "Data Architecture"
    ],
    "niceToHave": [
      "Scala",
      "Kafka",
      "Cloud Platforms",
      "Nosql",
      "Etl"
    ],
    "roadmap": [
      {
        "phase": 1,
        "title": "Statistical Foundations & Exploratory Data Analysis",
        "weeks": "1\u20133",
        "skills": [
          "Python",
          "Sql",
          "Statistics",
          "Data Analysis"
        ],
        "summary": "Master exploratory data analysis, hypothesis testing, SQL window functions, and pandas wrangling.",
        "resources": [
          {
            "name": "SAS Statistics & Analytics Foundations",
            "url": "https://www.sas.com/en_us/training/courses/statistics.html",
            "tag": "Official"
          },
          {
            "name": "Python for Data Analysis (Wes McKinney)",
            "url": "https://wesmckinney.com/book/",
            "tag": "Book"
          }
        ],
        "project": {
          "title": "Customer Churn & Segment Analysis",
          "brief": "End-to-end exploratory pipeline cleaning 50k customer transactions with statistical significance tests."
        }
      },
      {
        "phase": 2,
        "title": "Applied Machine Learning & Predictive Modeling",
        "weeks": "4\u20136",
        "skills": [
          "Machine Learning",
          "Data Mining",
          "Deep Learning"
        ],
        "summary": "Train ensemble algorithms (XGBoost, Random Forest), hyperparameter tuning, cross-validation, and metrics (AUC-ROC, F1).",
        "resources": [
          {
            "name": "Scikit-Learn Machine Learning Guide",
            "url": "https://scikit-learn.org/stable/",
            "tag": "Docs"
          },
          {
            "name": "SAS Model Studio & Machine Learning",
            "url": "https://www.sas.com/en_us/software/model-studio.html",
            "tag": "Tool"
          }
        ],
        "project": {
          "title": "Multi-Class Risk Scoring Engine",
          "brief": "Build, evaluate, and calibrate a risk classifier with feature importance and SHAP explainability."
        }
      },
      {
        "phase": 3,
        "title": "SAS Enterprise Analytics & Visual Analytics",
        "weeks": "7\u20139",
        "skills": [
          "Sas",
          "Tableau",
          "Dashboard & Storytelling"
        ],
        "summary": "PROC SQL, SAS Macros, enterprise data flows, and interactive dashboard authoring in SAS Visual Analytics.",
        "resources": [
          {
            "name": "SAS Visual Analytics Interactive Tutorials",
            "url": "https://video.sas.com/category/videos/sas-visual-analytics",
            "tag": "Video"
          },
          {
            "name": "Enterprise Reporting Best Practices",
            "url": "https://support.sas.com/",
            "tag": "Guide"
          }
        ],
        "project": {
          "title": "Executive Visual Analytics Dashboard",
          "brief": "Design a C-suite business KPI report linking predictive churn probabilities to revenue impact."
        }
      },
      {
        "phase": 4,
        "title": "Big Data Pipelines & MLOps Deployment",
        "weeks": "10\u201312",
        "skills": [
          "Big Data",
          "Nlp",
          "Spark"
        ],
        "summary": "Deploy models as REST microservices, process streaming analytics with Spark, and monitor drift.",
        "resources": [
          {
            "name": "Distributed Computing with Apache Spark",
            "url": "https://spark.apache.org/docs/latest/",
            "tag": "Docs"
          },
          {
            "name": "MLOps & Model Lifecycle Management",
            "url": "https://ml-ops.org/",
            "tag": "Framework"
          }
        ],
        "project": {
          "title": "End-to-End Enterprise Predictive Service",
          "brief": "Full-stack pipeline ingesting raw batches, running feature transformations, and serving low-latency inference."
        }
      }
    ]
  },
  {
    "id": "data-analyst",
    "title": "Data Analyst",
    "emoji": "\ud83d\udcca",
    "growth": "Foundation",
    "positions": "18,095 openings",
    "openingsCount": 18095,
    "salary": {
      "inr": "\u20b91.4 - 9.7 LPA (Avg \u20b95.7L)",
      "usd": "$7k\u201313k"
    },
    "avgSalaryLPA": 5.7,
    "salaryRange": "1.4 - 9.7 LPA",
    "brief": "Query operational databases, build executive dashboards, and translate raw data into actionable business KPI reports.",
    "topCompanies": [
      "TCS",
      "Accenture",
      "Genpact",
      "Cognizant",
      "Wipro"
    ],
    "mustHave": [
      "Sql",
      "Excel",
      "Data Analysis",
      "Tableau",
      "Analytics",
      "Power Bi"
    ],
    "niceToHave": [
      "Python",
      "Sas",
      "Data Mining",
      "Statistics",
      "Business Analysis"
    ],
    "roadmap": [
      {
        "phase": 1,
        "title": "Business Data Wrangling & Advanced Excel",
        "weeks": "1\u20133",
        "skills": [
          "Excel",
          "Data Analysis",
          "Analytics"
        ],
        "summary": "Master pivot tables, power query, complex lookups, financial modeling, and data hygiene.",
        "resources": [
          {
            "name": "Advanced Excel for Business Analytics",
            "url": "https://support.microsoft.com/excel",
            "tag": "Docs"
          }
        ],
        "project": {
          "title": "Corporate Financial & Operations Model",
          "brief": "Comprehensive multi-tab Excel model evaluating departmental burn rates, revenue variances, and headcount forecasts."
        }
      },
      {
        "phase": 2,
        "title": "Relational Data Extraction with SQL",
        "weeks": "4\u20136",
        "skills": [
          "Sql",
          "Data Analytics",
          "Database Querying"
        ],
        "summary": "Master multi-table joins, subqueries, CTEs, aggregation rollups, and window ranking functions.",
        "resources": [
          {
            "name": "Mode Analytics SQL Tutorial",
            "url": "https://mode.com/sql-tutorial/",
            "tag": "Interactive"
          }
        ],
        "project": {
          "title": "Customer Lifetime Value Cohort Analysis",
          "brief": "SQL queries calculating monthly retention cohorts, churn rates, and LTV segments directly from production tables."
        }
      },
      {
        "phase": 3,
        "title": "BI Dashboards & Executive Storytelling",
        "weeks": "7\u20139",
        "skills": [
          "Tableau",
          "Power Bi",
          "Dashboard & Storytelling"
        ],
        "summary": "Interactive visual design, DAX/LOD expressions, KPI scorecards, visual hierarchy, and executive briefings.",
        "resources": [
          {
            "name": "Tableau Public Visual Gallery & Tutorials",
            "url": "https://public.tableau.com/",
            "tag": "Community"
          }
        ],
        "project": {
          "title": "Executive Business KPI Dashboard",
          "brief": "Interactive multi-device executive dashboard visualizing cross-region performance with drill-down filters."
        }
      },
      {
        "phase": 4,
        "title": "SAS Enterprise Analytics & Automation",
        "weeks": "10\u201312",
        "skills": [
          "Sas",
          "Python",
          "Statistics"
        ],
        "summary": "Automate recurring analysis with Base SAS and Python scripts, statistical hypothesis testing, and trend forecasting.",
        "resources": [
          {
            "name": "SAS Analytics for Business Intelligence",
            "url": "https://www.sas.com/",
            "tag": "Official"
          }
        ],
        "project": {
          "title": "Automated Enterprise Weekly Analytics Pack",
          "brief": "Scheduled SAS/Python job that pulls latest tables, runs statistical outlier checks, and generates executive PDF summaries."
        }
      }
    ]
  },
  {
    "id": "senior-data-analyst",
    "title": "Senior Data Analyst",
    "emoji": "\ud83d\udcc8",
    "growth": "Business Intelligence",
    "positions": "3,825 openings",
    "openingsCount": 3825,
    "salary": {
      "inr": "\u20b91.9 - 13.5 LPA (Avg \u20b99.6L)",
      "usd": "$12k\u201321k"
    },
    "avgSalaryLPA": 9.6,
    "salaryRange": "1.9 - 13.5 LPA",
    "brief": "Direct BI analytics reporting, synthesize cross-functional business metrics, and recommend revenue optimization strategies.",
    "topCompanies": [
      "TCS",
      "Accenture",
      "Deloitte",
      "Cognizant",
      "IBM"
    ],
    "mustHave": [
      "Sql",
      "Data Analysis",
      "Tableau",
      "Python",
      "Sas",
      "Data Analytics"
    ],
    "niceToHave": [
      "Power Bi",
      "Statistics",
      "Machine Learning",
      "Big Data",
      "Business Analysis"
    ],
    "roadmap": [
      {
        "phase": 1,
        "title": "Statistical Foundations & Exploratory Data Analysis",
        "weeks": "1\u20133",
        "skills": [
          "Python",
          "Sql",
          "Statistics",
          "Data Analysis"
        ],
        "summary": "Master exploratory data analysis, hypothesis testing, SQL window functions, and pandas wrangling.",
        "resources": [
          {
            "name": "SAS Statistics & Analytics Foundations",
            "url": "https://www.sas.com/en_us/training/courses/statistics.html",
            "tag": "Official"
          },
          {
            "name": "Python for Data Analysis (Wes McKinney)",
            "url": "https://wesmckinney.com/book/",
            "tag": "Book"
          }
        ],
        "project": {
          "title": "Customer Churn & Segment Analysis",
          "brief": "End-to-end exploratory pipeline cleaning 50k customer transactions with statistical significance tests."
        }
      },
      {
        "phase": 2,
        "title": "Applied Machine Learning & Predictive Modeling",
        "weeks": "4\u20136",
        "skills": [
          "Machine Learning",
          "Data Mining",
          "Deep Learning"
        ],
        "summary": "Train ensemble algorithms (XGBoost, Random Forest), hyperparameter tuning, cross-validation, and metrics (AUC-ROC, F1).",
        "resources": [
          {
            "name": "Scikit-Learn Machine Learning Guide",
            "url": "https://scikit-learn.org/stable/",
            "tag": "Docs"
          },
          {
            "name": "SAS Model Studio & Machine Learning",
            "url": "https://www.sas.com/en_us/software/model-studio.html",
            "tag": "Tool"
          }
        ],
        "project": {
          "title": "Multi-Class Risk Scoring Engine",
          "brief": "Build, evaluate, and calibrate a risk classifier with feature importance and SHAP explainability."
        }
      },
      {
        "phase": 3,
        "title": "SAS Enterprise Analytics & Visual Analytics",
        "weeks": "7\u20139",
        "skills": [
          "Sas",
          "Tableau",
          "Dashboard & Storytelling"
        ],
        "summary": "PROC SQL, SAS Macros, enterprise data flows, and interactive dashboard authoring in SAS Visual Analytics.",
        "resources": [
          {
            "name": "SAS Visual Analytics Interactive Tutorials",
            "url": "https://video.sas.com/category/videos/sas-visual-analytics",
            "tag": "Video"
          },
          {
            "name": "Enterprise Reporting Best Practices",
            "url": "https://support.sas.com/",
            "tag": "Guide"
          }
        ],
        "project": {
          "title": "Executive Visual Analytics Dashboard",
          "brief": "Design a C-suite business KPI report linking predictive churn probabilities to revenue impact."
        }
      },
      {
        "phase": 4,
        "title": "Big Data Pipelines & MLOps Deployment",
        "weeks": "10\u201312",
        "skills": [
          "Big Data",
          "Nlp",
          "Spark"
        ],
        "summary": "Deploy models as REST microservices, process streaming analytics with Spark, and monitor drift.",
        "resources": [
          {
            "name": "Distributed Computing with Apache Spark",
            "url": "https://spark.apache.org/docs/latest/",
            "tag": "Docs"
          },
          {
            "name": "MLOps & Model Lifecycle Management",
            "url": "https://ml-ops.org/",
            "tag": "Framework"
          }
        ],
        "project": {
          "title": "End-to-End Enterprise Predictive Service",
          "brief": "Full-stack pipeline ingesting raw batches, running feature transformations, and serving low-latency inference."
        }
      }
    ]
  },
  {
    "id": "business-analyst",
    "title": "Business Analyst",
    "emoji": "\ud83d\udcbc",
    "growth": "32.8k+ Openings",
    "positions": "32,843 openings",
    "openingsCount": 32843,
    "salary": {
      "inr": "\u20b91.7 - 14.3 LPA (Avg \u20b98.9L)",
      "usd": "$11k\u201320k"
    },
    "avgSalaryLPA": 8.9,
    "salaryRange": "1.7 - 14.3 LPA",
    "brief": "Bridge the gap between business stakeholders and technical teams with requirements modeling and quantitative analytics.",
    "topCompanies": [
      "TCS",
      "Accenture",
      "Genpact",
      "Cognizant",
      "Wipro"
    ],
    "mustHave": [
      "Business Analysis",
      "Sql",
      "Analytics",
      "Excel",
      "Sas",
      "Project Management"
    ],
    "niceToHave": [
      "Tableau",
      "Finance",
      "Data Analysis",
      "Python",
      "Agile"
    ],
    "roadmap": [
      {
        "phase": 1,
        "title": "Business Analysis Fundamentals & Requirements Modeling",
        "weeks": "1\u20133",
        "skills": [
          "Business Analysis",
          "Excel",
          "Analytics"
        ],
        "summary": "Stakeholder elicitation, BRD/FRD drafting, process flow diagrams, gap analysis, and cost-benefit modeling.",
        "resources": [
          {
            "name": "IIBA Business Analysis Body of Knowledge (BABOK)",
            "url": "https://www.iiba.org/",
            "tag": "Standard"
          }
        ],
        "project": {
          "title": "Digital Transformation Business Requirements Document",
          "brief": "Draft complete BRD with functional specifications, user user-stories, and ROI projections for enterprise workflow migration."
        }
      },
      {
        "phase": 2,
        "title": "Data Extraction & Quantitative Modeling with SQL",
        "weeks": "4\u20136",
        "skills": [
          "Sql",
          "Data Analysis",
          "Finance"
        ],
        "summary": "Write complex queries, evaluate business unit profitability, unit economics, and operational bottlenecks.",
        "resources": [
          {
            "name": "SQL for Business Marketers and Analysts",
            "url": "https://mode.com/sql-tutorial/",
            "tag": "Guide"
          }
        ],
        "project": {
          "title": "Operational Bottleneck Diagnostic Report",
          "brief": "Extract transaction logs to isolate processing latency points across global fulfillment centers."
        }
      },
      {
        "phase": 3,
        "title": "Enterprise SAS Analytics & BI Reporting",
        "weeks": "7\u20139",
        "skills": [
          "Sas",
          "Tableau",
          "Project Management"
        ],
        "summary": "Use SAS tools to analyze commercial risk, build Tableau reports, and steer Agile sprint backlogs.",
        "resources": [
          {
            "name": "SAS Visual Analytics for Business Executives",
            "url": "https://www.sas.com/",
            "tag": "Tutorial"
          }
        ],
        "project": {
          "title": "Commercial Viability & Market Opportunity Model",
          "brief": "Market sizing analysis linking pricing elasticity scenarios to gross margin projections."
        }
      },
      {
        "phase": 4,
        "title": "Executive Storytelling & Strategic Decision Framing",
        "weeks": "10\u201312",
        "skills": [
          "Executive Storytelling",
          "Python",
          "Strategy"
        ],
        "summary": "Frame high-stakes recommendations for C-suite leadership, evaluate M&A data, and negotiate trade-offs.",
        "resources": [
          {
            "name": "Storytelling with Data (Cole Nussbaumer Knaflic)",
            "url": "https://www.storytellingwithdata.com/",
            "tag": "Book"
          }
        ],
        "project": {
          "title": "C-Suite Strategic Investment Briefing",
          "brief": "Synthesize complex quantitative findings into a 10-slide executive deck with decisive capital allocation recommendations."
        }
      }
    ]
  },
  {
    "id": "senior-business-analyst",
    "title": "Senior Business Analyst",
    "emoji": "\ud83c\udfaf",
    "growth": "Strategic Analytics",
    "positions": "14,115 openings",
    "openingsCount": 14115,
    "salary": {
      "inr": "\u20b93.0 - 19.0 LPA (Avg \u20b913.2L)",
      "usd": "$16k\u201329k"
    },
    "avgSalaryLPA": 13.2,
    "salaryRange": "3.0 - 19.0 LPA",
    "brief": "Drive digital transformation programs, evaluate commercial feasibility, and architect enterprise analytics solutions.",
    "topCompanies": [
      "TCS",
      "Accenture",
      "Deloitte",
      "Cognizant",
      "IBM"
    ],
    "mustHave": [
      "Business Analysis",
      "Analytics",
      "Sql",
      "Sas",
      "Finance",
      "Executive Storytelling"
    ],
    "niceToHave": [
      "Tableau",
      "Project Management",
      "Data Analysis",
      "Strategy",
      "Python"
    ],
    "roadmap": [
      {
        "phase": 1,
        "title": "Statistical Foundations & Exploratory Data Analysis",
        "weeks": "1\u20133",
        "skills": [
          "Python",
          "Sql",
          "Statistics",
          "Data Analysis"
        ],
        "summary": "Master exploratory data analysis, hypothesis testing, SQL window functions, and pandas wrangling.",
        "resources": [
          {
            "name": "SAS Statistics & Analytics Foundations",
            "url": "https://www.sas.com/en_us/training/courses/statistics.html",
            "tag": "Official"
          },
          {
            "name": "Python for Data Analysis (Wes McKinney)",
            "url": "https://wesmckinney.com/book/",
            "tag": "Book"
          }
        ],
        "project": {
          "title": "Customer Churn & Segment Analysis",
          "brief": "End-to-end exploratory pipeline cleaning 50k customer transactions with statistical significance tests."
        }
      },
      {
        "phase": 2,
        "title": "Applied Machine Learning & Predictive Modeling",
        "weeks": "4\u20136",
        "skills": [
          "Machine Learning",
          "Data Mining",
          "Deep Learning"
        ],
        "summary": "Train ensemble algorithms (XGBoost, Random Forest), hyperparameter tuning, cross-validation, and metrics (AUC-ROC, F1).",
        "resources": [
          {
            "name": "Scikit-Learn Machine Learning Guide",
            "url": "https://scikit-learn.org/stable/",
            "tag": "Docs"
          },
          {
            "name": "SAS Model Studio & Machine Learning",
            "url": "https://www.sas.com/en_us/software/model-studio.html",
            "tag": "Tool"
          }
        ],
        "project": {
          "title": "Multi-Class Risk Scoring Engine",
          "brief": "Build, evaluate, and calibrate a risk classifier with feature importance and SHAP explainability."
        }
      },
      {
        "phase": 3,
        "title": "SAS Enterprise Analytics & Visual Analytics",
        "weeks": "7\u20139",
        "skills": [
          "Sas",
          "Tableau",
          "Dashboard & Storytelling"
        ],
        "summary": "PROC SQL, SAS Macros, enterprise data flows, and interactive dashboard authoring in SAS Visual Analytics.",
        "resources": [
          {
            "name": "SAS Visual Analytics Interactive Tutorials",
            "url": "https://video.sas.com/category/videos/sas-visual-analytics",
            "tag": "Video"
          },
          {
            "name": "Enterprise Reporting Best Practices",
            "url": "https://support.sas.com/",
            "tag": "Guide"
          }
        ],
        "project": {
          "title": "Executive Visual Analytics Dashboard",
          "brief": "Design a C-suite business KPI report linking predictive churn probabilities to revenue impact."
        }
      },
      {
        "phase": 4,
        "title": "Big Data Pipelines & MLOps Deployment",
        "weeks": "10\u201312",
        "skills": [
          "Big Data",
          "Nlp",
          "Spark"
        ],
        "summary": "Deploy models as REST microservices, process streaming analytics with Spark, and monitor drift.",
        "resources": [
          {
            "name": "Distributed Computing with Apache Spark",
            "url": "https://spark.apache.org/docs/latest/",
            "tag": "Docs"
          },
          {
            "name": "MLOps & Model Lifecycle Management",
            "url": "https://ml-ops.org/",
            "tag": "Framework"
          }
        ],
        "project": {
          "title": "End-to-End Enterprise Predictive Service",
          "brief": "Full-stack pipeline ingesting raw batches, running feature transformations, and serving low-latency inference."
        }
      }
    ]
  },
  {
    "id": "machine-learning-engineer",
    "title": "Machine Learning Engineer",
    "emoji": "\ud83e\udd16",
    "growth": "AI Production",
    "positions": "964 openings",
    "openingsCount": 964,
    "salary": {
      "inr": "\u20b93.6 - 14.5 LPA (Avg \u20b99.9L)",
      "usd": "$12k\u201322k"
    },
    "avgSalaryLPA": 9.9,
    "salaryRange": "3.6 - 14.5 LPA",
    "brief": "Productionize AI/ML models at scale, implement low-latency inferencing, and maintain automated retraining loops.",
    "topCompanies": [
      "TCS",
      "Accenture",
      "IBM",
      "Cognizant",
      "Amazon"
    ],
    "mustHave": [
      "Machine Learning",
      "Python",
      "Deep Learning",
      "Sql",
      "Data Science",
      "Nlp"
    ],
    "niceToHave": [
      "Java",
      "C++",
      "Cloud Platforms",
      "Big Data",
      "Spark"
    ],
    "roadmap": [
      {
        "phase": 1,
        "title": "Statistical Foundations & Exploratory Data Analysis",
        "weeks": "1\u20133",
        "skills": [
          "Python",
          "Sql",
          "Statistics",
          "Data Analysis"
        ],
        "summary": "Master exploratory data analysis, hypothesis testing, SQL window functions, and pandas wrangling.",
        "resources": [
          {
            "name": "SAS Statistics & Analytics Foundations",
            "url": "https://www.sas.com/en_us/training/courses/statistics.html",
            "tag": "Official"
          },
          {
            "name": "Python for Data Analysis (Wes McKinney)",
            "url": "https://wesmckinney.com/book/",
            "tag": "Book"
          }
        ],
        "project": {
          "title": "Customer Churn & Segment Analysis",
          "brief": "End-to-end exploratory pipeline cleaning 50k customer transactions with statistical significance tests."
        }
      },
      {
        "phase": 2,
        "title": "Applied Machine Learning & Predictive Modeling",
        "weeks": "4\u20136",
        "skills": [
          "Machine Learning",
          "Data Mining",
          "Deep Learning"
        ],
        "summary": "Train ensemble algorithms (XGBoost, Random Forest), hyperparameter tuning, cross-validation, and metrics (AUC-ROC, F1).",
        "resources": [
          {
            "name": "Scikit-Learn Machine Learning Guide",
            "url": "https://scikit-learn.org/stable/",
            "tag": "Docs"
          },
          {
            "name": "SAS Model Studio & Machine Learning",
            "url": "https://www.sas.com/en_us/software/model-studio.html",
            "tag": "Tool"
          }
        ],
        "project": {
          "title": "Multi-Class Risk Scoring Engine",
          "brief": "Build, evaluate, and calibrate a risk classifier with feature importance and SHAP explainability."
        }
      },
      {
        "phase": 3,
        "title": "SAS Enterprise Analytics & Visual Analytics",
        "weeks": "7\u20139",
        "skills": [
          "Sas",
          "Tableau",
          "Dashboard & Storytelling"
        ],
        "summary": "PROC SQL, SAS Macros, enterprise data flows, and interactive dashboard authoring in SAS Visual Analytics.",
        "resources": [
          {
            "name": "SAS Visual Analytics Interactive Tutorials",
            "url": "https://video.sas.com/category/videos/sas-visual-analytics",
            "tag": "Video"
          },
          {
            "name": "Enterprise Reporting Best Practices",
            "url": "https://support.sas.com/",
            "tag": "Guide"
          }
        ],
        "project": {
          "title": "Executive Visual Analytics Dashboard",
          "brief": "Design a C-suite business KPI report linking predictive churn probabilities to revenue impact."
        }
      },
      {
        "phase": 4,
        "title": "Big Data Pipelines & MLOps Deployment",
        "weeks": "10\u201312",
        "skills": [
          "Big Data",
          "Nlp",
          "Spark"
        ],
        "summary": "Deploy models as REST microservices, process streaming analytics with Spark, and monitor drift.",
        "resources": [
          {
            "name": "Distributed Computing with Apache Spark",
            "url": "https://spark.apache.org/docs/latest/",
            "tag": "Docs"
          },
          {
            "name": "MLOps & Model Lifecycle Management",
            "url": "https://ml-ops.org/",
            "tag": "Framework"
          }
        ],
        "project": {
          "title": "End-to-End Enterprise Predictive Service",
          "brief": "Full-stack pipeline ingesting raw batches, running feature transformations, and serving low-latency inference."
        }
      }
    ]
  },
  {
    "id": "data-architect",
    "title": "Data Architect",
    "emoji": "\ud83c\udfdb\ufe0f",
    "growth": "Enterprise Lead",
    "positions": "528 openings",
    "openingsCount": 528,
    "salary": {
      "inr": "\u20b911.2 - 34.0 LPA (Avg \u20b925.1L)",
      "usd": "$30k\u201355k"
    },
    "avgSalaryLPA": 25.1,
    "salaryRange": "11.2 - 34.0 LPA",
    "brief": "Design modern data lakehouse architectures, define enterprise data governance, and steer multi-cloud migrations.",
    "topCompanies": [
      "TCS",
      "Cognizant",
      "Accenture",
      "IBM",
      "Capgemini"
    ],
    "mustHave": [
      "Big Data",
      "Hadoop",
      "Spark",
      "Sql",
      "Data Modeling",
      "Cloud Platforms"
    ],
    "niceToHave": [
      "Java",
      "Hive",
      "Nosql",
      "Python",
      "Enterprise Governance"
    ],
    "roadmap": [
      {
        "phase": 1,
        "title": "Statistical Foundations & Exploratory Data Analysis",
        "weeks": "1\u20133",
        "skills": [
          "Python",
          "Sql",
          "Statistics",
          "Data Analysis"
        ],
        "summary": "Master exploratory data analysis, hypothesis testing, SQL window functions, and pandas wrangling.",
        "resources": [
          {
            "name": "SAS Statistics & Analytics Foundations",
            "url": "https://www.sas.com/en_us/training/courses/statistics.html",
            "tag": "Official"
          },
          {
            "name": "Python for Data Analysis (Wes McKinney)",
            "url": "https://wesmckinney.com/book/",
            "tag": "Book"
          }
        ],
        "project": {
          "title": "Customer Churn & Segment Analysis",
          "brief": "End-to-end exploratory pipeline cleaning 50k customer transactions with statistical significance tests."
        }
      },
      {
        "phase": 2,
        "title": "Applied Machine Learning & Predictive Modeling",
        "weeks": "4\u20136",
        "skills": [
          "Machine Learning",
          "Data Mining",
          "Deep Learning"
        ],
        "summary": "Train ensemble algorithms (XGBoost, Random Forest), hyperparameter tuning, cross-validation, and metrics (AUC-ROC, F1).",
        "resources": [
          {
            "name": "Scikit-Learn Machine Learning Guide",
            "url": "https://scikit-learn.org/stable/",
            "tag": "Docs"
          },
          {
            "name": "SAS Model Studio & Machine Learning",
            "url": "https://www.sas.com/en_us/software/model-studio.html",
            "tag": "Tool"
          }
        ],
        "project": {
          "title": "Multi-Class Risk Scoring Engine",
          "brief": "Build, evaluate, and calibrate a risk classifier with feature importance and SHAP explainability."
        }
      },
      {
        "phase": 3,
        "title": "SAS Enterprise Analytics & Visual Analytics",
        "weeks": "7\u20139",
        "skills": [
          "Sas",
          "Tableau",
          "Dashboard & Storytelling"
        ],
        "summary": "PROC SQL, SAS Macros, enterprise data flows, and interactive dashboard authoring in SAS Visual Analytics.",
        "resources": [
          {
            "name": "SAS Visual Analytics Interactive Tutorials",
            "url": "https://video.sas.com/category/videos/sas-visual-analytics",
            "tag": "Video"
          },
          {
            "name": "Enterprise Reporting Best Practices",
            "url": "https://support.sas.com/",
            "tag": "Guide"
          }
        ],
        "project": {
          "title": "Executive Visual Analytics Dashboard",
          "brief": "Design a C-suite business KPI report linking predictive churn probabilities to revenue impact."
        }
      },
      {
        "phase": 4,
        "title": "Big Data Pipelines & MLOps Deployment",
        "weeks": "10\u201312",
        "skills": [
          "Big Data",
          "Nlp",
          "Spark"
        ],
        "summary": "Deploy models as REST microservices, process streaming analytics with Spark, and monitor drift.",
        "resources": [
          {
            "name": "Distributed Computing with Apache Spark",
            "url": "https://spark.apache.org/docs/latest/",
            "tag": "Docs"
          },
          {
            "name": "MLOps & Model Lifecycle Management",
            "url": "https://ml-ops.org/",
            "tag": "Framework"
          }
        ],
        "project": {
          "title": "End-to-End Enterprise Predictive Service",
          "brief": "Full-stack pipeline ingesting raw batches, running feature transformations, and serving low-latency inference."
        }
      }
    ]
  }
];

export const PERSONAS = [
  {
    "id": "ananya",
    "name": "Ananya Rao",
    "roleTitle": "Junior Analytics Intern",
    "targetRole": "data-scientist",
    "skills": [
      "Python",
      "Sql",
      "Excel",
      "Data Analysis",
      "Statistics"
    ],
    "bio": "Recent math-stats graduate aiming for Data Scientist roles at TCS or IBM."
  },
  {
    "id": "rohan",
    "name": "Rohan Mehta",
    "roleTitle": "BI & Reporting Analyst",
    "targetRole": "data-analyst",
    "skills": [
      "Sql",
      "Excel",
      "Data Analysis",
      "Tableau",
      "Power Bi",
      "Sas"
    ],
    "bio": "3 yrs experience in reporting, upgrading skill profile for Senior Data Analyst / BA track."
  },
  {
    "id": "vikram",
    "name": "Vikram Singhania",
    "roleTitle": "Software Engineer",
    "targetRole": "data-engineer",
    "skills": [
      "Java",
      "Python",
      "Sql",
      "Etl",
      "Linux"
    ],
    "bio": "Backend developer targeting Big Data & Hadoop pipelines at Accenture or Cognizant."
  }
];

// Complete list of distinct validated skills from the SAS dataset
export const ALL_SKILLS = Array.from(new Set([
  ...JOB_ROLES.flatMap(r => [...r.mustHave, ...r.niceToHave]),
  ...TRENDING_SKILLS.map(s => s.name),
  'Python', 'Sql', 'Sas', 'Machine Learning', 'Data Analysis', 'Hadoop',
  'Spark', 'Tableau', 'Power Bi', 'Excel', 'Deep Learning', 'Big Data',
  'Hive', 'Nosql', 'Data Mining', 'Nlp', 'Java', 'Scala', 'Statistics',
  'Business Analysis', 'Finance', 'Etl', 'Data Modeling', 'Cloud Platforms',
  'Dashboard & Storytelling', 'Executive Storytelling'
])).sort();

/**
 * Predict Junior Data Scientist High Salary Hike probability using empirical logistic model
 * Trained on N=139 Junior Data Scientists from JDS Skill Traits.xlsx
 */
export function predictJdsHike(scores) {
  const {
    big_data = 3.85,
    maths_stats = 4.29,
    coding = 4.27,
    ai_ml = 4.57,
    storytelling = 4.36
  } = scores;

  const w = SAS_JDS_MODEL.weights;
  const b = SAS_JDS_MODEL.intercept;

  // Logit linear combination
  const z = b +
    (w.big_data_skills * big_data) +
    (w['maths-stats_skills'] * maths_stats) +
    (w.coding_skills * coding) +
    (w.ai_and_ml_skills * ai_ml) +
    (w.dashboard_and_storytelling_skills * storytelling);

  // Standard sigmoid
  const prob = 1 / (1 + Math.exp(-z));
  return Math.min(0.99, Math.max(0.01, prob));
}

/**
 * Predict Senior Customer-Facing Data Scientist Success probability using empirical logistic model
 * Trained on N=161 Senior Data Scientists from SDS Personality Traits.xlsx
 */
export function predictSdsSuccess(scores) {
  const {
    neuroticism = 36.2,
    extraversion = 43.2,
    openness = 41.3,
    agreeableness = 44.6,
    conscientiousness = 45.2
  } = scores;

  const w = SAS_SDS_MODEL.weights;
  const b = SAS_SDS_MODEL.intercept;

  const z = b +
    (w.neuroticism * neuroticism) +
    (w.extraversion * extraversion) +
    (w.openness_to_experience * openness) +
    (w.agreeableness * agreeableness) +
    (w.conscientiousness * conscientiousness);

  const prob = 1 / (1 + Math.exp(-z));
  return Math.min(0.99, Math.max(0.01, prob));
}
