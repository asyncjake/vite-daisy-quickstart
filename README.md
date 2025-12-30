# vite-daisy-quickstart

A starting point for a full stack application with:

- TypeScript across the stack
- A minimal Express server with Helmet
- A React UI using Daisy, a Tailwind component library
- Vite, for building UI and server
- ESLint and Prettier on both sides of the project
    - .pretterrc.json is distinct and minimal for each subproject
- A clean NPM audit bill of health (at the time of writing)
- Some prepared LLM text files, may or may not commit to "completing" this

## What is this for?

A super quick way to spin up a node API server or UI, guaranteed to start and run right out the gate!


## How to get started

**Requirements:** Node 25+, NPM, and Git

Once you clone the repository, the commands are the same for both the frontend and server projects:

- `npm install`, nothing global is expected except
- `npm start` to run a hot-reload server 
- `npm run build` to invoke Vite to compile the TS app for deployment
- `npm run lint` to run prettier with autofix, then ESLint with --fix

## Links

- Daisy docs (5.x): https://daisyui.com/docs/intro/
- Tailwind docs (4.x): https://tailwindcss.com/docs/installation/using-vite
- Vite docs (7.x): https://vite.dev/guide/

- Node API Reference (25.x): https://nodejs.org/docs/latest-v25.x/api/documentation.html
- Express API Reference (5.x): https://expressjs.com/en/5x/api.html
- Helmet Reference: https://helmetjs.github.io/#quick-start



