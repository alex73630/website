FROM node:krypton-alpine AS base
ENV NODE_ENV=production YARN_VERSION=4.13.0 NPM_CONFIG_UPDATE_NOTIFIER=false
# install and use yarn 4.x
RUN corepack enable && corepack prepare yarn@${YARN_VERSION} && yarn set version ${YARN_VERSION}

FROM base AS build
WORKDIR /app

COPY .yarnrc.yml ./
COPY .yarn/ ./.yarn/
COPY package.json yarn.lock ./

# Cache mount for Yarn with Railway specific ID format
RUN --mount=type=cache,target=/usr/local/share/.cache/yarn,id=s/d5ca8ab0-23ab-4d0e-bfd3-5735cee08a86-/usr/local/share/.cache/yarn,sharing=locked \
    YARN_CACHE_FOLDER=/usr/local/share/.cache/yarn yarn install --immutable

COPY . .

RUN --mount=type=cache,target=/app/node_modules/.astro,id=s/d5ca8ab0-23ab-4d0e-bfd3-5735cee08a86-/app/node_modules/.astro \
    yarn build

FROM nginx:alpine-slim AS runtime
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html

# Pre-compress static files for gzip_static
RUN find /usr/share/nginx/html -type f \
    \( -name "*.html" -o -name "*.css" -o -name "*.js" -o -name "*.xml" \
    -o -name "*.svg" -o -name "*.json" -o -name "*.txt" \) \
    -exec gzip -9 -k {} \;

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
