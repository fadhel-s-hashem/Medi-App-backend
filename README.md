# MediApp - Back-End API

This is the Express and Node.js RESTful API for **MediApp**, a clinical radiology and schedule management application. It handles JWT authentication, patient record CRUD operations, and doctor schedule/appointment management backed by MongoDB.

## Front-End Repository

For full project documentation, UI screenshots, setup instructions, and feature details, please visit the primary repository:

[MediApp Front-End Repository](https://github.com/fadhel-s-hashem/Medi-App-frontend)

---

## Tech Stack

* **Server Framework:** Node.js, Express.js
* **Database:** MongoDB, Mongoose ODM
* **Authentication:** JSON Web Tokens (JWT), bcrypt
---
## Installation and Setup
### 1. Clone the repository or download it 
[Mwdi-App-backend]([https://github.com/YourUsername/MediApp.git](https://github.com/fadhel-s-hashem/Medi-App-backend)](https://github.com/fadhel-s-hashem/Medi-App-backend))
```bash
git clone https://github.com/fadhel-s-hashem/Medi-App-backend
```

### 2.Navigate 
```
# Navigate to the backend directory
cd Medi-App-backend

# Install dependencies
npm install
```
### 3. Create a .env file in the gearhead-backend directory
```
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### Start the backend server (development mode)
```
npm run dev
```

### for the rest go to the [MediApp Front-End Repository](https://github.com/fadhel-s-hashem/Medi-App-frontend)
