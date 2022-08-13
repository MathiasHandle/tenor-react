import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import PageHome from "./views/PageHome";
import PageSearch from "./views/PageSearch";
import Header from "./components/global/Header";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Header />

			<Routes>
				<Route exact path="/" element={<PageHome />} />
				<Route path="/search" element={<PageSearch />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
