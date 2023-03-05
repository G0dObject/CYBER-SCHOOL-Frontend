import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import { ReactComponent as Arrow } from '../../images/arrow.svg';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { Container } from '../../layout/Container/Container';
import { ButtonRequest } from '../ButtonRequest/ButtonRequest';
import './Header.scss';

export const Header = ({ isMain }) => {
	const [burgerOpen, setBurgerOpen] = useState(false);
	return (
		<header className="header">
			<Container className="header">
				<div className="header__main">
					{/* eslint-disable-next-line */}
					<Link to={'/'} className="header__logo">
						<Logo />
					</Link>
					<Navbar />
				</div>
				<div className="header__sub">
					{isMain ? <ButtonRequest /> : <Back />}
					<div
						className={`header__burger ${burgerOpen ? 'active' : 'inactive'}`}
						onClick={() => setBurgerOpen(!burgerOpen)}>
						<span></span>
					</div>
					<Transition in={burgerOpen} timeout={350} mountOnEnter unmountOnExit>
						{(state) => <BurgerMenuContent state={state} isMain={isMain} />}
					</Transition>
				</div>
			</Container>
		</header>
	);
};
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
};
const Navbar = () => {
	const links = [
		{ path: '#', text: 'Частным лицам' },
		{ path: '#', text: 'Бизнесу' },
		{ path: '#', text: 'О банке' },
		{ path: '#', text: 'Контакты' },
		{ path: '/internship', text: 'Стажировка' },
	];
	return (
		<nav className="navigation">
			<ul className="navigation__list">
				{links.map((link, index) => (
					<li key={index} className="navigation__item">
						<Link
							to={link.path}
							onClick={link.path === '#' ? (event) => event.preventDefault() : null}
							className="navigation__link">
							{link.text}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
const Back = () => {
	return (
		// eslint-disable-next-line
		<a href="#" onClick={(event) => event.preventDefault()} className="header__back">
			<Arrow />
			<span>Вернуться на сайт Банка</span>
		</a>
	);
};
