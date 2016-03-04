app.config(function ($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home')

    $stateProvider
    
        .state('home', {
        url: ('/home'),
        templateUrl: ('templates/home.html'),
        controller: ('MainController')

        })
        
         .state('edit', {
            url: ('/edit'),
            templateUrl: ('/templates/edit.html'),
            controller: ('MainController'),
            controllerAs: ('mc')
        })
})