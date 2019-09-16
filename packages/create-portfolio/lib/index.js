const path = require('path')
const { spawnSync } = require('child_process')
const fs = require('fs-extra')
const majo = require('majo')
const Enquirer = require('enquirer')
const ejs = require('ejs')
const colors = require('chalk')
const themeVersion = require('../package').version

module.exports = async (dir, options) => {
  dir = path.resolve(dir)

  if (!options.overwrite) {
    const notEmpty = await fs.pathExists(dir).then(exists => {
      return exists && fs.readdir(dir).then(files => files.length > 0)
    })
    if (notEmpty) {
      throw new Error(`Directory ${dir} isn't empty!`)
    }
  }

  const enquirer = new Enquirer()
  const questions = [
    {
      name: 'github',
      message: 'What is your GitHub username',
      type: 'input',
      validate(value) {
        if (!value) {
          return 'This field is required!'
        }

        return true
      }
    },
    {
      name: 'twitter',
      message: 'What is your Twitter username',
      type: 'input'
    },
    {
      name: 'sponsorLink',
      message: 'What is the URL to your donation page',
      type: 'input'
    }
  ]
  const answers = await enquirer.prompt(questions)

  const templateDir = path.join(__dirname, '../template')
  const stream = majo()
  stream.source('**', { baseDir: templateDir, dotFiles: true })

  stream.use(stream => {
    for (const file of stream.fileList) {
      // Rename _gitignore to .gitignore
      if (file === '_gitignore') {
        stream.createFile('.gitignore', stream.file(file))
        stream.deleteFile(file)
      }
    }
  })

  const projectName = path.basename(dir)

  let npmClient = 'npm'
  try {
    const { status } = spawnSync('yarn', ['--version'])
    if (status === 0) {
      npmClient = 'yarn'
    }
  } catch (error) {
    /* Ignore */
  }

  // Render templates with ejs
  stream.use(stream => {
    for (const file of stream.fileList) {
      stream.writeContents(
        file,
        ejs.render(
          stream.fileContents(file),
          Object.assign(
            {
              projectName,
              npmClient
            },
            answers
          )
        )
      )
    }
  })

  // Create package.json
  stream.use(stream => {
    stream.createFile('package.json', {
      contents: Buffer.from(
        JSON.stringify(
          {
            private: true,
            name: projectName,
            license: 'MIT',
            scripts: {
              dev: 'saber',
              build: 'saber build'
            },
            devDependencies: {
              saber: '^0.9.0',
              'saber-theme-portfolio': `^${themeVersion}`,
              'saber-plugin-query-posts': '^0.4.2',
              'saber-plugin-feed': '^0.4.2'
            }
          },
          null,
          2
        )
      )
    })
  })

  await stream.dest(dir)

  console.log()
  console.log(colors.bold('  To run the website locally:'))
  console.log(`  ${colors.cyan('cd')} ${projectName}`)
  console.log(`  ${colors.cyan(npmClient)} install`)
  console.log(`  ${colors.cyan(npmClient)} run dev`)
  console.log()
  console.log(colors.bold('  To build the website for production:'))
  console.log(`  ${colors.cyan('cd')} ${projectName}`)
  console.log(`  ${colors.cyan(npmClient)} install`)
  console.log(`  ${colors.cyan(npmClient)} run build`)
  console.log()
  console.log(
    colors.dim(
      `  For more usages, check out ${colors.underline(
        'https://git.io/create-portfolio'
      )}`
    )
  )
  console.log()
}
