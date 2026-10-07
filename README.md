# ⚡ SkillPulse — ML-Powered Career Intelligence System
## Data Science & Analytics Career Match, Gap Analysis & Valuation Engine

> **IMPORTANT STATEMENT:**  
> **"SkillPulse uses only the datasets and trained artifacts provided within this project. No external job, salary, skill, or personality data is used."**

---

## 1. 🎯 SkillPulse Objective
SkillPulse is an end-to-end career intelligence system built to bridge the gap between job seekers' profiles and actual job market requirements. The system provides:
1. **Job Recommendation** based on content-based TF-IDF and Cosine Similarity.
2. **Job Match Score** quantifying the relevance between candidate profiles and job requirements.
3. **Skill Gap Analysis** identifying matched vs missing skills directly from dataset postings.
4. **Estimated Salary & Career Value** using a trained Random Forest Regressor on dataset features.
5. **Observed Trait Alignments** connecting junior promotion drivers and senior leadership benchmarks using the project's psychological datasets.
6. **A Clean Hackathon Dashboard** built into the existing React 19 + Vite web application.

---

## 2. 📊 Data Sources (Project Only)
All intelligence is derived exclusively from the existing project files:

1. **`Analytics Jobs.csv` / `cleaned_jobs.csv` / `jobs.pkl` (14,840 Cleaned Records):**
   - Core dataset containing designations, experience bands, key skills, locations, salary brackets, and descriptions.
2. **`DataScience Jobs.csv` (1,602 Enterprise Postings, 93,005 Active Openings):**
   - Employer benchmarks across TCS (9,064 jobs), Accenture (5,425 jobs), Cognizant (3,813), Wipro, IBM, Genpact, Capgemini, L&T, etc.
3. **`JDS Skill Traits.xlsx` (139 Junior Data Scientists):**
   - Technical evaluation dimensions: Dashboard & Storytelling, Maths & Statistics, Coding, AI/ML, Big Data.
4. **`SDS Personality Traits.xlsx` (161 Senior Customer-Facing Data Scientists):**
   - Big Five OCEAN personality dimensions: Conscientiousness, Openness to Experience, Extraversion, Agreeableness, Neuroticism.

---

## 3. 🧠 ML & NLP Methodology

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    SKILLPULSE CORE ML / NLP ARCHITECTURE                    │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │
            ┌─────────────────────────┴─────────────────────────┐
            ▼                                                   ▼
