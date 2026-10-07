# Multi-stage Dockerfile for SkillPulse SAS Edition
# Stage 1: Build the React 19 Frontend
FROM node:20-alpine AS frontend-builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Python 3.11 Runtime with Pretrained ML Models
FROM python:3.11-slim
WORKDIR /app

# Install Python requirements
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy built frontend assets from Stage 1
COPY --from=frontend-builder /app/dist ./dist

# Copy trained model artifacts and dataset files
COPY skillpulse_models ./skillpulse_models
COPY scripts ./scripts
COPY cleaned_jobs.csv .
COPY ["SAS Data Problem Statement and Instructions Hackathon", "./SAS Data Problem Statement and Instructions Hackathon/"]

# Configure production port
ENV PORT=5001
EXPOSE 5001

# Start the unified production server
CMD ["python", "scripts/skillpulse_server.py"]
