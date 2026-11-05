const { program } = require('commander')
const _ = require('lodash')

program.argument('<words...>').action((words) => console.log(_.capitalize(words.join(' '))))
program.parse()
