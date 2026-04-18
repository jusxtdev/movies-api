# Movie API

Minimal REST API for movies and personal watchlists, built with Express, Prisma, and PostgreSQL.

## Features

- JWT-based authentication (signup, signin, logout)
- Movie CRUD endpoints (protected)
- Watchlist CRUD endpoints (protected)
- Request validation with Zod
- Prisma ORM with PostgreSQL adapter

## Tech Stack

- Node.js + Express
- Prisma + PostgreSQL
- Zod
- JWT + bcrypt

## Project Structure

```text
src/
	controller/
	middleware/
	routes/
	schemas/
	config/
	utils/
	generated/prisma/
prisma/
	schema.prisma
	migrations/
```

## Prerequisites

- Node.js 18+
- PostgreSQL database

## Environment Variables

Create a .env file in the project root:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DB_NAME"
JWT_SECRET="your_jwt_secret"
JWT_EXPIRES_IN="7d"
NODE_ENV="development"
```

## Installation

```bash
npm install
```

## Database Setup

Apply existing migrations:

```bash
npx prisma migrate dev
```

Generate Prisma client (if needed):

```bash
npx prisma generate
```

## Run the Server

```bash
npm run dev
```

Server starts on port 5001.

## API Base URL

```text
http://localhost:5001/api
```

## Endpoints

### Auth

- POST /auth/signup
- POST /auth/signin
- POST /auth/logout

### Movies (requires auth)

- GET /movies
- GET /movies/:id
- POST /movies
- PUT /movies/:id
- DELETE /movies/:id

### Watchlist (requires auth)

- GET /watchlist
- GET /watchlist/:id
- POST /watchlist
- PUT /watchlist/:id
- DELETE /watchlist/:id

### User (requires auth)

- GET /user/profile
- GET /user/stats

## Request Payload Examples

### Signup

```json
{
	"name": "Jane Doe",
	"email": "jane@example.com",
	"password": "secret123"
}
```

### Create Movie

```json
{
	"title": "Interstellar",
	"overview": "Sci-fi drama",
	"releaseYear": 2014,
	"genres": ["Sci-Fi", "Drama"],
	"runtime": 169,
	"posterURL": "https://example.com/poster.jpg"
}
```

### Add Watchlist Item

```json
{
	"movieId": "movie-uuid",
	"status": "PLANNED",
	"rating": 8,
	"notes": "Watch on weekend"
}
```

## Not Yet Fully Implemented

The following parts are present in the codebase but not complete/stable yet:

- User stats endpoint logic is still empty (GET /user/stats).
- User profile query currently needs cleanup in the controller implementation.
- User route module has import issues to be fixed before these endpoints are reliable.
- No automated tests are set up yet.
- No production deployment/configuration guide yet.

## Notes

- Authentication supports Bearer token and cookie-based JWT.
- Most route modules under /movies and /watchlist are protected by auth middleware.

## License

ISC
