import "./Footer.scss";

import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className="footer container">
			<div className="footer__main-text">
				<a href="/#" className="logo">
					L O G O S
				</a>
				<br /> <br />
				<div className="text">
					<p>© ООО СК «АПШЕРОН»</p>
					<p>Все права защищены</p>
                    
                    <div className="text__policy">
                        <p><Link to="/#">Пользовательское соглашение</Link></p>
                        <p><Link to="/#">Карта сайта</Link></p>
                        <p><Link to="/#">Политика конфиденциальности</Link></p>
                    </div>
				</div>
			</div>

			<nav className="footer__nav">
				<a href="/#" className="nav-item">
					О ресторане
				</a>
				<a href="/#" className="nav-item">
					Условия доставки
				</a>
				<a href="/#" className="nav-item">
					Возврат товара
				</a>
				<a href="/#" className="nav-item">
					Акции
				</a>
			</nav>
		</div>
	);
};

export default Footer;
