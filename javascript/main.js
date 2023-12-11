
let urlAgentes = "https://valorant-api.com/v1/agents"
let urlMapas = "https://valorant-api.com/v1/maps"
let urlArmas = "https://valorant-api.com/v1/weapons"
let urlPlayersCard = "https://valorant-api.com/v1/playercards"
let urlSpray = "https://valorant-api.com/v1/sprays"
let urlBuddies = "https://valorant-api.com/v1/buddies"
let urlBlundles = "https://valorant-api.com/v1/bundles"
let Urlcompetitivo = "https://valorant-api.com/v1/competitivetiers"

let urlPrueba = "https://latam.api.riotgames.com/val/content/v1/contents/playerCards	"


// // let urlPrueba = "https://dash.valorant-api.com/"
// boton1.addEventListener("click", e => {
//     boton1.classList.add("d-none")
//     informacion2.innerHTML = ""
//     fetch(urlMapas)
//         .then(response => response.json())
//         .then(data => {

//             console.log(data)

//             // let miData = data.data
//             // let miData = data.data.filter(events=> events.fullIcon != null)

//             //Filtrado para los mapas sin descripcion
//             let miData = data.data.filter(events => events.narrativeDescription != null)

//             //Filtro para los agentes, Sova repetido.
//             // let miData = data.data.filter(events => events.isPlayableCharacter == true)

//             console.log(miData)
//             let divPrincipal = document.getElementById("informacion1")

//             crearTarjetas(miData)

//             function crearTarjetas(array) {
//                 divPrincipal.innerHTML = ""

//                 for (let i = 0; i < array.length; i++) {
//                     if (array[i] != undefined) {
//                         let card = document.createElement("div")
//                         card.classList.add("col-sm-3", "col-md-6", "col-xxl-3", "d-flex")
//                         card.innerHTML = `<div
//                             class="card  tamañoCard mb-5  ms-2 me-2 shadow-lg bg-body-black rounded border  border-black border-opacity-10 border-5">
                            
//                             <img " src="${array[i].splash}">
//                             <img " src="${array[i].displayIcon}">
                             
//                                 <h5 class="card-title mb-3 fw-bold">${array[i].displayName}</h5>


//                         </div>`

//                         //                 card.innerHTML = `<a class="mb-5 position-relative" href ="#">
//                         // <h3 class="prueba">${array[i].displayName}</h3>
//                         // <img class="mb-2 position-absolute" src= "${array[i].displayIcon}">
//                         // <img class="mb-2" src= "${array[i].splash}">
//                         // <h5 class="text-center">${array[i].displayName}</h5> 
//                         // </a>`
//                         divPrincipal.appendChild(card)
//                     }
//                 }
//             }
//         })
// })
    fetch(urlAgentes)
        .then(response => response.json())
        .then(data => {

            console.log(data)

            // let miData = data.data
            // let miData = data.data.filter(events=> events.fullIcon != null)

            //Filtrado para los mapas sin descripcion
            // let miData = data.data.filter( events=> events.narrativeDescription !=null)

            //Filtro para los agentes, Sova repetido.
            let miData = data.data.filter(events => events.isPlayableCharacter == true)

            console.log(miData)
            let sectionCardAgents = document.getElementById("cardAgents")


            crearTarjetas(miData)

            function crearTarjetas(array) {
                sectionCardAgents.innerHTML = ""

                for (let i = 0; i < array.length; i++) {
                    if (array[i] != undefined) {
                        let card = document.createElement("div")
                        card.classList.add("card", "m-3")
                                    card.innerHTML = `<div class="face Front">

                                    <img class="imagenPruebaCards" src="${array[i].displayIcon}" alt="${array[i].displayName}">
                                    <h3>${array[i].displayName} </h3>
                    
                                </div>
                                <div class="face Back">
                                    <h3>${(array[i].displayName).toUpperCase()}</h3>
                    
                                    <p>${array[i].description}</p>
                                    <div class="linkSage">
                                        <a href="../html/details.html">MORE DETAILS</a>
                    
                                    </div>
                                </div>`

                        //                 card.innerHTML = `<a class="mb-5" href ="#">
                        // <img class="mb-2" src= "${array[i].displayIcon}">
                        // <h5 class="text-center">${array[i].displayName}</h5> 
                        // </a>`
                        sectionCardAgents.appendChild(card)
                    }
                }
            }
        })

// boton4.addEventListener("click", e => {
//     informacion1.innerHTML = ""
//     fetch(Urlcompetitivo)
//         .then(response => response.json())
//         .then(data => {

//             console.log(data)

//             let miData = data.data[0].tiers
//             let filtroData = miData.filter(events => events.largeIcon != null)
//             console.log(filtroData)
//             // let miData = data.data.filter(events=> events.fullIcon != null)

//             //Filtrado para los mapas sin descripcion
//             // let miData = data.data.filter( events=> events.narrativeDescription !=null)

//             //Filtro para los agentes, Sova repetido.
//             // let miData = data.data.filter(events => events.isPlayableCharacter == true)

//             console.log(miData)
//             let divPrincipal = document.getElementById("informacion2")

//             crearTarjetas(filtroData)

//             function crearTarjetas(array) {
//                 divPrincipal.innerHTML = ""

//                 for (let i = 0; i < array.length; i++) {
//                     if (array[i] != undefined) {
//                         let card = document.createElement("div")
//                         card.classList.add("col-sm-3", "col-md-6", "col-xxl-3", "d-flex")
//                                     card.innerHTML = `<div
//                             class="card  tamañoCard mb-5  ms-2 me-2 shadow-lg bg-body-black rounded border  border-black border-opacity-10 border-5">

//                             <img src="${array[i].smallIcon}"
//                                 class="card-img-top  img-card border border-black border-opacity-10 border-4  "
//                                 alt=""
//                                 >
//                                 <h5 class="card-title mb-3 fw-bold text-center">${array[i].tierName}</h5>


//                         </div>`

//                         //                 card.innerHTML = `<a class="mb-5" href ="#">
//                         // <img class="mb-2" src= "${array[i].displayIcon}">
//                         // <h5 class="text-center">${array[i].displayName}</h5> 
//                         // </a>`
//                         divPrincipal.appendChild(card)
//                     }
//                 }
//             }
//         })
// })
// boton3.addEventListener("click", e => {
    
//     informacion1.innerHTML=""
//     informacion2.innerHTML=""
//     boton1.classList.remove("d-none")


// })
