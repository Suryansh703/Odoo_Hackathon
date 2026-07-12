# 🚚 TransitOps - Smart Fleet & Transportation Management System

> A modern MERN Stack application for managing fleet operations, drivers, trips, maintenance, fuel records, and expenses with secure JWT authentication and Role-Based Access Control (RBAC).

---

## 📖 Overview

TransitOps is a centralized Fleet & Transportation Management System that helps organizations efficiently manage their transportation operations.

The system allows administrators to manage vehicles, drivers, trips, maintenance schedules, fuel consumption, and operational expenses through a secure and user-friendly dashboard.

---

## ✨ Features

### 🔐 Authentication & Security
- JWT Authentication
- Password Encryption using bcrypt
- Role-Based Access Control (RBAC)
- Protected APIs

### 🚛 Vehicle Management
- Add Vehicle
- View Vehicle
- Update Vehicle
- Delete Vehicle
- Vehicle Status Tracking

### 👨‍✈️ Driver Management
- Driver Registration
- License Management
- Safety Score Tracking
- Driver Availability

### 🛣 Trip Management
- Create Trips
- Assign Driver
- Assign Vehicle
- Track Trip Status
- Cargo Information

### 🔧 Maintenance Management
- Record Maintenance
- Maintenance Cost Tracking
- Maintenance Status
- Maintenance History

### ⛽ Fuel Management
- Fuel Log Recording
- Fuel Cost Tracking
- Vehicle Fuel History

### 💰 Expense Management
- Fuel Expenses
- Toll Charges
- Parking Charges
- Maintenance Expenses
- Miscellaneous Expenses

---

# 🛠 Tech Stack

## Frontend
- React.js
- Vite
- Axios
- React Router

## Backend
- Node.js
- Express.js
- JWT Authentication
- bcrypt.js

## Database
- MongoDB Atlas
- Mongoose

---

# 📂 Project Structure

```
TransitOps
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── App.jsx
│   └── package.json
│
└── README.md
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/Suryansh703/Odoo_Hackathon.git

cd Odoo_Hackathon
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file

```env
PORT=8000

MONGO_URI=YOUR_MONGODB_CONNECTION_STRING

JWT_SECRET=YOUR_SECRET_KEY
```

Run Backend

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd frontend
npm install

npm run dev
```

---

# 🌐 API Endpoints

## Authentication

| Method | Endpoint |
|---------|----------|
| POST | /api/auth/register |
| POST | /api/auth/login |

---

## Vehicles

| Method | Endpoint |
|---------|----------|
| GET | /api/vehicles |
| GET | /api/vehicles/:id |
| POST | /api/vehicles |
| PUT | /api/vehicles/:id |
| DELETE | /api/vehicles/:id |

---

## Drivers

| Method | Endpoint |
|---------|----------|
| GET | /api/drivers |
| GET | /api/drivers/:id |
| POST | /api/drivers |
| PUT | /api/drivers/:id |
| DELETE | /api/drivers/:id |

---

## Trips

| Method | Endpoint |
|---------|----------|
| GET | /api/trips |
| GET | /api/trips/:id |
| POST | /api/trips |
| PUT | /api/trips/:id |
| DELETE | /api/trips/:id |

---

## Maintenance

| Method | Endpoint |
|---------|----------|
| GET | /api/maintenance |
| GET | /api/maintenance/:id |
| POST | /api/maintenance |
| PUT | /api/maintenance/:id |
| DELETE | /api/maintenance/:id |

---

## Fuel

| Method | Endpoint |
|---------|----------|
| GET | /api/fuel |
| GET | /api/fuel/:id |
| POST | /api/fuel |
| PUT | /api/fuel/:id |
| DELETE | /api/fuel/:id |

---

## Expenses

| Method | Endpoint |
|---------|----------|
| GET | /api/expenses |
| GET | /api/expenses/:id |
| POST | /api/expenses |
| PUT | /api/expenses/:id |
| DELETE | /api/expenses/:id |

---

# 🔐 Authentication

TransitOps uses **JWT Authentication**.

### Login Endpoint

```
POST /api/auth/login
```

### Use JWT Token

```
Authorization: Bearer <JWT_TOKEN>
```

---

# 📊 Database Models

- User
- Vehicle
- Driver
- Trip
- Maintenance
- FuelLog
- Expense

---

# 📌 Future Enhancements

- Live GPS Tracking
- Route Optimization
- Driver Performance Analytics
- Fuel Consumption Analytics
- AI-based Predictive Maintenance
- Dashboard Charts & Reports
- Mobile Application

---

# 👥 Team

This project was developed during the **Odoo Hackathon** by:

| Name | Contribution |
|------|--------------|
| **Suryansh Shukla** | Backend Development, JWT Authentication, Role-Based Access Control (RBAC), REST API Development, MongoDB Integration, API Testing & Frontend Integration |
| **Uditanshu** | Frontend Development, UI Components, API Integration & User Experience |
| **Unnati Gupta** | Frontend Development, UI/UX Design, Testing & Documentation |

---

# 🎥 Demo

Demo Video: https://drive.google.com/file/d/1iX4vgg-P0aYtCE_oXYooandh37r5U41J/view?usp=sharing

---



---

# 📄 License

This project is licensed under the **MIT License**.

---

## ⭐ If you like this project, don't forget to star the repository!
