# 🐱 Cat Fact

A simple React app that shows a random cat fact, with a dark neon aesthetic. Built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS v4**, **Axios**, and **TanStack Query**.

## Features

- 🐈 Fetches a random cat fact from the [Cat Facts API](https://catfact.ninja/)
- 🔄 "New Fact" button to fetch a new fact on demand
- 🌙 Minimal dark UI with a cyan neon glow
- ⚡ Fast refresh with Vite + React HMR

## Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) build tooling
- [Tailwind CSS v4](https://tailwindcss.com/) for styling
- [TanStack Query](https://tanstack.com/query) for data fetching & caching
- [Axios](https://axios-http.com/) for HTTP requests
- [Bangers](https://fonts.google.com/specimen/Bangers) font from Google Fonts

## Getting Started

### Prerequisites

- Node.js 20.19+ (or 22.12+)

### Installation

```bash
npm install
```

### Run the dev server

```bash
npm run dev
```

Then open the printed local URL (default: http://localhost:5173).

### Build for production

```bash
npm run build
npm run preview
```

## Project Structure

```
catfact/
├── public/              # Static assets
├── src/
│   ├── App.tsx          # Main component (query + UI)
│   ├── main.tsx         # Entry point (QueryClientProvider)
│   ├── index.css        # Tailwind entry
│   └── ...
├── index.html
├── vite.config.ts
└── package.json
```

## Scripts

| Command            | Description                    |
| ------------------ | ------------------------------ |
| `npm run dev`      | Start the Vite dev server      |
| `npm run build`    | Type-check and build for prod  |
| `npm run lint`     | Run ESLint                     |
| `npm run preview`  | Preview the production build   |

## License

MIT
