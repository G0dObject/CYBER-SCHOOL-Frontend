import { ReactComponent as Ok } from '../../images/icons/ok.svg';
import { ReactComponent as Telegram } from '../../images/icons/telegram.svg';
import { ReactComponent as Vk } from '../../images/icons/vk.svg';
import { ReactComponent as Youtube } from '../../images/icons/youtube.svg';
import { Container } from '../../layout/Container/Container';
import './Footer.scss';

export const Footer = () => {
	const links = [
		{
			title: 'Частным лицам',
			links: [
				{ path: '#', text: 'Кредитование' },
				{ path: '#', text: 'Ипотека' },
				{ path: '#', text: 'Рефинансирование' },
				{ path: '#', text: 'Вклады' },
				{ path: '#', text: 'Карты' },
			],
		},
		{
			title: 'О банке',
			links: [
				{ path: '#', text: 'Контакты' },
				{ path: '#', text: 'Акционерам и инвесторам' },
				{ path: '#', text: 'Офисы и банкоматы' },
			],
		},
		{
			title: 'Бизнесу',
			links: [
				{ path: '#', text: 'Открытие и ведение счёта' },
				{ path: '#', text: 'Эквайринг' },
				{ path: '#', text: 'Клиент-банк' },
				{ path: '#', text: 'Депозиты' },
				{ path: '#', text: 'Кредитование' },
			],
		},
	];
	return (
		<div className="footer">
			<Container className="footer">
				<div className="footer__top">
					<div className="footer__content">
						{links.map((item) => (
							<div key={item.title} className="footer__col">
								<div className="footer__title">{item.title}</div>
								<ul className="footer__link-container">
									{item.links.map((link, index) => (
										<a href={link.path} key={index} className="footer__link">
											{link.text}
										</a>
									))}
								</ul>
							</div>
						))}
					</div>
					<div className="footer-contacts">
						<div className="footer__title">Связаться с нами</div>
						<div className="footer-contacts__mobile">
							<div className="footer-contacts__subtitle">
								Бесплатный звонок по России
							</div>
							<a href="tel:88002009929" className="footer-contacts__phone">
								8 800 200 99 29
							</a>
						</div>
						<div className="footer-socials">
							{/* eslint-disable-next-line */}
							<a href="#" className="footer-socials__item">
								<Vk />
							</a>
							{/* eslint-disable-next-line */}
							<a href="#" className="footer-socials__item">
								<Telegram />
							</a>
							{/* eslint-disable-next-line */}
							<a href="#" className="footer-socials__item">
								<Youtube />
							</a>
							{/* eslint-disable-next-line */}
							<a href="#" className="footer-socials__item">
								<Ok />
							</a>
						</div>
					</div>
				</div>
				<div className="footer__bottom">
					<div className="footer__copyright">
						Copyright © 1997-2023, ПАО КБ «Центр-инвест», г. Ростов-на-Дону, пр.
						Соколова, 62 © «Центр-Интернет»
					</div>
				</div>
			</Container>
		</div>
	);
};
