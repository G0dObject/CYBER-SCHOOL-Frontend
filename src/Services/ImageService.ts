import $api from '../http';

export default class ImageService {
	static async check() {
		return await $api.get('image/check');
	}
	static async get() {
		return await $api.get('image');
    }
	static async post(file: FormData) {
	
		
		return await $api.post("image", file, {
			headers: {
				'Content-Type': 'multipart/form-data',
				"Access-Control-Allow-Origin": '*'
			}
		})
		
		
        

	}

    static async delete() {
		return await $api.delete('image');
	}
}
