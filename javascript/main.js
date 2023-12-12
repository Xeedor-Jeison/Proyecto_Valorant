
let urlAgentes = "https://valorant-api.com/v1/agents"
let urlMapas = "https://valorant-api.com/v1/maps"
let urlArmas = "https://valorant-api.com/v1/weapons"
let urlPlayersCard = "https://valorant-api.com/v1/playercards"
let urlSpray = "https://valorant-api.com/v1/sprays"
let urlBuddies = "https://valorant-api.com/v1/buddies"
let urlBlundles = "https://valorant-api.com/v1/bundles"
let Urlcompetitivo = "https://valorant-api.com/v1/competitivetiers"


const { createApp } = Vue

const app = createApp({
    data() {
        return {
            agents: [],
            maps: [],
            weapons: [],
        }
    },

    created() {
        this.getDataAgents(urlAgentes)
        this.getDataMaps(urlMapas)
        this.getDataWeapons(Urlcompetitivo)
    },

    methods: {
        getDataAgents(url) {
            fetch(url).then(response => response.json()).then(data => {
                this.agents = data.data.filter(events => events.isPlayableCharacter == true)
                console.log(this.agents)
            })
        },
        getDataMaps(url) {
            fetch(url).then(response => response.json()).then(data => {
                this.maps = data.data.filter(events => events.narrativeDescription != null)
                console.log(this.maps)
            })
        },
        getDataWeapons(url) {
            fetch(url).then(response => response.json()).then(data => {
                this.weapons = (data.data[0].tiers).filter((events => events.largeIcon != null))
                console.log(this.weapons)
            })
        },

       
    },

    computed: {

    }

}).mount('#app')

let botonAgents = document.getElementById("botonAgentes")
botonAgents.addEventListener("click", mostrarDataAgents)

function mostrarDataAgents() {
    let cabecera = document.getElementById("cabecera")
    let cardsPlayer = document.getElementById("cardAgents")
    let videoPrincipal = document.getElementById("videoPrincipal")

    cabecera.classList.remove("d-none")
    cardsPlayer.classList.remove("d-none")
    videoPrincipal.classList.add("d-none")

}

let botonMaps = document.getElementById("botonMapas")
botonMaps.addEventListener("click", mostrarDataMapas)

function mostrarDataMapas() {
    let cabecera = document.getElementById("cabecera")
    let videoPrincipal = document.getElementById("videoPrincipal")
    let cardsMaps = document.getElementById("cardMaps")

    cabecera.classList.remove("d-none")
    cardsMaps.classList.remove("d-none")
    videoPrincipal.classList.add("d-none")
}

let botonAgentesAncord = document.getElementById("botonAgentesAncord")
botonAgentesAncord.addEventListener("click", mostrarAgentes)

function mostrarAgentes() {
    let cardsPlayer = document.getElementById("cardAgents")
    let cardsMaps = document.getElementById("cardMaps")

    cardsPlayer.classList.remove("d-none")
    cardsMaps.classList.add("d-none")
}

let botonMapasAncord = document.getElementById("botonMapasAncord")
botonMapasAncord.addEventListener("click", mostrarMapas)

function mostrarMapas() {
    let cardsPlayer = document.getElementById("cardAgents")
    let cardsMaps = document.getElementById("cardMaps")

    cardsMaps.classList.remove("d-none")
    cardsPlayer.classList.add("d-none")
}

