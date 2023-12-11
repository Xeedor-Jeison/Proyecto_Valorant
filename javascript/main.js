// let urlAgentes = "https://valorant-api.com/v1/agents"
// let urlMapas = "https://valorant-api.com/v1/maps"
// let urlArmas ="https://valorant-api.com/v1/weapons"
// let urlPlayersCard = "https://valorant-api.com/v1/playercards"
// let urlSpray = "https://valorant-api.com/v1/sprays"
// let urlBuddies = "https://valorant-api.com/v1/buddies"


// let urlPrueba = "https://dash.valorant-api.com/"


// fetch(urlAgentes)
//     .then(response => response.json())
//     .then(data => {

//         console.log(data)
//         console.log(data)

//         // let miData = data.data
//         // let miData = data.data.filter(events=> events.fullIcon != null)
        
//         //Filtrado para los mapas sin descripcion
//         // let miData = data.data.filter( events=> events.narrativeDescription !=null)

//         //Filtro para los agentes, Sova repetido.
//         let miData = data.data.filter(events => events.isPlayableCharacter == true)

//         console.log(miData)
//         let divPrincipal = document.getElementById("divPrincipal")

//         crearTarjetas(miData)

//         function crearTarjetas(array) {
//             divPrincipal.innerHTML = ""

//             for (let i = 0; i < array.length; i++) {
//                 if (array[i] != undefined) {
//                     let card = document.createElement("div")
//                     card.classList.add("col-sm-3", "col-md-6", "col-xxl-3", "d-flex")
//                     card.innerHTML = `<div
//             class="card  tamañoCard mb-5  ms-2 me-2 shadow-lg bg-body-black rounded border  border-black border-opacity-10 border-5">
            
//             <img src="${array[i].displayIcon}"
//                 class="card-img-top  img-card border border-black border-opacity-10 border-4  "
//                 alt=""
//                 >
//                 <h5 class="card-title mb-3 fw-bold">${array[i].displayName}</h5>
               
            
//         </div>`

//         card.innerHTML= `<a class="mb-5" href ="#">
//         <img class="mb-2" src= "${array[i].displayIcon}">
//         <h5 class="text-center">${array[i].displayName}</h5> 
//         </a>`
//                     divPrincipal.appendChild(card)
//                 }
                

//             }

//         }

//     })