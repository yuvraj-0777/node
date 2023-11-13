// // CommonJS, every file is module (By default)
// // Modules - Encapsulated Code (only share min)

// const Mike = 'Mike'
// const John = 'John'

// const SayHi = (name) => {
//     console.log(`Hey there ${name}`)
// }

// SayHi(Mike)
// SayHi(John)
// SayHi('Delta')



// CommonJS, every file is module (By default)
// Modules - Encapsulated Code (only share min)

const names = require('./4-names');
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavour')

require('./7-mind-gernade')

sayHi(names.Mike)
sayHi(names.John)
sayHi('Delta')