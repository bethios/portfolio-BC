(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            });
        $stateProvider
            .state('caseStudy', {
                url: '/caseStudy',
                controller: 'CaseStudyCtrl as caseStudy',
                templateUrl: '/templates/caseStudy.html'
            });
    }

    angular
        .module('Portfolio', ['ui.router'])
        .config(config);
})();