import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import ShowTypes from "./ShowTypes";
import { Link } from "react-router-dom";


const MoreInfoPage = ({FullList}) => {
	const [singP, setSingP] = useState([]); // single pokemon
	const [orderNum,setOrderNum] = useState(0);

	const history = useHistory();

	const { id } = useParams();

  const getSingP = () =>{

		let mid=FullList.filter((item)=>{
			if(item.id ==id){
				return item;
			}
		});

		setSingP(mid);

		// console.log("MoreInfoPage-getsingp\n mid", mid,"\n\n")
		// console.log("MoreInfoPage-getsingp\n singp:", singP,"\n\n")

  }

	const getPokeImg = (pokemon_num) => {

		let mid;

		for(let i =0; i<FullList.length;i++){
			if(FullList[i].num == pokemon_num)
			mid = FullList[i].img
		}

		return mid;

	}
	const getPokeColor = (pokemon_num) => {

		let mid;

		for(let i =0; i<FullList.length;i++){
			if(FullList[i].num == pokemon_num)
			mid = FullList[i].cardbgcolor
		}

		return mid;

	}

	useEffect(() => {
		// console.log("MoreInfoPage-useEffect\nis woking singP:",singP,"\n\n");
    // console.log("MoreInfoPage-useEffect\nHere is fullList:",FullList,"\n\n")





		if( (FullList.length>0) && !(singP.length==1) && (orderNum==0) ){
			/* --keep--
			handeling the Refresh fix...... 
			On refresh the parent would load after the child so  Props values would be ready
			adding a prop value tot he depency array and
			adding another set state call for the inital prop depend state initializers worked
			*/
			setOrderNum(1); 
			getSingP();
		}
		if(singP.length>0){
			if(singP[0].id != id){
				getSingP();
			}
		}

	},[FullList,singP,id]);

	return (
		
		<main className="container my-3 welcomelanding p-4">
		{singP.map((item)=>{
			return(
				<>
			<h1 className="text-center p-2">Pokemon: {item.name}  No.{item.num}</h1>
			<div className="container">

				<div className="row">
					<button className="btn Self-GreyFill Self-BlackBorder" onClick={history.goBack}>Back</button>
				</div>

				<div className="row">

					<div className="col-sm-7 card Self-BlackBorder" style={item.cardbgcolor}>
						<img src={item.img} alt={`default ${item.name} text`} />
					</div>

					<div className="col-sm-5">
						<div className="row text-center card Self-BlackBorder" style={item.cardbgcolor}>
							<h4>Type:</h4>
							<ShowTypes type={item.type} num={item.num}/>
						</div>
						<div className="row text-center card Self-BlackBorder " style={item.cardbgcolor}>
							<h4>Weak To:</h4>
							<ShowTypes type={item.weaknesses} num={item.num}/>
							

						</div>
						<div className="row card Self-BlackBorder" style={item.cardbgcolor}>
							<h4>height: {item.height}</h4>
							<h4>weight: {item.weight}</h4>
						</div>

					</div>


				</div>
				
				
				<div className="row">
					{(()=>{
						let jj=0;
						// console.log("================================================================================orev evo",item)
						if(item.prev_evolution){
							if(item.prev_evolution.length==1){	}
							else{jj=1;}

							return(
								
								<div class="card col-sm-5 Self-BlackBorder" style={getPokeColor(item.prev_evolution[jj].num)}>
									<Link className="text-dark p-0" to={`/pokemon/${Number(item.prev_evolution[jj].num)}`}>

										<img src={getPokeImg(item.prev_evolution[jj].num)} class="card-img" alt={item.prev_evolution[jj].name}/>
										<div class="card-img-overlay text-center">
												<h4 class="card-title card Self-BlackBorder Self-GreyFill">Evolvs From</h4>
										</div>
	
									</Link>
								</div >
							);


						}
					}) ()}
					<div className="col-sm-1">

					</div>
					{(()=>{
						let jj=0;
						console.log("the item id",item.next_evolution)
						if(item.id!=133){

							if(item.next_evolution){
	
								return(
									<div class="card col-sm-5 Self-BlackBorder" style={getPokeColor(item.next_evolution[jj].num)}>
										<Link className="text-dark p-0" to={`/pokemon/${Number(item.next_evolution[jj].num)}`}>
											<img src={getPokeImg(item.next_evolution[jj].num)} class="card-img" alt={item.next_evolution[jj].name}/>
											<div class="card-img-overlay text-center">
													<h4 class="card-title card Self-BlackBorder Self-GreyFill">Evolves To</h4>
											</div>
										</Link>
									</div>
	
								);
	
	
							}
						}else{
							let exception =item.next_evolution.map((it)=>{
								return(
									<div class="card col-sm-5 Self-BlackBorder" style={getPokeColor(it.num)}>
									<Link className="text-dark p-0" to={`/pokemon/${Number(it.num)}`}>
										<img src={getPokeImg(it.num)} class="card-img" alt={it.name}/>
										<div class="card-img-overlay text-center">
												<h4 class="card-title card Self-BlackBorder Self-GreyFill">Evolves To</h4>
										</div>
									</Link>
								</div>

								);

							})
							return exception;

						}

					})()}






				</div>
			</div>
			</>
			);
		})}
		</main>

		
	);
};


// 	"next_evolution": [{
// 		"num": "002",
// 		"name": "Ivysaur"
// 	}, {
// 		"num": "003",
// 		"name": "Venusaur"
// 	}]
// }

export default MoreInfoPage;
