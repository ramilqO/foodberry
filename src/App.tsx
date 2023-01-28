import "./App.scss";

import { Routes, Route } from "react-router-dom";

import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";

import HomePage from "./pages/Main/HomePage/HomePage";
import CheckoutPage from "./pages/Main/CheckoutPage/CheckoutPage";
import Promotions from "./pages/Main/Promotions/Promotions";
import CartPage from "./pages/Main/CartPage/CartPage";
import NotFoundPage from "./pages/NotFoundPage";


function App() {
	return (
		<div className="wrapper">
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/checkout" element={<CheckoutPage />} />
				<Route path="/promotions" element={<Promotions />} />
				<Route path="/cart" element={<CartPage />} /> 
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
			<Footer />
		</div >
	);
}

export default App;