┌───────────────────────────────┐               ┌───────────────────────────────┐
│  RECOMMENDATION ENGINE (NLP)  │               │     SALARY VALUATION (ML)     │
├───────────────────────────────┤               ├───────────────────────────────┤
│ • Fitted TfidfVectorizer      │               │ • Trained RandomForestRegressor│
│   (10,000 Vocabulary Features)│               │   (salary_model.pkl)          │
│ • Precomputed Job Matrix      │               │ • Input Features:             │
│   (job_tfidf_matrix.pkl)      │               │   min_exp, max_exp, avg_exp,  │
│ • Metric: Cosine Similarity   │               │   skill_count, desc_len,      │
│ • Output: Job Match Score (%) │               │   desc_words, loc_count       │
│ • Ranking: Top N Postings     │               │ • Output: Estimated Salary    │
└───────────────────────────────┘               └───────────────────────────────┘
```

### 3.1 TF-IDF Vectorization
The application loads the precomputed `tfidf_vectorizer.pkl` (fitted on 14,840 job postings with 10,000 features). 
The user's combined profile query:
$$\text{Query} = \text{Role} \oplus \text{Skills} \oplus \text{Location}$$
is transformed into a sparse TF-IDF feature vector:
$$\mathbf{q} = \text{TF-IDF}(\text{Query})$$

### 3.2 Cosine Similarity
The candidate vector $\mathbf{q}$ is compared against the precomputed `job_tfidf_matrix.pkl` ($\mathbf{M} \in \mathbb{R}^{14840 \times 10000}$) using cosine similarity:

$$\text{Similarity}(\mathbf{q}, \mathbf{d}_i) = \frac{\mathbf{q} \cdot \mathbf{d}_i}{\|\mathbf{q}\| \|\mathbf{d}_i\|}$$

The jobs are ranked by this similarity score. It is presented as **"Job Match Score"** (scaled to a percentage $0\% - 100\%$).  
*Note: This represents profile-to-job relevance, NOT a hiring probability.*

### 3.3 Skill Gap Methodology
1. Candidate input skills are normalized (trimmed, lowercased, and punctuation-stripped).
2. The recommended job's `key_skills` string is parsed into individual requirement tokens.
3. The system computes the intersection:
   - **Matched Skills ($\checkmark$):** Skills present in both candidate profile and job requirements.
   - **Missing Skills ($\bullet$):** Skills required by the job that are missing from candidate profile.
4. **Skill Match Ratio:**
   $$\text{Skill Match} = \frac{|\text{Matched}|}{|\text{Matched}| + |\text{Missing}|} \times 100\%$$
   *Skills are strictly identified from the actual job dataset.*

### 3.4 Salary Model (`salary_model.pkl` & `salary_features.pkl`)
The salary estimator utilizes the pre-trained `RandomForestRegressor` saved in `skillpulse_models/salary_model.pkl`. It expects the exact 7 features saved in `salary_features.pkl`:
- `min_experience`: Candidate minimum experience (years)
- `max_experience`: Candidate maximum experience (years)
- `avg_experience`: Candidate average experience (years)
- `skill_count`: Total number of verified skills
- `description_length`: Query text character length
- `description_word_count`: Query text word count
- `location_count`: Number of specified locations

The model predicts the continuous salary midpoint in LPA. It is explicitly displayed as **"Estimated Salary"** alongside the original salary band from `Analytics Jobs.csv`.

---

## 4. 🧬 Personality / Trait Data Integration

The files `JDS Skill Traits.xlsx` and `SDS Personality Traits.xlsx` provide observed empirical benchmarks:
- **JDS Technical Alignment:** Highlights that candidates in the top-hike cohort scored **$4.85 / 5.0$ in Dashboard & Storytelling** and **$4.71 / 5.0$ in Statistics**, emphasizing that business communication correlates with career acceleration.
- **SDS Leadership Alignment:** Notes that senior customer-facing leads exhibit higher observed **Conscientiousness ($53.7 / 70$)** and **Openness ($48.5 / 70$)**.
- *Terminology used is strictly neutral ("Trait alignment", "Observed trait profile", "Potential role alignment") with no psychological diagnoses or hiring guarantees.*

---

## 5. 📦 Model Artifact Loading & Performance

All models are loaded **once** at server startup by `scripts/skillpulse_server.py`:
- `skillpulse_models/tfidf_vectorizer.pkl`
- `skillpulse_models/job_tfidf_matrix.pkl`
- `skillpulse_models/jobs.pkl`
- `skillpulse_models/salary_model.pkl`
- `skillpulse_models/salary_features.pkl`

Because `job_tfidf_matrix.pkl` is precomputed, recommendations across all 14,840 records execute in under **40 milliseconds**, eliminating expensive re-computation during user interactions.

---

## 6. 🔄 Step-by-Step User Flow

1. **STEP 1:** Enter profile information.
2. **STEP 2:** Enter skills (e.g. `Python, SQL, Excel, Power BI`).
3. **STEP 3:** Enter experience (e.g. `2 years`).
4. **STEP 4:** Select/enter preferred role (e.g. `Data Analyst`).
5. **STEP 5:** Select/enter preferred location (e.g. `Bangalore`).
6. **STEP 6:** Click **"Analyze My Career"**.
7. **STEP 7:** SkillPulse generates:
   - **Candidate Profile Summary**
   - **Top Job Recommendations** with Match Score, Location, Salary Band, and Required Skills
   - **Skill Gap Inspector** (Matched Skills $\checkmark$, Missing Skills $\bullet$, Skill Match %)
   - **Career Value Card** with Estimated Salary and Original Salary Band

---

## 7. ⚠️ Limitations

1. **Static Pretrained Scope:** Recommendations are derived from the 14,840 job postings in `Analytics Jobs.csv` (2024–2025 Indian hiring market) and do not reflect real-time live web listings.
2. **Estimated Salary:** The salary output is a statistical prediction generated by the Random Forest model and should be interpreted as an estimate, not a binding compensation guarantee.
3. **Text-Based Skill Normalization:** Matching relies on string and substring normalization; unconventional skill acronyms not present in the dataset vocabulary may require manual aliasing.

---

## 8. 🚀 How to Run the Application

### Prerequisites
- Python 3.9+ with `scikit-learn`, `joblib`, `scipy`, `numpy`, `pandas`
- Node.js 18+ and `npm`

### Step 1: Start the SkillPulse Model Server
In a terminal, run:
```bash
python scripts/skillpulse_server.py
```
*(Starts the HTTP model server on `http://127.0.0.1:5001`, loading all 5 artifacts once at startup)*

### Step 2: Start the React / Vite Frontend
In a second terminal, run:
```bash
npm run dev
```
Open **`http://localhost:5173/`** in your browser.

### Step 3: Run the Automated Validation Script
To verify the prompt's specified test case:
```bash
python scripts/validate_test_case.py
```
*(Tests `Skills: Python, SQL, Excel, Power BI | Exp: 2 yrs | Role: Data Analyst | Location: Bangalore` and displays recommendation scores, skill gaps, and salary estimation)*
