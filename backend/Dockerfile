# Utilisation d'une image Node.js légère
FROM node:18-alpine

# Définition du répertoire de travail
WORKDIR /app

# Copie des fichiers package.json et package-lock.json
COPY package.json ./

# Installation des dépendances
RUN npm install --only=production

COPY .env .env

# Copie du reste des fichiers
COPY . .

# Exposition du port 3000
EXPOSE 3000

# Commande de démarrage
CMD ["npm", "start"]
