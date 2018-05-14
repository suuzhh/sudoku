import './scss/main.scss'

import Grid from './js/ui/grid'

import Generator from './js/core/generator'
import Checker from './js/core/checker'

const grid = new Grid($('#container'))

grid.build()
grid.layout()


const generate = new Generator()
generate.generate()

const checker = new Checker(generate.matrix)

console.log(checker.check())
console.log(checker.matrixMarks)