import { ICreateUser } from '../Core/Interface/ICreateUser';
import $api from '../http';

export default class AuthService {
	static async login(email: string, password: string) {
		return await $api.post('login/login', { email, password });
	}
	static async registration(props:ICreateUser) {
		return await $api.post('login/register', { ...props });
	}
}
