import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
	//[search, setSearch] = useState("");

	const handleChange = (e) => {
		console.log(e);
	};

	return (
		<div>
			<input type="text" />

			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/search">Search</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Header;
