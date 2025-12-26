# 🚀 Upstash Redis Demo with Next.js

This is a demo project built with **Next.js (App Router)** that demonstrates how to integrate **Upstash Redis** for storing and retrieving data using API routes.  
The application allows you to store a list of user data in Redis and retrieve it through API endpoints using a simple frontend UI.

This project is ideal for:

*   Learning Redis with Next.js
    
*   Understanding serverless Redis (Upstash)
    
*   Demo or prototype purposes
    

* * *

## ✨ Features

*   Store an array of user objects in Redis using a POST API
    
*   Retrieve stored data from Redis using a GET API
    
*   Simple frontend UI with buttons for save and fetch operations
    
*   Error handling with try-catch for JSON parsing and Redis operations
    
*   Built with TypeScript for type safety
    
*   Fully serverless Redis (no server management required)
    

* * *

## 🧠 About Upstash Redis

Upstash Redis is a serverless, edge-optimized Redis service that eliminates the need for managing Redis servers. It is designed for modern applications that require low latency, scalability, and ease of use.

### Why Use Upstash Redis?

*   Serverless and fully managed
    
*   Edge-ready with low latency
    
*   Secure token-based access
    
*   Simple REST API and SDK
    
*   Pay-as-you-go pricing
    
*   Ideal for demos, prototypes, and production apps
    

* * *

## 🧩 How It Works

*   Redis client is configured using `@upstash/redis`
    
*   Connection credentials are stored in environment variables
    
*   User data is serialized using `JSON.stringify()` before storing
    
*   Data is retrieved using `redis.get()` and safely parsed with `JSON.parse()`
    
*   Frontend buttons trigger API calls to save and fetch data
    

* * *

## 📦 Prerequisites

*   Node.js version 18 or higher
    
*   An Upstash account with a Redis database
    
*   npm, yarn, pnpm, or bun package manager
    

* * *

## 🛠 Installation

### Clone the repository

`git clone <repository-url> cd upstash-demo`

### Install dependencies

`npm install # or yarn install # or pnpm install # or bun install`

### Set up environment variables

Create a `.env.local` file in the project root and add:

`UPSTASH_REDIS_REST_URL=your-upstash-redis-url UPSTASH_REDIS_REST_TOKEN=your-upstash-redis-token`

### Start the development server

`npm run dev # or yarn dev # or pnpm dev # or bun dev`

Open the app in your browser:

`http://localhost:3000`

* * *

## 🧪 Usage

*   Click **Save to Redis** to store user data
    
*   Click **Get from Redis** to retrieve stored data
    
*   Check browser console and server logs for debugging
    

* * *

## 🔌 API Endpoints

### POST /api/redis

Stores user data in Redis.

**Response**

`{   "success": true,   "message": "UserData saved in Redis" }`

### GET /api/redis

Retrieves user data from Redis.

**Response**

`{   "success": true,   "data": [user objects] }`

If no data exists:

`{   "success": true,   "data": null }`

* * *

## 📁 Project Structure
```text
app/
├─ page.tsx
└─ api/
   └─ redis/
      └─ route.ts

lib/
├─ redis.ts
└─ data.ts

.env.local
README.md
```

* * *

## 🧰 Technologies Used

*   Next.js (App Router)
    
*   Upstash Redis
    
*   TypeScript
    

* * *

## ✅ Notes

*   This project is intended for learning and demo purposes
    
*   Do not commit `.env.local` to a public repository
    
*   Keep your Redis tokens secure