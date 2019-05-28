![create-portfolio-preview](https://user-images.githubusercontent.com/8784712/58467049-7f611d00-816d-11e9-954d-2048784bbe11.png)

Create Portfolio helps you kickstart a personal website that showcases your work as a software developer.

## Quick Start

Create a new project with `npm init`:

```bash
npm init portfolio my-site
# OR Yarn
yarn create portfolio my-site
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

## License

MIT &copy; [EGOIST](https://github.com/egoist)
