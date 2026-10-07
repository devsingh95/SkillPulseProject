import joblib
import numpy as np
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity

# Load artifacts
tfidf = joblib.load('skillpulse_models/tfidf_vectorizer.pkl')
matrix = joblib.load('skillpulse_models/job_tfidf_matrix.pkl')
jobs = joblib.load('skillpulse_models/jobs.pkl')
salary_model = joblib.load('skillpulse_models/salary_model.pkl')
salary_features = joblib.load('skillpulse_models/salary_features.pkl')

print('All 5 artifacts loaded successfully.')
print('Salary features expected:', salary_features)

user_skills = ['Python', 'SQL', 'Excel', 'Power BI']
user_exp = 2
user_role = 'Data Analyst'
user_location = 'Bangalore'

query_text = f"{user_role} {' '.join(user_skills)} {user_location}"
print('User query:', query_text)

user_vec = tfidf.transform([query_text])
sims = cosine_similarity(user_vec, matrix).flatten()

top_idx = np.argsort(sims)[::-1][:5]
print('\nTop 5 recommendations:')
for rank, idx in enumerate(top_idx, 1):
    job = jobs.iloc[idx]
    score = round(float(sims[idx]) * 100, 1)
    print(f"{rank}. {job['job_desig']} | Match Score: {score}% | Loc: {job['location']} | Exp: {job['experience']} | Sal: {job['salary']}")
    print(f"   Skills: {str(job['key_skills'])[:80]}...")

# Salary prediction
sample_feat = np.array([[user_exp, user_exp, user_exp, len(user_skills), 300, 50, 1]])
est_sal = salary_model.predict(sample_feat)[0]
print(f"\nEstimated Salary: {est_sal:.1f} LPA")
