import { useState } from "react";
import { AiOutlineDownCircle } from 'react-icons/ai';
import { FiCircle } from 'react-icons/fi';
import { BsSquareFill } from 'react-icons/bs';
import { BsSquare } from 'react-icons/bs';
import { FaGenderless } from 'react-icons/fa';


function Card(props){

    const [status, setStatus] = useState(false)

    const Stats = {
        "hp":props.hp,
        "ataque":props.ataque,
        "ataqueEsp":props.ataqueEsp,
        "defesa":props.defesa,
        "defesaEsp":props.defesaEsp,
        "velocidade":props.velocidade,
    }

    return(
        <div className="card">
            <div className="card-cima">
                <img src={props.imagem}/>
            </div>
            <div className="card-baixo">
                <label className="card-nome"> {props.nome} Nº {props.pokedexN}</label>
                {
                    status ?
                        <div>
                            <label className="card-caracteristica"> {props.peso}</label>
                            <label className="card-caracteristica"> {props.altura}</label>
                            <label className="card-caracteristica"> {props.categoria}</label>
                            <label className="card-caracteristica"> {props.abilidades}</label>
                            <label className="card-caracteristica">
                                {
                                    (props.genero === "feminino") ?
                                        <FaGenderless style={{"color":"ff006e"}} />
                                    :
                                        (props.genero === "masculino") ?
                                            <FaGenderless style={{"color":"3a86ff"}} />
                                        :
                                            (props.genero === "ambos") ?
                                                <>
                                                    <FaGenderless style={{"color":"3a86ff"}} />
                                                    <FaGenderless style={{"color":"ff006e"}} />
                                                </>
                                            :
                                                <FaGenderless style={{"color":"8d99ae"}} />
                                }
                            </label>
                            <div>
                                <label className="card-caracteristica"> 
                                    { props.tipo1 === "inseto" ? <FiCircle style={{"color":"007f5f"}} /> : props.tipo1 === "sombrio" ? <FiCircle style={{"color":"000000"}} /> : props.tipo1 === "dragao" ? <FiCircle style={{"color":"457b9d"}} /> : props.tipo1 === "eletrico" ? <FiCircle style={{"color":"ffb703"}} /> : props.tipo1 === "fada" ? <FiCircle style={{"color":"ff006e"}} /> : props.tipo1 === "lutador" ? <FiCircle style={{"color":"d62828"}} /> : props.tipo1 === "fogo" ? <FiCircle style={{"color":"d00000"}} /> : props.tipo1 === "voador" ? <FiCircle style={{"color":"386480"}} /> : props.tipo1 === "fantasma" ? <FiCircle style={{"color":"54455f"}} /> : props.tipo1 === "grama" ? <FiCircle style={{"color":"aacc00"}} /> : props.tipo1 === "terra" ? <FiCircle style={{"color":"C59130"}} /> : props.tipo1 === "gelo" ? <FiCircle style={{"color":"caf0f8"}} /> : props.tipo1 === "normal" ? <FiCircle style={{"color":"5F4D6A"}} /> : props.tipo1 === "venenoso" ? <FiCircle style={{"color":"6d08af"}} /> : props.tipo1 === "psiquico" ? <FiCircle style={{"color":"ff006e"}} /> : props.tipo1 === "pedra" ? <FiCircle style={{"color":"7f5539"}} /> : props.tipo1 === "aco" ? <FiCircle style={{"color":"33c1b1"}} /> : props.tipo1 === "aquatico" ? <FiCircle style={{"color":"03045e"}} /> : null }
                                    { props.tipo2 === "inseto" ? <FiCircle style={{"color":"007f5f"}} /> : props.tipo2 === "sombrio" ? <FiCircle style={{"color":"000000"}} /> : props.tipo2 === "dragao" ? <FiCircle style={{"color":"457b9d"}} /> : props.tipo2 === "eletrico" ? <FiCircle style={{"color":"ffb703"}} /> : props.tipo2 === "fada" ? <FiCircle style={{"color":"ff006e"}} /> : props.tipo2 === "lutador" ? <FiCircle style={{"color":"d62828"}} /> : props.tipo2 === "fogo" ? <FiCircle style={{"color":"d00000"}} /> : props.tipo2 === "voador" ? <FiCircle style={{"color":"386480"}} /> : props.tipo2 === "fantasma" ? <FiCircle style={{"color":"54455f"}} /> : props.tipo2 === "grama" ? <FiCircle style={{"color":"aacc00"}} /> : props.tipo2 === "terra" ? <FiCircle style={{"color":"C59130"}} /> : props.tipo2 === "gelo" ? <FiCircle style={{"color":"caf0f8"}} /> : props.tipo2 === "normal" ? <FiCircle style={{"color":"5F4D6A"}} /> : props.tipo2 === "venenoso" ? <FiCircle style={{"color":"6d08af"}} /> : props.tipo2 === "psiquico" ? <FiCircle style={{"color":"ff006e"}} /> : props.tipo2 === "pedra" ? <FiCircle style={{"color":"7f5539"}} /> : props.tipo2 === "aco" ? <FiCircle style={{"color":"33c1b1"}} /> : props.tipo2 === "aquatico" ? <FiCircle style={{"color":"03045e"}} /> : null }
                                    { props.tipo3 === "inseto" ? <FiCircle style={{"color":"007f5f"}} /> : props.tipo3 === "sombrio" ? <FiCircle style={{"color":"000000"}} /> : props.tipo3 === "dragao" ? <FiCircle style={{"color":"457b9d"}} /> : props.tipo3 === "eletrico" ? <FiCircle style={{"color":"ffb703"}} /> : props.tipo3 === "fada" ? <FiCircle style={{"color":"ff006e"}} /> : props.tipo3 === "lutador" ? <FiCircle style={{"color":"d62828"}} /> : props.tipo3 === "fogo" ? <FiCircle style={{"color":"d00000"}} /> : props.tipo3 === "voador" ? <FiCircle style={{"color":"386480"}} /> : props.tipo3 === "fantasma" ? <FiCircle style={{"color":"54455f"}} /> : props.tipo3 === "grama" ? <FiCircle style={{"color":"aacc00"}} /> : props.tipo3 === "terra" ? <FiCircle style={{"color":"C59130"}} /> : props.tipo3 === "gelo" ? <FiCircle style={{"color":"caf0f8"}} /> : props.tipo3 === "normal" ? <FiCircle style={{"color":"5F4D6A"}} /> : props.tipo3 === "venenoso" ? <FiCircle style={{"color":"6d08af"}} /> : props.tipo3 === "psiquico" ? <FiCircle style={{"color":"ff006e"}} /> : props.tipo3 === "pedra" ? <FiCircle style={{"color":"7f5539"}} /> : props.tipo3 === "aco" ? <FiCircle style={{"color":"33c1b1"}} /> : props.tipo3 === "aquatico" ? <FiCircle style={{"color":"03045e"}} /> : null }
                                </label>
                                <label className="card-caracteristica">
                                    { props.fraqueza1 === "inseto" ? <AiOutlineDownCircle style={{"color":"007f5f"}} /> : props.fraqueza1 === "sombrio" ? <AiOutlineDownCircle style={{"color":"000000"}} /> : props.fraqueza1 === "dragao" ? <AiOutlineDownCircle style={{"color":"457b9d"}} /> : props.fraqueza1 === "eletrico" ? <AiOutlineDownCircle style={{"color":"ffb703"}} /> : props.fraqueza1 === "fada" ? <AiOutlineDownCircle style={{"color":"ff006e"}} /> : props.fraqueza1 === "lutador" ? <AiOutlineDownCircle style={{"color":"d62828"}} /> : props.fraqueza1 === "fogo" ? <AiOutlineDownCircle style={{"color":"d00000"}} /> : props.fraqueza1 === "voador" ? <AiOutlineDownCircle style={{"color":"386480"}} /> : props.fraqueza1 === "fantasma" ? <AiOutlineDownCircle style={{"color":"54455f"}} /> : props.fraqueza1 === "grama" ? <AiOutlineDownCircle style={{"color":"aacc00"}} /> : props.fraqueza1 === "terra" ? <AiOutlineDownCircle style={{"color":"C59130"}} /> : props.fraqueza1 === "gelo" ? <AiOutlineDownCircle style={{"color":"caf0f8"}} /> : props.fraqueza1 === "normal" ? <AiOutlineDownCircle style={{"color":"5F4D6A"}} /> : props.fraqueza1 === "venenoso" ? <AiOutlineDownCircle style={{"color":"6d08af"}} /> : props.fraqueza1 === "psiquico" ? <AiOutlineDownCircle style={{"color":"ff006e"}} /> : props.fraqueza1 === "pedra" ? <AiOutlineDownCircle style={{"color":"7f5539"}} /> : props.fraqueza1 === "aco" ? <AiOutlineDownCircle style={{"color":"33c1b1"}} /> : props.fraqueza1 === "aquatico" ? <AiOutlineDownCircle style={{"color":"03045e"}} /> : null }
                                    { props.fraqueza2 === "inseto" ? <AiOutlineDownCircle style={{"color":"007f5f"}} /> : props.fraqueza2 === "sombrio" ? <AiOutlineDownCircle style={{"color":"000000"}} /> : props.fraqueza2 === "dragao" ? <AiOutlineDownCircle style={{"color":"457b9d"}} /> : props.fraqueza2 === "eletrico" ? <AiOutlineDownCircle style={{"color":"ffb703"}} /> : props.fraqueza2 === "fada" ? <AiOutlineDownCircle style={{"color":"ff006e"}} /> : props.fraqueza2 === "lutador" ? <AiOutlineDownCircle style={{"color":"d62828"}} /> : props.fraqueza2 === "fogo" ? <AiOutlineDownCircle style={{"color":"d00000"}} /> : props.fraqueza2 === "voador" ? <AiOutlineDownCircle style={{"color":"386480"}} /> : props.fraqueza2 === "fantasma" ? <AiOutlineDownCircle style={{"color":"54455f"}} /> : props.fraqueza2 === "grama" ? <AiOutlineDownCircle style={{"color":"aacc00"}} /> : props.fraqueza2 === "terra" ? <AiOutlineDownCircle style={{"color":"C59130"}} /> : props.fraqueza2 === "gelo" ? <AiOutlineDownCircle style={{"color":"caf0f8"}} /> : props.fraqueza2 === "normal" ? <AiOutlineDownCircle style={{"color":"5F4D6A"}} /> : props.fraqueza2 === "venenoso" ? <AiOutlineDownCircle style={{"color":"6d08af"}} /> : props.fraqueza2 === "psiquico" ? <AiOutlineDownCircle style={{"color":"ff006e"}} /> : props.fraqueza2 === "pedra" ? <AiOutlineDownCircle style={{"color":"7f5539"}} /> : props.fraqueza2 === "aco" ? <AiOutlineDownCircle style={{"color":"33c1b1"}} /> : props.fraqueza2 === "aquatico" ? <AiOutlineDownCircle style={{"color":"03045e"}} /> : null }
                                    { props.fraqueza3 === "inseto" ? <AiOutlineDownCircle style={{"color":"007f5f"}} /> : props.fraqueza3 === "sombrio" ? <AiOutlineDownCircle style={{"color":"000000"}} /> : props.fraqueza3 === "dragao" ? <AiOutlineDownCircle style={{"color":"457b9d"}} /> : props.fraqueza3 === "eletrico" ? <AiOutlineDownCircle style={{"color":"ffb703"}} /> : props.fraqueza3 === "fada" ? <AiOutlineDownCircle style={{"color":"ff006e"}} /> : props.fraqueza3 === "lutador" ? <AiOutlineDownCircle style={{"color":"d62828"}} /> : props.fraqueza3 === "fogo" ? <AiOutlineDownCircle style={{"color":"d00000"}} /> : props.fraqueza3 === "voador" ? <AiOutlineDownCircle style={{"color":"386480"}} /> : props.fraqueza3 === "fantasma" ? <AiOutlineDownCircle style={{"color":"54455f"}} /> : props.fraqueza3 === "grama" ? <AiOutlineDownCircle style={{"color":"aacc00"}} /> : props.fraqueza3 === "terra" ? <AiOutlineDownCircle style={{"color":"C59130"}} /> : props.fraqueza3 === "gelo" ? <AiOutlineDownCircle style={{"color":"caf0f8"}} /> : props.fraqueza3 === "normal" ? <AiOutlineDownCircle style={{"color":"5F4D6A"}} /> : props.fraqueza3 === "venenoso" ? <AiOutlineDownCircle style={{"color":"6d08af"}} /> : props.fraqueza3 === "psiquico" ? <AiOutlineDownCircle style={{"color":"ff006e"}} /> : props.fraqueza3 === "pedra" ? <AiOutlineDownCircle style={{"color":"7f5539"}} /> : props.fraqueza3 === "aco" ? <AiOutlineDownCircle style={{"color":"33c1b1"}} /> : props.fraqueza3 === "aquatico" ? <AiOutlineDownCircle style={{"color":"03045e"}} /> : null }
                                    { props.fraqueza4 === "inseto" ? <AiOutlineDownCircle style={{"color":"007f5f"}} /> : props.fraqueza4 === "sombrio" ? <AiOutlineDownCircle style={{"color":"000000"}} /> : props.fraqueza4 === "dragao" ? <AiOutlineDownCircle style={{"color":"457b9d"}} /> : props.fraqueza4 === "eletrico" ? <AiOutlineDownCircle style={{"color":"ffb703"}} /> : props.fraqueza4 === "fada" ? <AiOutlineDownCircle style={{"color":"ff006e"}} /> : props.fraqueza4 === "lutador" ? <AiOutlineDownCircle style={{"color":"d62828"}} /> : props.fraqueza4 === "fogo" ? <AiOutlineDownCircle style={{"color":"d00000"}} /> : props.fraqueza4 === "voador" ? <AiOutlineDownCircle style={{"color":"386480"}} /> : props.fraqueza4 === "fantasma" ? <AiOutlineDownCircle style={{"color":"54455f"}} /> : props.fraqueza4 === "grama" ? <AiOutlineDownCircle style={{"color":"aacc00"}} /> : props.fraqueza4 === "terra" ? <AiOutlineDownCircle style={{"color":"C59130"}} /> : props.fraqueza4 === "gelo" ? <AiOutlineDownCircle style={{"color":"caf0f8"}} /> : props.fraqueza4 === "normal" ? <AiOutlineDownCircle style={{"color":"5F4D6A"}} /> : props.fraqueza4 === "venenoso" ? <AiOutlineDownCircle style={{"color":"6d08af"}} /> : props.fraqueza4 === "psiquico" ? <AiOutlineDownCircle style={{"color":"ff006e"}} /> : props.fraqueza4 === "pedra" ? <AiOutlineDownCircle style={{"color":"7f5539"}} /> : props.fraqueza4 === "aco" ? <AiOutlineDownCircle style={{"color":"33c1b1"}} /> : props.fraqueza4 === "aquatico" ? <AiOutlineDownCircle style={{"color":"03045e"}} /> : null }
                                </label>
                            </div>
                        </div>
                    :
                        <div>
                            <label className="card-caracteristica"> Vida: {[Array(Stats.hp)].forEach(element => <BsSquareFill />)}</label>
                            <label className="card-caracteristica"> Ataque: {[Array(Stats.ataque)].forEach(element => <BsSquareFill />)}</label>
                            <label className="card-caracteristica"> Ataque Especial: {[Array(Stats.ataqueEsp)].forEach(element => <BsSquareFill />)}</label>
                            <label className="card-caracteristica"> Defesa: {[Array(Stats.defesa)].forEach(element => <BsSquareFill />)}</label>
                            <label className="card-caracteristica"> Defesa Especial: {[Array(Stats.defesaEsp)].forEach(element => <BsSquareFill />)}</label>
                            <label className="card-caracteristica"> Velocidade: {[Array(Stats.velocidade)].forEach(element => <BsSquareFill />)}</label>
                        </div>                        
                }
            </div>
        </div>
    )
}

export default Card;