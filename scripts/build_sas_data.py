import os
import json
import re
from collections import Counter
import pandas as pd
import numpy as np
from sklearn.linear_model import LogisticRegression

sas_dir = 'SAS Data Problem Statement and Instructions Hackathon'

print('Loading datasets...')

# 1. JDS Skill Traits
df_jds = pd.read_excel(f'{sas_dir}/JDS Skill Traits.xlsx')
jds_features = ['big_data_skills', 'maths-stats_skills', 'coding_skills', 'ai_and_ml_skills', 'dashboard_and_storytelling_skills']
X_jds = df_jds[jds_features]
y_jds = df_jds['salary_hike_high_or_low']
clf_jds = LogisticRegression()
clf_jds.fit(X_jds, y_jds)

jds_stats = {}
for col in jds_features:
    jds_stats[col] = {
        'mean': round(float(df_jds[col].mean()), 2),
        'median': round(float(df_jds[col].median()), 2),
        'min': round(float(df_jds[col].min()), 2),
        'max': round(float(df_jds[col].max()), 2),
        'q25': round(float(df_jds[col].quantile(0.25)), 2),
        'q75': round(float(df_jds[col].quantile(0.75)), 2),
        'lowMean': round(float(df_jds[df_jds['salary_hike_high_or_low'] == 0][col].mean()), 2),
        'highMean': round(float(df_jds[df_jds['salary_hike_high_or_low'] == 1][col].mean()), 2)
    }

jds_model = {
    'intercept': round(float(clf_jds.intercept_[0]), 4),
    'weights': {k: round(float(w), 4) for k, w in zip(jds_features, clf_jds.coef_[0])},
    'totalSample': len(df_jds),
    'highHikeRate': round(float(y_jds.mean()) * 100, 1),
    'stats': jds_stats
}

# 2. SDS Personality Traits
df_sds = pd.read_excel(f'{sas_dir}/SDS Personality Traits.xlsx')
df_sds.columns = [c.strip() for c in df_sds.columns]
sds_features = ['neuroticism', 'extraversion', 'openness_to_experience', 'agreeableness', 'conscientiousness']
X_sds = df_sds[sds_features]
y_sds = df_sds['success_ classification_ high_low']
clf_sds = LogisticRegression()
clf_sds.fit(X_sds, y_sds)

sds_stats = {}
for col in sds_features:
    sds_stats[col] = {
        'mean': round(float(df_sds[col].mean()), 1),
        'median': round(float(df_sds[col].median()), 1),
        'min': round(float(df_sds[col].min()), 1),
        'max': round(float(df_sds[col].max()), 1),
        'q25': round(float(df_sds[col].quantile(0.25)), 1),
        'q75': round(float(df_sds[col].quantile(0.75)), 1),
        'lowMean': round(float(df_sds[df_sds['success_ classification_ high_low'] == 0][col].mean()), 1),
        'highMean': round(float(df_sds[df_sds['success_ classification_ high_low'] == 1][col].mean()), 1)
    }

sds_model = {
    'intercept': round(float(clf_sds.intercept_[0]), 4),
    'weights': {k: round(float(w), 4) for k, w in zip(sds_features, clf_sds.coef_[0])},
    'totalSample': len(df_sds),
    'highSuccessRate': round(float(y_sds.mean()) * 100, 1),
    'stats': sds_stats
}

# 3. Data Science Jobs
df_ds = pd.read_csv(f'{sas_dir}/DataScience Jobs.csv')

def parse_sal(val):
    if pd.isna(val):
        return None
    s = str(val).strip().upper().replace('L', '')
    try:
        return float(s)
    except:
        return None

df_ds['avg_num'] = df_ds['avg_salary'].apply(parse_sal)
df_ds['min_num'] = df_ds['min_salary'].apply(parse_sal)
df_ds['max_num'] = df_ds['max_salary'].apply(parse_sal)

roles_data = {}
for role, grp in df_ds.groupby('job_title'):
    roles_data[role] = {
        'title': role,
        'postingsCount': int(len(grp)),
        'totalOpenings': int(grp['num_of_jobs'].sum()),
        'medianMinExp': float(grp['min_experience'].median()),
        'avgSalary': round(float(grp['avg_num'].mean()), 1),
        'minSalary': round(float(grp['min_num'].mean()), 1),
        'maxSalary': round(float(grp['max_num'].mean()), 1),
        'topCompanies': grp.sort_values('num_of_jobs', ascending=False)['company_name'].head(5).tolist()
    }

