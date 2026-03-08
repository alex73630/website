# Deployment & Infrastructure

Details on how the application is built, containerized, and deployed to Railway.

## 🚢 Platform

- **Service:** Railway
- **Configuration:** Defined in `railway.json`.
- **Scaling:** Service restarts, scaling behaviors, and build configuration are managed here.
- See [railway.json](railway.json).

## 🐳 Docker Containerization

- **Strategy:** Multi-stage build.
- **Base:** Statically built in Node.js, served via an Nginx Alpine container.
- **Changes:** Updating build behavior requires updating `Dockerfile`.
- See [Dockerfile](Dockerfile).

## ⚙️ Nginx Configuration

- **Server:** Nginx acts as the static file server listening on port 8080.
- **Rules:** Production server rules are managed centrally in `nginx/nginx.conf`.
- See [nginx/nginx.conf](nginx/nginx.conf)
