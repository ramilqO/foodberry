import './PromotionCard.scss';

import skeleton  from './../../skeleton.png'

interface ICard {
    img: string;
    title: string;
    description: string;
    dateTime: string;
}

const PromotionCard = ({img, title, description, dateTime}: ICard) => {
    return (
		<div className="card">
			<div className="card__image-wrapper">
				<img
					src={img || skeleton}
					alt={title}
					className="card__image"
					onError={(
						event: React.SyntheticEvent<HTMLImageElement, Event>
					) => {
						event.currentTarget.src = skeleton;
					}}
				/>
			</div>
			<div className="card__main-text">
				<div className="card__title-container">
					<span className="card__card-title">{title}</span>
				</div>

				<p className="card__card-description">{description}</p>

				<div className="card__date-container">
					<span className="card__card-dateTime">{dateTime}</span>
				</div>
			</div>
		</div>
	);
}

export default PromotionCard;