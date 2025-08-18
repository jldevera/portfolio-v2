# Jerome Louie De Vera - Portfolio

A modern, responsive portfolio website built with Nuxt 3, Vue 3, and Tailwind CSS. Features smooth animations, interactive cursor effects, and a clean design inspired by modern web standards.

## Features

- **Interactive Cursor Glow**: Custom cursor effect that follows mouse movement
- **Responsive Design**: Optimized for all device sizes
- **Smooth Animations**: CSS transitions and Vue animations
- **Static Site Generation**: Optimized for GitHub Pages deployment
- **TypeScript Support**: Full TypeScript integration
- **Tailwind CSS**: Utility-first CSS framework

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

## Static Site Generation

Generate static files for deployment:

```bash
# npm
npm run generate

# pnpm
pnpm generate

# yarn
yarn generate

# bun
bun run generate
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## Deployment to GitHub Pages

This project is configured for GitHub Pages deployment with the following setup:

1. **Base URL**: Configured for `/portfolio-v2/` repository path
2. **Static Generation**: Uses `nuxt generate` for optimal performance
3. **Client-Side Hydration**: Properly handles interactive components like CursorGlow

### Deployment Steps

1. Build the project:
   ```bash
   npm run generate
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

### CursorGlow Component Fix

The CursorGlow component has been optimized for static site generation:

- **ClientOnly Wrapper**: Ensures the component only renders on the client side
- **Proper SSR Handling**: Uses `useClientSide` composable for consistent client detection
- **Event Listener Management**: Properly handles mouse events in static deployments
- **Mobile Optimization**: Automatically hides on touch devices

## Technical Details

- **Framework**: Nuxt 3 with Vue 3
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Static Generation**: Nitro
- **TypeScript**: Full TypeScript support

Check out the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.
