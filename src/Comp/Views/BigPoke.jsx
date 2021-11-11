import P_Types from "./ShowTypes";
import { Link } from "react-router-dom";

const BigPoke = ({pokemon,makeBig}) =>{
    return (
      <div key={pokemon.id+pokemon.name} className="card col-sm-12 BigPoke" style={pokemon.cardbgcolor} onClick={()=>{makeBig(pokemon.id)}}>
          <div className="card text-center p-1 pokehf ">
              <h3>{pokemon.name }</h3>
              <h5 className="p-0"><small className="text-muted"> No. {pokemon.num}</small></h5>
          </div>
          <div id={`PicOf${pokemon.num}`} className="card-body text-center p-0">
              <img src={pokemon.img} alt={`Didn't rendor ${pokemon.name}`} className="BigPokePic p-2"/>
          </div>
          <div className="card pokehf">
              <h6>
                  Type: 
                  <P_Types type={pokemon.type} num={pokemon.num}/>            
              </h6>
          </div>
          <div className="text-center round">
          <Link className="nav-link text-dark" to={`/pokemon/${pokemon.id}`}>
            <button>
              More
            </button>
            </Link>
          </div>
      </div>
  );
}


export default BigPoke;