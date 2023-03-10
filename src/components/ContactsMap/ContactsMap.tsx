import "./ContactsMap.scss"

const ContactsMap = () => {
	return (
		<>
			<div className="contactsMap">
				<h2 className="contactsMap__title">контакты</h2>
				<div className="contactsMap__description">
					<div className="contactsMap__adress">
						<span>Наш адрес:</span>
						<p> МО, городской округ Красногорск, село Ильинкое, Экспериментальная улица, 10</p>
					</div>
					<a href='mailto:chernigovsky108@gmail.com' className="contactsMap__email">
						<span>Максим (frontend-developer):</span>
						<p>chernigovsky108@gmail.com</p>
					</a>
					<a href='mailto:chernigovsky108@gmail.com'  className="contactsMap__email">
						<span>Андрей (frontend-developer):</span>
						<p>chernigovsky108@gmail.com</p>
					</a>
					<a href='mailto:chernigovsky108@gmail.com' className="contactsMap__email">
						<span>Рамиль (frontend-developer):</span>
						<p>chernigovsky108@gmail.com</p>
					</a>
					<a href='mailto:chernigovsky108@gmail.com' className="contactsMap__email">
						<span>Семён (frontend-developer && team leader):</span>
						<p>chernigovsky108@gmail.com</p>
					</a>
				</div>

				<div className="contactsMap__contacts">
					<button type="button" disabled>свяжитесь с нами</button>
					<p className="contactsMap__telephone"><a href="tel:+79999999999">+7 (999) 999-99-99</a><span>Звоните или оставляйте заявку</span></p>
				</div>

				<div className="contactsMap__githubs">
					<a href="https://github.com/MaximProsin">М</a>
					<a href="https://github.com/AndrewChernigovsky">А</a>
					<a href="https://github.com/ramilqO">Р</a>
					<a href="https://github.com/GitStudentSem">С</a>
				</div>
			</div>
		</>
	)
}

export default ContactsMap;