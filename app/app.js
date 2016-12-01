/**
 * Created by EddieM on 29/11/2016.
 */
(function () {
    angular
        .module('app',['ui.router'])
        .config(config);

    function config($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home',home())
            .state('page',pag())

    }

    function home() {
        return{
            url:'/home',
            name:'home',
            views:{
                '':{
                    templateUrl:'app/app_vistas/home.html',

                },
                'header@home':{
                    templateUrl:'app/app_vistas/header.html',

                },
                'content@home':{
                    templateUrl:'app/app_vistas/content.html',
                    controller:'home.controller',
                    controllerAs:'vm'

                },
                'footer@home':{
                    templateUrl:'app/app_vistas/footer.html',

                }
            }
        }
    }

    function pag() {
        return {
            url:'/page',
            name:'page',
            parent:'home',
            views:{
                'content@home':{
                    templateUrl:'app/app_vistas/page.html'
                }
            }
        }
    }
})();