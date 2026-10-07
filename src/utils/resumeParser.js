/**
 * SAS Ecosystem Resume Scanner & Skill Extractor
 * Mapped to the SAS Hackathon skill taxonomy from Analytics Jobs.csv & DataScience Jobs.csv
 */

const PATTERNS = [
  // Enterprise Analytics & SAS
  { name: "Sas", cat: "Enterprise Analytics", re: /\b(sas|base\s*sas|sas\s*viya|proc\s*sql|sas\s*macro|enterprise\s*guide|sas\s*visual\s*analytics)\b/i },
  { name: "Tableau", cat: "BI & Visualization", re: /\btableau\b/i },
  { name: "Power Bi", cat: "BI & Visualization", re: /\bpower\s*bi\b/i },
  { name: "Dashboard & Storytelling", cat: "BI & Visualization", re: /\b(dashboard|storytelling|data\s*storytelling|executive\s*reporting|kpi\s*reporting)\b/i },
  { name: "Excel", cat: "BI & Visualization", re: /\b(excel|advanced\s*excel|vlookup|pivot\s*tables|power\s*query)\b/i },

  // Programming & Querying
  { name: "Python", cat: "Programming & Querying", re: /\b(python|pandas|numpy|scipy)\b/i },
  { name: "Sql", cat: "Programming & Querying", re: /\b(sql|mysql|postgresql|plsql|oracle\s*sql|tsql)\b/i },
  { name: "R", cat: "Programming & Querying", re: /\b(r\s*programming|\br\b\s*language|ggplot2|tidyverse)\b/i },
  { name: "Java", cat: "Programming & Querying", re: /\bjava\b/i },
  { name: "Scala", cat: "Programming & Querying", re: /\bscala\b/i },

  // AI & Machine Learning
  { name: "Machine Learning", cat: "AI & Data Science", re: /\b(machine\s*learning|scikit-learn|random\s*forest|xgboost|supervised\s*learning)\b/i },
  { name: "Deep Learning", cat: "AI & Data Science", re: /\b(deep\s*learning|neural\s*networks|tensorflow|pytorch|keras)\b/i },
  { name: "Data Science", cat: "AI & Data Science", re: /\bdata\s*science\b/i },
  { name: "Data Mining", cat: "AI & Data Science", re: /\bdata\s*mining\b/i },
  { name: "Nlp", cat: "AI & Data Science", re: /\b(nlp|natural\s*language\s*processing|bert|spacy|nltk|transformers)\b/i },
  { name: "Statistics", cat: "AI & Data Science", re: /\b(statistics|statistical\s*modeling|hypothesis\s*testing|regression|anova|probability)\b/i },

  // Big Data & Data Engineering
  { name: "Big Data", cat: "Big Data & Engineering", re: /\bbig\s*data\b/i },
  { name: "Hadoop", cat: "Big Data & Engineering", re: /\b(hadoop|hdfs|mapreduce)\b/i },
  { name: "Spark", cat: "Big Data & Engineering", re: /\b(spark|pyspark|spark\s*streaming)\b/i },
  { name: "Hive", cat: "Big Data & Engineering", re: /\bhive\b/i },
  { name: "Nosql", cat: "Big Data & Engineering", re: /\b(nosql|mongodb|cassandra|hbase)\b/i },
  { name: "Etl", cat: "Big Data & Engineering", re: /\b(etl|data\s*pipelines|informatica|talend|airflow)\b/i },
  { name: "Cloud Platforms", cat: "Big Data & Engineering", re: /\b(aws|azure|gcp|google\s*cloud|cloud)\b/i },

  // Business & Analytics Foundations
  { name: "Data Analysis", cat: "Business & Analytics", re: /\bdata\s*analysis\b/i },
  { name: "Analytics", cat: "Business & Analytics", re: /\banalytics\b/i },
  { name: "Business Analysis", cat: "Business & Analytics", re: /\b(business\s*analysis|business\s*analyst|brd|frd|gap\s*analysis)\b/i },
  { name: "Finance", cat: "Business & Analytics", re: /\b(finance|financial\s*analysis|financial\s*modeling|valuation)\b/i },
  { name: "Project Management", cat: "Business & Analytics", re: /\b(project\s*management|agile|scrum|jira)\b/i },
];

export function parseResume(text) {
  if (!text?.trim()) return { skills: [], cats: {}, ats: 0 };
  const skills = [];
  const cats = {};
  for (const p of PATTERNS) {
    if (p.re.test(text)) {
      skills.push(p.name);
      (cats[p.cat] ??= []).push(p.name);
    }
  }
  const ats = Math.min(100, Math.round((skills.length / 8) * 100));
  return { skills, cats, ats };
}

export const SAMPLE_RESUME = `Priya Sundaram — Data Analytics Specialist (Bengaluru)
priya.sundaram@analytics-hub.in | LinkedIn: /in/priyasundaram | GitHub: /priyasundaram

SUMMARY:
Data Analytics & Machine Learning practitioner with 3+ years experience driving commercial insights. Proficient in Python, SQL, SAS, and Tableau. Experienced in predictive statistical modeling, exploratory data analysis, and building executive dashboards for retail banking clients.

CORE SKILLS:
- Languages & Tools: Python (Pandas, NumPy, Scikit-Learn), SQL, SAS (Base SAS, PROC SQL, Macros), R, Advanced Excel (VLOOKUP, Pivot)
- Data Science & ML: Machine Learning, Statistical Modeling, Hypothesis Testing, Data Mining, Regression, Clustering
- Big Data & Pipelines: Big Data concepts, Hadoop, Spark basics, ETL pipelines
- Visualization: Tableau Public, Power BI, Executive Dashboard & Storytelling

PROJECT HIGHLIGHTS:
1. Customer Churn Prediction Engine (Python, Scikit-Learn, SAS):
   Engineered predictive churn model on 45,000 retail banking accounts achieving 0.88 AUC-ROC. Automated monthly scoring pipeline with PROC SQL and Python scripts.

2. C-Suite Financial Performance Dashboard (Tableau, SQL):
   Constructed multi-region executive KPI dashboard consolidating cross-border transactional data. Reduced weekly reporting turnaround time by 65%.`;
