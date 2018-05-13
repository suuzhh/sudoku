import './scss/main.scss'

const toolkit = require('./js/toolkit')
const matrix = toolkit.makeMatrix()

console.log(matrix)

const a = Array.from({ length: 9 }, (v, i) => i)
console.log(a)
console.log(toolkit.shuffle(a))
