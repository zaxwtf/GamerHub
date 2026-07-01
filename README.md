# GamerHub

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Vitest](https://img.shields.io/badge/Tests-Vitest-6E9F18?logo=vitest)](https://vitest.dev/)


GamerHub es una aplicación web para explorar videojuegos, descubrir nuevos títulos y gestionar una lista de favoritos de forma sencilla. El proyecto combina una interfaz moderna con autenticación de usuarios y un catálogo dinámico conectado a una API.

## ✨ Características principales

- Catálogo de videojuegos con imágenes y detalles.
- Vista de información individual por videojuego.
- Registro e inicio de sesión de usuarios.
- Perfil personalizado con lista de juegos favoritos.
- Sistema de tema claro/oscuro.
- Diseño responsive para móvil y escritorio.

## 🛠️ Tecnologías utilizadas

- React 19
- Vite 8
- React Router DOM
- Tailwind CSS
- Vitest + Testing Library
- ESLint

## 📦 Instalación

1. Clona este repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd GamerHub
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura las variables de entorno (opcional):
   ```bash
   VITE_API_URL=https://backendproyect-m2.onrender.com/api
   ```

   Si no defines esta variable, la app usará la API por defecto configurada en el proyecto.

4. Inicia la aplicación en modo desarrollo:
   ```bash
   npm run dev
   ```

La app quedará disponible en la URL local que indique Vite, normalmente en http://localhost:5173.

## ▶️ Uso

- Abre la página principal para ver una selección de videojuegos destacados.
- Navega a la sección de videojuegos para explorar el catálogo.
- Regístrate o inicia sesión para acceder a tu perfil.
- Guarda tus juegos favoritos y visualízalos desde la sección de perfil.

## 🧪 Scripts disponibles

```bash
npm run dev      # inicia el servidor de desarrollo
npm run build    # genera la build de producción
npm run test     # ejecuta las pruebas con Vitest
npm run lint     # revisa el código con ESLint
```

## 🧱 Estructura del proyecto

```text
src/
  components/    # componentes reutilizables de la interfaz
  context/       # contextos de autenticación y tema
  hooks/         # hooks personalizados
  Pages/         # vistas principales de la app
  assets/        # recursos estáticos
```

## 🌐 API

La aplicación consume una API de videojuegos y usuarios. Por defecto se conecta a:

```text
https://backendproyect-m2.onrender.com/api
```

## 🤝 Contribución

Las contribuciones son bienvenidas. Si deseas mejorar el proyecto:

1. Haz un fork del repositorio.
2. Crea una rama con tu cambio.
3. Realiza tus modificaciones.
4. Abre un pull request describiendo claramente qué has añadido o corregido.

## 📄 Nota

Este proyecto está pensado como una app de práctica y demostración de React con enrutado, autenticación y consumo de APIs.
