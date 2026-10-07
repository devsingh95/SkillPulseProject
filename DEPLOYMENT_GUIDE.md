# SkillPulse Deployment Guide (SAS Hackathon Edition)

SkillPulse features a **Unified Full-Stack Architecture**: the Python server (`scripts/skillpulse_server.py`) serves the compiled React 19 frontend (`dist/`) and all 5 pre-trained Machine Learning inference endpoints (`/api/analyze`, `/api/health`, `/api/agentic-copilot`) on **a single port**.

---

## Method 1: Instant 30-Second Public URL (Best for Hackathon Demo)

If you need a live public HTTPS URL immediately to show the jury (works on any phone or laptop), you can tunnel your running local server:

### Step 1: Ensure Local Server is Running
In your terminal, run:
```bash
cmd /c npm run build
python scripts/skillpulse_server.py
```
*(Your app is now live locally at `http://127.0.0.1:5001`)*

### Step 2: Generate Public HTTPS URL
Open a second terminal and run:
```bash
npx -y localtunnel --port 5001
```
Or if you use **ngrok**:
```bash
ngrok http 5001
```
* **Result:** You will instantly receive a public URL (e.g. `https://skillpulse-xxxx.loca.lt` or `https://xxxx.ngrok-free.app`) that anyone can open anywhere!

---

## Method 2: Render.com (Free Permanent Cloud Hosting)

Render provides free hosting for Docker and Web services directly connected to your GitHub repository.

### Step 1: Initialize Git and Push to GitHub
Open your project directory in terminal:
```bash
git init
git add .
git commit -m "Deploy SkillPulse SAS Edition with Agentic AI"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

### Step 2: Deploy on Render
1. Go to [Render.com](https://render.com) and log in.
2. Click **New +** -> **Web Service**.
3. Connect your GitHub repository.
4. Render will automatically detect the included [`Dockerfile`](./Dockerfile) and [`render.yaml`](./render.yaml).
5. Choose **Free Instance Type** and click **Create Web Service**.
6. Render builds the React frontend, loads the 5 ML models, and gives you a free live URL:
   `https://skillpulse-sas.onrender.com`

---

## Method 3: Hugging Face Spaces (Free Cloud Docker for AI/ML)

Hugging Face Spaces offers free 16GB RAM containers, ideal for Data Science & ML projects.

1. Go to [huggingface.co/spaces](https://huggingface.co/spaces) and click **Create new Space**.
2. Name: `skillpulse-sas`
3. Space SDK: Select **Docker** (Blank).
4. Clone the space repo and copy the project files (`Dockerfile`, `requirements.txt`, `scripts/`, `skillpulse_models/`, `package.json`, `src/`, etc.).
5. Git push to Hugging Face.
6. Your Space will build and launch automatically with a public URL!

---

## Method 4: Railway.app (Instant 1-Click Deploy)

1. Go to [railway.app](https://railway.app) and sign in with GitHub.
2. Click **New Project** -> **Deploy from GitHub repo**.
3. Select your repository.
4. Railway will automatically pick up the [`Procfile`](./Procfile) and [`Dockerfile`](./Dockerfile), install dependencies, and launch your live service.

---

## Verification Checklist

Before sharing your link, verify the following endpoints:
* **UI Root:** `https://<your-app-url>/` (Loads the interactive SkillPulse dashboard)
* **Health Check:** `https://<your-app-url>/api/health` (Returns `status: online`, `models_loaded: true`)
* **Analysis Test:** Submit skills in the Career Analysis tab to confirm TF-IDF cosine similarity and Agentic AI Copilot response.
