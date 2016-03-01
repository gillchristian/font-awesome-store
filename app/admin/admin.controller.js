(function(){
'use strict';
	/**
	 * Modulo admin: controller
	 */
	angular.module('ecommerceApp.admin')
	.controller('AdminController',AdminController);
	
		AdminController.$inject  = ['iconService', 'productService'];
	
		function AdminController(iconService, productService){
			// --- view-model ---
			var vm = this;
			
			// --- controller public functions ---
			vm.editProduct 		= editProduct;
			vm.saveProduct 		= saveProduct;
			vm.removeProduct 	= removeProduct;
			
			activate();
			
			//////////////////////////////////////////
			
			/**
			 * Initializes the controller state
			 */
			function activate(){
				vm.newProduct = true;
				
				vm.formProduct = {}
				vm.iconsList = []
				
				iconService.getIcons().then(
					function(response){ 
						vm.iconsList = response.data;
						vm.formProduct.icon = vm.iconsList[0];
					}
				);
				
				vm.products = productService.getAll();
			}
			
			/**
			 * Edit a product
			 * 
			 * @param {object} product to edit
			 */
			function editProduct(product){
				vm.formProduct = product;
				vm.newProduct = false;
			}
			
			/**
			 * Save product
			 * 
			 * @param {object} submit event
			 */
			function saveProduct(event){
				event.preventDefault();
				
				var index = vm.products.findIndex(function(product){
					return product.id === vm.formProduct.id; 
				});
				
				vm.products = index === -1 ?
					productService.add(vm.formProduct) :
					productService.update(vm.formProduct);
				
				vm.formProduct = {
					icon: vm.iconsList[0]
				};
				vm.newProduct = true;
			}
			
			/**
			 * Remove product
			 */
			function removeProduct(product){
				vm.products = productService.remove(product);
			}
		}
	
})();