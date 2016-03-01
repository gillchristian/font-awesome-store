(function() {
'use strict';

	angular
	.module('ecommerceApp.services')
	.factory('iconService', iconService);

	iconService.$inject = ['$http', '$q'];
	
	
	function iconService($http, $q) {
		var service = {
			getIcons: getIcons
		};
		
		return service;
	
		////////////////
		function getIcons() {
			return $http({
				method: 'GET',
				url: 'resources/icons.json'
			});
		}
	}
})();