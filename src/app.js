const carrusel = document.querySelector('.carrusel-items');

let intervalo = null
let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth
let step = 1;

const start = () =>{
  intervalo = setInterval(() => {
    carrusel.scrollLeft = carrusel.scrollLeft + step;

    if (carrusel.scrollLeft === maxScrollLeft) {
      step = step * -1;
    }
    else if (carrusel.scrollLeft === 0) {
      step = step * -1
    }

  }, 15);
}

const stop = () =>{
  clearInterval(intervalo)
}

carrusel.addEventListener('mouseover',()=>{
  stop();
})

carrusel.addEventListener('mouseout',()=>{
  start()
})


// start()

// const carrusel = document.querySelector('.carrusel-items');

// // Duplicar los elementos del carrusel
// const carruselItems = carrusel.innerHTML;
// carrusel.innerHTML += carruselItems;

// // Establecer la posición inicial del carrusel
// carrusel.scrollLeft = carrusel.offsetWidth;

// let intervalo = null
// let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth
// let step = 1;

// const start = () =>{
//   intervalo = setInterval(() => {
//     carrusel.scrollLeft = carrusel.scrollLeft + step;

//     // Si llega al final, moverlo de vuelta a la posición inicial
//     if (carrusel.scrollLeft >= carrusel.scrollWidth - carrusel.offsetWidth) {
//       carrusel.scrollLeft = carrusel.offsetWidth - step;
//     }
//     // Si llega al principio, moverlo de vuelta a la posición final
//     else if (carrusel.scrollLeft <= 0) {
//       carrusel.scrollLeft = carrusel.scrollWidth - carrusel.offsetWidth + step;
//     }
//   }, 1);
// }

// const stop = () =>{
//   clearInterval(intervalo)
// }

// carrusel.addEventListener('mouseover',()=>{
//   stop();
// })

// carrusel.addEventListener('mouseout',()=>{
//   start()
// })

// start();

// const carrusel = document.querySelector('.carrusel-items');

// // Duplicar los elementos del carrusel
// const carruselItems = carrusel.innerHTML;
// carrusel.innerHTML += carruselItems;

// // Establecer la posición inicial del carrusel
// carrusel.scrollLeft = carrusel.offsetWidth;

// let intervalo = null;
// let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
// let step = 1;

// const start = () => {
//   intervalo = setInterval(() => {
//     carrusel.scrollLeft += step;

//     // Si llega al final, realizar transición suave
//     if (carrusel.scrollLeft >= carrusel.scrollWidth - carrusel.offsetWidth) {
//       carrusel.style.transition = "none";
//       carrusel.scrollLeft = carrusel.offsetWidth - step;
//       setTimeout(() => {
//         carrusel.style.transition = "all 0.5s ease-in-out";
//         carrusel.scrollLeft = carrusel.offsetWidth;
//       }, 50);
//     }
//     // Si llega al principio, realizar transición suave
//     else if (carrusel.scrollLeft <= 0) {
//       carrusel.style.transition = "none";
//       carrusel.scrollLeft = carrusel.scrollWidth - carrusel.offsetWidth + step;
//       setTimeout(() => {
//         carrusel.style.transition = "all 0.5s ease-in-out";
//         carrusel.scrollLeft = carrusel.scrollWidth - carrusel.offsetWidth;
//       }, 50);
//     }
//   }, 15);
// };

// const stop = () => {
//   clearInterval(intervalo);
// };

// carrusel.addEventListener('mouseover', () => {
//   stop();
// });

// carrusel.addEventListener('mouseout', () => {
//   start();
// });

// start();