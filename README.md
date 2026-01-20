# 🛠 Book Library Backend

This is the **Express.js backend** for the Book Library web application.  
It provides APIs to fetch book data, view details, and add new books.  


---

## 🚀 Features
- Fetch all books (`GET /books`)  
- Fetch single book by ID (`GET /books/:id`)  
- Add new book (`POST /books`) [Protected, login required]  
- Mock authentication using hardcoded email & password  
- CORS enabled for frontend access  

---

## 📦 Tech Stack
- **Node.js**  
- **Express.js**  
- **MongoDB** (optional)  
- **cors** for cross-origin requests  
- **cookie-parser** for authentication  

---

## 💻 Setup & Installation

### 1️⃣ Clone Repository
```bash
git clone https://github.com/yourusername/book-library.git
cd backend

2️⃣ Install Dependencies
npm install

3️⃣ Configure Environment Variables

Create a .env file in the backend folder:

PORT=3001
MONGO_URI=mongodb://localhost:27017/book-library
JWT_SECRET=your_secret_key


Replace MONGO_URI with your MongoDB connection string if using cloud database.

4️⃣ Start Server
npm run dev


Server will run on http://localhost:3001

Available API endpoints:

Endpoint	Method	Description
/books	GET	Fetch all books
/books/:id	GET	Fetch single book by ID
/books	POST	Add new book (protected)
/auth/login	POST	Mock login (hardcoded credentials)
🔐 Authentication

Mock login with hardcoded email & password

Stores credentials in cookies

Protect /books POST and other sensitive routes

On successful login, frontend can store token in cookies

⚙ API Example
1️⃣ Get All Books
GET http://localhost:3001/books


Response:

[
  {
    "_id": "63f5e4f4a1234...",
    "title": "The Art of Simple Living",
    "author": "Natalie Brooks",
    "price": 330,
    "category": "Lifestyle",
    "image": "https://img.freepik.com/sample.jpg",
    "description": "A calming lifestyle guide..."
  }
]

2️⃣ Get Book By ID
GET http://localhost:3001/books/63f5e4f4a1234

3️⃣ Add New Book (Protected)
POST http://localhost:3001/books
Content-Type: application/json
{
  "title": "New Book",
  "author": "Author Name",
  "price": 250,
  "category": "Fiction",
  "image": "https://img.freepik.com/sample2.jpg",
  "description": "Book description"
}

📌 Notes

Use .env for all sensitive information

Enable CORS for frontend domain

Use JWT_SECRET for token-based authentication (optional)

Deploy backend on Vercel, Railway, or Render

📦 Deployment

Push backend to GitHub

Connect GitHub repo to Vercel / Railway / Render

Set environment variables in deployment platform

Update NEXT_PUBLIC_API_URL in frontend to point to deployed backend
