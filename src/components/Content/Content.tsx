import { food } from "../../dataBase";
import "./Content.scss";

import { Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Card from '../Card/Card';

const Content = () => {

	return (
		<section className="main-content">
			<div className="main-content__container">
				{food.map(item => {

					return (
						<div
							key={item.id}
							id={item.id}
							className="main-content__content"
						>
							{item.menuTitle}

							<Swiper
							modules={[Autoplay]}
							spaceBetween={10}
							slidesPerView={4}
							onSlideChange={() => console.log('slide change')}
							onSwiper={(swiper) => console.log(swiper)}
							className="12345"
							style={{maxWidth: "100%", display: "flex"}}
							autoplay={{delay: 5000}}
							>
								{item.foods.map(dish => {
								return (
									<SwiperSlide style={{ width: "auto" }}>
										<span style={{ background: "yellow" }}>
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

						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Content;
