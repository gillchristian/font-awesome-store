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
    describe('when I call productService.getIcons', function(){
        it('it returns a promise', function(){
            var $injector = angular.injector(['ecommerceApp']);
            var iconService = $injector.get( 'productService' );
						var products = iconService.getAll();
            expect( Array.isArray(products) ).toBe(true);
        })
    })
});
