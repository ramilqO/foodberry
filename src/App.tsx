import "./App.scss";
import Header from "./layout/Header/Header";
import HomePage from "./pages/Main/HomePage";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./layout/Footer/Footer";

function App() {

	return (
		<div>
			<Header />
			<Routes>
				<Route
					path="/"
					element={<HomePage />}
				/>
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
