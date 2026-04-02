# Deployment Context

Consult this file only when a task changes deployment, containerization, or production serving behavior.

- Deployment targets Railway and is configured in `railway.json`.
- The site is built in a multi-stage Docker image and served by Nginx on port 8080.
- Production server behavior lives in `nginx/nginx.conf`.
- If you change deployment behavior, review `Dockerfile`, `railway.json`, and `nginx/nginx.conf` together.

For broader infrastructure details, see [docs/DEPLOYMENT.md](../DEPLOYMENT.md).
