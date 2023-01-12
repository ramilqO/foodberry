import "./App.scss";
import Header from "./layout/Header/Header";
import Main from "./components/Main/Main";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";



function App() {
	return (
		<div>
			<Header />
			<Main />
			<Routes>
				<Route path="*" element={<NotFoundPage />} />
			</Routes>;
		</div>
	);
}

export default App;
