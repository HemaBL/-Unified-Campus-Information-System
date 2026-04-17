# UCIS Project (University Campus Information System)

## Project Overview

The UCIS (University Canteen Information System) is a full-stack web application designed to provide users with real-time access to faculty availability, staff room details, and user comments. The system supports multiple roles such as Student, Faculty, Admin, and Guest.

---

## Technologies Used

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MySQL

### Tools & Platforms

* Git & GitHub (Version Control)
* Docker (Containerization)
* Docker Hub (Image Hosting)
* Render (Backend Deployment)
* Railway (Database Hosting)

---

## Features

* User Registration & Login
* Role-based Access (Student, Faculty, Admin, Guest)
* View Faculty Availability
* Search Faculty
* View Staff Room Details
* Comment System (Add/Delete)
* Faculty Availability Toggle
* View profile 
* View canteen menu details 

---

## Working Flow of the Project

1. User opens the application (index.html)
2. User can open Canteen page to view menu
3. User can Register which is role-based 
4. User can login after registration
5. After login, user is redirected to Dashboard
6. Users can:

   * View faculty availability
   * Search faculty
   * View staff room details
   * View comments
7. Faculty can:

   * Toggle availability
   * Add/Delete comments
8. Admin can:

   * Manage comments
9. Guest users can access view-only features

---

## System Architecture

* Client-Server Architecture
* Frontend sends requests to backend APIs
* Backend processes logic and interacts with MySQL database
* Data is returned to frontend and displayed to users

---

## How to Run Project (Without Docker - VS Code)

### Step 1: Clone Repository

```
git clone <your-repo-link>
cd ucis-project
```

### Step 2: Install Dependencies

```
npm install
```

### Step 3: Setup MySQL Database

* Create database
* Import SQL file
* Update DB credentials in server.js

### Step 4: Run Backend

```
node server.js
```

### Step 5: Run Frontend

* Open index.html in browser

---

## 🐳 Running with Docker

### Step 1: Build Docker Image

```
docker build -t hema811/ucis-project .
```

### Step 2: Run Container

```
docker run -p 3000:3000 hema811/ucis-project
```

### Step 3: Access App

* Open browser: [http://localhost:3000](http://localhost:3000)

---

##  Deployment

### 🔹 Render (Backend)

* Backend deployed using Render
* Connected to GitHub repository
* Auto deploy enabled

### 🔹 Railway (Database)

* MySQL database hosted on Railway
* Backend connected using environment variables

Can Run or Access project by anyone using this public link

→ [https://unified-campus-information-system.onrender.com](https://unified-campus-information-system.onrender.com)

---

## 📦 Docker Hub

* Image pushed to Docker Hub
* Repository: hema811/ucis-project

### Pull Command:

```
docker pull hema811/ucis-project:latest
```

---

## CI/CD (GitHub)

* Code pushed to GitHub
* Automatic deployment triggered
* Ensures continuous integration and delivery

---

## Testing

* Manual Testing
* API testing using tools (browser, etc.)
* Checked login, registration, and features

---

## Authentication

* Simple login system using username and password
* Data stored in MySQL database
* Session handled using localStorage

---

## 📁 Project Structure

Agile project/
│── images/
│── node modules/
│── frontend/
│── backend/
│── database/
│── .env
│── Dockerfile
│── package.json
│── package-lock.json
│── README.md

##  Conclusion

The UCIS project is a complete full-stack application demonstrating frontend, backend, database integration, deployment, and containerization using Docker. It provides a user-friendly system for managing faculty information and interactions efficiently.

---
