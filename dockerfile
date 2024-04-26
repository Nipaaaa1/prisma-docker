FROM node:20-alpine as build

RUN corepack enable

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

COPY . .

RUN pnpm prisma generate

RUN pnpm build

FROM node:20-slim

COPY --from=build /app/dist /app/dist

EXPOSE 3000

CMD ["node", "server.js"]