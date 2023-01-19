import { Onion } from "../../icons/Onion"
import { Flash } from "../../icons/Flash"
import { Chef } from "../../icons/Chef"
import "./Benefits.scss";
import { useState } from "react";

const Benefits = () => {
    const [isActive, setIsActive] = useState('active');

    const openContent = () => {
        
    }

    return (
        <section className="benefits">
            <div className="benefits__container">
                <div className="benefits__descriptions">
                    <div className="description-block active">
                        <h2 className="description-block__title">НАШЕ КАФЕ0</h2>
                        <p className="description-block__subtitle">Мы расположены в одном из самых живописных мест города — на берегу реки, это ваш оазис в черте города, куда можно сбежать от шумного и пыльного мегаполиса. Мы, действительно уникальные, ведь все продумано до мелочей: проект построен из дикого закарпатского сруба, камин в основном зале ресторана и панорамные окна с видом на реку, уютные беседки на берегу реки и лучшая видовая террасса, шатер с посадкой на 200 человек, сказочный детский домик и бассейн.</p>
                        <button className="description-block__button">Посмотреть меню</button>
                    </div>
                    <div className="description-block">
                        <h2 className="description-block__title">НАШЕ КАФЕ1</h2>
                        <p className="description-block__subtitle">Мы расположены в одном из самых живописных мест города — на берегу реки, это ваш оазис в черте города, куда можно сбежать от шумного и пыльного мегаполиса. Мы, действительно уникальные, ведь все продумано до мелочей: проект построен из дикого закарпатского сруба, камин в основном зале ресторана и панорамные окна с видом на реку, уютные беседки на берегу реки и лучшая видовая террасса, шатер с посадкой на 200 человек, сказочный детский домик и бассейн.</p>
                        <button className="description-block__button">Посмотреть меню</button>
                    </div>
                    <div className="description-block">
                        <h2 className="description-block__title">НАШЕ КАФЕ2</h2>
                        <p className="description-block__subtitle">Мы расположены в одном из самых живописных мест города — на берегу реки, это ваш оазис в черте города, куда можно сбежать от шумного и пыльного мегаполиса. Мы, действительно уникальные, ведь все продумано до мелочей: проект построен из дикого закарпатского сруба, камин в основном зале ресторана и панорамные окна с видом на реку, уютные беседки на берегу реки и лучшая видовая террасса, шатер с посадкой на 200 человек, сказочный детский домик и бассейн.</p>
                        <button className="description-block__button">Посмотреть меню</button>
                    </div>
                    <div className="description-block">
                        <h2 className="description-block__title">НАШЕ КАФЕ3</h2>
                        <p className="description-block__subtitle">Мы расположены в одном из самых живописных мест города — на берегу реки, это ваш оазис в черте города, куда можно сбежать от шумного и пыльного мегаполиса. Мы, действительно уникальные, ведь все продумано до мелочей: проект построен из дикого закарпатского сруба, камин в основном зале ресторана и панорамные окна с видом на реку, уютные беседки на берегу реки и лучшая видовая террасса, шатер с посадкой на 200 человек, сказочный детский домик и бассейн.</p>
                        <button className="description-block__button">Посмотреть меню</button>
                    </div>
                </div>
                <div className="benefits__buttons">
                    <button className="benefits__button" onClick={ () => {} }><Onion /><span>Свежайшие продукты</span></button>
                    <button className="benefits__button"><Flash /><span>Быстрая доставка</span></button>
                    <button className="benefits__button"><Chef /><span>Лучшие повора</span></button>
                    <button className="benefits__button"><Onion /><span>Свежайшие продукты</span></button>
                </div>
            </div>
        </section>
    )
}

export default Benefits;