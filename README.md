The website is online and operational 

https://agency.iterates.be/en



# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

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
pnpm run dev

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
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```
## Production Docker

Build the application for Docker container

```bash

#to build the image

docker build -t agencynuxt .

#to mirror the image on localhost:3000

docker run -it -p 3000:3000 agencynuxt
```

## Docker Build

```bash

# to build the docker image
docker build -t agencynuxt .

# to mirror the docker image
docker run -it -p 3000:3000 agencynuxt

```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
