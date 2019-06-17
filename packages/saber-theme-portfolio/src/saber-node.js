const axios = require('axios')

exports.beforePlugins = async function() {
  const { github, projects } = this.config.themeConfig
  const usePinnedRepos = projects === 'pinned-repos'

  this.log.info(`Fetching GitHub data for ${github}..`)
  const [userResult, projectsResult] = await Promise.all([
    axios({
      method: 'GET',
      url: `https://api.github.com/users/${github}`
    }),
    axios({
      method: 'GET',
      url: usePinnedRepos
        ? `https://gh-pinned-repos.now.sh/?username=${github}`
        : `https://api.github.com/search/repositories?q=user:${github}&sort:stars&per_page=6`
    }).catch(error => {
      if (usePinnedRepos) {
        throw error
      }

      // No repos
      if (
        error.response &&
        error.response.status === 422 &&
        error.response.data &&
        error.response.data.message === 'Validation Failed'
      ) {
        return { data: { items: [] } }
      }

      throw error
    })
  ])

  const updateConfig = () => {
    this.config.siteConfig = Object.assign(
      {
        title: userResult.data.name || userResult.data.login,
        description: userResult.data.bio,
        email: userResult.data.email,
        author: userResult.data.name || userResult.data.login
      },
      this.config.siteConfig
    )
    this.config.themeConfig = Object.assign(
      {
        hireable: userResult.data.hireable,
        profilePicture: userResult.data.avatar_url
      },
      this.config.themeConfig,
      {
        projects: usePinnedRepos
          ? projectsResult.data.map(item => {
              return {
                name: item.repo,
                url: `https://github.com/${item.owner}/${item.repo}`,
                description: item.description,
                language: item.language,
                stars: item.stars
              }
            })
          : projectsResult.data.items.map(item => {
              return {
                name: item.name,
                url: item.html_url,
                description: item.description,
                language: item.language,
                stars: item.stargazers_count
              }
            })
      }
    )
  }

  updateConfig()
  this.hooks.onUpdateConfigFile.tap('theme-node-api', () => {
    updateConfig()
  })

  this.applyPlugin(require('saber-plugin-prismjs'))
}

exports.chainWebpack = function(config) {
  config.plugin('constants').tap(([constants]) => [
    Object.assign(constants, {
      __PORTFOLIO_STYLE__: JSON.stringify(this.config.themeConfig.style)
    })
  ])
}
