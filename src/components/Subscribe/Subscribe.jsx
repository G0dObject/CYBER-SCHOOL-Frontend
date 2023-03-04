import { Container } from "../../layout/Container/Container";
import { ReactComponent as Illustration } from "../../images/iphone.svg";
import { ButtonRequest } from "../ButtonRequest/ButtonRequest";
import './Subscribe.scss';

export const Subscribe = () => {
	return (
		<div className="subscribe">
			<Container className="subscribe">
				<div className="subscribe__content">
					<h2 className="subscribe__title">Присоединяйся к нам</h2>
					<ButtonRequest />
				</div>
				<Illustration className="subscribe__illustration"></Illustration>
			</Container>
		</div>
	);
}