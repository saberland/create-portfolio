---
title: About
layout: page
---

## Prerequisite

You need [Node.js](https://nodejs.org) installed on your machine.

## Quick Start

Create a new project with a single command:

```bash
npx create-portfolio my-site
# OR Yarn
yarn create portfolio my-site
```

Alternatively, you can install `create-portfolio` globally:

```bash
npm i -g create-portfolio
create-portfolio my-site
```

Change into your new directory:

```bash
cd my-site
```

Install dependencies:

```bash
npm install
```

Run the website locally:

```bash
npm run dev
```

Now browse to http://localhost:3000 you should see your page.

## Build for Production

Run `npm run build` to create a production build of your app, generated files can be found at `./public` folder, then it can be [deployed as a static website](https://saber.land/docs/deployment.html).
