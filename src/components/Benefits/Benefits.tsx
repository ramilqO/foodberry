import { Onion } from "../../icons/Onion"
import { Flash } from "../../icons/Flash"
import { Chef } from "../../icons/Chef"


import "./Benefits.scss";

const Benefits = () => {
    return (
        <section className="benefits">
            <div className="benefits__container">
                <div className="benefits__descriptions">
                    <div className="benefits__description-block">
                        <h2 className="description__title">НАШЕ КАФЕ</h2>
                        <p className="description__subtitle">Мы расположены в одном из самых живописных мест города — на берегу реки, это ваш оазис в черте города, куда можно сбежать от шумного и пыльного мегаполиса. Мы, действительно уникальные, ведь все продумано до мелочей: проект построен из дикого закарпатского сруба, камин в основном зале ресторана и панорамные окна с видом на реку, уютные беседки на берегу реки и лучшая видовая террасса, шатер с посадкой на 200 человек, сказочный детский домик и бассейн.</p>
                        <button className="description__button">НАШЕ КАФЕ</button>
                    </div>
                    <div className="benefits__description-block">
                        <h2 className="description__title"></h2>
                        <p className="description__subtitle"></p>
                        <button className="description__button"></button>
                    </div>
                    <div className="benefits__description-block">
                        <h2 className="description__title"></h2>
                        <p className="description__subtitle"></p>
                        <button className="description__button"></button>
                    </div>
                    <div className="benefits__description-block">
                        <h2 className="description__title"></h2>
                        <p className="description__subtitle"></p>
                        <button className="description__button"></button>
                    </div>
                </div>
                <div className="benefits__buttons">
                    <button className="benefits__button"><Onion /></button>
                    <button className="benefits__button"><Flash /></button>
                    <button className="benefits__button"><Chef /></button>
                    <button className="benefits__button"><Onion /></button>
                </div>
            </div>
        </section>
    )
}

export default Benefits;