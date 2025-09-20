# Sweet Shop

A full-stack web application for managing and purchasing Indian sweets. Built with **Spring Boot** (backend) and **React.js** (frontend).
---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Setup Instructions](#setup-instructions)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Author](#author)

---

## Features

- User authentication: Register & Login (JWT-based)
- Role-based access:
  - Admin: Add, update, delete, restock sweets
  - User: Browse sweets, search, add to cart, purchase
- Search sweets by:
  - Name
  - Category
  - Price range
- Shopping cart functionality
- Image upload for sweets
- Secure API with Spring Security
- Frontend responsive UI

---

## Tech Stack

- **Backend:** Java, Spring Boot, Spring Security, JWT, H2/MySQL
- **Frontend:** React.js, Axios, React Router
- **Other Tools:** Git, GitHub, VS Code, Eclipse,Chat gpt

---

## Folder Structure
Sweet-Shop/
├─ Sweet_Shop(backend)/ # Spring Boot backend project
│ ├─ src/main/java/com/mani/sweet_shop
│ ├─ src/main/resources
│ └─ pom.xml
├─ frontend/sweetshop-frontend # React.js frontend project
│ ├─ src/
│ ├─ public/
│ └─ package.json
└─ README.md


---

## Setup Instructions

### Backend

1. Open the backend folder in **Eclipse**.
2. Configure your database in `application.properties` (H2/MySQL).
3. Build the project and run `SweetShopApplication.java`.
4. The backend runs by default on:  
   `http://localhost:8080/`
5.Used Chat gpt for helping in authentication and autherization using JWT
---

### Frontend

1. Open the frontend folder in **VS Code**.
2. Install dependencies:
3. Used Chat gpt for communicating between backend and frontend
4. Chat gpt helped in recieving tokens from backend and improve my frontend logic contributing around 40% code.
```bash
npm install

---

# Usage
Register/Login

Go to /register to create a new account.

Go to /login to access your account.

JWT token is saved in localStorage after login.

Browse Sweets

View all available sweets on the dashboard.

Use the search bar to filter by:

Name

Category

Price range

Cart

Click Add to Cart to add a sweet.

View cart to see selected items.

Click Checkout to purchase items (updates stock in backend).

Admin Features

Add new sweets with name, category, price, quantity, and image URL.

Restock existing sweets.

Delete sweets.

Update sweet details.



##ScreenShots
Please refer the above images for the screenshots and working

