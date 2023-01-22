FROM node:18-bullseye as base
RUN yarn global add pnpm

FROM base as installer
WORKDIR /app

COPY package*.json ./
COPY pnpm-lock.yaml ./
COPY .npmrc ./

RUN pnpm install

FROM base as builder
WORKDIR /app
COPY --from=installer /app/node_modules ./node_modules
COPY . .

RUN pnpm build-storybook

FROM rtsp/lighttpd:1.4.67-rtsp1 AS runner
COPY .docker/stb_lighttpd_00-mime-types.conf /etc/lighttpd/conf.d/00-mime-types.conf
COPY --from=builder /app/storybook-static /var/www/html
