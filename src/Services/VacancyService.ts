import $api from '../http';

export default class Service {
	static async get() {
		return await $api.get('vacancy');
	}
	static async getbyid(id : number) {
		return await $api.get('vacancy'+ id);
    }
    // static async post() {
	// 	return await $api.post('image/get');
	// }

    static async delete() {
		return await $api.delete('vacancy');
	}
}
