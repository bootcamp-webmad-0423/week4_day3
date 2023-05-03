// DDBB connection
require('./db/database_connection')

// Model schema & model instance
const Dog = require('./models/dog.model')




// .findByIdAndUpdate()
// Dos argumentos: string con ID, y query de manipulación
// retorno: el elemento anterior al update
// El argumento adicional {new: true} hará que retorne el elemento tras el update


Dog
    .findByIdAndUpdate('64521f437bddc093781cb9b6', { $inc: { age: 100 }, name: 'Pistacho el viejo' }, { new: true })
    .then(dog => console.log("El perro modificado es:", dog))
    .catch(err => console.log('Hubo un error', err))






// .updateMany()
// Dos argumentos: query de búsqueda y query de actualización
// retorno: objeto con detalles de la operación

Dog
    .updateMany({ name: 'Popino' }, { age: 80 })
    .then(details => console.log("Los detalles de la modificación son:", details))
    .catch(err => console.log('Hubo un error', err))







// .updateOne()
// Dos argumentos: query de búsqueda y query de actualización
// Retorn: objeto con detalles de la operación

Dog
    .updateOne({ name: 'Salchichonio' }, { name: 'Salchichonio reloaded' })
    .then(info => console.log("Los detalles de la modificación son:", info))
    .catch(err => console.log('Hubo un error', err))