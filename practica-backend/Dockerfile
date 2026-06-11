# --- Etapa 1: Build ---
FROM node:20-alpine AS builder

WORKDIR /app

# Usa npm install para evitar conflictos de versiones con el package-lock
COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# --- Etapa 2: Runner (producción) ---
FROM node:20-alpine AS runner

WORKDIR /app

# Configura el entorno para producción
ENV NODE_ENV=production

# Instala solo las dependencias de producción
COPY package.json package-lock.json ./
RUN npm install --omit=dev

# Copia los archivos compilados de la fase builder
COPY --from=builder /app/dist ./dist

# Comando para ejecutar la aplicación NestJS compilada
CMD ["node", "dist/main.js"]

# Puerto por defecto
EXPOSE 8080
