import { food } from "../../dataBase";
import "./Content.scss";

import { Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Card from '../Card/Card';
import { InView } from "react-intersection-observer";

interface IactiveSection {
	setActiveSection: (item: string) => void;
}

const Content = ({setActiveSection}: IactiveSection) => {
	return (
		<section className="main-content">
			<div className="main-content__container">
				{food.map((item) => {
					return (
						<InView
							key={item.id}
							id={item.id}
							className="main-content__content"
							as="div"
							threshold={1}
							onChange={(inView, entry) =>
								inView && setActiveSection(item.id)
							}
						>
							{item.menuTitle}

							<Swiper
								modules={[Autoplay]}
								spaceBetween={10}
								slidesPerView={4}
								className="12345"
								style={{ maxWidth: "100%", display: "flex" }}
								autoplay={{ delay: 5000 }}
							>
								{item.foods.map((dish, index) => {
									return (
										<SwiperSlide
											style={{ width: "auto" }}
											key={index}
										>
											<span
												style={{ background: "yellow" }}
											>
												<Card
													img={dish.img}
													name={dish.name}
													weight={dish.weight}
													price={dish.price}
													about={dish.about}
												/>
											</span>
										</SwiperSlide>
									);
								})}
							</Swiper>
						</InView>
					);
				})}
			</div>
		</section>
	);
};

export default Content;
