(function() {
'use strict';

	angular
	.module('ecommerceApp.services')
	.service('productService', productService);

	//productService.$inject = [];
	
	function productService() {
		var service = this;
		
		service.getAll 		= getAll;
		service.add 			= add;
		service.update 		= update;
		service.remove 		= remove;
		service.updateAll = updateAll;
		
		////////////////
				
		/**
		 * Returns the products list
		 */
		function getAll() { return angular.copy(products) };
		
		/**
		 * Adds a product
		 * 
		 * @param {object} product to add
		 */
		function add(product){
			product.id = products[products.length - 1].id + 1
			products.push(product);
			return angular.copy(products);
		}
		
		/**
		 * Adds a product
		 * 
		 * @param {object} product to update
		 */
		function update(product){
			var index = products.findIndex(function(item){
				return item.id === product.id
			})
			products[index] = product;
			
			return angular.copy(products);
		}
		
		/**
		 * Removes a product
		 * 
		 * @param {object} product to remove
		 */
		function remove(product){
			var index = products.indexOf(product);
			products.splice(index, 1);
			
			return angular.copy(products);
		}
		
		/**
		 * Removes a product
		 * 
		 * @param {object} product to remove
		 */
		function updateAll(list){
			products = list;
			
			return angular.copy(products);
		}
		
		var products = [
			{
				"id": 1,
				"name": "Castillo",
				"desc": "El castillo de Mario",
				"price": 150000,
				"stock": 1,
				"icon": "fa-fort-awesome"
			},
			{
				"id": 2,
				"name": "Bicicleta",
				"desc": "Ideal para ir a trabajar",
				"price": 500,
				"stock": 13,
				"icon": "fa-bicycle"
			},
			{
				"id": 3,
				"name": "Joystick viejo",
				"desc": "Una reliquia",
				"price": 3.5,
				"stock": 3,
				"icon": "fa-gamepad"
			},
			{
				"id": 4,
				"name": "Bug",
				"desc": "Ese bug que tanto amas",
				"price": 0.1,
				"stock": 3,
				"icon": "fa-bug"
			},
		];
	}
})();