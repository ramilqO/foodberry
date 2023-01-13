import "./App.scss";
import Header from "./layout/Header/Header";
import Main from "./components/Main/Main";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./layout/Footer/Footer";

function App() {
	return (
		<div>
			<Header />
			<Main />
			<Routes>
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
			;
			<Footer />
		</div>
	);
}

export default App;

