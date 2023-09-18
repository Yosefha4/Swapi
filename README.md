# SWAPI - Vehicle and Real Estate Advertising Platform

SWAPI is a Vehicle and Real Estate Advertising Platform built using microservices architecture. It enables users to list and browse vehicles and apartments for sale or rent. Each microservice is containerized using Docker ( Dockerfile & docker-compose.yml ).

## Microservices

### auth-service
- **Purpose**: The auth-service is responsible for user authentication and authorization.
- **Tech Stack**: Python, Flask, MongoDB
- **Documentation**: [auth-service Documentation](https://github.com/Yosefha4/microservices-archi-app/tree/main/auth_python)

### apartment-service
- **Purpose**: The apartment-service manages apartment listings, including creation, updating, and retrieval.
- **Tech Stack**: Python, Flask, PostgreSQL
- **Documentation**: [apartment-service Documentation](https://github.com/Yosefha4/microservices-archi-app/tree/main/apartment_service)

### vehicles-service
- **Purpose**: The vehicles-service handles vehicle listings and related operations.
- **Tech Stack**: JavaScript, Node.js, MongoDB
- **Documentation**: [vehicles-service Documentation](https://github.com/Yosefha4/microservices-archi-app/tree/main/vehicles_service)

### frontend
- **Purpose**: The frontend is a React.js, HTML, and CSS-based service designed to showcase the platform's user interface and views. It also serves as the user's entry point, making calls to other microservices to retrieve and display data.
- **Tech Stack**: React.js, HTML, CSS
- **Documentation**: [Frontend Documentation](https://github.com/Yosefha4/microservices-archi-app/tree/main/frontend)

## Getting Started

To begin with the SWAPI project, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/swapi.git`
2. Navigate to the project directory: `cd swapi`
3. Set up and run each microservice according to its respective documentation.

## Docker and Container Deployment

Each microservice in SWAPI is containerized using Docker, and the entire system can be deployed with Docker Compose. This approach makes it easy to manage and scale the platform. To run the platform with Docker, follow these steps:

1. Install Docker and Docker Compose if you haven't already.
2. In each microservice's directory, you'll find a `Dockerfile` for containerization.
3. Use the provided `docker-compose.yml` file to deploy the entire platform.

Example command to start the services with Docker Compose:

```bash
docker-compose up
