import { food } from "../../dataBase";
import "./Content.scss";

const Content = () => {

	return (
		<section className="main-content">
			<div className="main-content__container">
				{food.map((item) => {

					return (
						<div
							key={item.id}
							id={item.id}
							className="main-content__content"
						>
							{item.menuTitle}
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Content;
