import "./App.scss";
import Header from "./layout/Header/Header";
import HomePage from "./pages/Main/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import CheckoutPage from "./pages/Main/CheckoutPage/CheckoutPage";
import Promotions from "./pages/Main/Promotions/Promotions";
import Footer from "./layout/Footer/Footer";

function App() {

	return (
		<div className="wrapper">
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/checkout" element={<CheckoutPage />} />
				<Route path="/promotions" element={<Promotions />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
