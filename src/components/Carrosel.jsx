import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';

function Carrosel(props){

    const [item, setItem] = useState(0)
    const [imagem, setImagem] = useState("")
    const [nome, setNome] = useState("")
    const [musica, setMusica] = useState("")

    return(
        <div className="carrosel">
            <IoIosArrowBack onClick={()=>{
                if(item > 0){
                    setItem(item - 1)
                }
            }}/>
            {
                (item == ((props.list.length))) ?
                    <div className="card">
                        <div className="card-imagem-caixa">
                            <div className="card-imagem"></div>
                        </div>
                        <div className="card-conteudo"> 
                            <input className="card-nome-selecionar"/>
                            <div>                    
                                <ImageIcon className="card-imagem-selecionar"/>
                                <MusicNoteIcon className="card-musica-selecionar"/>
                            </div>
                            <AddCircleIcon className="card-adicionar"/>
                        </div>
                    </div>
                :
                    <Card imagem={props.lista[item].imagem} nome={props.lista[item].nome} pokedexN={props.lista[item].pokedexN} peso={props.lista[item].peso} altura={props.lista[item].altura} categoria={props.lista[item].categoria} abilidades={props.lista[item].abilidades} genero={props.lista[item].genero} tipo1={props.lista[item].tipo1} tipo2={props.lista[item].tipo2} tipo3={props.lista[item].tipo3} fraqueza1={props.lista[item].fraqueza1} fraqueza2={props.lista[item].fraqueza2} fraqueza3={props.lista[item].fraqueza3} fraqueza4={props.lista[item].fraqueza4} hp={props.lista[item].hp} ataque={props.lista[item].ataque} ataqueEsp={props.lista[item].ataqueEsp} defesa={props.lista[item].defesa} defesaEsp={props.lista[item].defesaEsp} velocidade={props.lista[item].velocidade}/>
            }
            <IoIosArrowForward onClick={()=>{
                if(item < ((props.musiclist.length))){
                    (setItem(item + 1))
                }
            }}/>
        </div>
    )
}

export default Carrosel;