import { useEffect, useRef, useState } from 'react';
import People from '../../images/icons/people.svg';
import { ReactComponent as Minus } from '../../images/minus.svg';
import { ReactComponent as Plus } from '../../images/plus.svg';
import ImageService from '../../Services/ImageService';
import './Avatar.scss';
export const Avatar = () => {
	const [image, setImage] = useState(People);
	const imgref = useRef(null);
	const [ImageExist, setImageExist] = useState(false);
	const input = useRef(null);

	useEffect(() => {
		fetchdata();
		async function fetchdata() {
			checkimage().then(() => {
				setImageExist(true);
				getimage().then((response) => {
					const base64 = btoa(
						new Uint8Array(response.data).reduce(
							(data, byte) => data + String.fromCharCode(byte),
							'',
						),
					);
				});
			});
		}
	}, []);

	const checkimage = async () => await ImageService.check();
	const getimage = () => ImageService.get();

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
					<img ref={imgref} src={image} className="avatar__inner__image"></img>

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
