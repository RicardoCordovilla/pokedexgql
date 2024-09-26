# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```


# Pokedex GraphQL

This project is a modern Pokedex application built using **React**, **TypeScript**, and **GraphQL** with Vite as the build tool. It allows users to browse and search Pokémon data efficiently by leveraging GraphQL's query capabilities.

## Description

The app utilizes **GraphQL Code Generator** to streamline type-safety and query generation. By automatically generating TypeScript types and hooks from GraphQL schemas, it ensures strong type checking and a smoother developer experience.

## Features
- **React + TypeScript**: Modern stack for building a type-safe and scalable frontend.
- **GraphQL Integration**: Efficient data retrieval with GraphQL queries and mutations.
- **Codegen for Type Safety**: Uses `@graphql-codegen` to generate TypeScript types and custom hooks.
- **Vite for Build**: Vite is used for fast bundling and optimized builds.

## Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/RicardoCordovilla/pokedexgql.git

2. Install dependencies:
   ```bash
   npm install
   
3. Run the app:
   ```bash
   npm run dev

## Link to view in live this great work
https://pokedexgql-codegen.netlify.app/
  

