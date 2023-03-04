import { CategoryType } from '../Core/Enum/CategoryType';
import { ProductType } from '../Core/Enum/ProductType';
import { Product } from '../Core/Interfaces/Auth/Product';
import $api from '../http';

function capitalize(s:any)
{
    return s && s[0].toUpperCase() + s.slice(1);
}
  
export default  class ProductService {
	static async get(_category: CategoryType, _type: ProductType ) {
		
		let category = CategoryType[capitalize(_category)];
		let type = ProductType[capitalize(_type)];
		
		
		const { data } = await $api.get<Product[]>('shoe', { params:{category:category,type:type	} });
		 return data;
		 
	}
}
