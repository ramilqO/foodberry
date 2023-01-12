import { Link } from "react-router-dom";

const NotFoundPage = () => {
	return (
		<div className="container">
			<div className="title">
				Страница не найдена, пожалуйста вернитесь на
				<Link to="/">главную страницу</Link>
			</div>
		</div>
	);
};

export default NotFoundPage;
