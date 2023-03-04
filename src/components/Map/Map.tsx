
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents } from 'react-leaflet';
import { useState } from 'react';
import 'leaflet-css';
import "./Map.scss";

import database from './dataBase'

import { Swiper, SwiperSlide } from 'swiper/react';

import SvgRating  from './SvgRating';

import 'swiper/css';

import { renderToStaticMarkup } from "react-dom/server";
import { LocationMarker } from './LocationMarker';

import L from 'leaflet';

import marker1 from '../../images/map/marker1.svg';
import marker2 from '../../images/map/marker2.svg';
import marker3 from '../../images/map/marker3.svg';
import marker4 from '../../images/map/marker4.svg';
import marker5 from '../../images/map/marker5.svg';
import marker6 from '../../images/map/marker6.svg';
import marker7 from '../../images/map/marker7.svg';
import marker8 from '../../images/map/marker8.svg';





let arrFoods = [
	marker1,
	marker2,
	marker3,
	marker4,
	marker5,
	marker6,
	marker7,
	marker8,
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
																		{feedBack.user.status ?
																			<span style={{ marginRight: '10px' }}>{feedBack.user.status}</span> :
																			''
																		}
																		<span style={{ marginRight: '10px', color: 'lightgray' }}>{feedBack.user.date}</span>
																	</div>
																	<div><SvgRating num={feedBack.user.rating} /></div><br />
																	{console.log(feedBack.user.rating)}
																	<p className="avatar-message">
																		{feedBack.user.message}
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
