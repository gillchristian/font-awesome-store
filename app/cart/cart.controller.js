(function() {
'use strict';

	angular
	.module('ecommerceApp.cart')
	.controller('CartController', CartController);

	CartController.$inject = ['productService', 'cartService'];
	function CartController(productService, cartService) {
		var vm = this;
		
		vm.cartService = cartService;

		// --- controller public functions ---
		vm.addToCart 	= addToCart;
		vm.toggleCart = toggleCart;
		vm.checkout 	= checkout;
		vm.emptyCart 	= emptyCart;
	
		activate();
	
		////////////////
	
		/**
		 * Adds a product to the cart
		 */
		function addToCart(product){
			// --- update cart ---
			vm.cart = cartService.addToCart({
				id: product.id,
				name: product.name,
				price: product.price,
				icon: product.icon
			}, vm.amounts[product.id]);
			
			// --- update products ---
			var index = vm.products.findIndex(function(item){
				return item.id === product.id
			});
			vm.products[index].stock -= vm.amounts[product.id];
			vm.amounts[product.id] = null;

			vm.checkedout = false;
		}
		
		/**
		 * Shows / hides the cart
		 */
		function toggleCart(){
			vm.showCart = !vm.showCart
		}
		
		/**
		 * Checks out the cart
		 */
		function checkout(){
			vm.cart = cartService.checkout();
			productService.updateAll(vm.products);
			vm.checkedout = true;
		}
		
		/**
		 * Clears the cart
		 */
		function emptyCart(){
			vm.cart = cartService.empty();
			vm.products = productService.getAll();
		}
		
		/**
		 * Initializes controller state
		 */
		function activate() {
			vm.showCart 	= false;
			vm.checkedout = false;
			vm.products 	= productService.getAll();
			vm.cart 			= cartService.getCart();
			
			// --- update the products according to what is in the cart ---
			if (vm.cart.length){
				angular.forEach(vm.cart, function(val){
					var index = vm.products.findIndex(function(product){
						return product.id === val.id
					})
					if (index > -1){
						vm.products[index].stock -= val.amount
					}
				});
			}
		}
	}
})();