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
- **Other Tools:** Git, GitHub, VS Code, Eclipse

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

---

### Frontend

1. Open the frontend folder in **VS Code**.
2. Install dependencies:

```bash
npm install

###Usage

1)Register a new user or login.
2)Admin users can:
3)Add new sweets with images
4)Restock, update, and delete sweets
5)Users can:
6)Browse and search sweets
7)Add items to the cart and checkout
8)The shopping cart shows selected items before purchase.

