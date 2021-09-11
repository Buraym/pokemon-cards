import '../styles/Home.css'
import StaraptorFoto from '../assets/Staraptor.png'
import Card from '../components/Card'

function Home(){

    const lista = [
        {
            "imagem":StaraptorFoto,
            "nome":"Staraptor",
            "pokedexN":398,
            "peso":"24.9",
            "altura":"1.2",
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
            <Card imagem={lista[0].imagem}  nome={lista[0].nome} pokedexN={lista[0].pokedexN} peso={lista[0].peso} altura={lista[0].altura} categoria={lista[0].categoria} abilidades={lista[0].abilidades} genero={lista[0].genero} tipo1={lista[0].tipo1} tipo2={lista[0].tipo2} tipo3={lista[0].tipo3} fraqueza1={lista[0].fraqueza1} fraqueza2={lista[0].fraqueza2} fraqueza3={lista[0].fraqueza3} hp={lista[0].hp} ataque={lista[0].ataque} ataqueEsp={lista[0].hp} hp={lista[0].ataqueEsp}/>
        </div>
    )
}

export default Home;