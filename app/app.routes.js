(function(){
	'use strict';
	
	angular.module('ecommerceApp')
		.config(function($stateProvider, $urlRouterProvider) {

			// --- For any unmatched url, redirect to / ---
			$urlRouterProvider.otherwise("/cart");

			// --- Home ---
			$stateProvider
			// --- Admin ---
				.state('admin', {
					url: "/admin",
					templateUrl: "app/admin/admin.template.html",
					controller: 'AdminController',
					controllerAs: 'admin'
				})
			// --- Cart ---
				.state('cart', {
					url: "/cart",
					templateUrl: "app/cart/cart.template.html",
					controller: 'CartController as vm'
				});
		});
})();