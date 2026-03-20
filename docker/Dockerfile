FROM node:20-alpine

WORKDIR /app

# Copiar archivos de dependencias
COPY package.json package-lock.json ./

# Instalar TODAS las dependencias (incluidas dev para el build)
RUN npm ci

# Copiar código fuente
COPY . .

# Build
RUN npm run build

# Limpiar devDependencies después del build
RUN npm prune --production

EXPOSE 3000

CMD ["npm", "start"]
