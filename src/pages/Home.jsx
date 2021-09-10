import StaraptorFoto from '../assets/Staraptor.png'
import Card from '../components/Card'

function Home(){

    const lista = [
        {
            "imagem":StaraptorFoto,
            "nome":"Staraptor",
            "pokedexN":398,
            "peso":"24.9 Kg",
            "altura":"1.2m",
            "categoria":"Predador",
            "abilidades":"Intimidar",
            "genero":"ambos",
            "tipo1":"normal",
            "tipo2":"voador",
            "tipo3":null,
            "fraqueza1":"eletrico",
            "fraqueza2":"gelo",
            "fraqueza3":"pedra",
            "hp":5,
            "ataque":8,
            "ataqueEsp":5,
            "defesa":3,
            "defesaEsp":4,
            "velocidade":6
        }
    ]

    return(
        <div className="tela">
            <Card />
        </div>
    )
}

export default Home;