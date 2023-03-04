import { Container } from "../../layout/Container/Container";
import { ReactComponent as Illustration } from '../../images/woman.svg';
import './Join.scss';

export const Join = () => {
	const steps = [
		{ title: 'Заполни заявку на стажировку', description: 'Заполни анкету на сайте и жди ответа на электронную почту.' },
		{ title: 'Пройди курс «Банковское дело»', description: 'Бесплатный онлайн-курс длительностью в 1 месяц по окончанию которого вы получите диплом.' },
		{ title: 'Получи работу в крупнейшем банке Юга России', description: 'Международные и российские рейтинги подтверждают нашу устойчивость.' },
	]
	return (
		<div className="join">
			<Container className="join">
				<div className="join__title">Как к нам попасть</div>
				<div className="join__content">
					<Illustration className="join__illustration" />
					<div className="join__steps">
						{steps.map((step, index) =>
							<div key={index} className="join-step">
								<div className="join-step__icon">{index + 1}</div>
								<div className="join-step__content">
									<div className="join-step__title">{step.title}</div>
									<div className="join-step__description">{step.description}</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</Container>
		</div>
	);
}