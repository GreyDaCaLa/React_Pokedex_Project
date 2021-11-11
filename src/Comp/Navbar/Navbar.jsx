import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<div>
			<h1 className="bg-primary text-light text-center p-2 ">Pokedex Project</h1>
			<nav className="d-flex justify-content-around bg-primary text-light text-center p-2">
				<NavLink
					exact
					to="/"
					activeClassName="border-bottom border-light bg-info nav-link text-light"
					className="nav-link text-light"
				>
					Home
				</NavLink>
				<NavLink
					to="/Pokemon"
					activeClassName="border-bottom border-light bg-info nav-link text-light"
					className="nav-link text-light"
				>
					Pokemon
				</NavLink>
			</nav>
		</div>
	);
};

export default Navbar;
