<a href="https://create-portfolio-demo.saber.land/">
<img src="https://user-images.githubusercontent.com/8784712/58475893-cc4eee80-8181-11e9-8467-e85ccd28a06c.png" alt="create-portfolio-preview">
</a>

## Introduction

Create Portfolio helps you kickstart a personal website that showcases your work as a software developer. It will automatically render a webpage with the owner's profile information, including a photo, bio, and repositories.

Your personal website is waiting to be personalized, though. It includes space to highlight your specific areas of interest in software development, like languages or industries. And it's standing by to publish your next great blog post.

It's all possible using the combination of [Saber](https://saber.land) (for building your website), and GitHub's API (for automatically populating your website with content).

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

## Creating a Post

Check out [the example post](./packages/create-portfolio/template/pages/_posts/my-first-post.md).

## Site Configuration

Use `siteConfig` option in `saber-config.js` for site configuration.

### Site Title

It defaults to your GitHub name, you can customize it in `saber-config.js`:

```js
module.exports = {
  siteConfig: {
    title: 'A Custom Title'
  }
}
```

### Site Description

It defaults to your GitHub bio, you can customize it in `saber-config.js`:

```js
module.exports = {
  siteConfig: {
    description: 'Introduce yourself...'
  }
}
```

## Theme Configuration

Use `themeConfig` option in `saber-config.js` for theme configuration.

### Style

By default it uses `dark` style:

```js
module.exports = {
  themeConfig: {
    style: 'dark'
  }
}
```

Available styles:

- `dark`
- `light`

### GitHub

This is required, we fetch data for this user.

```js
module.exports = {
  themeConfig: {
    // Your GitHub Username
    github: 'egoist'
  }
}
```

### Twitter

Show the link to your Twitter profile.

```js
module.exports = {
  themeConfig: {
    // Twitter handle
    twitter: '_egoistlily'
  }
}
```

### Sponsor

Add a _Sponsor_ button:

```js
module.exports = {
  themeConfig: {
    // Link to the donation page
    sponsorLink: 'https://patreon.com/egoist',
    // The tip to show when you hover the sponsor button
    sponsorTip: 'Support me'
  }
}
```

### Skills

Showcase your skills:

```js
module.exports = {
  themeConfig: {
    skills: [
      {
        topic: 'nodejs',
        description: `I'm a Node.js core contributor`,
        // `image` is optional, by default we load from GitHub
        image: 'https://...'
      }
    ]
  }
}
```

The `topic` should be a valid [GitHub topic](https://github.com/topics), if the topic doesn't have a image by default on GitHub, you need to provide one yourself.

You can check if the image exists by visiting `https://github.com/github/explore/tree/master/topics/{topic}` (replace `{topic}` with actual topic).

## License

MIT &copy; [EGOIST](https://github.com/egoist)
