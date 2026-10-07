import urllib.request
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

payload = {
    'skills': 'Python, SQL, Excel, Power BI',
    'experience': '2',
    'role': 'Data Analyst',
    'location': 'Bangalore'
}

req = urllib.request.Request(
    'http://127.0.0.1:5001/api/analyze',
    data=json.dumps(payload).encode('utf-8'),
    headers={'Content-Type': 'application/json'}
)

with urllib.request.urlopen(req) as resp:
    data = json.loads(resp.read().decode('utf-8'))
    print("---------------------------------------")
    print("SKILLPULSE CAREER ANALYSIS")
    print("---------------------------------------")
    print("\nCandidate Profile")
    print("Skills:", ", ".join(data['candidate_profile']['skills']))
    print("Experience:", data['candidate_profile']['experience'])
    print("Preferred Role:", data['candidate_profile']['preferred_role'])
    print("Preferred Location:", data['candidate_profile']['preferred_location'])

    print("\n---------------------------------------")
    print("TOP JOB RECOMMENDATIONS")
    print("---------------------------------------")
    for job in data['top_recommendations'][:3]:
        print(f"\nJob {job['rank']}")
        print(f"{job['job_desig']}")
        print(f"Match Score: {job['match_score']}%")
        print(f"Location: {job['location']}")
        print(f"Experience: {job['experience']}")
        print(f"Salary: {job['salary_band']}")
        print(f"Required Skills: {', '.join(job['required_skills'])}")

    print("\n---------------------------------------")
    print("SKILL GAP (Top Recommended Job)")
    print("---------------------------------------")
    top_job = data['top_recommendations'][0]
    print(f"Job: {top_job['job_desig']}")
    print("\nMatched Skills:")
    for s in top_job['matched_skills']:
        print(f"✓ {s}")
    print("\nMissing Skills:")
    for s in top_job['missing_skills']:
        print(f"• {s}")
    print(f"\nSkill Match:\n{top_job['skill_match_pct']}%")

    print("\n---------------------------------------")
    print("CAREER VALUE")
    print("---------------------------------------")
    print(f"Estimated Salary: {data['career_value']['estimated_salary']}")
    print(f"Original Salary Band: {top_job['salary_band']}")
    print("---------------------------------------")
