#!/usr/bin/env node
const { cac } = require('cac')
const update = require('update-notifier')
const pkg = require('../package')

const cli = cac('create-portfolio')

cli
  .command('[directory]', 'Create your portfolio')
  .option('--overwrite', 'Overwrite exiting files')
  .action((dir, options) => {
    if (!dir) {
      return cli.outputHelp()
    }

    return require('.')(dir, options)
  })

process.on('unhandledRejection', err => {
  console.error(err.stack)
  process.exit(1)
})

update({ pkg }).notify()

cli.parse()
