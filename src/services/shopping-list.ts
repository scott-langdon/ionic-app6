import { Ingredient } from "../models/ingredient";


export class ShoppingListService {
	private ingredients: Ingredient[] = []; 

	addItem(name: string, amount: number) {
		console.log(this.ingredients);
		this.ingredients.push(new Ingredient(name, amount)); 
	}

	addItems(items: Ingredients[]) {
		this.ingredients.push(...items); // deconstructs the list of elements into and sepereated list of elements rather than just pushing one whole array.
	}

	getItems() {
		return this.ingredients.slice(); 
	}

	removeItem(index: number) {
		this.ingredients.splice(index,1);
	}
}