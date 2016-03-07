/**
 * Services module tests
 */
describe('Icon service test', function(){
	describe('when I call iconService.getIcons', function(){
		it('it returns a promise', function(){
			var $injector = angular.injector(['ecommerceApp']);
			var iconService = $injector.get( 'iconService' );
			var obj = iconService.getIcons();
			var objectIsPromise = !!obj.then && typeof obj.then === 'function';
			expect( objectIsPromise ).toBe(true);
		})
	})
});

describe('Product service test', function(){

	describe('when I call productService.getAll', function(){
		var $injector = angular.injector(['ecommerceApp']);
		var productService = $injector.get( 'productService' );
		var products = productService.getAll();

		it('it returns an array', function(){
			expect( Array.isArray(products) ).toBe(true);
		});
		it('first time products is returned it has 4 products', function(){
			expect( products.length ).toBe(4);
		});
	});

	describe('when I call productService.add(product)', function(){
		var $injector = angular.injector(['ecommerceApp']);
		var productService = $injector.get( 'productService' );
		var products = productService.getAll();

		var lastId = products[products.length - 1].id;
		products = productService.add({
			"name": "some new product",
			"desc": "some nice description",
			"price": 10,
			"stock": 110,
			"icon": "fa-plus"
		});
		var newLastId = products[products.length - 1].id;

		it('should return the new products list', function(){
			expect( products.length ).toBe(5);
		});
		it('new product id should be +1 the previous last product', function(){
			expect( lastId + 1 ).toBe(newLastId);
		});
	});

	describe('when I call productService.update(product)', function(){
		var $injector = angular.injector(['ecommerceApp']);
		var productService = $injector.get( 'productService' );
		var products = productService.getAll();

		var newProduct = {
			"id": 1,
			"name": "some new product",
			"desc": "some nice description",
			"price": 10,
			"stock": 110,
			"icon": "fa-plus"
		};
		products = productService.update(newProduct);

		it('should return the products list', function(){
			expect( Array.isArray(products) ).toBe(true);
			expect( products.length ).toBe(4);
		});
		it('the product should be updated', function(){
			expect( products[0] ).toEqual(newProduct);
		});
	});

	describe('when I call productService.remove(product)', function(){
		var $injector = angular.injector(['ecommerceApp']);
		var productService = $injector.get( 'productService' );
		var products = productService.getAll();

		var removedProduct = products[0];
		products = productService.remove(removedProduct);

		it('should return the updated products list', function(){
			expect( Array.isArray(products) ).toBe(true);
			expect( products.length ).toBe(3);
		});
		it('the product should be updated', function(){
			expect( products.indexOf(removedProduct) ).toEqual(-1);
		});
	});

});
