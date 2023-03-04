import './Header.scss';
import { Container } from '../../layout/Container/Container';
import { ButtonRequest } from '../ButtonRequest/ButtonRequest';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as Arrow } from '../../images/arrow.svg';
import { useState } from "react";
import { Transition } from "react-transition-group";

export const Header = ({ isMain }) => {
	const [burgerOpen, setBurgerOpen] = useState(false);
	return (
		<header className="header">
			<Container className="header">
				<div className="header__main">
					{/* eslint-disable-next-line */}
					<a href="#" onClick={event => event.preventDefault()} className="header__logo"><Logo /></a>
					<Navbar />
				</div>
				<div className="header__sub">
					{isMain ? <ButtonRequest /> : <Back />}
					<div className={`header__burger ${burgerOpen ? "active" : "inactive"}`} onClick={() => setBurgerOpen(!burgerOpen)}>
						<span></span>
					</div>
					<Transition in={burgerOpen} timeout={350} mountOnEnter unmountOnExit>
						{state => <BurgerMenuContent state={state} isMain={isMain} />}
					</Transition>
				</div>
			</Container>
		</header>
	);
}
const BurgerMenuContent = ({ isMain, state }) => {
	return (
		<div className={`burger-content ${state}`}>
			<div className="burger-content__area"></div>
			<div className="burger-content__container">
				<Navbar />
				{isMain ? <ButtonRequest /> : <Back />}
			</div>
		</div>
	);
}
const Navbar = () => {
	const links = [
		{ path: '#', text: 'Частным лицам' },
		{ path: '#', text: 'Бизнесу' },
		{ path: '#', text: 'О банке' },
		{ path: '#', text: 'Контакты' },
		{ path: '#', text: 'Карьера' },
	];
	return (
		<nav className="navigation">
			<ul className="navigation__list">
				{links.map((link, index) =>
					<li key={index} className="navigation__item">
						<a href={link.path} onClick={event => event.preventDefault()} className="navigation__link">{link.text}</a>
					</li>
				)}
			</ul>
		</nav>
	);
}
const Back = () => {
	return (
		// eslint-disable-next-line
		<a href="#" onClick={event => event.preventDefault()} className="header__back">
			<Arrow />
			<span>Вернуться на сайт Банка</span>
		</a>
	)
}