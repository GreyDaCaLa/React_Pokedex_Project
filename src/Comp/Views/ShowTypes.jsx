const ShowTypes = (props) => {
  // console.log("From P-Types props:" ,props);
  return (
    

    <div id={`TypeBubblesCont${props.num}`} className="TypeBubblesCont">
      {props.type.map((type)=>{
                      return (
                        <span key={`TP`+type+props.num} className={`PokemonType${type} BubblesProps`} type="button">{type}</span>

                      );
                  })}
    </div>


  );

};

export default ShowTypes;

