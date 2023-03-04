import './ButtonRequest.scss';
import { Link } from 'react-router-dom';

export const ButtonRequest = () => {
	return (
		<Link className="button" to="/request">Подать заявку</Link>
	);
}