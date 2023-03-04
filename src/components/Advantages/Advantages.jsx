import { Container } from "../../layout/Container/Container"
import { ReactComponent as User } from '../../images/icons/user.svg';
import { ReactComponent as Diogram } from '../../images/icons/chart.svg';
import { ReactComponent as Chart } from '../../images/icons/chart2.svg';
import { ReactComponent as Wallet } from '../../images/icons/wallet.svg';
import { ReactComponent as Variative } from '../../images/icons/variative.svg';
import { ReactComponent as Comfort } from '../../images/icons/comfort.svg';
import './Advantages.scss';

export const Advantages = () => {
	const cards = [
		{ icon: <User />, title: 'Подойдёт любой', description: 'Берём без опыта и обучаем сами' },
		{ icon: <Diogram />, title: 'Гибкий график', description: 'Вы можете сами выбрать график стажировки' },
		{ icon: <Chart />, title: 'Карьерный рост', description: 'С нами вы сможете продвинуться вверх' },
		{ icon: <Wallet />, title: 'Высокая зарплата', description: 'Высокая зарплата по рынку и полный соцпакет' },
		{ icon: <Variative />, title: 'Вариативность', description: 'Возможность попробовать себя в разных отделах' },
		{ icon: <Comfort />, title: 'Комфорт', description: '111 комфортных офисов в 7 регионах' },
	]
	return (
		<div className="advantages">
			<Container className="advantages">
				<h2 className="advantages__title">Преимущества</h2>
				<div className="advantages__content">
					{cards.map((card, index) => <AdvantageItem key={index} icon={card.icon} title={card.title} description={card.description} />)}
				</div>
			</Container>
		</div>
	);
}
const AdvantageItem = ({ icon, title, description }) => {
	return (
		<div className="advantage">
			<div className="advantage__icon">{icon}</div>
			<div className="advantage__content">
				<div className="advantage__title">{title}</div>
				<div className="advantage__description">{description}</div>
			</div>
		</div>
	);
}