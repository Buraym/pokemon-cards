import "../styles/Card.css"
import { useState, useEffect } from "react";
import { AiOutlineDownCircle } from 'react-icons/ai';
import { BsFillSlashCircleFill } from 'react-icons/bs';
import { TiArrowDownOutline } from 'react-icons/ti';
import { FaGenderless } from 'react-icons/fa';


function Card(props){

    const [status, setStatus] = useState(true)

    useEffect( ()=> {
        const card = document.querySelector('.card-conteudo');
        const container = document.querySelector('.card');
        const foto = document.querySelector('.card-foto');
        const nome = document.querySelector('.card-nome');
        const pokedexN = document.querySelector('.card-pokedexN');

        container.addEventListener("mousemove", (e) => {
            let xAxis = (window.innerHeight / 2 - e.pageY) / 15;
            let yAxis = (window.innerWidth / 2 - e.pageX) / -15;
            card.style.transform = `rotateY(${-yAxis}deg) rotateX(${-xAxis}deg)`;
        });

        container.addEventListener("mouseenter", (e) => {
            card.style.transition = "none";
            foto.style.transform = "translateZ(125px)";
            nome.style.transform = "translateZ(150px)";
            pokedexN.style.transform = "translateZ(150px)";   
        });

        container.addEventListener("mouseclick", (e) =>{
            card.style.transition = "all 0.5s ease";
            card.style.transform = "translateX(150px)";
        });

        container.addEventListener("mouseleave", (e) => {
            card.style.transition = "all 0.5s ease";
            card.style.transform = "translateZ(150px)";
        });
    },[status]);
    
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
            <div className="card-conteudo">
                    <img className="card-foto" onClick={()=>(setStatus(false))} src={props.imagem} alt="Foto do Pokemon"/>
                    <label className="card-nome"> {props.nome}</label>
                    <label className="card-pokedexN"> {props.pokedexN}º</label>
                    {/*<TiArrowDownOutline style={{"color":"3a86ff"}} />
                    <label className="card-caracteristica1"> PESO: {props.peso} KG</label>
                    <label className="card-caracteristica2"> ALTURA: {props.altura} M</label>
                    <label className="card-caracteristica3"> CATEGORIA: {props.categoria}</label>
                    <label className="card-caracteristica4"> HABILIDADE: {props.abilidades}</label>
                    <label className="card-caracteristica5">
                        {
                            (props.genero === "feminino") ?
                                <FaGenderless size="25" style={{"color":"ff006e"}} />
                            :
                                (props.genero === "masculino") ?
                                    <FaGenderless size="25" style={{"color":"3a86ff"}} />
                                :
                                    (props.genero === "ambos") ?
                                        <>
                                            <FaGenderless size="25" style={{"color":"3a86ff"}} />
                                            <FaGenderless size="25" style={{"color":"ff006e"}} />
                                        </>
                                    :
                                        <FaGenderless style={{"color":"8d99ae"}} />
                        }
                    </label>*/}
                </div>
                {
                    /*status ?

                        <div className="card-conteudo">
                            <img className="card-foto" onClick={()=>(setStatus(false))} src={props.imagem} alt="Foto do Pokemon"/>
                            <label className="card-nome"> {props.nome}</label>
                            <label className="card-pokedexN"> {props.pokedexN}º</label>
                            <BsSquareFill style={{"color":"3a86ff"}} />
                            <label className="card-caracteristica1"> PESO: {props.peso} KG</label>
                            <label className="card-caracteristica2"> ALTURA: {props.altura} M</label>
                            <label className="card-caracteristica3"> CATEGORIA: {props.categoria}</label>
                            <label className="card-caracteristica4"> HABILIDADE: {props.abilidades}</label>
                            <label className="card-caracteristica5">
                                {
                                    (props.genero === "feminino") ?
                                        <FaGenderless size="25" style={{"color":"ff006e"}} />
                                    :
                                        (props.genero === "masculino") ?
                                            <FaGenderless size="25" style={{"color":"3a86ff"}} />
                                        :
                                            (props.genero === "ambos") ?
                                                <>
                                                    <FaGenderless size="25" style={{"color":"3a86ff"}} />
                                                    <FaGenderless size="25" style={{"color":"ff006e"}} />
                                                </>
                                            :
                                                <FaGenderless style={{"color":"8d99ae"}} />
                                }
                            </label>
                        </div>
                    :
                        <div className="card-conteudo" onClick={()=>(console.log("Troca de Página !!!"))}>
                                <div className="card-caracteristica-caixa">
                                <label className="card-caracteristica"> PESO: {props.peso} KG</label>
                                <label className="card-caracteristica"> ALTURA: {props.altura} M</label>
                                <label className="card-caracteristica"> CATEGORIA: {props.categoria}</label>
                                <label className="card-caracteristica"> HABILIDADE: {props.abilidades}</label>
                                <label className="card-caracteristica">
                                    {
                                        (props.genero === "feminino") ?
                                            <FaGenderless size="25" style={{"color":"ff006e"}} />
                                        :
                                            (props.genero === "masculino") ?
                                                <FaGenderless size="25" style={{"color":"3a86ff"}} />
                                            :
                                                (props.genero === "ambos") ?
                                                    <>
                                                        <FaGenderless size="25" style={{"color":"3a86ff"}} />
                                                        <FaGenderless size="25" style={{"color":"ff006e"}} />
                                                    </>
                                                :
                                                    <FaGenderless style={{"color":"8d99ae"}} />
                                    }
                                </label>
                                
                            </div>
                            <div>
                                <label className="card-caracteristica"> 
                                    { props.tipo1 === "inseto" ? <BsFillSlashCircleFill style={{"color":"007f5f"}} /> : props.tipo1 === "sombrio" ? <BsFillSlashCircleFill style={{"color":"000000"}} /> : props.tipo1 === "dragao" ? <BsFillSlashCircleFill style={{"color":"457b9d"}} /> : props.tipo1 === "eletrico" ? <BsFillSlashCircleFill style={{"color":"ffb703"}} /> : props.tipo1 === "fada" ? <BsFillSlashCircleFill style={{"color":"ff006e"}} /> : props.tipo1 === "lutador" ? <BsFillSlashCircleFill style={{"color":"d62828"}} /> : props.tipo1 === "fogo" ? <BsFillSlashCircleFill style={{"color":"d00000"}} /> : props.tipo1 === "voador" ? <BsFillSlashCircleFill style={{"color":"386480"}} /> : props.tipo1 === "fantasma" ? <BsFillSlashCircleFill style={{"color":"54455f"}} /> : props.tipo1 === "grama" ? <BsFillSlashCircleFill style={{"color":"aacc00"}} /> : props.tipo1 === "terra" ? <BsFillSlashCircleFill style={{"color":"C59130"}} /> : props.tipo1 === "gelo" ? <BsFillSlashCircleFill style={{"color":"caf0f8"}} /> : props.tipo1 === "normal" ? <BsFillSlashCircleFill style={{"color":"5F4D6A"}} /> : props.tipo1 === "venenoso" ? <BsFillSlashCircleFill style={{"color":"6d08af"}} /> : props.tipo1 === "psiquico" ? <BsFillSlashCircleFill style={{"color":"ff006e"}} /> : props.tipo1 === "pedra" ? <BsFillSlashCircleFill style={{"color":"7f5539"}} /> : props.tipo1 === "aco" ? <BsFillSlashCircleFill style={{"color":"33c1b1"}} /> : props.tipo1 === "aquatico" ? <BsFillSlashCircleFill style={{"color":"03045e"}} /> : null }
                                    { props.tipo2 === "inseto" ? <BsFillSlashCircleFill style={{"color":"007f5f"}} /> : props.tipo2 === "sombrio" ? <BsFillSlashCircleFill style={{"color":"000000"}} /> : props.tipo2 === "dragao" ? <BsFillSlashCircleFill style={{"color":"457b9d"}} /> : props.tipo2 === "eletrico" ? <BsFillSlashCircleFill style={{"color":"ffb703"}} /> : props.tipo2 === "fada" ? <BsFillSlashCircleFill style={{"color":"ff006e"}} /> : props.tipo2 === "lutador" ? <BsFillSlashCircleFill style={{"color":"d62828"}} /> : props.tipo2 === "fogo" ? <BsFillSlashCircleFill style={{"color":"d00000"}} /> : props.tipo2 === "voador" ? <BsFillSlashCircleFill style={{"color":"386480"}} /> : props.tipo2 === "fantasma" ? <BsFillSlashCircleFill style={{"color":"54455f"}} /> : props.tipo2 === "grama" ? <BsFillSlashCircleFill style={{"color":"aacc00"}} /> : props.tipo2 === "terra" ? <BsFillSlashCircleFill style={{"color":"C59130"}} /> : props.tipo2 === "gelo" ? <BsFillSlashCircleFill style={{"color":"caf0f8"}} /> : props.tipo2 === "normal" ? <BsFillSlashCircleFill style={{"color":"5F4D6A"}} /> : props.tipo2 === "venenoso" ? <BsFillSlashCircleFill style={{"color":"6d08af"}} /> : props.tipo2 === "psiquico" ? <BsFillSlashCircleFill style={{"color":"ff006e"}} /> : props.tipo2 === "pedra" ? <BsFillSlashCircleFill style={{"color":"7f5539"}} /> : props.tipo2 === "aco" ? <BsFillSlashCircleFill style={{"color":"33c1b1"}} /> : props.tipo2 === "aquatico" ? <BsFillSlashCircleFill style={{"color":"03045e"}} /> : null }
                                    { props.tipo3 === "inseto" ? <BsFillSlashCircleFill style={{"color":"007f5f"}} /> : props.tipo3 === "sombrio" ? <BsFillSlashCircleFill style={{"color":"000000"}} /> : props.tipo3 === "dragao" ? <BsFillSlashCircleFill style={{"color":"457b9d"}} /> : props.tipo3 === "eletrico" ? <BsFillSlashCircleFill style={{"color":"ffb703"}} /> : props.tipo3 === "fada" ? <BsFillSlashCircleFill style={{"color":"ff006e"}} /> : props.tipo3 === "lutador" ? <BsFillSlashCircleFill style={{"color":"d62828"}} /> : props.tipo3 === "fogo" ? <BsFillSlashCircleFill style={{"color":"d00000"}} /> : props.tipo3 === "voador" ? <BsFillSlashCircleFill style={{"color":"386480"}} /> : props.tipo3 === "fantasma" ? <BsFillSlashCircleFill style={{"color":"54455f"}} /> : props.tipo3 === "grama" ? <BsFillSlashCircleFill style={{"color":"aacc00"}} /> : props.tipo3 === "terra" ? <BsFillSlashCircleFill style={{"color":"C59130"}} /> : props.tipo3 === "gelo" ? <BsFillSlashCircleFill style={{"color":"caf0f8"}} /> : props.tipo3 === "normal" ? <BsFillSlashCircleFill style={{"color":"5F4D6A"}} /> : props.tipo3 === "venenoso" ? <BsFillSlashCircleFill style={{"color":"6d08af"}} /> : props.tipo3 === "psiquico" ? <BsFillSlashCircleFill style={{"color":"ff006e"}} /> : props.tipo3 === "pedra" ? <BsFillSlashCircleFill style={{"color":"7f5539"}} /> : props.tipo3 === "aco" ? <BsFillSlashCircleFill style={{"color":"33c1b1"}} /> : props.tipo3 === "aquatico" ? <BsFillSlashCircleFill style={{"color":"03045e"}} /> : null }
                                </label>
                                <label className="card-caracteristica">
                                    { props.fraqueza1 === "inseto" ? <AiOutlineDownCircle style={{"color":"007f5f"}} /> : props.fraqueza1 === "sombrio" ? <AiOutlineDownCircle style={{"color":"000000"}} /> : props.fraqueza1 === "dragao" ? <AiOutlineDownCircle style={{"color":"457b9d"}} /> : props.fraqueza1 === "eletrico" ? <AiOutlineDownCircle style={{"color":"ffb703"}} /> : props.fraqueza1 === "fada" ? <AiOutlineDownCircle style={{"color":"ff006e"}} /> : props.fraqueza1 === "lutador" ? <AiOutlineDownCircle style={{"color":"d62828"}} /> : props.fraqueza1 === "fogo" ? <AiOutlineDownCircle style={{"color":"d00000"}} /> : props.fraqueza1 === "voador" ? <AiOutlineDownCircle style={{"color":"386480"}} /> : props.fraqueza1 === "fantasma" ? <AiOutlineDownCircle style={{"color":"54455f"}} /> : props.fraqueza1 === "grama" ? <AiOutlineDownCircle style={{"color":"aacc00"}} /> : props.fraqueza1 === "terra" ? <AiOutlineDownCircle style={{"color":"C59130"}} /> : props.fraqueza1 === "gelo" ? <AiOutlineDownCircle style={{"color":"caf0f8"}} /> : props.fraqueza1 === "normal" ? <AiOutlineDownCircle style={{"color":"5F4D6A"}} /> : props.fraqueza1 === "venenoso" ? <AiOutlineDownCircle style={{"color":"6d08af"}} /> : props.fraqueza1 === "psiquico" ? <AiOutlineDownCircle style={{"color":"ff006e"}} /> : props.fraqueza1 === "pedra" ? <AiOutlineDownCircle style={{"color":"7f5539"}} /> : props.fraqueza1 === "aco" ? <AiOutlineDownCircle style={{"color":"33c1b1"}} /> : props.fraqueza1 === "aquatico" ? <AiOutlineDownCircle style={{"color":"03045e"}} /> : null }
                                    { props.fraqueza2 === "inseto" ? <AiOutlineDownCircle style={{"color":"007f5f"}} /> : props.fraqueza2 === "sombrio" ? <AiOutlineDownCircle style={{"color":"000000"}} /> : props.fraqueza2 === "dragao" ? <AiOutlineDownCircle style={{"color":"457b9d"}} /> : props.fraqueza2 === "eletrico" ? <AiOutlineDownCircle style={{"color":"ffb703"}} /> : props.fraqueza2 === "fada" ? <AiOutlineDownCircle style={{"color":"ff006e"}} /> : props.fraqueza2 === "lutador" ? <AiOutlineDownCircle style={{"color":"d62828"}} /> : props.fraqueza2 === "fogo" ? <AiOutlineDownCircle style={{"color":"d00000"}} /> : props.fraqueza2 === "voador" ? <AiOutlineDownCircle style={{"color":"386480"}} /> : props.fraqueza2 === "fantasma" ? <AiOutlineDownCircle style={{"color":"54455f"}} /> : props.fraqueza2 === "grama" ? <AiOutlineDownCircle style={{"color":"aacc00"}} /> : props.fraqueza2 === "terra" ? <AiOutlineDownCircle style={{"color":"C59130"}} /> : props.fraqueza2 === "gelo" ? <AiOutlineDownCircle style={{"color":"caf0f8"}} /> : props.fraqueza2 === "normal" ? <AiOutlineDownCircle style={{"color":"5F4D6A"}} /> : props.fraqueza2 === "venenoso" ? <AiOutlineDownCircle style={{"color":"6d08af"}} /> : props.fraqueza2 === "psiquico" ? <AiOutlineDownCircle style={{"color":"ff006e"}} /> : props.fraqueza2 === "pedra" ? <AiOutlineDownCircle style={{"color":"7f5539"}} /> : props.fraqueza2 === "aco" ? <AiOutlineDownCircle style={{"color":"33c1b1"}} /> : props.fraqueza2 === "aquatico" ? <AiOutlineDownCircle style={{"color":"03045e"}} /> : null }
                                    { props.fraqueza3 === "inseto" ? <AiOutlineDownCircle style={{"color":"007f5f"}} /> : props.fraqueza3 === "sombrio" ? <AiOutlineDownCircle style={{"color":"000000"}} /> : props.fraqueza3 === "dragao" ? <AiOutlineDownCircle style={{"color":"457b9d"}} /> : props.fraqueza3 === "eletrico" ? <AiOutlineDownCircle style={{"color":"ffb703"}} /> : props.fraqueza3 === "fada" ? <AiOutlineDownCircle style={{"color":"ff006e"}} /> : props.fraqueza3 === "lutador" ? <AiOutlineDownCircle style={{"color":"d62828"}} /> : props.fraqueza3 === "fogo" ? <AiOutlineDownCircle style={{"color":"d00000"}} /> : props.fraqueza3 === "voador" ? <AiOutlineDownCircle style={{"color":"386480"}} /> : props.fraqueza3 === "fantasma" ? <AiOutlineDownCircle style={{"color":"54455f"}} /> : props.fraqueza3 === "grama" ? <AiOutlineDownCircle style={{"color":"aacc00"}} /> : props.fraqueza3 === "terra" ? <AiOutlineDownCircle style={{"color":"C59130"}} /> : props.fraqueza3 === "gelo" ? <AiOutlineDownCircle style={{"color":"caf0f8"}} /> : props.fraqueza3 === "normal" ? <AiOutlineDownCircle style={{"color":"5F4D6A"}} /> : props.fraqueza3 === "venenoso" ? <AiOutlineDownCircle style={{"color":"6d08af"}} /> : props.fraqueza3 === "psiquico" ? <AiOutlineDownCircle style={{"color":"ff006e"}} /> : props.fraqueza3 === "pedra" ? <AiOutlineDownCircle style={{"color":"7f5539"}} /> : props.fraqueza3 === "aco" ? <AiOutlineDownCircle style={{"color":"33c1b1"}} /> : props.fraqueza3 === "aquatico" ? <AiOutlineDownCircle style={{"color":"03045e"}} /> : null }
                                    { props.fraqueza4 === "inseto" ? <AiOutlineDownCircle style={{"color":"007f5f"}} /> : props.fraqueza4 === "sombrio" ? <AiOutlineDownCircle style={{"color":"000000"}} /> : props.fraqueza4 === "dragao" ? <AiOutlineDownCircle style={{"color":"457b9d"}} /> : props.fraqueza4 === "eletrico" ? <AiOutlineDownCircle style={{"color":"ffb703"}} /> : props.fraqueza4 === "fada" ? <AiOutlineDownCircle style={{"color":"ff006e"}} /> : props.fraqueza4 === "lutador" ? <AiOutlineDownCircle style={{"color":"d62828"}} /> : props.fraqueza4 === "fogo" ? <AiOutlineDownCircle style={{"color":"d00000"}} /> : props.fraqueza4 === "voador" ? <AiOutlineDownCircle style={{"color":"386480"}} /> : props.fraqueza4 === "fantasma" ? <AiOutlineDownCircle style={{"color":"54455f"}} /> : props.fraqueza4 === "grama" ? <AiOutlineDownCircle style={{"color":"aacc00"}} /> : props.fraqueza4 === "terra" ? <AiOutlineDownCircle style={{"color":"C59130"}} /> : props.fraqueza4 === "gelo" ? <AiOutlineDownCircle style={{"color":"caf0f8"}} /> : props.fraqueza4 === "normal" ? <AiOutlineDownCircle style={{"color":"5F4D6A"}} /> : props.fraqueza4 === "venenoso" ? <AiOutlineDownCircle style={{"color":"6d08af"}} /> : props.fraqueza4 === "psiquico" ? <AiOutlineDownCircle style={{"color":"ff006e"}} /> : props.fraqueza4 === "pedra" ? <AiOutlineDownCircle style={{"color":"7f5539"}} /> : props.fraqueza4 === "aco" ? <AiOutlineDownCircle style={{"color":"33c1b1"}} /> : props.fraqueza4 === "aquatico" ? <AiOutlineDownCircle style={{"color":"03045e"}} /> : null }
                                </label>
                                <div>
                                    <label className="card-caracteristica"> Vida: {[Array(Stats.hp)].forEach(() => <BsSquareFill />)}</label>
                                    <label className="card-caracteristica"> Ataque: {[Array(Stats.ataque)].forEach(element => <BsSquareFill />)}</label>
                                    <label className="card-caracteristica"> Ataque Especial: {[Array(Stats.ataqueEsp)].forEach(element => <BsSquareFill />)}</label>
                                    <label className="card-caracteristica"> Defesa: {[Array(Stats.defesa)].forEach(element => <BsSquareFill />)}</label>
                                    <label className="card-caracteristica"> Defesa Especial: {[Array(Stats.defesaEsp)].forEach(element => <BsSquareFill />)}</label>
                                    <label className="card-caracteristica"> Velocidade: {[Array(Stats.velocidade)].forEach(element => <BsSquareFill />)}</label>
                                </div>
                            </div>
                        </div>
                    */                        
                }
        </div>
    )
}

export default Card;