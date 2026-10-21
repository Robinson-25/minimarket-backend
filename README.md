# Backend - Minimarket

Node.js + Express + TypeScript + Prisma + PostgreSQL

## Primeros pasos
1. `cp .env.example .env` y completa los datos (base de datos, JWT_SECRET).
2. `npm install`
3. `npx prisma migrate dev --name init`
4. `npm run seed`  (crea admin@minimarket.com / admin123)
5. `npm run dev`  -> http://localhost:3000/api/salud

## Produccion (VPS)
`npm run build` y luego `pm2 start dist/server.js --name minimarket-api`
