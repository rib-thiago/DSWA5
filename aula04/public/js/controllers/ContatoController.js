angular
    .module("ifsp")
    .controller("ContatosController", ($scope, $routeParams) => {
        console.log($routeParams.contatoId);
    });
