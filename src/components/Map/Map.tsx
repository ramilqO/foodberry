
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet-css';
import "./Map.scss";

import database from './dataBase'

import { Swiper, SwiperSlide } from 'swiper/react';

import SvgRating from './SvgRating';

import 'swiper/css';

import { LocationMarker } from './LocationMarker';

import L from 'leaflet';

import markerMain from '../../images/map/markerMain.svg';

interface IClass {
	classNames?: string;
}

const Map = ({ classNames }: IClass) => {
	const position: any = [55.752220, 37.615560];

	const iconPerson: any = new L.Icon({
		iconUrl: markerMain,
		iconRetinaUrl: markerMain,
		iconSize: [64, 64],
	});


	return (
		<div className={classNames}>
			<div className="map-wrapper">
				<MapContainer center={position} zoom={20} scrollWheelZoom={true} className='map-container' >
					{
						database.map((obj, index) => {
							const { restaurant } = obj;
							return (
								<div key={index + 'adasd'}>

									<TileLayer
										url="https://maps.geoapify.com/v1/tile/dark-matter/{z}/{x}/{y}.png?apiKey=816d9af48505427a93d64e888a9c4a8d"
										attribution='Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | <a href="https://openmaptiles.org/" target="_blank">© OpenMapTiles</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap</a> contributors'
									/>

									<Marker position={restaurant.coordinats} icon={iconPerson}>
										<div className="popup">
											<Popup>
												<h3>{restaurant.name}</h3>
												<Swiper spaceBetween={50} scrollbar={{ draggable: true }}
													slidesPerView={1} className="gallery-images">{
														restaurant.images?.map((images, index) => {
															return (
																<SwiperSlide key={index + images} className="map-galleryPopup-wrapper">
																	<img src={images} alt="gallery" />
																</SwiperSlide>
															)
														})
													}</Swiper>
												<p>Часы работы: {restaurant.time}</p>
												<p>Cтанция <strong>{restaurant.subway}</strong></p>
												<a href={`https://${restaurant.website}`}>{restaurant.website}</a>
												<p>{restaurant.parking}</p>
												<p>{restaurant.check}</p>
												<a href={`tel:${restaurant.phoneNumber}`}>{restaurant.phoneNumber}</a>
												<p>{restaurant.rating}</p>
												<div>
													{
														restaurant.feedBack.map((feedBack, index) => {
															return <div key={index + 'adnd'}>{
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
