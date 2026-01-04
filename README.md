# Dockerfile Project 🚀

This project demonstrates how to containerize a simple Node.js web application using Docker.  
It helps beginners understand Dockerfile creation, image building, and running containers.

---

## 📌 Project Overview

- Node.js + Express web application
- Dockerized using a custom Dockerfile
- Lightweight and easy-to-understand setup
- Ideal for DevOps / Cloud fresher learning

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- Docker
- HTML / EJS
- Git & GitHub

---
## 📂 Project Structure

.
├── Dockerfile
├── .dockerignore
├── app.js
├── package.json---
├── public/
├── views/
└── README.md

## 🐳 Dockerfile Explanation

The Dockerfile performs the following steps:

- Uses an official Node.js base image
- Sets a working directory inside the container
- Copies package files and installs dependencies
- Copies application source code
- Exposes the application port
- Starts the Node.js application
- 
2️⃣ Build the Docker image
docker build -t dockerfile-project .
3️⃣ Run the Docker container
docker run -p 3000:3000 dockerfile-project
4️⃣ Access the application
Open your browser:
http://localhost:3000
📦 Run Without Docker (Optional)
npm install
node app.js

👤 Author

SanthoshKumar A
DevOps & Cloud Enthusiast
GitHub: https://github.com/SanthoshKumarDevops




