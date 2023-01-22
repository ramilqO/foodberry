import { OnionIcon } from "../../icons/OnionIcon"
import { FlashIcon } from "../../icons/FlashIcon"
import { ChefIcon } from "../../icons/ChefIcon"
import "./Benefits.scss";
import { useState } from "react";

const Benefits = () => {
    const [isActive, setIsActive] = useState([false, false, false, false]);

    return (
        <section className="benefits">
            <div className="benefits__container">
                <div className="descriptions">
                    <div className="wrapper">
                        <div className={"description-block " + (isActive[0] ? 'active' : '')}>
                            <h2 className="description-block__title">НАШЕ КАФЕ0</h2>
                            <p className="description-block__subtitle">Мы расположены в одном из самых живописных мест города — на берегу реки, это ваш оазис в черте города, куда можно сбежать от шумного и пыльного мегаполиса. Мы, действительно уникальные, ведь все продумано до мелочей: проект построен из дикого закарпатского сруба, камин в основном зале ресторана и панорамные окна с видом на реку, уютные беседки на берегу реки и лучшая видовая террасса, шатер с посадкой на 200 человек, сказочный детский домик и бассейн.</p>
                        </div>
                        <div className={"description-block " + (isActive[1] ? 'active' : '')}>
                            <h2 className="description-block__title">НАШЕ КАФЕ1</h2>
                            <p className="description-block__subtitle">Мы расположены в одном из самых живописных мест города — на берегу реки, это ваш оазис в черте города, куда можно сбежать от шумного и пыльного мегаполиса. Мы, действительно уникальные, ведь все продумано до мелочей: проект построен из дикого закарпатского сруба, камин в основном зале ресторана и панорамные окна с видом на реку, уютные беседки на берегу реки и лучшая видовая террасса, шатер с посадкой на 200 человек, сказочный детский домик и бассейн.</p>
                        </div>
                        <div className={"description-block " + (isActive[2] ? 'active' : '')}>
                            <h2 className="description-block__title">НАШЕ КАФЕ2</h2>
                            <p className="description-block__subtitle">Мы расположены в одном из самых живописных мест города — на берегу реки, это ваш оазис в черте города, куда можно сбежать от шумного и пыльного мегаполиса. Мы, действительно уникальные, ведь все продумано до мелочей: проект построен из дикого закарпатского сруба, камин в основном зале ресторана и панорамные окна с видом на реку, уютные беседки на берегу реки и лучшая видовая террасса, шатер с посадкой на 200 человек, сказочный детский домик и бассейн.</p>
                        </div>
                        <div className={"description-block " + (isActive[3] ? 'active' : '')}>
                            <h2 className="description-block__title">НАШЕ КАФЕ3</h2>
                            <p className="description-block__subtitle">Мы расположены в одном из самых живописных мест города — на берегу реки, это ваш оазис в черте города, куда можно сбежать от шумного и пыльного мегаполиса. Мы, действительно уникальные, ведь все продумано до мелочей: проект построен из дикого закарпатского сруба, камин в основном зале ресторана и панорамные окна с видом на реку, уютные беседки на берегу реки и лучшая видовая террасса, шатер с посадкой на 200 человек, сказочный детский домик и бассейн.</p>
                        </div>
                        <button className="descriptions__button">Посмотреть меню</button>
                    </div>
                    <div className="benefits__buttons">
                        <button className="benefits__button" onClick={() => { setIsActive([true, false, false, false]) }}><OnionIcon /><span>Свежайшие продукты</span></button>
                        <button className="benefits__button" onClick={() => { setIsActive([false, true, false, false]) }}><FlashIcon /><span>Быстрая доставка</span></button>
                        <button className="benefits__button" onClick={() => { setIsActive([false, false, true, false]) }}><ChefIcon /><span>Лучшие повора</span></button>
                        <button className="benefits__button" onClick={() => { setIsActive([false, false, false, true]) }}><OnionIcon /><span>Свежайшие продукты</span></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Benefits;