# Node.js MongoDB API Template

A minimalist starter template for building Node.js APIs with MongoDB, complete with Docker support. This template provides a foundation for developing containerized Node.js applications with a MongoDB database, perfect for developers who want to quickly bootstrap a new API project.

## Features

- Express.js REST API
- MongoDB integration with Mongoose
- Docker and Docker Compose setup
- Basic CRUD operations example
- Environment variable support
- Automatic container restart policy

## Prerequisites

- Docker and Docker Compose installed on your machine
- Node.js (if running locally without Docker)
- Git (for cloning the repository)

## Quick Start

1. Clone the repository:
```bash
git clone [your-repository-url]
cd [repository-name]
```

2. Start the application using Docker Compose:
```bash
docker-compose up -d
```

This will start both the API server and MongoDB container. The API will be available at `http://localhost:5000`.

## API Endpoints

### 1. Check Database Connection (`GET /checkDb`)
Verifies the connection to MongoDB and returns the current user count.

**Response Example:**
```json
{
  "status": "Connected",
  "message": "Successfully connected to database",
  "userCount": 0
}
```

### 2. Write to Database (`GET /writeDb`)
Creates a new user record with predefined data.

**Response Example:**
```json
{
  "status": "Success",
  "message": "User created successfully",
  "user": {
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30,
    "createdAt": "2025-01-10T12:00:00.000Z",
    "_id": "..."
  }
}
```

### 3. Read from Database (`GET /readDb`)
Retrieves all users from the database, sorted by creation date in descending order.

**Response Example:**
```json
{
  "status": "Success",
  "count": 1,
  "users": [
    {
      "_id": "...",
      "name": "John Doe",
      "email": "john@example.com",
      "age": 30,
      "createdAt": "2025-01-10T12:00:00.000Z"
    }
  ]
}
```

## Project Structure

```
.
├── docker-compose.yml    # Docker Compose configuration
├── Dockerfile           # Docker configuration for API
├── index.js            # Main application file
├── package.json        # Node.js dependencies and scripts
└── README.md           # Project documentation
```

## Environment Variables

The following environment variables can be configured:

- `PORT`: API server port (default: 5000)
- `LOCAL_MONGO_URI`: MongoDB connection string (default: mongodb://admin:password@local_mongo:27017/localDb?authSource=admin)

## MongoDB Configuration

The MongoDB container is configured with:
- Username: admin
- Password: password
- Port: 27017
- Database: localDb

Data is persisted using a Docker volume named `mongodb_data`.

## Development

To modify the template for your own use:

1. Update the MongoDB credentials in `docker-compose.yml`
2. Modify the User schema in `index.js` according to your needs
3. Add new routes and functionality to `index.js`
4. Update environment variables as needed

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.