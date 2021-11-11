import ShowTypes from "./ShowTypes";



const SmallPoke = ({pokemon,makeBig}) =>{
    return (
      <div key={pokemon.id+pokemon.name} className="card col-md-3 col-sm-4" style={pokemon.cardbgcolor} onClick={()=>{makeBig(pokemon.id)}}>
          <div className="card text-center p-1 pokehf ">
              <h3>{pokemon.name }</h3>
              <h5 className="p-0"><small className="text-muted"> No. {pokemon.num}</small></h5>
          </div>
          <div id={`PicOf${pokemon.num}`} className="card-body text-center p-0">
              <img src={pokemon.img} alt={`Didn't rendor ${pokemon.name}`} className="p-2" width={"120"} hieght={"120"}/>
          </div>
          <div className="card pokehf">
              <h6>
                  Type: 
                  <ShowTypes type={pokemon.type} num={pokemon.num}/>                  
              </h6>
          </div>
      </div>
  );
}


export default SmallPoke;