# Top companies
top_companies = []
for comp, grp in df_ds.groupby('company_name'):
    top_companies.append({
        'name': comp,
        'openings': int(grp['num_of_jobs'].sum()),
        'rolesCount': int(len(grp)),
        'avgSalary': round(float(grp['avg_num'].mean()), 1) if not grp['avg_num'].isna().all() else 0,
        'minSalary': round(float(grp['min_num'].min()), 1) if not grp['min_num'].isna().all() else 0,
        'maxSalary': round(float(grp['max_num'].max()), 1) if not grp['max_num'].isna().all() else 0,
        'roles': grp['job_title'].unique().tolist()
    })
top_companies.sort(key=lambda x: x['openings'], reverse=True)

# 4. Analytics Jobs (15,841 rows)
df_aj = pd.read_csv(f'{sas_dir}/Analytics Jobs.csv')
total_aj = len(df_aj)

# Location breakdown
loc_counter = Counter()
for l in df_aj['location'].dropna():
    primary = re.split(r'[,|/]', str(l))[0].strip()
    if primary:
        loc_counter[primary] += 1

locations_summary = []
for loc, cnt in loc_counter.most_common(10):
    locations_summary.append({
        'city': loc,
        'count': cnt,
        'percentage': round(cnt * 100 / total_aj, 1)
    })

# Salary tiers
sal_counter = Counter(df_aj['salary'].dropna().astype(str).str.strip())
salary_tiers = []
sal_order = ['0to3', '3to6', '6to10', '10to15', '15to25', '25to50']
for s in sal_order:
    cnt = sal_counter.get(s, 0)
    salary_tiers.append({
        'band': s.replace('to', ' - ') + ' LPA',
        'raw': s,
        'count': cnt,
        'percentage': round(cnt * 100 / total_aj, 1)
    })

# Experience breakdown
exp_counter = Counter()
for e in df_aj['experience'].dropna():
    e_str = str(e).strip()
    exp_counter[e_str] += 1
top_exp = [{'exp': k, 'count': v, 'pct': round(v * 100 / total_aj, 1)} for k, v in exp_counter.most_common(8)]

# Sample jobs (30 real jobs)
sample_jobs = []
for idx, r in df_aj.dropna(subset=['job_desig', 'key_skills']).sample(35, random_state=42).iterrows():
    s_raw = str(r['salary']).strip()
    sal_display = s_raw.replace('to', ' - ') + ' LPA' if (s_raw and s_raw.lower() != 'nan') else 'Industry Standard'
    sample_jobs.append({
        'id': int(r['s_no']) if str(r['s_no']).isdigit() else int(idx),
        'designation': str(r['job_desig']).strip(),
        'experience': str(r['experience']).strip(),
        'salary': sal_display,
        'location': str(r['location']).strip(),
        'skills': [s.strip().title() for s in re.split(r'[,|;/\n•]', str(r['key_skills'])) if len(s.strip()) > 1][:6],
        'description': str(r['job_description'])[:220].strip() + '...'
    })

# Skill frequency across all 15.8k jobs
def clean_skill(s):
    s = s.strip()
    if not s or len(s) < 2 or len(s) > 30:
        return None
    s = re.sub(r'^[•\-\*\.]+', '', s).strip()
    if s.lower() in ['etc', 'etc.', 'na', 'n/a', 'none', 'and', 'or', 'to', 'in', 'with', '...', 'experience']:
        return None
    return s

all_skills_counter = Counter()
for s in df_aj['key_skills'].dropna():
    tokens = [clean_skill(p) for p in re.split(r'[,|;/\n•]', str(s))]
    for t in set([t.title() for t in tokens if t]):
        all_skills_counter[t] += 1

