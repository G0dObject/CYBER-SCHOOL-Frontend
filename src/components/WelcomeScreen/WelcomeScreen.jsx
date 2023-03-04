import { Container } from "../../layout/Container/Container";
import { ButtonRequest } from "../ButtonRequest/ButtonRequest";
import { ReactComponent as Illustration } from "../../images/manwithtablet.svg";
import './WelcomeScreen.scss';

export const WelcomeScreen = () => (
	<div className="welcome">
		<Container className="welcome">
			<div className="welcome__content">
				<h2 className="welcome__title">
					Успешная карьера в устойчивом банке
				</h2>
				<ButtonRequest />
			</div>
			<Illustration className="welcome__illustration" />
		</Container>
	</div>
)