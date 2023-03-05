import './InternshipComponent.scss';
import { Container } from '../../layout/Container/Container';
import VacancyService from '../../Services/VacancyService';
import { useEffect, useState } from 'react';
import { ButtonRequest } from '../ButtonRequest/ButtonRequest';

const InternshipComponent = () => {
	const [services, setServices] = useState([]);
	useEffect(() => {
		VacancyService.get()
			.then((res) => setServices(res.data))
	}, []);
	function smoothScroll(event) {
		event.preventDefault();
		const id = event.target.getAttribute('href').substr(1);
		document.getElementById(id).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	}
	return (
		<div className="internship">
			<Container className="internship">
				<div className="internship__header">
					<h2 className="internship__title">Стажировки</h2>
					<ButtonRequest />
				</div>
				<div className="internship__content">
					<aside className="internship__sidebar">
						<ul className="internship-nav">
							<li className="internship-nav__item">
								<a onClick={(event) => smoothScroll(event)} href="#welcome" className='internship-nav__link'>Стажировка в Центр-Инвест</a>
							</li>
							{services.map((item, index) =>
								<li className="internship-nav__item" key={index}>
									<a onClick={(event) => smoothScroll(event)} href={`#${item.id}`} className="internship-nav__link">{item.describe}</a>
								</li>
							)}
						</ul>
					</aside>
					<div className="internship__main">
						<div className="internship-block" id="welcome">
							<h3 className="internship-block__title">Стажировка в Центр-Инвест</h3>
							<div className="internship-block__content">
								<div className="internship-block__text">
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta explicabo quis corrupti libero corporis porro accusamus quia facilis recusandae iure, aliquid illum consequatur. Soluta, ad rem. Dolorum temporibus distinctio blanditiis, assumenda et impedit! Repellendus, modi perspiciatis nisi, veritatis quas eum animi exercitationem accusantium, rerum obcaecati possimus ab sapiente. Id, obcaecati exercitationem omnis voluptas hic fugit itaque quidem blanditiis officia saepe nihil delectus explicabo excepturi, veniam voluptatum consectetur recusandae fuga laboriosam nobis. Doloribus impedit incidunt qui inventore sequi consequuntur laudantium ipsa consequatur esse eligendi iure reprehenderit quos rem voluptate vero similique, assumenda earum cupiditate ipsam commodi nam neque pariatur? Deserunt, quod.
									</p>
								</div>
							</div>
						</div>
						{services.map((item, index) =>
							<div className="internship-block internship-block_direction" id={item.id} key={index}>
								<div className="internship-block__title">{item.describe}</div>
								<div className="internship-block__content">
									<div className="internship-block__description">
										<div className="internship-block__region">
											Регион: {item.region}
										</div>
										<div className="internship-block__exp">
											Требуемый опыт: {item.experience}
										</div>
									</div>
									<ButtonRequest />
								</div>
							</div>
						)}
					</div>
				</div>
			</Container>
		</div>
	);
}

export default InternshipComponent;
