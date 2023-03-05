import { useEffect, useRef, useState } from 'react';
import People from '../../images/icons/people.svg';
import { ReactComponent as Minus } from '../../images/minus.svg';
import { ReactComponent as Plus } from '../../images/plus.svg';
import ImageService from '../../Services/ImageService';
import './Avatar.scss';
export const Avatar = () => {
	const [image, setImage] = useState(People);
	const [ImageExist, setImageExist] = useState(false);
	const input = useRef(null);

	useEffect(() => {
		checkimage().then(() => {
			getimage().then((res) => {
				let image = (new Image().src = 'data:image/jpeg;base64,' + res.data);
				setImage(image);
			});
		});
	}, []);

	const checkimage = async () => await ImageService.check();
	const getimage = () => ImageService.get().then((res) => res.data);

	const deleteimg = async () => {
		await ImageService.delete();
		setImageExist(false);
	};
	const uploadimg = () => {
		input.current.click();

		input.current.onchange = (e) => {
			console.log(e.target.files[0]);
			var file = e.target.files[0];
			var formData = new FormData();
			formData.append('file', file);
			ImageService.post(formData).then(() => setImageExist(true));
		};
	};
	return (
		<>
			<div className="avatar">
				<div className="avatar__inner">
					<img src={getimage()} className="avatar__inner__image"></img>

					<input
						ref={input}
						accept="image/png,  image/jpeg"
						type="file"
						className="avatar__inner__action__form"></input>
					<button
						className="avatar__inner__action"
						onClick={() => {
							ImageExist ? deleteimg() : uploadimg();
						}}>
						{ImageExist ? <Minus></Minus> : <Plus></Plus>}
					</button>
					{}
					{/* <img className="Avatar__inner__delete"></img> */}
				</div>
			</div>
		</>
	);
};
