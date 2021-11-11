import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import BigPoke from "./BigPoke";
import SmallPoke from "./SamllPoke";

const ListView = ({ FullList }) => {
  // console.log("RUNNING LIST VIEW")

  const [filtList, setFiltList] = useState(FullList);
  const [orderNum, setOrderNum] = useState(0);
  //[type text, filter in]
  const [filterTypes, setFilterTypes] = useState([
    ["Normal", 1],
    ["Fire", 1],
    ["Water", 1],
    ["Electric", 1],
    ["Grass", 1],
    ["Ice", 1],
    ["Fighting", 1],
    ["Poison", 1],
    ["Ground", 1],
    ["Flying", 1],
    ["Psychic", 1],
    ["Bug", 1],
    ["Rock", 1],
    ["Ghost", 1],
    ["Dragon", 1],
    ["Dark", 1],
    ["Steel", 1],
    ["Fairy", 1],
  ]);

  let filtertext = "";
  // const [filtOut,setFiltOut] = useState(originallistoffilters);

  useEffect(
    () => {
      // console.log("List View Here is full list",FullList);
      // console.log("List View Here is filtlist", filtList);
      // console.log("List View Here is filterTypes", filterTypes);

      if (FullList.length > 0 && filtList.length == 0 && orderNum == 0) {
        // console.log("#########################################\n###########################################\n###############################\n##########################\n#########")
        /* --keep--
        handeling the Refresh fix......
        On refresh the parent would load after the child so  Props values would be ready
        adding a prop value tot he depency array and
        adding another set state call for the inital prop depend state initializers worked
        */
        setOrderNum(1);
        setFiltList(FullList);
      }
    },
		/*[FullList, filtList]*/[FullList]
  );

  const handleSearchInput = (event) => {
    filtertext = event.target.value;
    filterTheList();
    // const mid = FullList.filter((item) => {
    // 	if (item.name.toLowerCase().includes(event.target.value.toLowerCase())) {
    // 		return true;
    // 	} else {
    // 		return false;
    // 	}
    // });
    // setFiltList(mid);
  };

  const handleTypefiltering = (thetype) => {
    // let attribute;

    console.log(thetype)

    if (thetype == "ADD ALL") {
      for (let i = 0; i < filterTypes.length; i++) {
        filterTypes[i][1] = 1;
      }
    } else if (thetype == "REMOVE ALL") {
      for (let i = 0; i < filterTypes.length; i++) {
        filterTypes[i][1] = 0;
      }
    } else {
      for (let i = 0; i < filterTypes.length; i++) {
        if (filterTypes[i][0].toLowerCase() == thetype.toLowerCase()) {
          // console.log("Found a match ", filterTypes[i][0], thetype);
          if (filterTypes[i][1]) {
            filterTypes[i][1] = 0;
          } else {
            filterTypes[i][1] = 1;
          }
        }
      }
    }

    // setFiltOut(mid);
    // console.log("HandleTypefiltering=====:", filterTypes);
    filterTheList();
  };

  const filterTheList = () => {
    // console.log("\n\nListView-FiltertheList\n the FullLsit",FullList);
    let ele;
    let attribute;

    // console.log("===========the filtertext\n", filtertext);
    // console.log("===========the filtertype\n", filterTypes);

    const mid1 = FullList.filter((item) => {
      if (item.name.toLowerCase().includes(filtertext.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    });
    // console.log("\n\nListView-FiltertheList\n the mid1",mid1);
    // console.log("\n\nListView-FiltertheList\n the filterTypes",filterTypes);

    const mid2 = mid1.filter((item) => {
      // console.log("\n\nListView-FiltertheList\n the item",item,item.type);
      for (let i = 0; i < item.type.length; i++) {
        attribute = item.type[i];

        // console.log("the attribute",attribute)
        for (ele of filterTypes) {
          // console.log("the ele",ele);
          if (ele[0] == attribute) {
            if (ele[1]) {
              return true;
            }
          }
        }
      }

      return false;
    });
    // console.log("\n\nListView-FiltertheList\n the mid2",mid2);

    // const mid3 = mid2.filter( (item) => {
    // 	if (item.name.toLowerCase().includes(event.target.value.toLowerCase())) {
    // 		return true;
    // 	} else {
    // 		return false;
    // 	}
    // });

    setFiltList(mid2);
  };

  const makeBigger = (id) => {
    // console.log("Within Make Big:",id);
    let mid = filtList.map((item) => {
      if (item.id == id) {
        if (item.cardGrow == 1) {
          item.cardGrow = 2;
        } else {
          item.cardGrow = 1;
        }
      }
      return item;
    });
    // console.log("mid after the big change",mid);

    setFiltList(mid);
  };

  return (
    <main className="container my-3 welcomelanding p-0">
      <h1 className="text-center p-2">Pokemon</h1>
      <hr />
      <div className="text-center">
        <h3>FILTER</h3>
      </div>

      <div className="container row justify-content-evenly">
        <div class="ByName-dropdown col-3">
          <button className="rounded Self-BlackBorder">
            <h3>By Name</h3>
          </button>

          <div class="ByName-dropdown-content">
            <div className="text-center mb-3">
              <span>Search:</span>
              <input
                type="text"
                placeholder="Type here to search!!"
                onChange={handleSearchInput}
              />
            </div>
          </div>
        </div>

        <div class="ByType-dropdown col-3">
          <button className="rounded Self-BlackBorder">
            <h3>By Type</h3>
          </button>

          <div class="ByType-dropdown-content">
            <div className="row">

              <div
                className="TypeBubblesCont"
                onClick={() => {
                  handleTypefiltering("REMOVE ALL");
                }}
              >
                <span
                  className="BubblesProps Self-BlackBorder Self-GreyFill"
                  type="button"
                >
                  SHOW NO TYPES
                </span>
                </div>

                <div
                  className="TypeBubblesCont"
                  onClick={() => {
                    handleTypefiltering("ADD ALL");
                  }}
                >
                  <span
                    className="BubblesProps Self-BlackBorder Self-GreyFill"
                    type="button"
                  >
                    SHOW ALL TYPES
                  </span>
                </div>



            </div>

            <div className="row">

              <div className="TypeBubblesCont col-2" onClick={() => { handleTypefiltering("normal"); }}>
                <span className="PokemonTypeNormal BubblesProps" type="button">
                  Normal
                </span>
              </div>

              <div className="TypeBubblesCont col-2" onClick={() => { handleTypefiltering("fire"); }}>
                <span className="PokemonTypeFire BubblesProps" type="button">
                  Fire
                </span>
              </div>

              <div className="TypeBubblesCont col-2" onClick={() => { handleTypefiltering("water"); }}>
                <span className="PokemonTypeWater BubblesProps" type="button">
                  Water
                </span>
              </div>

              <div className="TypeBubblesCont col-2" onClick={() => { handleTypefiltering("electric"); }}>
                <span className="PokemonTypeElectric BubblesProps" type="button">
                  Electric
                </span>
              </div>

              <div className="TypeBubblesCont col-2" onClick={() => { handleTypefiltering("grass"); }}>
                <span className="PokemonTypeGrass BubblesProps" type="button">
                  Grass
                </span>
              </div>

              <div className="TypeBubblesCont col-2" onClick={() => { handleTypefiltering("ice"); }}>
                <span className="PokemonTypeIce BubblesProps" type="button">
                  Ice
                </span>
              </div>
            </div>
            <div className="row">
              <div className="TypeBubblesCont col-2" onClick={() => { handleTypefiltering("fighting"); }}>
                <span className="PokemonTypeFighting BubblesProps" type="button">
                  Fighting
                </span>
              </div>

              <div className="TypeBubblesCont col-2" onClick={() => { handleTypefiltering("poison"); }}>
                <span className="PokemonTypePoison BubblesProps" type="button">
                  Poison
                </span>
              </div>

              <div className="TypeBubblesCont col-2" onClick={() => { handleTypefiltering("ground"); }}>
                <span className="PokemonTypeGround BubblesProps" type="button">
                  Ground
                </span>
              </div>

              <div className="TypeBubblesCont col-2" onClick={() => { handleTypefiltering("flying"); }}>
                <span className="PokemonTypeFlying BubblesProps" type="button">
                  Flying
                </span>
              </div>

              <div className="TypeBubblesCont col-2" onClick={() => { handleTypefiltering("psychic"); }}>
                <span className="PokemonTypePsychic BubblesProps" type="button">
                  Psychic
                </span>
              </div>

              <div className="TypeBubblesCont col-2" onClick={() => { handleTypefiltering("bug"); }}>
                <span className="PokemonTypeBug BubblesProps" type="button">
                  Bug
                </span>
              </div>


            </div>

            <div className="row">

              <div className="TypeBubblesCont col-2" onClick={() => { handleTypefiltering("rock"); }}>
                <span className="PokemonTypeRock BubblesProps" type="button">
                  Rock
                </span>
              </div>

              <div className="TypeBubblesCont col-2" onClick={() => { handleTypefiltering("ghost"); }}>
                <span className="PokemonTypeGhost BubblesProps" type="button">
                  Ghost
                </span>
              </div>

              <div className="TypeBubblesCont col-2" onClick={() => { handleTypefiltering("dragon"); }}>
                <span className="PokemonTypeDragon BubblesProps" type="button">
                  Dragon
                </span>
              </div>

              <div className="TypeBubblesCont col-2" onClick={() => { handleTypefiltering("dark"); }}>
                <span className="PokemonTypeDark BubblesProps" type="button">
                  Dark
                </span>
              </div>

              <div className="TypeBubblesCont col-2" onClick={() => { handleTypefiltering("steel"); }}>
                <span className="PokemonTypeSteel BubblesProps" type="button">
                  Steel
                </span>
              </div>

              <div className="TypeBubblesCont col-2" onClick={() => { handleTypefiltering("fairy"); }}>
                <span className="PokemonTypeFairy BubblesProps" type="button">
                  Fairy
                </span>
              </div>

              {/* <div className="TypeBubblesCont col-2" onClick={() => {handleTypefiltering("fire");}}>
								<span className="PokemonTypeFire BubblesProps" type="button">
									Fire
								</span>
							</div>

              <div className="TypeBubblesCont col-2" onClick={() => {handleTypefiltering("fire");}}>
								<span className="PokemonTypeFire BubblesProps" type="button">
									Fire
								</span>
							</div>

              <div className="TypeBubblesCont col-2" onClick={() => {handleTypefiltering("fire");}}>
								<span className="PokemonTypeFire BubblesProps" type="button">
									Fire
								</span>
							</div> */}

            </div>


          </div>
        </div>
      </div>

      <hr />

      <div className="row">
        {filtList.map((item) => {
          // let randostyle = getAveImageColor(item);
          if (item.cardGrow == 2) {
            return <BigPoke pokemon={item} makeBig={makeBigger} />;
          } else {
            return <SmallPoke pokemon={item} makeBig={makeBigger} />;
          }
        })}
      </div>
    </main>
  );
};

export default ListView;

/*
        const addCardGrow = () =>{

      const midObject = {
        cardGrow:1
      }
      // console.log("Here is midobject:", midObject);
      // console.log("here is filter list:", filtList);

      const mid = filtList.map( (item)=>{
        return ({
          ...item,
          ...midObject,
          cardbgcolor:getAveImageColor(item),

        })

      })

      // console.log("here is mid", mid);

      setFiltList(mid);

    }



    const typestyler=(type) =>{
      switch(type){
        case "Normal":
          return [168,167,122];
          // break;
        case "Fire":
          return [238,129,48];
            // break;
        case "Water":
          return [99,144,240];
            // break;
        case "Electric":
          return [247,208,44];
            // break;
        case "Grass":
          return [122,199,76];
            // break;
        case "Ice":
          return [150,217,214];
            // break;
        case "Fighting":
          return [194,46,40];
            // break;
        case "Poison":
          return [163,62,161];
            // break;
        case "Ground":
          return [226,191,101];
            // break;
        case "Flying":
          return [169,143,243];
            // break;
        case "Psychic":
          return [249,85,135];
            // break;
        case "Bug":
          return [166,185,26];
            // break;
        case "Rock":
          return [182,161,54];
            // break;
        case "Ghost":
          return [115,87,151];
            // break;
        case "Dragon":
          return [111,53,252];
            // break;
        case "Dark":
          return [112,87,70];
            // break;
        case "Steel":
          return [183,183,206];
            // break;
        case "Fairy":
          return [214,133,173];
            // break;

      }
    }
    const getAveImageColor = (poke) =>{
      let type1,type2;
      let color = [0,0,0]
      let biggest=0;

        // let test1 =document.getElementById(`TypeBubblesCont${poke.num}`)
        // console.log(`TypeBubblesCont${poke}`);
        // console.log("what i got:",poke.type);
        // console.log("what i mean:",Number(poke.num)%3);

        if(poke.type.length >=2){
          type1=typestyler(poke.type[0]);
          // console.log(`this is type1 -${poke.type[0]}-:`,type1);
          type2=typestyler(poke.type[1]);
          // console.log(`this is type2 -${poke.type[1]}-:`,type2);

          color[0]=Math.ceil((type1[0]+type2[0])/2);
          color[1]=Math.ceil((type1[1]+type2[1])/2);
          color[2]=Math.ceil((type1[2]+type2[2])/2);
          // console.log(`${poke.num} Color before`,color)

          for(let i =0 ; i<color.length; i++){
            if(color[biggest]<color[i]){
              biggest = i;
            }
          }
          color[biggest]=color[biggest] - 30*(Number(poke.num)%3+1) ;
          // console.log(`${poke.num} Color after (${biggest}):`,color)
          // color[2]=255 -85*(Number(poke.num)%3) ;

          // Number(poke.num)%3

          return {"backgroundColor":`rgb(${color[0]},${color[1]},${color[2]})`};



        }else if(poke.type.length == 1){
          color = typestyler(poke.type[0])
          // console.log(`${poke.num} Color before`,color)
          for(let i =0 ; i<color.length; i++){
            if(color[biggest]<color[i]){
              biggest = i;
            }
          }
          // color[biggest]=color[biggest] - 20*(Number(poke.num)%3+1) ;
          // console.log(`${poke.num} Color after (${biggest}):`,color)


          // color[2]=255 - 85*(Number(poke.num)%3) ;
          return {"backgroundColor":`rgb(${color[0]},${color[1]},${color[2]})`};
        }
        else{
          return {"backgroundColor":"black"};
        }






    }

    */





