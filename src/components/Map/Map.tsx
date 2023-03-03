
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents } from 'react-leaflet';
import { useState } from 'react';
import 'leaflet-css';
import "./Map.scss";

import database from './dataBase'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { renderToStaticMarkup } from "react-dom/server";
import { LocationMarker } from './LocationMarker';

import { Link } from 'react-router-dom'

import L from 'leaflet';

import marker from '../../images/restaurant.svg'
import food1 from '../../images/map/food1.gif';
import food2 from '../../images/map/food2.gif';
import food3 from '../../images/map/food3.gif';
import food4 from '../../images/map/food4.gif';
import food5 from '../../images/map/food5.gif';
import food6 from '../../images/map/food6.gif';
import food7 from '../../images/map/food7.gif';
import food8 from '../../images/map/food8.gif';
import food9 from '../../images/map/food9.gif';
import food10 from '../../images/map/food10.gif';
import food11 from '../../images/map/food11.gif';
import food12 from '../../images/map/food12.gif';
import food13 from '../../images/map/food13.gif';


let arrFoods = [
	food1,
	food2,
	food3,
	food4,
	food5,
	food6,
	food7,
	food8,
	food9,
	food10,
	food11,
	food12,
	food13,
	marker
]

function randomFood(items: string[]) {

	return items[Math.floor(Math.random() * items.length)];

}

interface IClass {
	classNames?: string;
}

const Map = ({ classNames }: IClass) => {
	const position = [55.752220, 37.615560];

	const iconPerson: any = new L.Icon({
		iconUrl: randomFood(arrFoods),
		iconRetinaUrl: randomFood(arrFoods),
		iconSize: [64, 64],
	});


	return (
		<div className={classNames}>
			<div className="map-wrapper">
				<MapContainer center={position} zoom={13} scrollWheelZoom={true} className='map-container' >

					{
						database.map((obj) => {
							return (
								<div>
									<TileLayer
										attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
										url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
									/>
									<Marker position={obj.restaurant.coordinats} icon={iconPerson}>
										<div className="popup">
											<Popup>
												<h3>{obj.restaurant.name}</h3>
												<Swiper spaceBetween={50} scrollbar={{ draggable: true }}
													slidesPerView={1} className="gallery-images">{
														obj.restaurant.images?.map((images, index) => {
															return (
																<SwiperSlide key={index} className="map-galleryPopup-wrapper">
																	<img src={images} alt="gallery" />
																</SwiperSlide>
															)
														})
													}</Swiper>
												<p>Часы работы: {obj.restaurant.time}</p>
												<p>Cтанция <strong>{obj.restaurant.subway}</strong></p>
												<a href={`https://${obj.restaurant.website}`}>{obj.restaurant.website}</a>
												<p>{obj.restaurant.parking}</p>
												<p>{obj.restaurant.check}</p>
												<a href={`tel:${obj.restaurant.phoneNumber}`}>{obj.restaurant.phoneNumber}</a>
												<p>{obj.restaurant.rating}</p>
												<div>
													{
														obj.restaurant.feedBack.map((feedBack, index) => {
															return <div key={index}>{
																<>
																	<div className="avatar">
																		<div className="avatar-image">
																			<img src={feedBack.user?.avatar} alt="avatar feedback" />
																		</div>

																		<h4>{feedBack.user.name}</h4>
																		<span>{feedBack.user.status}</span>
																	</div>


																	<span>Оценка: {feedBack.user.rating}</span><br/>

																	<p className="avatar-message">
																		{feedBack.user.message}
																		<span>{feedBack.user.date}</span>
																	</p>
																</>
															}

															</div>
														})
													}
												</div>

											</Popup>

										</div>

									</Marker>

								</div>)
						})
					}
					<LocationMarker />
				</MapContainer>

			</div>
		</div>
	)
}

export default Map;
