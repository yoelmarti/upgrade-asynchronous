
// 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
// hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
// console.log(). Para ello, es necesario que crees un .html y un .js.

// fetch('https://api.agify.io?name=michael')
//   .then((response) => {
//     return response.json();
//   })
//   .then((myJson) => {
//     console.log(myJson);
//   });


// 2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
// fetch() para hacer una consulta a la api cuando se haga click en el botón, 
// pasando como parametro de la api, el valor del input.

const baseUrl = 'https://api.nationalize.io';


const queryUser = () =>{
    const queryInput = document.querySelector('input')
    fetch(`https://api.nationalize.io?name=${queryInput.value}`)
      .then((response) => {
        return response.json();
      })
      .then((userJson) => {
        createUSerPercentage(userJson)
        // console.log(userJson)
      });
};



const btn = document.querySelector('button#queryButton');
btn.addEventListener("click", queryUser)

// console.log(btn)


// 2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
// a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
// EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
// de MZ.

// const createUSerPercentage =(user)=>{
//     const p = document.createElement('p')
//     let text = `El nombre ${user.name} tiene un`
//     user.country.map((elemento)=>{
//         const porcentaje = Math.floor(elemento.probability * 100)
//         text += ` ${porcentaje} porciento de ser de ${elemento.country_id}. `
//     })
//     p.textContent = text;
//     document.body.appendChild(p)
// };


// 2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
// de los p que hayas insertado y que si el usuario hace click en este botón 
// eliminemos el parrafo asociado.

const createUSerPercentage = (user) =>{
    let text = `El nombre ${user.name} tiene un`
    user.country.map((elemento)=>{
        const porcentaje = Math.floor(elemento.probability * 100);
        text += ` ${porcentaje} porciento de ser de ${elemento.country_id}. `
    })
    const p = document.createElement('p')
    let btn2 = document.createElement("button");
    
    p.textContent = text;
    btn2.innerText ='X';
    
    let div = document.createElement("div");
    
    div.appendChild(p);
    div.appendChild(btn2);

    btn2.addEventListener("click", function(){
        remover(div)
    });
    
    
    document.body.appendChild(div);
};
const remover = (element) =>{
    element.remove();
}