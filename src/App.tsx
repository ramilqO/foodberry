import "./App.scss";
import Header from "./layout/Header/Header";
import Main from "./components/Main/Main";
// import { Routes, Route, Link } from "react-router-dom";
// <Routes>
// 	<Route path="/" element={<App />} />
// 	<Route path="*" element={<Notfoundpage />} />
// </Routes>;

function App() {
	return (
		<div>
			<Header />
			<Main />
		</div>
	);
}

export default App;