category_map = {
    'Sql': 'Database & Querying',
    'Python': 'Programming & Scripting',
    'Sas': 'Enterprise Analytics & SAS',
    'Machine Learning': 'AI & Machine Learning',
    'Analytics': 'Analytics Foundations',
    'Data Analysis': 'Analytics Foundations',
    'Business Analysis': 'Business & Domain',
    'Java': 'Software Engineering',
    'Finance': 'Business & Domain',
    'Hadoop': 'Big Data & Cloud',
    'Spark': 'Big Data & Cloud',
    'Tableau': 'Visualization & BI',
    'Power Bi': 'Visualization & BI',
    'Excel': 'Analytics Foundations',
    'Deep Learning': 'AI & Machine Learning',
    'Big Data': 'Big Data & Cloud',
    'Hive': 'Big Data & Cloud',
    'Nosql': 'Database & Querying',
    'Data Mining': 'AI & Machine Learning',
    'Nlp': 'AI & Machine Learning',
    'Scala': 'Big Data & Cloud',
    'R': 'Statistical Computing',
    'Statistics': 'Mathematics & Statistics',
    'Etl': 'Data Engineering',
    'Aws': 'Cloud Platforms',
    'Cloud': 'Cloud Platforms',
    'Oracle': 'Database & Querying',
    'Linux': 'Software Engineering',
    'Data Science': 'AI & Machine Learning'
}

top_skills_list = []
for s, cnt in all_skills_counter.most_common(50):
    if s in ['Digital Marketing', 'Seo', 'Sales', 'Accounting', 'Outsourcing', 'Marketing', 'Html', 'Javascript', 'Business Development', 'Auditing', 'C++', 'Financial Analysis']:
        continue
    top_skills_list.append({
        'name': s,
        'count': cnt,
        'frequencyPct': round(cnt * 100 / total_aj, 1),
        'category': category_map.get(s, 'Technical Analytics')
    })

