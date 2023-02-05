import { Link } from "react-router-dom";

const NotFoundPage = () => {
	return (
		<main className="main container">
			<div className="title">
				Страница не найдена, пожалуйста вернитесь на
				<Link to="/">главную страницу</Link>
			</div>
		</main>
	);
};

export default NotFoundPage;
