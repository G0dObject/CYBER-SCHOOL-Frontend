import { IVacancy } from '../Core/Interface/IVacancy';
import $api from '../http';

export default class VacancyService {
	static async get() {
		return await $api.get<IVacancy[]>('vacancy');
	}
	static async getbyid(id : number) {
		return (await $api.get<IVacancy>('vacancy' + id));
    }
    // static async post() {
	// 	return await $api.post('image/get');
	// }

    // static async delete() {
	// 	return await $api.delete('vacancy');
	// }
}
