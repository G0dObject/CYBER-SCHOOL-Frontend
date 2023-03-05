import { Container } from "../../layout/Container/Container";
import './RequestComponent.scss';
import { useState } from "react";
import { ReactComponent as Illustration1 } from "../../images/menorwomanform.svg";
import { ReactComponent as Illustration2 } from "../../images/formillustration.svg";
import AuthService from "../../Services/AuthService";

const RequestComponent = () => {
	const [activeTab, setActiveTab] = useState(1);
	const forms = [
		{ element: <Form1 /> },
		{ element: <Form2 /> },
		{ element: <Form3 /> },
	]
	return (
		<div className="request">
			<Container className="request">
				<h2 className="request__title">Заявка</h2>
				<div className="request__content">
					<Tabs state={{ activeTab, setActiveTab }} />
					<div className="request__tab-content">
						{forms.map((form, index) =>
							<div
								key={index}
								className={`request__form-container ${activeTab === index ? 'active' : 'inactive'}`}>
								{form.element}
							</div>
						)}
					</div>
					<div className="request__buttons">
						{activeTab !== 0 ? <button onClick={() => {
							setActiveTab(prev => prev - 1);
							scrollByContent();
						}} className="request__button request__button-back">назад</button> : <div className="null"></div>}
						<button onClick={() => {
							if (activeTab !== 2) {
								setActiveTab(prev => prev + 1);
								scrollByContent();
							} else {
							}
						}} className="request__button request__button-next">{activeTab !== 2 ? "вперёд" : "отправить"}</button>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default RequestComponent;

function scrollByContent() {
	document.querySelector('.request__tab-content').scrollIntoView({
		behavior: 'smooth',
		block: 'start',
	});
}

const Tabs = ({ state }) => {
	const tabs = [
		{ text: 'Личные данные' },
		{ text: 'Контактные данные' },
		{ text: 'Направление обращения' },
	]
	return (
		<ul className="request-tabs">
			{tabs.map((tab, index) =>
				<li onClick={() => {
					state.setActiveTab(index);
					scrollByContent();
				}} className={`request-tab ${index === state.activeTab ? 'active' : 'inactive'}`} key={index}>{tab.text}</li>
			)}
		</ul>
	);
}
const Form1 = () => {
	return (
		<Form illustration={<Illustration1 className="request-form__illustration" />} className="form1" title="Личные данные">
			<div className="request-form__col">
				<label className="request-form__item">
					<div className="request-form__label required">Фамилия</div>
					<input type="text" className="request-form__input" />
				</label>
				<label className="request-form__item">
					<div className="request-form__label required">Имя</div>
					<input type="text" className="request-form__input" />
				</label>
				<label className="request-form__item">
					<div className="request-form__label required">Отчество</div>
					<input type="text" className="request-form__input" />
				</label>
				<label className="request-form__item">
					<div className="request-form__label required">Образование</div>
					<select className="request-form__select">
						<option value="no">Нет</option>
						<option value="medium">Среднее</option>
						<option value="mediumComplete">Среднее оконченное</option>
						<option value="high">Высшее</option>
					</select>
				</label>
				<div className="request-form__item">
					<div className="request-form__label required">Дети</div>
					<div className="request-form__radio-container">
						<label className="request-form__radio-item">
							<input type="radio" name="haveKids" defaultChecked={true} />
							<div className="request-form__radio-label"></div>
							<div className="request-form__radio-text">нет</div>
						</label>
						<label className="request-form__radio-item">
							<input type="radio" name="haveKids" />
							<div className="request-form__radio-label"></div>
							<div className="request-form__radio-text">есть</div>
						</label>
					</div>
				</div>
			</div>
			<div className="request-form__col">
				<label className="request-form__item">
					<div className="request-form__label required">Дата рождения</div>
					<input type="date" className="request-form__input" />
				</label>
				<label className="request-form__item">
					<div className="request-form__label required">Место рождения</div>
					<input type="text" className="request-form__input" />
				</label>
				<label className="request-form__item">
					<div className="request-form__label required">Адрес регистрации</div>
					<input type="text" className="request-form__input" />
				</label>
				<label className="request-form__item">
					<div className="request-form__label required">Семейное положение</div>
					<select className="request-form__select">
						<option value="no">Холост/Не замужем</option>
						<option value="yes">Женат/Замужем</option>
					</select>
				</label>
			</div>
		</Form>
	);
}
const Form2 = () => {
	return (
		<Form illustration={<Illustration2 className="request-form__illustration" />} className="form2" title="Контактные данные">
			<div className="request-form__col">
				<div className="request-form__item">
					<div className="request-form__label required">Мобильный телефон</div>
					<input type="tel" className="request-form__input" />
				</div>
				<div className="request-form__item">
					<div className="request-form__label">Домашний телефон</div>
					<input type="tel" className="request-form__input" />
				</div>
				<div className="request-form__item">
					<div className="request-form__label required">Электронная почта</div>
					<input type="email" className="request-form__input" />
				</div>
			</div>
		</Form>
	);
}
const Form3 = () => {
	const [purpose, setPurpose] = useState('practice');
	return (
		<Form className={`form3 ${purpose}`} title="Направление обращения">
			{purpose === 'internship' || purpose === 'work'
				? <div className="request-form__col request-form__col_text-content">
					<div className="request-form__text-content">
						<p><span>Уважаемые кандидаты!</span> В банке “Центр-инвест” разработан и успешно внедрен единый прорядок трудоустройства, предполагающий прохождение стажировки в банке по результатам успешного обучения в Центре финансовой грамотности населения.</p>
						<p>Бесплатный обучающий курс по банковскому делу в Центре финансовой грамотности направлен на формирование у студентов и выпускников вузов и сузов практических навыков, необходимых для успешной работы в банке. Срок обучения состяавляет от 1 месяца.</p>
						<p>Обучение предполагает проведение различных форм контроля знаний (тестирование, бизнес-игры, сдача методических пособий, собеседование и т.д.)</p>
						<p>Лучшие выпускники Центра финансовой грамотности получают приглашение на прохождение дальнейшей стажировки в банке</p>
					</div>
				</div>
				: null
			}

			<div className="request-form__col">
				<div className="request-form__item">
					<div className="request-form__label required">Цель обращения</div>
					<select onChange={(event) => setPurpose(event.target.value)} className="request-form__select">
						<option value="practice">Практика</option>
						<option value="internship">Обучение/Стажировка</option>
						<option value="work">Работа</option>
					</select>
				</div>
				<div className="request-form__item">
					<div className="request-form__label required">Направление {
						purpose === 'practice' ? 'практики'
							: purpose === 'internship' ? 'стажировки' : 'работы'
					}</div>
					<select onChange={(event) => setPurpose(event.target.value)} className="request-form__select">
						<option value="bd">Разработчик баз данных</option>
						<option value="java">Разработчик Java/Kotlin</option>
						<option value="mobile">Разработчик под мобильные платформы</option>
						<option value="systemAnalytics">Системный аналитик</option>
						<option value="dataAnalytics">Аналитик данных</option>
						<option value="phpDev">Разработчик PHP</option>
						<option value="frontend">Разработчик фронтенд (JavaScript, React)</option>
						<option value="systemAdmin">Системный администратор</option>
					</select>
				</div>
				<div className="request-form__item">
					<div className="request-form__label required">Желаемый регион для {
						purpose === 'practice' ? 'практики'
							: purpose === 'internship' ? 'стажировки' : 'работы'
					}</div>
					<div className="request-form__radio-container">
						<label className="request-form__radio-item">
							<input type="radio" name="haveKids" />
							<div className="request-form__radio-label"></div>
							<div className="request-form__radio-text">Москва</div>
						</label>
						<label className="request-form__radio-item">
							<input type="radio" name="haveKids" />
							<div className="request-form__radio-label"></div>
							<div className="request-form__radio-text">Ростовская область</div>
						</label>
						<label className="request-form__radio-item">
							<input type="radio" name="haveKids" />
							<div className="request-form__radio-label"></div>
							<div className="request-form__radio-text">Краснодарский край</div>
						</label>
						<label className="request-form__radio-item">
							<input type="radio" name="haveKids" />
							<div className="request-form__radio-label"></div>
							<div className="request-form__radio-text">Нижний Новгород</div>
						</label>
					</div>
				</div>
			</div>
		</Form>
	);
}
const Form = ({ className, title, children, illustration }) => {
	const sendForm = (event) => {
		event.preventDefault();
		console.log(event.target.elements);
	}
	return (
		<form action="#" onSubmit={sendForm} className={`request-form ${className}`}>
			<h3 className="request-form__title">{title}</h3>
			<div className="request-form__body">
				{children}
			</div>
			{illustration ? illustration : null}
		</form>
	);
}