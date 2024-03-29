// DDBB connection
require('./db/database_connection')

// Model schema & model instance
const Dog = require('./models/dog.model')




// .findByIdAndDelete()
// Recibe como argumento el ID string
// Retorna el objeto eliminado

Dog
    .findByIdAndDelete('64521f437bddc093781cb9b6')
    .then(removedDog => console.log('El perro eliminado es:', removedDog))
    .catch(err => console.log('Hubo un error:', err))






// .deleteMany()
// Recibe como argumento una query, afecta a cualquier match
// Retorna los detalles de la operación

Dog
    .deleteMany({ age: { $lte: 2 } })
    .then(info => console.log('Se han eliminado', info.deletedCount, 'perro/s'))
    .catch(err => console.log('Se produjo un error', err))






// .deleteOne()
// Recibe como argumento una query, afecta al primer match
// Retorna los detalles de la operación 

Dog
    .deleteOne({ age: { $lte: 10 } })
    .then(info => console.log('Este es un objeto informativo sobre una elimiación', info))
    .catch(err => console.log('Se produjo un error', err))
