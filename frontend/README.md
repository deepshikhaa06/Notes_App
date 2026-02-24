# Notes App Full Stack Application

This project contains two parts:
- Frontend (React + TypeScript + Tailwind CSS)
- Backend (Node.js + Express + TypeScript)

---

## Project Structure

```
root/
├── frontend/
└── backend/
```

---

## Frontend

### Go to frontend folder
```bash
cd frontend
```

### Install dependencies
```bash
npm install
```

### Start development server
```bash
npm start
```

Frontend will run at:
```
http://localhost:3000
```

### Build for production
```bash
npm run build
```

### Run tests
```bash
npm test
```

---

### Tailwind CSS
Tailwind CSS is already configured.

You usually **do not need** to run Tailwind manually, but basic command to know:

```bash
npx tailwindcss init
```

---

## Backend

### Go to backend folder
```bash
cd backend
```

### Install dependencies
```bash
npm install
```

### Start backend (development mode with auto-reload)
```bash
npm run dev
```

---

### Watch Mode (Alternative)
If you want to run backend using Node watch mode after build:

```bash
node --watch dist/index.js
```

---

### Build backend
```bash
npm run build
```

### Start backend (production)
```bash
npm start
```

---

## Output Screen (Example)

When backend is running, you may see:

![Screenshot](Screenshot%202026-02-24%20162024.png)

```text
Server running on port 5000
Connected to database
```

Frontend logs will appear in:
- Browser console
- Frontend terminal

---

## Notes
- Run frontend and backend in **separate terminals**
- Make sure backend is running before using frontend APIs