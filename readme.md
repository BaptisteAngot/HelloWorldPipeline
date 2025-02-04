# 🚀 Express API avec CI/CD (GitHub Actions + Docker Hub)

## 📌 Description du Projet
Cette application est une **API Express minimale** retournant `"Hello, World!"`, avec un pipeline **CI/CD automatisé** qui :
- **Teste le code** avec Jest avant chaque déploiement.
- **Construit une image Docker** et la pousse sur **Docker Hub**.
- **Utilise GitHub Actions** pour orchestrer le pipeline.

---

## 🔧 Prérequis
Avant de commencer, assurez-vous d’avoir installé :
- [Node.js](https://nodejs.org/) (v18 recommandé)
- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/)

1. Installer les dépendances :

```bash
cd backend
npm install
```

2. Créer un fichier .env:

```bash
PORT=3000
NODE_ENV=production
```

3. Lancer l'application :

```bash
npm start
```

📌 L’API est maintenant accessible sur http://localhost:3000/ 🚀

# 🧪 Tests avec Jest

1️⃣ Exécuter les tests unitaires :

```bash
cd backend
npm test
```

✅ Si tout fonctionne, Jest affichera :

```bash
 PASS  tests/server.test.js
✓ Devrait retourner 'Hello, World!'
```

# 🔄 Pipeline CI/CD avec GitHub Actions

Le pipeline CI/CD GitHub Actions exécute automatiquement :

- Tests Jest (npm test)
- Build de l’image Docker
- Push sur Docker Hub
- Déploiement


