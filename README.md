# Collaborative Tooling and Systems - Node.js & MongoDB App

A Node.js application using Mongoose with dynamic multi-environment configuration (`staging`, `preprod`, `prod`), structured with Git Flow and Conventional Commits.

## Project Structure

```text
.
├── .husky/
│   └── commit-msg
├── src/
│   ├── config/
│   │   ├── db.js
│   │   └── env.js
│   ├── models/
│   │   └── task.model.js
│   ├── services/
│   │   └── task.service.js
│   └── index.js
├── .env.example
├── .gitignore
├── commitlint.config.js
├── package.json
└── README.md
```

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create three environment files in the project root based on `.env.example`:
   - `.env.staging`
   - `.env.preprod`
   - `.env.prod`

   Example contents:
   ```env
   PORT=3001
   MONGO_URI=mongodb://localhost:27017/epita_staging
   ```

## Running the Application

Run the app in a specific environment (requires a running local MongoDB instance or a valid MongoDB Atlas URI):

```bash
npm run start:staging
npm run start:preprod
npm run start:prod
```

## Git Workflow

- `main`: Production releases (tagged, e.g. `v1.0.0`).
- `dev`: Integration branch for completed features.
- `feature/*` and `docs/*`: Short-lived branches merged into `dev`.
- Commit messages follow the Conventional Commits specification enforced by Husky and Commitlint.
