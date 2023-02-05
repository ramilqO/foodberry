import "./Promotions.scss";
import promotion from "./promotionsData";

import PromotionCard from '../../components/PromotionCard/PromotionCard';

const Promotions = () => {
    return (
        <main className="main">
            <section className="promotions">
                <div className="promotions__container">
                    <div className="promotions__title-wrapper">
                        <h1 className="promotions__title">Акции</h1>
                    </div>
                    <div className="promotions__promotion-cards">
                        {promotion.map((item, index) => {
                            return (
                                <PromotionCard
                                    img={item.img}
                                    title={item.title}
                                    description={item.description}
                                    dateTime={item.dateTime}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Promotions;