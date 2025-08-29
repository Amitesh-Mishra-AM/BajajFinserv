# 📌 Bajaj Finserv API – BFHL Assignment

A REST API built with **Node.js + Express**, hosted on **Render**, that processes an input array and returns:  
- Even numbers  
- Odd numbers  
- Alphabets (converted to uppercase)  
- Special characters  
- Sum of numbers  
- Concatenation of all alphabets in reverse order with alternating caps  
- Along with user details  

---

## 🚀 Hosted URL
**POST** → [https://bajajfinserv-api-kg0o.onrender.com/bfhl](https://bajajfinserv-api-kg0o.onrender.com/bfhl)

---

## 📦 Tech Stack
- **Node.js**  
- **Express.js**  
- **Render (Free Hosting)**  
- **Postman (for testing)**  

---

## 📌 API Specification

### **Route**
```

POST /bfhl

````

### **Request Body**
```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
````

### **Response**

```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

---

## 📌 Example Requests & Responses

### ✅ Example A

**Request**

```json
{
  "data": ["a","1","334","4","R","$"]
}
```

**Response**

```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334","4"],
  "alphabets": ["A","R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

---

### ✅ Example B

**Request**

```json
{
  "data": ["2","a","y","4","&","-","*","5","92","b"]
}
```

**Response**

```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["5"],
  "even_numbers": ["2","4","92"],
  "alphabets": ["A","Y","B"],
  "special_characters": ["&","-","*"],
  "sum": "103",
  "concat_string": "ByA"
}
```

---

### ✅ Example C

**Request**

```json
{
  "data": ["A","ABcD","DOE"]
}
```

**Response**

```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": [],
  "even_numbers": [],
  "alphabets": ["A","ABCD","DOE"],
  "special_characters": [],
  "sum": "0",
  "concat_string": "EoDdCbAa"
}
```

---

## 🛠️ Local Setup (for running on your PC)

1. Clone repo

   ```bash
   git clone https://github.com/<your-username>/BajajFinserv.git
   cd BajajFinserv
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start server

   ```bash
   npm start
   ```

4. Test in Postman:

   ```
   POST http://localhost:3000/bfhl
   ```

---

## 🌍 Deployment (on Render)

1. Push code to GitHub.
2. Create a **Web Service** on [Render](https://render.com).
3. Build Command → `npm install`
4. Start Command → `npm start`
5. Add environment variable `PORT` (Render provides this automatically).
6. Deploy 🚀

```
