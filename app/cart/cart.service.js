(function() {
'use strict';

	angular
	.module('ecommerceApp.cart')
	.factory('cartService', cartService);

	cartService.$inject = ['$window'];
	function cartService($window) {
		
		var service = {
			getCart: getCart,
			addToCart: addToCart,
			checkout: empty,
			empty: empty,
			price: price,
			items: items,
		};
		
		var cart = [];
		
		return service;
	
		////////////////
		
		function getCart(){ return cart; }
		
		/**
		 * Adds an item to the cart
		 * 
		 * @param {obj} product
		 * @param {int} amount
		 * @returns {array} cart items
		 */
		function addToCart(product, amount) {
			var index = cart.findIndex(function(item){
				return item.id === product.id
			});
			
			if (index === -1)
				cart.push({
					id:product.id,
					name: product.name,
					price: product.price,
					amount: amount,
					icon: product.icon,
				})
			else
				cart[index].amount += amount;
			
			return cart;
		}
		
		/**
		 * Clears the cart
		 * 
		 * @returns {array} cart
		 */
		function empty(){
			cart = [];
			return cart;
		}
		
		/**
		 * Total price of the cart
		 * 
		 * @returns {int} total price
		 */
		function price(){
			var price = 0;
			angular.forEach(cart, function(val, key){ 
				price += val.amount * val.price;
			});
			return price;
		}
		
		/**
		 * Amount of items in the cart
		 * 
		 * @returns {int} items
		 */
		function items(){
			var items = 0;
			angular.forEach(cart, function(val, key){ items += val.amount });
			return items;
		}
	}
})();