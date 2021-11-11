import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Comp/Navbar/Navbar";
import Welcome from "./Comp/Views/Welcome";
import ListView from "./Comp/Views/ListView";
import MoreInfoPage from "./Comp/Views/MoreInfoPage";


function App() {
	const [allPokemon,setAllPokemon] = useState([]);

	
	const handlePokeFetch = () => {
		let urlb = "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
		fetch(urlb, {mode: "cors"} )
				.then((response) => {return response.json()})
				.then((result) => {/*setAllPokemon(result.pokemon)*/ addCardGrow(result.pokemon)})
				.catch((error)=>{console.log("####################################################Within a fetch catch error",error)})
	};
	
	const getfakeData = () =>{
		let fakedata = {
				"pokemon": 
				[
				{
					"id": 1,
					"num": "001",
					"name": "Bulbasaur",
					"img": "http://www.serebii.net/pokemongo/pokemon/001.png",
					"type": [
						"Grass",
						"Poison"
					],
					"height": "0.71 m",
					"weight": "6.9 kg",
					"candy": "Bulbasaur Candy",
					"candy_count": 25,
					"egg": "2 km",
					"spawn_chance": 0.69,
					"avg_spawns": 69,
					"spawn_time": "20:00",
					"multipliers": [1.58],
					"weaknesses": [
						"Fire",
						"Ice",
						"Flying",
						"Psychic"
					],
					"next_evolution": [{
						"num": "002",
						"name": "Ivysaur"
					}, {
						"num": "003",
						"name": "Venusaur"
					}]
				}, {
					"id": 2,
					"num": "002",
					"name": "Ivysaur",
					"img": "http://www.serebii.net/pokemongo/pokemon/002.png",
					"type": [
						"Grass",
						"Poison"
					],
					"height": "0.99 m",
					"weight": "13.0 kg",
					"candy": "Bulbasaur Candy",
					"candy_count": 100,
					"egg": "Not in Eggs",
					"spawn_chance": 0.042,
					"avg_spawns": 4.2,
					"spawn_time": "07:00",
					"multipliers": [
						1.2,
						1.6
					],
					"weaknesses": [
						"Fire",
						"Ice",
						"Flying",
						"Psychic"
					],
					"prev_evolution": [{
						"num": "001",
						"name": "Bulbasaur"
					}],
					"next_evolution": [{
						"num": "003",
						"name": "Venusaur"
					}]
				}, {
					"id": 3,
					"num": "003",
					"name": "Venusaur",
					"img": "http://www.serebii.net/pokemongo/pokemon/003.png",
					"type": [
						"Grass",
						"Poison"
					],
					"height": "2.01 m",
					"weight": "100.0 kg",
					"candy": "Bulbasaur Candy",
					"egg": "Not in Eggs",
					"spawn_chance": 0.017,
					"avg_spawns": 1.7,
					"spawn_time": "11:30",
					"multipliers": null,
					"weaknesses": [
						"Fire",
						"Ice",
						"Flying",
						"Psychic"
					],
					"prev_evolution": [{
						"num": "001",
						"name": "Bulbasaur"
					}, {
						"num": "002",
						"name": "Ivysaur"
					}]
				}, {
					"id": 4,
					"num": "004",
					"name": "Charmander",
					"img": "http://www.serebii.net/pokemongo/pokemon/004.png",
					"type": [
						"Fire"
					],
					"height": "0.61 m",
					"weight": "8.5 kg",
					"candy": "Charmander Candy",
					"candy_count": 25,
					"egg": "2 km",
					"spawn_chance": 0.253,
					"avg_spawns": 25.3,
					"spawn_time": "08:45",
					"multipliers": [1.65],
					"weaknesses": [
						"Water",
						"Ground",
						"Rock"
					],
					"next_evolution": [{
						"num": "005",
						"name": "Charmeleon"
					}, {
						"num": "006",
						"name": "Charizard"
					}]
				}, {
					"id": 5,
					"num": "005",
					"name": "Charmeleon",
					"img": "http://www.serebii.net/pokemongo/pokemon/005.png",
					"type": [
						"Fire"
					],
					"height": "1.09 m",
					"weight": "19.0 kg",
					"candy": "Charmander Candy",
					"candy_count": 100,
					"egg": "Not in Eggs",
					"spawn_chance": 0.012,
					"avg_spawns": 1.2,
					"spawn_time": "19:00",
					"multipliers": [1.79],
					"weaknesses": [
						"Water",
						"Ground",
						"Rock"
					],
					"prev_evolution": [{
						"num": "004",
						"name": "Charmander"
					}],
					"next_evolution": [{
						"num": "006",
						"name": "Charizard"
					}]
				}, {
					"id": 6,
					"num": "006",
					"name": "Charizard",
					"img": "http://www.serebii.net/pokemongo/pokemon/006.png",
					"type": [
						"Fire",
						"Flying"
					],
					"height": "1.70 m",
					"weight": "90.5 kg",
					"candy": "Charmander Candy",
					"egg": "Not in Eggs",
					"spawn_chance": 0.0031,
					"avg_spawns": 0.31,
					"spawn_time": "13:34",
					"multipliers": null,
					"weaknesses": [
						"Water",
						"Electric",
						"Rock"
					],
					"prev_evolution": [{
						"num": "004",
						"name": "Charmander"
					}, {
						"num": "005",
						"name": "Charmeleon"
					}]
				}, {
					"id": 7,
					"num": "007",
					"name": "Squirtle",
					"img": "http://www.serebii.net/pokemongo/pokemon/007.png",
					"type": [
						"Water"
					],
					"height": "0.51 m",
					"weight": "9.0 kg",
					"candy": "Squirtle Candy",
					"candy_count": 25,
					"egg": "2 km",
					"spawn_chance": 0.58,
					"avg_spawns": 58,
					"spawn_time": "04:25",
					"multipliers": [2.1],
					"weaknesses": [
						"Electric",
						"Grass"
					],
					"next_evolution": [{
						"num": "008",
						"name": "Wartortle"
					}, {
						"num": "009",
						"name": "Blastoise"
					}]
				}, {
					"id": 8,
					"num": "008",
					"name": "Wartortle",
					"img": "http://www.serebii.net/pokemongo/pokemon/008.png",
					"type": [
						"Water"
					],
					"height": "0.99 m",
					"weight": "22.5 kg",
					"candy": "Squirtle Candy",
					"candy_count": 100,
					"egg": "Not in Eggs",
					"spawn_chance": 0.034,
					"avg_spawns": 3.4,
					"spawn_time": "07:02",
					"multipliers": [1.4],
					"weaknesses": [
						"Electric",
						"Grass"
					],
					"prev_evolution": [{
						"num": "007",
						"name": "Squirtle"
					}],
					"next_evolution": [{
						"num": "009",
						"name": "Blastoise"
					}]
				}, {
					"id": 9,
					"num": "009",
					"name": "Blastoise",
					"img": "http://www.serebii.net/pokemongo/pokemon/009.png",
					"type": [
						"Water"
					],
					"height": "1.60 m",
					"weight": "85.5 kg",
					"candy": "Squirtle Candy",
					"egg": "Not in Eggs",
					"spawn_chance": 0.0067,
					"avg_spawns": 0.67,
					"spawn_time": "00:06",
					"multipliers": null,
					"weaknesses": [
						"Electric",
						"Grass"
					],
					"prev_evolution": [{
						"num": "007",
						"name": "Squirtle"
					}, {
						"num": "008",
						"name": "Wartortle"
					}]
				}
				]
		}

		// setAllPokemon(fakedata.pokemon);
		addCardGrow(fakedata.pokemon);

		
	};

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
	const addCardGrow = (itemlist) =>{

		const midObject = {
			cardGrow:1
		}
		// console.log("Here is midobject:", midObject);
		// console.log("here is filter list:", filtList);

		const mid = itemlist.map( (item)=>{
			return ({
				...item,
				...midObject,
				cardbgcolor:getAveImageColor(item),

			})
		
		})

		// console.log("here is mid", mid);

		// setFiltList(mid);
		setAllPokemon(mid);

	}
	
	
	
	
	useEffect(()=> {
		// console.log("App-useEffect\nis working allpokemon:", allPokemon);
			if(allPokemon.length === 0){
					handlePokeFetch();
					// getfakeData();
			}
	},[allPokemon,allPokemon.length]);












	return (
		<BrowserRouter>
			<Navbar />
			<Switch>

			<Route exact path="/pokemon/:id">
					<MoreInfoPage FullList={allPokemon}/>
				</Route>

				<Route exact path="/pokemon">
					<ListView FullList={allPokemon}  />
				</Route>

				<Route exact path="/">
					<Welcome />
				</Route>

			</Switch>
		</BrowserRouter>
	);
}

export default App;
