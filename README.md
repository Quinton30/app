# APP - Backend API

## 1. Project Overview

A RESTful API built with:

- **Node.js** runtime
- **Express** framework
- **PostgreSQL** database
- **JWT** for authentication

---

## 2. Table of Contents

1. [Project Overview 🚀](#1-project-overview)
2. [Table of Contents 📑](#2-table-of-contents)
3. [Installation & Setup ⚙️](#3-installation-and-setup)
   - [Prerequisites](#prerequisites)
   - [Quick Start](#quick-start)
4. [API Documentation 📖](#4-api-documentation)
   - [Endpoints](#endpoints)
   - [Example Request](#example-request)
5. [Database Setup 🗄️](#5-database-setup)
6. [Authentication & Security 🔒](#6-authentication-and-security)
7. [Deployment Guide 🚀](#7-deployment-guide)
8. [Contributing Guidelines 🤝](#8-contributing-guidelines)
9. [License 📜](#9-license)

---

## 3. Installation and Setup

### Prerequisites

- Node.js (v18+)
- PostgreSQL (if using a database)
- npm

### Quick Start

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/backend-project.git
   cd backend-project
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   node server.js
   ```

---

## 4. API Documentation

### Endpoints

| Method | Endpoint           | Description      |
| ------ | ------------------ | ---------------- |
| GET    | /api/v1/movies     | Get all movies   |
| POST   | /api/v1/movies     | Create new movie |
| GET    | /api/v1/movies/:id | Get single movie |
| PUT    | /api/v1/movies/:id | Update a movie   |

### Example Request

```bash
http://localhost:3000/api/v1/movies/2
```

Response:

```json
{
  "id": 2,
  "title": "The Dark Knight",
  "genre": "Action",
  "release_year": 2008,
  "director": "Christopher Nolan",
  "rating": "9.0"
}
```

---

## 5. Database Setup

Follow these steps to set up your database:

1. **Create a PostgreSQL Database**  
   Use Render or any other hosting service to create a PostgreSQL database.

2. **Get the Connection String**  
   Copy the connection string provided by your database host.

3. **Update Configuration**  
   Replace the credentials in your `db.js` (or equivalent) file with the connection string.

4. **Create the `movies` Table**  
   Run the following SQL command to create the `movies` table:

   ```sql
   CREATE TABLE movies (
     id SERIAL PRIMARY KEY,
     title VARCHAR(255) NOT NULL,
     genre VARCHAR(255),
     release_year INT,
     director VARCHAR(255),
     rating DECIMAL(10,2)
   );
   ```

5. **Test the Connection**  
   Start your server and test the API endpoints to ensure the database is connected.

---

## 6. Authentication and Security

- Use **JWT** for authentication.
- Secure sensitive data in a `.env` file.
- Validate inputs on both frontend and backend.

---

## 7. Deployment Guide

1. Push your code to GitHub.
2. Deploy your backend on Render or any Node.js-supported platform.
3. Add environment variables (e.g., `DATABASE_URL`) to the deployment dashboard.

---

## 8. Contributing Guidelines

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature/feature-name
   ```

3. Commit your changes:

   ```bash
   git commit -m "Added feature"
   ```

4. Push to your branch:

   ```bash
   git push origin feature/feature-name
   ```

5. Open a pull request.

---

## 9. License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
