(function() {
'use strict';

	angular
	.module('ecommerceApp.cart')
	.filter('hideSoldOut', hideSoldOut);

	function hideSoldOut() {
		return function(items){
			return items.filter(function(item){
				return item.stock > 0
			})
		}
	}
})();