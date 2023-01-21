import "./App.scss";
import Header from "./layout/Header/Header";
import HomePage from "./pages/Main/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import CheckoutPage from "./pages/Main/CheckoutPage/CheckoutPage";
import Footer from "./layout/Footer/Footer";

function App() {

	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/сheckout" element={<CheckoutPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
