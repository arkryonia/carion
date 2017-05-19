// imports node js module
const fs = require('fs')
const marked = require('marked')

// read the content of readme.md  file using fs module
const content = fs.readFileSync('README.md', 'utf-8')

//  convert md file into html
const html = marked(content)

// update the dom with the transformed html
document.getElementById('viewer').innerHTML = html