# Curated role requirements mapping based on SAS datasets
role_curated_skills = {
    'Data Scientist': {
        'core': ['Python', 'Machine Learning', 'Sql', 'Data Analysis', 'Deep Learning', 'Statistics'],
        'recommended': ['Sas', 'Nlp', 'Data Mining', 'Big Data', 'Tableau'],
        'description': 'Extract insights, train predictive ML models, and transform business challenges into algorithmic solutions.',
        'avgSalaryLPA': 13.5,
        'salaryRange': '4.5 - 21.5 LPA',
        'openings': 9051,
        'topHiring': ['TCS', 'Accenture', 'IBM', 'Cognizant', 'Capgemini']
    },
    'Senior Data Scientist': {
        'core': ['Machine Learning', 'Python', 'Big Data', 'Deep Learning', 'Sas', 'Statistical Modeling'],
        'recommended': ['Spark', 'Hadoop', 'Cloud Architecture', 'Executive Storytelling', 'Nlp'],
        'description': 'Lead enterprise AI strategy, architect scalable ML pipelines, and communicate strategic ROI to C-suite stakeholders.',
        'avgSalaryLPA': 22.3,
        'salaryRange': '8.5 - 30.0 LPA',
        'openings': 2129,
        'topHiring': ['Accenture', 'IBM', 'TCS', 'Amazon', 'Deloitte']
    },
    'Data Engineer': {
        'core': ['Hadoop', 'Spark', 'Sql', 'Python', 'Big Data', 'Etl'],
        'recommended': ['Hive', 'Java', 'Scala', 'Nosql', 'Cloud Platforms'],
        'description': 'Construct robust data pipelines, orchestrate distributed compute clusters, and ensure high-throughput data reliability.',
        'avgSalaryLPA': 11.8,
        'salaryRange': '2.1 - 17.9 LPA',
        'openings': 8044,
        'topHiring': ['Cognizant', 'TCS', 'Accenture', 'Wipro', 'L&T Infotech']
    },
    'Senior Data Engineer': {
        'core': ['Spark', 'Hadoop', 'Big Data', 'Hive', 'Python', 'Data Architecture'],
        'recommended': ['Scala', 'Kafka', 'Cloud Platforms', 'Nosql', 'Etl'],
        'description': 'Architect petabyte-scale distributed data platforms, optimize query latency, and lead data infrastructure teams.',
        'avgSalaryLPA': 19.0,
        'salaryRange': '3.4 - 25.0 LPA',
        'openings': 3411,
        'topHiring': ['Accenture', 'Cognizant', 'TCS', 'Capgemini', 'IBM']
    },
    'Data Analyst': {
        'core': ['Sql', 'Excel', 'Data Analysis', 'Tableau', 'Analytics', 'Power Bi'],
        'recommended': ['Python', 'Sas', 'Data Mining', 'Statistics', 'Business Analysis'],
        'description': 'Query operational databases, build executive dashboards, and translate raw data into actionable business KPI reports.',
        'avgSalaryLPA': 5.7,
        'salaryRange': '1.4 - 9.7 LPA',
        'openings': 18095,
        'topHiring': ['TCS', 'Accenture', 'Genpact', 'Cognizant', 'Wipro']
    },
    'Senior Data Analyst': {
        'core': ['Sql', 'Data Analysis', 'Tableau', 'Python', 'Sas', 'Data Analytics'],
        'recommended': ['Power Bi', 'Statistics', 'Machine Learning', 'Big Data', 'Business Analysis'],
        'description': 'Direct BI analytics reporting, synthesize cross-functional business metrics, and recommend revenue optimization strategies.',
        'avgSalaryLPA': 9.6,
        'salaryRange': '1.9 - 13.5 LPA',
        'openings': 3825,
        'topHiring': ['TCS', 'Accenture', 'Deloitte', 'Cognizant', 'IBM']
    },
    'Business Analyst': {
        'core': ['Business Analysis', 'Sql', 'Analytics', 'Excel', 'Sas', 'Project Management'],
        'recommended': ['Tableau', 'Finance', 'Data Analysis', 'Python', 'Agile'],
        'description': 'Bridge the gap between business stakeholders and technical teams with requirements modeling and quantitative analytics.',
        'avgSalaryLPA': 8.9,
        'salaryRange': '1.7 - 14.3 LPA',
        'openings': 32843,
        'topHiring': ['TCS', 'Accenture', 'Genpact', 'Cognizant', 'Wipro']
    },
    'Senior Business Analyst': {
        'core': ['Business Analysis', 'Analytics', 'Sql', 'Sas', 'Finance', 'Executive Storytelling'],
        'recommended': ['Tableau', 'Project Management', 'Data Analysis', 'Strategy', 'Python'],
        'description': 'Drive digital transformation programs, evaluate commercial feasibility, and architect enterprise analytics solutions.',
        'avgSalaryLPA': 13.2,
        'salaryRange': '3.0 - 19.0 LPA',
        'openings': 14115,
        'topHiring': ['TCS', 'Accenture', 'Deloitte', 'Cognizant', 'IBM']
    },
    'Machine Learning Engineer': {
        'core': ['Machine Learning', 'Python', 'Deep Learning', 'Sql', 'Data Science', 'Nlp'],
        'recommended': ['Java', 'C++', 'Cloud Platforms', 'Big Data', 'Spark'],
        'description': 'Productionize AI/ML models at scale, implement low-latency inferencing, and maintain automated retraining loops.',
        'avgSalaryLPA': 9.9,
        'salaryRange': '3.6 - 14.5 LPA',
        'openings': 964,
        'topHiring': ['TCS', 'Accenture', 'IBM', 'Cognizant', 'Amazon']
    },
    'Data Architect': {
        'core': ['Big Data', 'Hadoop', 'Spark', 'Sql', 'Data Modeling', 'Cloud Platforms'],
        'recommended': ['Java', 'Hive', 'Nosql', 'Python', 'Enterprise Governance'],
        'description': 'Design modern data lakehouse architectures, define enterprise data governance, and steer multi-cloud migrations.',
        'avgSalaryLPA': 25.1,
        'salaryRange': '11.2 - 34.0 LPA',
        'openings': 528,
        'topHiring': ['TCS', 'Cognizant', 'Accenture', 'IBM', 'Capgemini']
    }
}

bundle = {
    'overview': {
        'totalAnalyticsJobs': total_aj,
        'totalDataSciencePostings': len(df_ds),
        'totalCombinedOpenings': int(df_ds['num_of_jobs'].sum()),
        'jdsCandidatesEvaluated': len(df_jds),
        'sdsLeadersEvaluated': len(df_sds),
        'years': '2024-2025',
        'source': 'Official SAS Hackathon Datasets'
    },
    'jdsModel': jds_model,
    'sdsModel': sds_model,
    'rolesData': roles_data,
    'roleCuratedSkills': role_curated_skills,
    'topCompanies': top_companies[:20],
    'locationsSummary': locations_summary,
    'salaryTiers': salary_tiers,
    'experienceDistribution': top_exp,
    'topSkills': top_skills_list[:25],
    'sampleJobs': sample_jobs
}

os.makedirs('src/data', exist_ok=True)
with open('src/data/sasDataset.json', 'w', encoding='utf-8') as f:
    json.dump(bundle, f, indent=2)

print('Generated src/data/sasDataset.json successfully!')
