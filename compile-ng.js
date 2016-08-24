function compileAngularJS(selector, callBackFn){
	$(selector).each(function () {
	    var content = $(this);
	    angular.element(document).injector().invoke(function($compile) {
	        var scope = angular.element(content).scope();
	        $compile(content)(scope);
	        scope.$digest();
	        // to use AngularJS with non-AngularJS, need to wrap select elements
	        annotateSelectBox();
	    });
	});
	// execute call back function for customized function
	if(!isNull(callBackFn)){
		callBackFn.call();
	}
}
