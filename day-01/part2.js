'use strict'

const fs = require('fs')

let input = fs.readFileSync('input.txt', 'utf8').split('')
let floor = 1
let basement = false

let res = input.map((direction) => {
  if (direction === '(') {
    floor++
  }
  else {
    floor--
  }

  return floor
})

console.log(res.indexOf(-1))
