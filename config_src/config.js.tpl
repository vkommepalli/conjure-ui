angular.module('config', [])
.constant('ENV',  {
	"apiEndpoint": "<%- apiEndpoint %>",
	"environment": "<%- environment %>",
});
