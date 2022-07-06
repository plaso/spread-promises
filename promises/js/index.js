// STATUS

// PENDING --> PIDO EL UBER
// FULLFILLED --> ME VIENE A BUSCAR
// ERROR --> BUSCATE A OTRO


// const firstPromise = new Promise((resolve, reject) => {
//   //Tarda un buen rato en acabar

//   // setTimeout(() => {
//   //   resolve('Todo guay!')
//   // }, 2000)

//   if (Math.random() > 0.5) {
//     resolve('Guay');
//   } else {
//     reject('Error muy importante');
//   }
// })


// firstPromise
//   .then((value) => {
//     console.log(value)
//   }) // Fullfilled - Todo guay 
//   .catch((err) => {
//     throw Error(err)
//   }) // Error
//   .finally(() => {
//     console.log('finally');
//   }) // Siempre


// const haveBreakfast = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Ok breakfast')
//   }, 2000)
// })
// const haveLunch = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Lunch error')
//   }, 4000)
// })
// const haveDinner = new Promise((resolve, reject) => {
//   reject('Ok dinner')
// })


// haveBreakfast
//   .then((result) => {
//     console.log(result);
//     return haveLunch
//   })
//   .then(value => {
//     console.log(value);
//   })
//   .catch(err => {
//     console.log('Catch generico');
//     console.error(err)
//   })
//   .finally(() => {
//     console.log('terminé');
//   })


// Promise.all([ haveBreakfast, haveLunch, haveDinner ])
//   .then(([ breakfastMessage, lunchMessage, dinnerMessage ]) => {
//     console.log(breakfastMessage)
//   })
//   .catch(err => console.error(err))


// ASYNC / AWAIT

const superPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: 'Estrella Galicia' })
      // reject('Error')
    }, 2000);
  })
}

const breakfast = (food) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`I had ${food} in my breakfast`)
    }, 4000);
  })
}

const value = undefined

const getBeer = async () => {
  try {
    const result = await superPromise()
    const breakfastResult = await breakfast(result.name)
    console.log(breakfastResult);

  } catch(err) {
    console.error(err)
  }
}


const getBeer2 = () => {
  superPromise()
    .then(result => {
      return breakfast(result.name)
    })
    .then(message => {
      console.log(message)
    })
    .catch(err => console.error(err))
}

getBeer()
getBeer2()